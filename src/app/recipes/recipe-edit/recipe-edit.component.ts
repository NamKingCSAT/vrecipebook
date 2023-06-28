import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent {
  recipeForm!: FormGroup;

  ngOnInit() {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(null),
    });
  }
}
