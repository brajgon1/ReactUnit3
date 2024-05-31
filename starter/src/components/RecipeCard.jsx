import React from 'react'
function RecipeCard() {
  return (
    <div className='recipe-card'>
        <img src={} alt='RecipeCard' className='recipe-img'/>
        <div className='recipe-details'>
            <h2 className='name'>Carbonara</h2>
            <button className='view-btn'>See More</button>
        </div>
    </div>
  )
}

export default RecipeCard;
