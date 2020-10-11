import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Recipe from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeChangeSub: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeChangeSub = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  ngOnDestroy(): void {
    this.recipeChangeSub.unsubscribe();
  }

}
