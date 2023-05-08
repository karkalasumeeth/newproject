describe("mysuite",function(){

    it("Validate login",function(){

        browser.get("");
        browser.sleep(3000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toContain("T-Mobile®");
        element(by.model("user.name")).sendKeys("Luke");
        element(by.model("user.password")).sendKeys("Skywalker");
        element(by.buttonText("Login")).click();

        browser.sleep(3000);

        var greetmsg=element(by.id("greetings"));
        expect(greetmsg.getText()).toBe("Hello Luke"); //validate greeting msg

        var logout=element(by.css('[ng-click="logout()"]'));
        expect(logout.isPresent()).toBe(true);

        logout.click();
        
    })

})