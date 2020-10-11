import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Ingredient from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import Recipe from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test 1',
      'Simple desciption For Text 1',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Apple', 2),
        new Ingredient('Banana', 3)
      ]
      )
    ,
    new Recipe(
      'A Test Two',
      'Simple desciption 2222',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400',
      [
        new Ingredient('Orange', 2),
        new Ingredient('PineApple', 1),
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredientToShoppingList(ingredients);
  }

}
