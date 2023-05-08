describe("practise",function(){
    var testdata=require('../Testdata/testdata.json')
it("DL4 Test practise",function(){
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
     element(by.css("li[class='dropdown']")).click()
     element(by.css("a[href='#/auth/logout']")).click();
     browser.sleep(3000)
     expect(browser.getTitle()).toBe("DL4 | Login page");
 })
})