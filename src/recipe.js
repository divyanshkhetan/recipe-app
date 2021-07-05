import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map( (ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <strong><p>{Math.round(calories)} CAL</p></strong>
            <img className={style.image} src={image} alt={title} />
        </div>
    );
}


export default Recipe