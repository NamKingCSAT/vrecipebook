import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Kimchi',
      'This dish is one of the most acient and still very popular dish. It originated from Korea',
      [
        'Clean cabbage',
        'Chop cabbage',
        'Make sauce',
        'Put chopped cabbage into a jar and marinate it for 1 day',
      ],
      'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      [
        new Ingredient('cabbage', 2, 'lbs'),
        new Ingredient('chilly', 3, 'fruits'),
        new Ingredient('fish sauce', 1, 'tbs'),
      ]
    ),
  ];
}
