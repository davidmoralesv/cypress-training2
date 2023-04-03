class IframePage {
  public visitIframePage (): void {
    cy.visit('https://www.w3schools.com/html/html_iframe.asp')
  }

  public getIFrameTitle (section: string): Cypress.Chainable {
    return this.getIframe(section).find('title').then(cy.wrap)
  }

  public validateFrameTitle (titleText: string): void {
    cy.wait(1000) // eslint-disable-line
    this.getIFrameTitle('head').should('have.text', titleText)
  }

  public goToCssPageInFrame (cssTutorial: string): void {
    this.getIframe('body').find(`a[title='${cssTutorial}']`).click()
  }

  private getIframe (section: string): Cypress.Chainable {
    return cy.get('iframe[src=\'default.asp\']').its(`0.contentDocument.${section}`)
      .should('not.be.empty').then(cy.wrap)
  }
}

export { IframePage }
