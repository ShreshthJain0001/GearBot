import React from 'react'
import "./CSS/BackToTopButton.css"
function BackToTopButton() {
    const scrollToTop= ()=>{
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        })
    }
  return (
    <>
      <div className='back-to-top'>
        <button onClick={scrollToTop}>Back To Top</button>
      </div>
    </>
  )
}

export default BackToTopButton
