describe("Protractor elements demo", function () {


    it("Locator",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
       browser.sleep(2000);
       element(by.model("first")).sendKeys("3");//getting an element using "model" locator
       element(by.model("second")).sendKeys("5");//getting an element using "model" locator
       element(by.id("gobutton")).click();//getting an element using "id" locator
       element(by.css('h2[class="ng-binding"]')).getText().then(function(text){//getting an element using "CSS" locator
        console.log(text);
       })   

    });
});