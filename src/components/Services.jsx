import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { Title } from './Title'

export const Services = () => {
    const [services, setServices] = React.useState([
        {
            icon: <FaCocktail/>,
            title: 'free coctails',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, rerum'
            
        },
        {
            icon: <FaHiking/>,
            title: 'free hiking',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, rerum'
            
        },
        {
            icon: <FaBeer/>,
            title: 'free beer',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, rerum'
            
        },
        {
            icon: <FaShuttleVan/>,
            title: 'free shuttle',
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, rerum'
            
        }
    ]);

    return (
        <section className="services">
            <Title title={'Featured Rooms'} />
            <div className="services-center">
                {services.map((item, key) => {
                    return <article key={key} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}
