import {
  LoginPage,
  ProductsListPage,
  ItemPage,
  ShoppingCartPage,
  InformationPage,
  OverViewPage,
  CheckoutCompletePage
} from './pages/index'

const loginPage = new LoginPage()
const productsListPage = new ProductsListPage()
const itemPage = new ItemPage()
const shoppingCartPage = new ShoppingCartPage()
const informationPage = new InformationPage()
const overviewPage = new OverViewPage()
const checkoutCompletePage = new CheckoutCompletePage()

describe('Steps to buy a black t-shirt', () => {
  beforeEach('cargar fixture', function () {
    cy.fixture('example').as('data')
  })

  it('Login in sauce Page with empty fields', function () {
    loginPage.visitLoginPage(this.data.URL)
    loginPage.clickOnLoginButton()
    loginPage.verifyErrorMessage(this.data.USERNAME_IS_REQUIRED_MESSAGE)
  })

  it('When the user select item and do checkout', function () {
    loginPage.visitLoginPage(this.data.URL)
    loginPage.signIn()
    loginPage.clickOnLoginButton()
    productsListPage.verifyPageTitle(this.data.PRODUCTS_TITLE)
    productsListPage.selectItem(this.data.ITEM_NAME)
    itemPage.addToCart()
    itemPage.selectShoppingCart()
    shoppingCartPage.selectCheckout(this.data.ITEM_NAME, this.data.ITEM_PRICE)
    informationPage.fillCheckoutInformation(this.data.FIRST_NAME, this.data.LAST_NAME, this.data.ZIP_POSTAL_CODE)
    overviewPage.validateOverView(this.data.ITEM_NAME, this.data.ITEM_PRICE, this.data.TAX)
    overviewPage.validateComputedTotalPay()
    overviewPage.clickOnFinishButton()
    checkoutCompletePage.validateCheckoutComplete('Checkout: Complete!', 'Thank you for your order!')
  })
})
