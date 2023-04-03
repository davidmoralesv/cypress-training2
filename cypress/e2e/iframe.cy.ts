import { IframePage } from './pages/index'

const iframePage = new IframePage()
const HTMLTitle = 'HTML Tutorial'
const CSSTitle = 'CSS Tutorial'
const headSection = 'head'

describe('Upload File using cypress-file-upload', () => {
  it('Upload file', function () {
    iframePage.visitIframePage()
    iframePage.getIFrameTitle(headSection)
    iframePage.validateFrameTitle(HTMLTitle)
    iframePage.goToCssPageInFrame(CSSTitle)
    iframePage.validateFrameTitle(CSSTitle)
  })
})
