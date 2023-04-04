import 'cypress-iframe'

class IframePage {
  private readonly iframeName = 'iframe[src=\'default.asp\']'
  private readonly iFrameUrl = 'https://www.w3schools.com/css/'
  private readonly time = 500
  public visitIframePage (): void {
    cy.visit('https://www.w3schools.com/html/html_iframe.asp')
    cy.iframe(this.iframeName).as('iframeDefault')
  }

  public goToCssPageInFrame (cssTutorial: string): void {
    cy.frameLoaded(this.iframeName)
      .iframe(this.iframeName)
      .find(`a[title='${cssTutorial}']`)
      .should('be.visible')
      .click()
    cy.frameLoaded(this.iframeName, { url: this.iFrameUrl })
  }

  public validateIFrameTitle (title: string): void {
    cy.iframe(this.iframeName).find('h1').should('have.text', title)
  }
}

export { IframePage }
