class ProductsListPage {
    private PRODUCTS_TITLE = "span.title";
    private ITEM_SELECTED = "div.inventory_item_name";
  
    public verifyPageTitle(pageTitle: string) {
      cy.get(this.PRODUCTS_TITLE).contains(pageTitle);
    }
  
    public selectItem(itemTitle: string)  {
      cy.get(this.ITEM_SELECTED).contains(itemTitle).click();
    }
  }
  
  export { ProductsListPage };
  