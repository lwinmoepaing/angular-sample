import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import Ingredient from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 2)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

}
