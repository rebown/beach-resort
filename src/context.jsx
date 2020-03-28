import React from 'react'
import Client from './Contentful';


const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    getData() {
        Client.getEntries()
            .then((response) =>{
                console.log(response)
                let rooms = this.formatData(response.items);
                let featuredRooms  = rooms.filter(room => room.featured);
                let maxPrice = Math.max(...rooms.map(room => room.price));
                let maxSize = Math.max(...rooms.map(room => room.size));
                this.setState({
                    rooms,
                    sortedRooms: rooms,
                    featuredRooms,
                    loading: false,
                    maxPrice,
                    maxSize,
                    price: maxPrice
                });
            })
            .catch(console.error)
    }

    componentDidMount() {
        this.getData();
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id }

            return room;
        });

        return tempItems;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = this.state;
        //get all rooms
        let tempRooms = [...rooms];
        //transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);

        //filter by type
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        //filter by capacity
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        //filter by breakfast and pets
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        debugger
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider 
                value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext };