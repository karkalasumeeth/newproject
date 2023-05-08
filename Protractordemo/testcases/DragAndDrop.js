describe("Drag and drop demo",function(){
    it("Drag and drop test",function(){
       // browser.waitForAngularEnabled(false);
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe("Drag and Drop for AngularJS");
        var source= element(by.model("list1"));
        var destination= element(by.model("list2"));
        browser.actions().dragAndDrop(source,destination).perform();
        browser.sleep(3000);
    })
})