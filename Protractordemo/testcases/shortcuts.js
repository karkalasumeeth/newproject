describe("My suite",function(){

    it("shortcuts",function(){
        browser.ignoreSynchronization=true;  
       browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login")
       browser.driver.manage().window().setSize(1280,1024)
       //csscontainingText:-Find elements by CSS which contain a certain string.
       element(by.cssContainingText('.mainHeading','XYZ Bank'));
       expect(element(by.css('strong[class="mainHeading"]')).getText()).toBe('XYZ Bank');
       element(by.buttonText('Customer Login')).click();
        var EC = protractor.ExpectedConditions;
        // Waits for the URL to contain 'customer'.
       // browser.wait(EC.urlContains('customer'), 5000);
        browser.wait(EC.urlIs('https://www.way2automation.com/angularjs-protractor/banking/#/customer'), 5000);
       // expect(browser.getCurrentUrl()).urlContains('customer');
       element(by.repeater('cust in Customers','Hermoine Granger')).click();
       element(by.css("button[type='submit']")).click();
       browser.wait(EC.textToBePresentInElement($('.ng-scope'),'Hermoine Granger'), 5000);
       element(by.xpath(".btn.btn-lg.tab[ng-class='btnClass2']")).click();
       //element.all(by.className('.ng-scope'))//.click();
      // element.all(by.className('.ng-scope')).filter(function(elem, index) {
      //  return elem.getText().then(function(text) {
       //   return text === 'Deposit';
       // }).click();
      //})
      browser.sleep(2000);
       //expect(deposite.getText()).toBe('Deposit');
      // browser.actions().doubleClick(deposite).perform();
       //element(by.buttonText('Deposit')).click();
       

    })
})
