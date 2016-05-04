/**
 * Performs the acceptance test on the blog
 */
describe('Blog Home', function() {

    beforeEach(function () {
        browser.driver.get("https://blogdiogocosta.wordpress.com");
    });

    it("Validating the home page", function () {
        var templateBody = element(by.xpath("//div[@class='content-area']"));
        expect(templateBody.isPresent()).toBe(true);
    });

});