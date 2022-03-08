//Try out the seach engine
describe('Sogetis homepage', () => {
    beforeEach(() => {
cy
.visit('https://www.sogeti.se/')

.get('.acceptCookie')
.click()

})

it('Search engine', () => {
cy
.visit('https://www.sogeti.se/')

.get('.navbar-search > .sprite-header')
.click()
.get('.search-text-box')
.type('HEJ')
.get('.search-label')
.click()


})
})