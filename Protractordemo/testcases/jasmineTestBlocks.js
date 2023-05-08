describe("My Suite",function(){

    beforeAll(function(){
        console.log("Launching App........");
    })
    afterAll(function(){
        console.log("Closing App........");
    })
    beforeEach(function(){
        console.log("This is login ");
    })
    afterEach(function(){
        console.log("This is logout");
    })

    it("Search Test",function(){
       console.log("This is search Test");
    })

    it("Advance Search Test",function(){
        console.log("This is Advance search Test");
    })
})