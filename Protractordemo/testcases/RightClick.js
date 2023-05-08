describe("Right click Demo",function(){
    it("Right click test",function(){
        browser.waitForAngularEnabled(false);
     browser.get("http://swisnl.github.io/jQuery-contextMenu/demo.html");
     var button=element(by.className('context-menu-one btn btn-neutral'));
     browser.actions().click(button,protractor.Button.RIGHT).perform();//how to use right click  "protractor.Button.RIGH"
     element(by.className("context-menu-item context-menu-icon context-menu-icon-copy")).click()
     browser.sleep(2000);

    })
})