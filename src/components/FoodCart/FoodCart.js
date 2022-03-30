import React from 'react';
import './FoodCart.css'

const FoodCart = (props) => {
    const { strMealThumb, strMeal } = props.food;
    console.log(props.food)
    return (
        <div className='foodCart'>
            <img src={strMealThumb} alt="" />
            <div className='foodInfo'>
                <h3>{strMeal}</h3>
                <h5>Price: $5</h5>
                <button>Details</button>
            </div>
        </div>
    );
};

export default FoodCart;