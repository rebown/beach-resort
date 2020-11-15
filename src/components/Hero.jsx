import React from 'react'

export const Hero = ({ hero, children }) => {
    return (
      <header className={"hero " + hero}>
           {children}
      </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
}
