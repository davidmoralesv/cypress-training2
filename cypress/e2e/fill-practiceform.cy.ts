import { PracticeFormPage, personalData } from './pages/index'

const practiceFormPage = new PracticeFormPage()

describe('Fill form using const', () => {
  before(() => {
    cy.viewport(1920, 1080)
  })
  it('Filling the form', function () {
    cy.visit('https://demoqa.com/automation-practice-form')
    practiceFormPage.fillForm(personalData)
    practiceFormPage.verifySuccesfulForm(personalData)
  })
})
