import { LoginPage, ProductsListPage } from './pages/index'

const loginPage = new LoginPage()
const productsListPage = new ProductsListPage()

describe('Buy a black t-shirt', () => {
  before('cargar fixture', function () {
    cy.fixture('example').as('data')
  })

  it('When the user visit the page', function () {
    loginPage.visitLoginPage(this.data.URL)
    loginPage.signIn()
    productsListPage.verifyPageTitle(this.data.PRODUCTS_TITLE)
    productsListPage.selectItem(this.data.ITEM_TO_SELECT)
  })
})
