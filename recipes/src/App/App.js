import React, { Component } from 'react';
import './style.css';
import recipes from '../data/recipes';
import RecipePreparation from '../components/RecipePreparation/RecipePreparation.js';
import Recipe from '../components/Recipe/Recipe.js';

const recipe = recipes[0];

class App extends Component {

  prep = () => {
    const recipePrep = recipes.preparation[0];
      console.log(recipePrep);
      return recipePrep;
 }
  render() {
    return (
      <div>
      <div class="App">
      <div class="flex-container">
      <nav class="nav">
        <button class="btn btn-default">Previous Recipe</button>
        <button class="btn btn-default">Next Recipe</button>
      </nav>
      <header>
        <h1>CHICKEN TIKKA MASALA!</h1>
        <cite class="contributors">
              <div>By John Doe</div>
              <div><a href="https://cooking.nytimes.com/recipes/5593-chicken-and-apricot-masala" target="_blank">Source</a></div>
              </cite>
        <ul id="recipe_meta_data" class="list-group">
          <li class="list-group-item">Active: 1 Hour</li>
          <li class="list-group-item">Total: 5 Hours</li>
          <li class="list-group-item">6 Servings</li>
        </ul>
      </header>
      <article>
      <Recipe />
      <RecipePreparation />
      </article>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
