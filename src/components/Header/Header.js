import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import './Header.css'

const Header = () => {
    const [searchText, setSearchText] = useState('')
    // console.log(searchText)
    const searchFood = (e) => {
        setSearchText(e.target.value)
    }
    const [foods, setFood] = useState([]);
    // console.log(foods)
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data.meals))
    }, [searchText])
    return (
        <div>
            <div className='headerBody'>
                <div className='header'>
                    <h1> <span className='styil'>D</span>elicious <span className='styil'>F</span>ood</h1>
                    <input onChange={searchFood} type="text" placeholder='Search Food' />
                    <button>Search Food</button>
                </div>
            </div>
            <div className='foods'>
                {
                    foods.map(food => <FoodCart key={food.idMeal} food={food}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default Header;