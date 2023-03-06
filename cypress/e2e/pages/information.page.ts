class InformationPage {
  private readonly FIRST_NAME_INPUT = '#first-name'
  private readonly LAST_NAME_INPUT = '#last-name'
  private readonly ZIP_POSTAL_CODE = '#postal-code'
  private readonly CONTINUE_BUTTON = '#continue'

  public fillCheckoutInformation (firstName: string, lastName: string, zipPostalCode: string): void {
    cy.get(this.FIRST_NAME_INPUT).type(firstName)
    cy.get(this.LAST_NAME_INPUT).type(lastName)
    cy.get(this.ZIP_POSTAL_CODE).type(zipPostalCode)
    cy.get(this.CONTINUE_BUTTON).click()
  }
}

export { InformationPage }
