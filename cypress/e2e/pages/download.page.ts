class DownloadPage {
  private readonly SELECT_FILE = '#downloadButton'

  public visitDownloadPage (): void {
    cy.visit('https://demoqa.com/upload-download')
  }

  public downloadFile (): void {
    cy.get(this.SELECT_FILE).click()
  }

  public validateDownloadFileName (fileName: string): void {
    cy.readFile(fileName)
  }
}

export { DownloadPage }
