describe("A suite is just a function", function() {
    let a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
  

    it("validate url",function(){

        browser.get('https://angularjs.org/');//Navigating to the angular website
        browser.sleep(5000)// Adding wait for 5sec
        browser.manage().window().maximize()//maximizing the angular window
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');//Validating url using get url method
    })
    it("validate title",function(){
        
        browser.get('https://angularjs.org/');//Navigating to the angular website
        browser.sleep(5000)// Adding wait for 5sec
        browser.manage().window().maximize()//maximizing the angular window
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');//validating title using get title method

    })
});