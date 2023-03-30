import { DownloadPage } from './pages/index'

const downloadPage = new DownloadPage()
const FIXTURE_PATH = 'cypress/downloads/sampleFile.jpeg'

describe('Download and verify', () => {
  before(() => {
    cy.viewport(1920, 1080)
  })
  it('download file', function () {
    downloadPage.visitDownloadPage()
    downloadPage.downloadFile()
    downloadPage.validateDownloadFileName(FIXTURE_PATH)
  })
})
