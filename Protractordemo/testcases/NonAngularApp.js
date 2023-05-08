describe("NonAngular App Demo",function(){
    it("NonAngular App test",function(){
      //  If set to false, Protractor will not wait for Angular $http and $timeout
      //  tasks to complete before interacting with the browser
      //  browser.waitForAngularEnabled(false);//while working with non-Angular website we have to change agulaeenable to "false"
          browser.ignoreSynchronization=true;
        browser.get("https://demowebshop.tricentis.com/");
        browser.manage().window().maximize();
        browser.sleep(5000);
        element(by.id('small-searchterms')).sendKeys("14.1-INCH LAPTOP");
        browser.sleep(5000);
        expect(element(by.css("img[alt='Picture of 14.1-inch Laptop']")).isPresent()).toBe(true);

    })
})