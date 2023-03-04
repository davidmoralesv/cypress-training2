class LoginPage {
    private USER_INPUT = "#user-name";
    private PASSWORD_INPUT = "[data-test=\"password\"]";
    private LOGGIN_BUTTON = "#login-button";
    
    public visitLoginPage(URL:string) {
      cy.visit(URL);
    }
  
    public signIn() {
  
      cy.get(this.USER_INPUT).type("standard_user");
      cy.get(this.PASSWORD_INPUT).type("secret_sauce");
      cy.get(this.LOGGIN_BUTTON).click();
    }
  }
  
  export { LoginPage };
  