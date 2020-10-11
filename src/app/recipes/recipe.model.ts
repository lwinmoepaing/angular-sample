import Ingredient from '../shared/ingredient.model';

export default class Recipe {
  public name: string;
  public desciption: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.desciption = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
