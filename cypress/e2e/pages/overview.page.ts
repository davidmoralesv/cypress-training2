class OverViewPage {
  private readonly CART_QUANTITY = '.cart_quantity'
  private readonly INVENTORY_ITEM_NAME = 'div.inventory_item_name'
  private readonly INVENTORY_ITEM_PRICE = 'div.inventory_item_price'
  private readonly SUMMARY_SUBTOTAL_LABEL = 'div.summary_subtotal_label'
  private readonly SUMMARY_TAX_LABEL = 'div.summary_tax_label'
  private readonly SUMMARY_TOTAL_LABEL = 'div.summary_total_label'
  private readonly FINISH_BUTTON = '[data-test="finish"]'

  public validateOverView (itemName: string, itemPrice: string, tax: number): void {
    cy.get(this.CART_QUANTITY).should('have.text', 1)
    cy.get(this.INVENTORY_ITEM_NAME).should('have.text', itemName)
    cy.get(this.INVENTORY_ITEM_PRICE).should('contain', itemPrice)
    cy.get(this.SUMMARY_SUBTOTAL_LABEL).should('contain', itemPrice)
    cy.get(this.SUMMARY_TAX_LABEL).should('contain', tax)
  }

  public validateComputedTotalPay (): void {
    cy.get(this.SUMMARY_SUBTOTAL_LABEL)
      .invoke('text')
      .as('subtotal')
      .then(function (value) {
        this.subtotal = parseFloat(value.replace('Item total: $', ''))
      })

    cy.get(this.SUMMARY_TAX_LABEL)
      .invoke('text')
      .as('tax')
      .then(function (value) {
        this.tax = parseFloat(value.replace('Tax: $', ''))
      })

    cy.get(this.SUMMARY_TOTAL_LABEL)
      .invoke('text')
      .then(function (value) {
        const totalInScreen = parseFloat(value.replace('Total: $', ''))
        const total = parseFloat(this.subtotal) + parseFloat(this.tax)
        cy.wrap(totalInScreen).should('equal', total)
      })
  }

  public clickOnFinishButton (): void {
    cy.get(this.FINISH_BUTTON).click()
  }
}

export { OverViewPage }
