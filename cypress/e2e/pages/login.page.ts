class LoginPage {
  private readonly USER_INPUT = '#user-name'
  private readonly PASSWORD_INPUT = '[data-test="password"]'
  private readonly LOGGIN_BUTTON = '#login-button'

  public visitLoginPage (URL: string): void {
    cy.visit(URL)
  }

  public signIn (): void {
    cy.get(this.USER_INPUT).type('standard_user')
    cy.get(this.PASSWORD_INPUT).type('secret_sauce')
    cy.get(this.LOGGIN_BUTTON).click()
  }
}

export { LoginPage }
