import React, { Children } from 'react'
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'
import { Services } from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export const Home = () => {
    return (
     <>
      <Hero>
          <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $255">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
          </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
     </>
    )
}