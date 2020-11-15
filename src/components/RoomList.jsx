import React from 'react'
import { Room } from './Room'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function RoomList({ rooms }) {
    if(rooms.length === 0) {
         return (
             <div className="empty-search">
                 <h3>Unfortunately no rooms matched your search parameters</h3>
             </div>
         )
    }

    return (
        <TransitionGroup>
        <section className="roomslist">
            <div className="roomslist-center">
                    {rooms.map(room => {
                            return (
                                <CSSTransition
                                    in={room.id.length != 0}
                                    timeout={300}
                                    unmountOnExit
                                    classNames="room"
                                    key={room.id}
                                >
                                    <Room key={room.id} room={room} />
                                </CSSTransition>
                            )
                        })}
            </div>
        </section>
        </TransitionGroup>
    )
}
