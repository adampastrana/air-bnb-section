import { useState } from "react";
import React from 'react';
import './maincontent.css';

const textContent = {
    "headLine": "Online Experiences",
    "textContent": "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
}
export default function MainContent() {
    return (
            <section className="onlineExp"> 
            <h1 className="onlineExp--title">{textContent.headLine} </h1>
            <p className="onlineExp--text"> {textContent.textContent}</p>
            
            </section>
    )
}