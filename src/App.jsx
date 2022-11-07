import { useState } from 'react'
import './App.css'
import React from 'react'
import { Nav, Header, Footer, MainContent } from './containers'
import { Card } from './components'
import cardData from './data'
 

function App() {
  const cardItem = cardData.map(card => {
    return(<Card
            key={card.id}
            // item={card}
            {...card}
    />)

  })

  return (
    
          <div className="App"> 
              <Nav />
              <Header />
              <MainContent />  
              <section className='cardList'>
                {cardItem}
              </section>
        

              <Footer /> 
          </div>
  )
}

export default App
