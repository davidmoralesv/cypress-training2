class ItemPage {
  private readonly ADD_TO_CART_BUTTON = 'button.btn_inventory'
  private readonly SHOPPING_CART_LINK = 'a.shopping_cart_link'

  public addToCart (): void {
    cy.get(this.ADD_TO_CART_BUTTON).contains('Add to cart').click()
  }

  public selectShoppingCart (): void {
    cy.get(this.SHOPPING_CART_LINK).click()
  }
}
export { ItemPage }
