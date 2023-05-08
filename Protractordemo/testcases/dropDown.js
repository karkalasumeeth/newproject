
describe("Protractor dropdown demo", function () {
it('Dropdown',function() { 
 // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
 browser.get('http://juliemr.github.io/protractor-demo/');
 element(by.model("first")).sendKeys("3");
 element(by.model("second")).sendKeys("5");
 //  WAY 1
 element(by.model("operator")).element(by.css('option[value="MODULO"]')).click()
 element(by.id("gobutton")).click();  
 browser.sleep(5000);
 // WAY 2
 element.all(by.options("value for (key, value) in operators")).get(4).click();//clicking element using index number   
 browser.sleep(5000);
 // WAY 3
 element(by.cssContainingText("option","+")).click();
 browser.sleep(5000);
})
})

