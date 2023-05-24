import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test.', 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/07/5537-MilkPudding1120.jpg?v=1-0')
  ];
  
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
