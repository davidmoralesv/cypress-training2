class PracticeFormPage {
  private readonly FIRST_NAME = '#firstName'
  private readonly LAST_NAME = '#lastName'
  private readonly EMAIL = '#userEmail'
  private readonly GENDER = 'input[type=radio]'
  private readonly MOBILE = '#userNumber'
  private readonly DATE_OF_BIRTHDAY = '#dateOfBirthInput'
  private readonly SUBJECTS = 'div.subjects-auto-complete__value-container'
  private readonly LABEL = 'label.custom-control-label'
  private readonly CURRENT_ADDRESS = '#currentAddress'
  private readonly STATE = '#state'
  private readonly CITY = '#city'
  private readonly SUCCESSFUL_MODAL = '#example-modal-sizes-title-lg'
  private readonly SUBMIT = 'button#submit'
  private readonly LABEL_SUCCESFUL_MODAL = 'div.modal-body tbody td'

  private readonly personalInformation = {
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

  public fillForm (): void {
    cy.get(this.FIRST_NAME).type(this.personalInformation.name)
    cy.get(this.LAST_NAME).type(this.personalInformation.lastName)
    cy.get(this.EMAIL).type(this.personalInformation.email)
    cy.get(this.GENDER).check(this.personalInformation.gender, { force: true }) // eslint-disable-line
    cy.get(this.MOBILE).type(this.personalInformation.mobileNumber)
    this.fillDate()
    cy.get(this.SUBJECTS).type(this.personalInformation.subjects + '{enter}')
    cy.get(this.LABEL).contains(this.personalInformation.hobbies[0]).eq(0).click()
    cy.get(this.LABEL).contains(this.personalInformation.hobbies[1]).eq(0).click()
    cy.get(this.CURRENT_ADDRESS).type(this.personalInformation.currentAddress)
    cy.get(this.STATE).type(this.personalInformation.state + '{enter}')
    cy.get(this.CITY).type(this.personalInformation.city + '{enter}')
    cy.get(this.SUBMIT).click({ force: true }) // eslint-disable-line
  }

  public verifySuccesfulForm (): void {
    cy.get(this.SUCCESSFUL_MODAL).should('have.text', this.personalInformation.successful_message)
    this.validateEachLabel(this.personalInformation.studentNameLabel,
      this.personalInformation.name + ' ' + this.personalInformation.lastName
    )
    this.validateEachLabel(this.personalInformation.studentEmailLabel, this.personalInformation.email)
    this.validateEachLabel(this.personalInformation.genderLabel, this.personalInformation.gender)
    this.validateEachLabel(this.personalInformation.mobileLabel, this.personalInformation.mobileNumber)
    this.validateEachLabel(this.personalInformation.subjectsLabel, this.personalInformation.subjects)
    this.validateEachLabel(this.personalInformation.hobbiesLabel,
      this.personalInformation.hobbies[0] + ', ' + this.personalInformation.hobbies[1]
    )
    this.validateEachLabel(this.personalInformation.addressLabel, this.personalInformation.currentAddress)
    this.validateEachLabel(this.personalInformation.stateAndCityLabel,
      this.personalInformation.state + ' ' + this.personalInformation.city
    )
  }

  private validateEachLabel (label: any, text: any): void {
    cy.get(this.LABEL_SUCCESFUL_MODAL).contains(label).next().should('have.text', text)
  }

  private fillDate (): void {
    for (let i = 1; i <= 4; i++) {
      cy.get(this.DATE_OF_BIRTHDAY).type('{backspace}')
    }
    cy.get(this.DATE_OF_BIRTHDAY).type(this.personalInformation.dateOfBirth)
    cy.get(this.DATE_OF_BIRTHDAY).type(this.personalInformation.dateOfBirth).type('{enter}')
  }
}

export { PracticeFormPage }
