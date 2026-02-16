import React from 'react'
import logo from '../../assets/headerLogo.png'
import glass from '../../assets/glass.png'
import language from '../../assets/language.png'
import './header.scss'

export default function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" />
        <nav className='header__nav'>
            <a href="#about">О нас</a>
            <a href="#college">Колледж</a>
            <a href="#school">Школа</a>
            <a href="#kinderGarden">Детский сад</a>
            <a href="#awards">Награды</a>
        </nav>
        <div className='header__buttons'>
        <button className='header__buttons-btn'><img src={glass} alt="Glass" /></button>
        <button className='header__buttons-btn'><img src={language} alt="Language" /></button>
        </div>
    </header>
  )
}
