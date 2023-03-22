import { PracticeFormPage } from './pages/index'

const practiceFormPage = new PracticeFormPage()
const personalInformation = {
  name: 'Holmes',
  lastName: 'Salazar',
  email: 'test@email.com',
  gender: 'Male',
  dateOfBirth: ' July 2016',
  mobileNumber: '3656589156',
  subjects: 'Computer Science',
  hobbies: ['Music', 'Reading'],
  currentAddress: 'Av siempreViva # 123',
  state: 'Uttar Pradesh',
  city: 'Agra',
  successful_message: 'Thanks for submitting the form',
  studentNameLabel: 'Student Name',
  studentEmailLabel: 'Student Email',
  genderLabel: 'Gender',
  mobileLabel: 'Mobile',
  dateOfBirthLabel: 'Date of Birth',
  subjectsLabel: 'Subjects',
  hobbiesLabel: 'Hobbies',
  addressLabel: 'Address',
  stateAndCityLabel: 'State and City'
}

describe('Fill form using const', () => {
  before(() => {
    cy.viewport(1920, 1080)
  })
  it('Filling the form', function () {
    cy.visit('https://demoqa.com/automation-practice-form')
    practiceFormPage.fillForm(personalInformation)
    practiceFormPage.verifySuccesfulForm(personalInformation)
  })
})
