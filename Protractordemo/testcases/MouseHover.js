describe("MySuite",function(){
    it("Mousehover demo",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        browser.sleep(2000);
        element(by.css("input[name='username']")).sendKeys("Admin");
        element(by.css("input[type='password']")).sendKeys("admin123");
        element(by.css("button[type='submit']")).click();
        browser.sleep(3000);
        expect(element(by.css("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).getText()).toBe("Dashboard")
       // element(by.id("")).sendKeys("");
      // var admin=

      var admin=element(by.css("a[href='/web/index.php/admin/viewAdminModule']"));
      var pim=element(by.css("a[href='/web/index.php/pim/viewPimModule']"));
      var leave=element(by.css("a[href='/web/index.php/leave/viewLeaveModule']"));
      browser.actions().mouseMove(admin).mouseMove(pim).mouseMove(leave).perform();
     // pim.click();
      browser.sleep(5000);
      // var leave=element(by.partialLinkText("viewLeaveModule"));
       //var pim=element(by.partialLinkText("viewpimModule"));
       //browser.actions().mouseMove(admin)//.mouseMove(leave).mouseMove(pim)
       //browser.sleep(3000);
    })
})