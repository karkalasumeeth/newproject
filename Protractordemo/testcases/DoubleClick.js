describe("Double click demo",function(){
    it("Double click test",function(){

        browser.waitForAngularEnabled(false);
        browser.get("https://testautomationpractice.blogspot.com/");
        expect(element(by.css("h1[class='title']")).getText()).toBe("Automation Testing Practice");
        var Element=element(by.buttonText("Copy Text"));
        //1 Approach
       // browser.actions().mouseMove(Element).doubleClick().perform();

       //2nd Approach
       browser.actions().doubleClick(Element).perform();
        browser.sleep(2000)



    })
})