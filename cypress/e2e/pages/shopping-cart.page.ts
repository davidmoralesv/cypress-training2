class ShoppingCartPage {
  private readonly CHECKOUT_BUTTON = '#checkout'
  private readonly ITEM_NAME = 'div.inventory_item_name'
  private readonly ITEM_PRICE = 'div.inventory_item_price'

  public selectCheckout (nameItem: string, itemPrice: string): void {
    cy.get(this.ITEM_NAME).should('have.text', nameItem)
    cy.get(this.ITEM_PRICE).should('have.text', itemPrice)
    cy.get(this.CHECKOUT_BUTTON).click()
  }
}

export { ShoppingCartPage }
