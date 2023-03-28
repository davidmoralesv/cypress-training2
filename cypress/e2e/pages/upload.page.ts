class UploadPage {
  private readonly SELECT_FILE = '#file-upload'
  private readonly PRIVATE_BUTTON = '#file-submit'
  private readonly UPLOADED_FILE_NAME_PANEL = '#uploaded-files'

  public visitUploadPage (): void {
    cy.visit('https://the-internet.herokuapp.com/upload')
  }

  public uploadFixtureFile (fixturePath: string): void {
    cy.get(this.SELECT_FILE).attachFile({ filePath: fixturePath })
    cy.get(this.PRIVATE_BUTTON).click()
  }

  public validateUploadedFileName (fixturePath: string): void {
    cy.get(this.UPLOADED_FILE_NAME_PANEL).then((panel) => {
      expect(panel.text().trim()).to.equal(fixturePath)
    })
  }
}

export { UploadPage }
