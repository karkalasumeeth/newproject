//var testdata=require('../Testdata/testdata.json')
        var d=require('../Testdata/data')
        const using = require('jasmine-data-provider');
        //var d=require('../Testdata/data')
        describe("Decision lender datadriven",function(){
        using(d.datadriven,function(data, _description){

        
       it("DL4 Test",function(){
       // browser.waitForAngularEnabled(false);
        browser.get("https://test.decisionlender.solutions/tci/#/auth/login/");
        browser.manage().window().maximize();
        browser.sleep(3000)
        expect(browser.getTitle()).toBe("DL4 | Login page");
        let companyid=element(by.css("input[placeholder='lenderid']"));
        companyid.sendKeys(data.companyid)
        let username=element(by.css("input[placeholder='username']"));
        username.sendKeys(data.Username);
        let password=element(by.css("input[placeholder='******']"));
        password.sendKeys(data.password)
        let loginbutton=element(by.id("submit_login"));
        loginbutton.click()
        expect(browser.getTitle()).toBe("DecisionLender 4");
        element(by.css("li[class='dropdown']")).click()
        element(by.css("a[href='#/auth/logout']")).click();
        browser.sleep(3000)
        
        
        })
    
})
})