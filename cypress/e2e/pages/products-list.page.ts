class ProductsListPage {
  private readonly PRODUCTS_TITLE = 'span.title'
  private readonly ITEM = 'div.inventory_item'
  private readonly ITEM_DESCRIPTION = 'div.inventory_item_description'
  private readonly ITEM_NAME = 'div.inventory_item_name'

  public verifyPageTitle (pageTitle: string): void {
    cy.get(this.PRODUCTS_TITLE).contains(pageTitle)
  }

  public selectItem (itemTitle: string): void {
    this.findProductByName(itemTitle).click()
  }

  private findProductByName (itemTitle: string): any {
    return cy.get(this.ITEM).find(this.ITEM_DESCRIPTION).find(this.ITEM_NAME).filter(`:contains("${itemTitle}")`)
  }
}

export { ProductsListPage }
