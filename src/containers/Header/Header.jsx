import { useState } from "react"
import React from 'react'
import './header.css'
import HeroImage from '../../assets/heroimage.png'
export default function Header() {
    return(
      
            <header>
                <img src={HeroImage} alt="hero image" className="logo--hero"/>
            </header>
    )
}