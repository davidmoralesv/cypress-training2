class LoginPage {
  private readonly USER_INPUT = '#user-name'
  private readonly PASSWORD_INPUT = '[data-test="password"]'
  private readonly LOGGIN_BUTTON = '#login-button'
  private readonly ERROR_MESSAGE = '[data-test="error"]'

  public visitLoginPage (URL: string): void {
    cy.visit(URL)
  }

  public signIn (): void {
    cy.get(this.USER_INPUT).type('standard_user')
    cy.get(this.PASSWORD_INPUT).type('secret_sauce')
  }

  public clickOnLoginButton (): void {
    cy.get(this.LOGGIN_BUTTON).click()
  }

  public verifyErrorMessage (errorMessage: string): void {
    cy.get(this.ERROR_MESSAGE).should('have.text', errorMessage)
  }
}

export { LoginPage }
