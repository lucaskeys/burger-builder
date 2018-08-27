import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
       return <BurgerIngredient key={igKey + 1} type={igKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  // Reduce allows us to transform an array to something else
  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
    <BurgerIngredient type="bread-top" />
      {transformedIngredients}
    <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
