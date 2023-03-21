import { PracticeFormPage } from './pages/index'

const practiceFormPage = new PracticeFormPage()

describe('Fill form using const', () => {
  it('Filling the form', function () {
    cy.visit('https://demoqa.com/automation-practice-form')
    practiceFormPage.fillForm()
    practiceFormPage.verifySuccesfulForm()
  })
})
