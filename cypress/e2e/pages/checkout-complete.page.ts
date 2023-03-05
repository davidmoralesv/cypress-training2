class CheckoutCompletePage {
  private readonly title = '.title'
  private readonly message = 'h2.complete-header'

  public validateCheckoutComplete (messageCheckoutComplete: string, thankYouForYourOrder: string): void {
    cy.get(this.title).contains(messageCheckoutComplete).should('exist')
    cy.get(this.message).contains(thankYouForYourOrder).should('exist')
  }
}
export { CheckoutCompletePage }
