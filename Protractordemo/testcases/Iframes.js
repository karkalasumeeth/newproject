describe("Iframes demo",function(){
    it("Switch to iframes test",function(){
       // browser.ignoreSynchronization=true;
        browser.get("https://www.selenium.dev/selenium/docs/api/java/index.html?overview-summary.html");
        browser.switchTo().frame("packageListFrame")//switch to 1st frame
        element(by.linkText("org.openqa.selenium")).click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("packageFrame")//switch to 2nd frame
        element(by.linkText("WebDriver")).click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();//switch to default iframe(Because we can not switch to 1frame to 2frame directly)
        
        browser.switchTo().frame("classFrame")//switch to 3rd frame
        element(by.xpath("//div[@class='topNav']//ul[@title='Navigation']//li//a[@href='package-tree.html'][normalize-space()='Tree']")).click();
       // element(by.css("a[href='package-tree.html']")).element(by.containText("Tree")).click();
      // element(by.tagName('a')).getText().toBe('Tree');

        browser.sleep(2000);
    })
    fit("iframe handling demo",function(){
        browser.get("https://demo.automationtesting.in/Frames.html");
        browser.switchTo().frame(0);
        element(by.xpath("input[type='text']")).sendKeys("qwsdfgh");
    })
})