import { Locator, Page } from '@playwright/test';
import { ShoppingCartButton } from './components/shopping-cart-button';

export class Inventory {
  page: Page;
  shoppingCartButton: ShoppingCartButton;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartButton = new ShoppingCartButton(page);
  }

  async goTo() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addProductToCart(productName: string) {
    productName = productName.replaceAll(' ', '-').toLowerCase();
    console.log(productName);
    await this.page.locator(`[data-test="add-to-cart-${productName}"]`).click();
  }
}