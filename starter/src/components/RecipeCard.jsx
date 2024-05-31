import React from 'react'
import CarbonaraPic from '../assets/carbonara.jpg';
function RecipeCard() {
  return (
    <div className='recipe-card'>
        <img src={CarbonaraPic} alt='RecipeCard' className='recipe-img'/>
        <div className='recipe-details'>
            <h2 className='name'>Carbonara</h2>
            <button className='view-btn'>See More</button>
        </div>
    </div>
  )
}

export default RecipeCard;
