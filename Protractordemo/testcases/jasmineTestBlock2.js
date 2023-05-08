
describe("First Describe block",function(){
    fit("First it block",function()
    {
        console.log("This is first it block in first describe block");
    })
})
xdescribe("Second Describe block",function(){
    fit("Second it block",function()
    {
        console.log("This is Second it block in second describe block");
    })
})
fdescribe("Third Describe block",function(){
    it("Third it block",function()
    {
        console.log("This is third it block in third describe block");
    })
})