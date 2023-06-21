import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  showControlPanel = false;
  showIngredients = false;
  showInstructions = false;
  showAdvanceOptions = false;

  showControls() {
    this.showControlPanel = !this.showControlPanel;
  }

  ingredientClickHandler() {
    this.showIngredients = !this.showIngredients;
    this.showInstructions = false;
  }
  instructionsClickHandler() {
    this.showInstructions = !this.showInstructions;
    this.showIngredients = false;
  }
  advanceClickHandler() {
    this.showAdvanceOptions = !this.showAdvanceOptions;
  }
}
