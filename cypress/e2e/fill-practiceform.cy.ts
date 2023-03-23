import { PracticeFormPage } from './pages/index'

const practiceFormPage = new PracticeFormPage()

interface Information {
  name: string
  lastName: string
  email: string
  gender: string
  mobileNumber: string
  subjects: string
  hobbies: string[]
  currentAddress: string
  state: string
  city: string
  successful_message: string
  studentNameLabel: string
  studentEmailLabel: string
  genderLabel: string
  mobileLabel: string
  dateOfBirthLabel: string
  subjectsLabel: string
  hobbiesLabel: string
  addressLabel: string
  stateAndCityLabel: string
}

const personalData: Information = {
  name: 'Holmes',
  lastName: 'Salazar',
  email: 'test@email.com',
  gender: 'Male',
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

export { personalData }

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
