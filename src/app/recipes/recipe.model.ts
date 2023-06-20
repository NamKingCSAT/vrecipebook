import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public instructions: string[];
  public imagePath: string;
  public ingredients: Ingredient[];
  constructor(
    name: string,
    description: string,
    instructions: string[],
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.instructions = instructions;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
