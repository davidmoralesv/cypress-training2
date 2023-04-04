import { IframePage } from './pages/index'

const iframePage = new IframePage()

const HTMLTitle = 'HTML Tutorial'
const CSSTitle = 'CSS Tutorial'

describe('Upload File using cypress-file-upload', () => {
  it('Upload file', function () {
    iframePage.visitIframePage()
    iframePage.validateIFrameTitle(HTMLTitle)
    iframePage.goToCssPageInFrame(CSSTitle)
    iframePage.validateIFrameTitle(CSSTitle)
  })
})
