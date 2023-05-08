var testdata=require('../Testdata/testdata.json')
describe("Decision lender",function(){
    testdata.map(function(data){
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
        let logout=element(by.css("span[class='font-bold loggedinuser']"))//.element(by.css("a[href='#/auth/logout']"))
       logout.click();
       expect(browser.getTitle()).toBe("DL4 | Login page");
    })
})
     fit("DL4 Test",function(){
        // browser.waitForAngularEnabled(false);
         browser.get("https://test.decisionlender.solutions/tci/#/auth/login/");
         browser.manage().window().maximize();
         browser.sleep(3000)
         expect(browser.getTitle()).toBe("DL4 | Login page");
         let companyid=element(by.css("input[placeholder='lenderid']"));
         companyid.sendKeys("qatr038")
         let username=element(by.css("input[placeholder='username']"));
         username.sendKeys("karkala.sumeeth");
         let password=element(by.css("input[placeholder='******']"));
         password.sendKeys("Dl4test@Dec22")
         let loginbutton=element(by.id("submit_login"));
         loginbutton.click()
         expect(browser.getTitle()).toBe("DecisionLender 4");
         browser.sleep(3000)
         let logout=element(by.css("span[class='font-bold loggedinuser']")).element(by.css("a[href='#/auth/logout']"))
        logout.click();
        browser.sleep(3000)
        expect(browser.getTitle()).toBe("DL4 | Login page");
     })
    
})
