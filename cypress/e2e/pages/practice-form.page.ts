import { type personalData } from './index'

class PracticeFormPage {
  private readonly FIRST_NAME = '#firstName'
  private readonly LAST_NAME = '#lastName'
  private readonly EMAIL = '#userEmail'
  private readonly GENDER = 'input[type=radio]'
  private readonly MOBILE = '#userNumber'
  private readonly SUBJECTS = 'div.subjects-auto-complete__value-container'
  private readonly LABEL = 'label.custom-control-label'
  private readonly CURRENT_ADDRESS = '#currentAddress'
  private readonly STATE = '#state'
  private readonly CITY = '#city'
  private readonly SUCCESSFUL_MODAL = '#example-modal-sizes-title-lg'
  private readonly SUBMIT = 'button#submit'
  private readonly LABEL_SUCCESFUL_MODAL = 'div.modal-body tbody td'

  public fillForm (personalInformation: typeof personalData): void {
    cy.get(this.FIRST_NAME).type(personalInformation.name)
    cy.get(this.LAST_NAME).type(personalInformation.lastName)
    cy.get(this.EMAIL).type(personalInformation.email)
    cy.get(this.GENDER).check(personalInformation.gender, { force: true }) // eslint-disable-line
    cy.get(this.MOBILE).type(personalInformation.mobileNumber)
    cy.get(this.SUBJECTS).type(`${personalInformation.subjects}{enter}`)
    cy.get(this.MOBILE).type(personalInformation.mobileNumber)
    cy.get(this.LABEL).contains(personalInformation.hobbies[0]).eq(0).click()
    cy.get(this.LABEL).contains(personalInformation.hobbies[1]).eq(0).click()
    cy.get(this.CURRENT_ADDRESS).type(personalInformation.currentAddress)
    cy.get(this.STATE).type(`${personalInformation.state}{enter}`)
    cy.get(this.CITY).type(`${personalInformation.city}{enter}`)
    cy.get(this.SUBMIT).click()
  }

  public verifySuccesfulForm (personalInformation: typeof personalData): void {
    cy.get(this.SUCCESSFUL_MODAL).should('have.text', personalInformation.successful_message)
    this.validateEachLabel(personalInformation.studentNameLabel,
      `${personalInformation.name} ${personalInformation.lastName}`
    )
    this.validateEachLabel(personalInformation.studentEmailLabel, personalInformation.email)
    this.validateEachLabel(personalInformation.genderLabel, personalInformation.gender)
    this.validateEachLabel(personalInformation.mobileLabel, personalInformation.mobileNumber)
    this.validateEachLabel(personalInformation.subjectsLabel, personalInformation.subjects)
    this.validateEachLabel(personalInformation.hobbiesLabel,
      `${personalInformation.hobbies[0]}, ${personalInformation.hobbies[1]}`
    )
    this.validateEachLabel(personalInformation.addressLabel, personalInformation.currentAddress)
    this.validateEachLabel(personalInformation.stateAndCityLabel,
      `${personalInformation.state} ${personalInformation.city}`
    )
  }

  private validateEachLabel (label: any, text: any): void {
    cy.get(this.LABEL_SUCCESFUL_MODAL).contains(label).next().should('have.text', text)
  }
}

export { PracticeFormPage }
