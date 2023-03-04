class ProductsListPage {
  private readonly PRODUCTS_TITLE = 'span.title'
  private readonly ITEM_SELECTED = 'div.inventory_item_name'

  public verifyPageTitle (pageTitle: string): void {
    cy.get(this.PRODUCTS_TITLE).contains(pageTitle)
  }

  public selectItem (itemTitle: string): void {
    cy.get(this.ITEM_SELECTED).contains(itemTitle).click()
  }
}

export { ProductsListPage }
