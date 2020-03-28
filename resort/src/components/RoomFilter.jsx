import React, { useContext } from 'react'
import { RoomContext } from '../context'
import { Title } from './Title'

//get all unique values
function getUnique(items, value) {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    //get unique types
    let types = getUnique(rooms, "type");
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((type, index) => {
        return <option key={index} value={type}>{type}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((number, index) => {
        return <option key={index} value={number}>{number}</option>
    })

    return (
        <section className="filter-container">
           <Title title="search rooms" />
           <form className="filter-form">
                {/* start select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
                {/*end select type*/}
                {/* start guests */}
                <div className="form-group">
                    <label htmlFor="capacity">room type</label>
                    <select name="capacity" id="capacity" value={capacity} onChange={handleChange} className="form-control">
                        {people}
                    </select>
                </div>
                {/*end guests*/}
                 {/* start price */}
                 <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} onChange={handleChange} value={price} id="price" className="form-control" />
                </div>
                {/*end price*/}
                {/* start size */}
                  <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                    </div>
                {/*end size*/}
                 {/* start extras */}
                 <div className="form-group">
                     <div className="single-extra">
                         <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                         <label htmlFor="breakfast">breakfast</label>
                     </div>
                     <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                         <label htmlFor="pets">pets</label>
                     </div>
                 </div>
                 {/* end extras */}
           </form>
        </section>
    )
}
