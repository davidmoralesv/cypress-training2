import { UploadPage } from './pages/index'

const uploadPage = new UploadPage()
const FIXTURE_PATH = 'example.json'

describe('Upload File using cypress-file-upload', () => {
  before(() => {
    cy.viewport(1920, 1080)
  })
  it('Upload file', function () {
    uploadPage.visitUploadPage()
    uploadPage.uploadFixtureFile(FIXTURE_PATH)
    uploadPage.validateUploadedFileName(FIXTURE_PATH)
  })
})
