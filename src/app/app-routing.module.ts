import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeListComponent },
      { path: 'new', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
