let QAlender=require("../pages/Qalender")

describe("My suite",function(){

    it("Decision lender login",function(){
      
        QAlender.get("https://test.decisionlender.solutions/tci/#/auth/login/")
        expect(browser.getTitle()).toBe("DL4 | Login page");
        QAlender.setcompanyid("qatr038");
        QAlender.setname("karkala.sumeeth");
        QAlender.setpassword("Dl4test@Dec22");
        QAlender.clickbutton();
        QAlender.logout();
        expect(browser.getTitle()).toBe("DecisionLender 4");
       
    })
})