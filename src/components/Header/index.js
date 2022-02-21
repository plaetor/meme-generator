import React from "react";
import trollFace from '../../images/TrollFace.png'
import './index.css'

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="meme icon" className="header--meme_icon" />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--project_title">React Course - Project 3</h3>
    </header>
  )
}