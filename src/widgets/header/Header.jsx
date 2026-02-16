import React from 'react'
import logo from '../../assets/headerLogo.png'
import glass from '../../assets/glass.png'
import language from '../../assets/language.png'

export default function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" />
        <nav>
            <a href="#about">О нас</a>
            <a href="#college">Колледж</a>
            <a href="#school">Школа</a>
            <a href="#kinderGarden">Детский сад</a>
            <a href="#awards">Награды</a>
        </nav>
        <img src={glass} alt="Glass" />
        <img src={language} alt="Language" />
    </header>
  )
}
