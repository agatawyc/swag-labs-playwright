import { Locator, Page } from '@playwright/test';
import { ShoppingCartButton } from './components/shopping-cart-button';

export class ShoppingCart {
  page: Page;
  addToCartButton: Locator;
  shoppingCartButton: ShoppingCartButton;
  inventoryItemName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.shoppingCartButton = new ShoppingCartButton(page);
    this.inventoryItemName = page.locator('.inventory_item_name');
  }
}