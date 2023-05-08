describe("expectdemo",function(){
it("expecttest",function(){
    //Test1
    x=100;
    expect(x).toBe(100);
    expect(x).not.toBe(99);
    expect(x).toEqual(100);
    expect(x).not.toEqual(99);
    //Test2
    let b=[10,20,30,40,50]
   // expect(b).toBe([10,20,30,40,50])//output will be failed
   // b=c;
   //expect(b).toBe(c);//passed
    expect(b).toEqual([10,20,30,40,50]) //passed
    //Test3
    browser.get("https://www.protractortest.org/#/toc")
   //expect(browser.getTitle()).toBe("Protractor - end-to-end testing for AngularJS")
    expect(browser.getTitle()).toContain("Protractor")
    let arr=[10,20,30,40,50]
    expect(arr).toContain(10);
    expect(arr).not.toContain(100);
    let name=["kevin","david,","john"]
    expect(name).toContain("john");
    expect(name).not.toContain("johnny");
    //Test4
    let a=500;
    expect(a).toBeGreaterThan(400);
    expect(a).toBeLessThan(501);
   //Test5
   let d="john";
   let e=100;
   expect(d).toBeNaN();
   // expect(e).toBeNull();
})
})
