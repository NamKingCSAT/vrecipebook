import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent {
  recipeForm!: FormGroup;
  ingredientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recipeForm = this.fb.group({
      recipeName: [''],
      instructions: this.fb.array([]),
      ingredients: this.fb.array([]),
      imagePath: [''],
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredientForm = this.fb.group({
      ingredientName: [''],
      ingredientUnit: [''],
      ingredientQuantity: [''],
    });
    this.ingredients.push(ingredientForm);
  }

  deleteIngredient(lessonIndex: number) {
    this.ingredients.removeAt(lessonIndex);
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  addInstruction() {
    const instructionForm = this.fb.group({
      instruction: [''],
    });

    this.instructions.push(instructionForm);
  }

  deleteInstruction(instructionIndex: number) {
    this.instructions.removeAt(instructionIndex);
  }
}
