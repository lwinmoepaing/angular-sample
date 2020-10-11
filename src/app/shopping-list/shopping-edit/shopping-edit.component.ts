import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputNameField') inputNameField: ElementRef;
  @ViewChild('inputAmountField') inputAmountField: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {}

  addNewIngredient(): void {
    const name: string = this.inputNameField.nativeElement.value || 'Empty';
    const amount: number = this.inputAmountField.nativeElement.value || 0;
    const newIngredient = new Ingredient(name, amount);

    this.shoppingListService.addNewIngredient(newIngredient);
    this.clearForm();
  }

  clearForm(): void {
    this.inputNameField.nativeElement.value = '';
    this.inputAmountField.nativeElement.value = null;
  }

}
