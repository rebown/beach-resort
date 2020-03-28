import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { Loading } from './Loading'
import { withRoomConsumer } from '../context'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if(loading) {
        return <Loading/>
    }
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {
//     return (
//        <RoomConsumer>
//            {
//                ({ loading, sortedRooms, rooms }) => {
//                     return (
//                         <div>
//                             <RoomFilter/>
//                             <RoomList/>
//                         </div>
//                     )
//                }
//            }
//        </RoomConsumer>
//     )
// }
