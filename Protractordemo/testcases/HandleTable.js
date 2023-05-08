describe("Handling table demo",function(){

    beforeAll(function(){
        browser.get("https://dassdevarajan.github.io/demo-app/");
        browser.sleep(5000);
    })
    it("View product details",function(){
   //view product
var  Name="HP 14 Core i3 Laptop"
var Description	="Processor: 7th Generation Intel core i3-7020U processor, 2.3GHz base processor speed. Operating System: Pre-loaded Windows 10 Home with lifetime validity. Display: 14-inch HD (1366x768) display"
var Category	="Electronics"
var Quantity	="10"
var UnitPrice   ="450"
var Supplier	="HP"
var Returnable	="true"

element.all(by.tagName("tr")).get(2).element(by.id("view")).click()
browser.sleep(2000);
expect(element(by.tagName("h3")).getText()).toBe("Product View");
browser.sleep(2000);

expect(element.all(by.tagName("tr")).get(0).element(by.tagName("td")).getText()).toBe(Name)
expect(element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()).toBe(Description)
expect(element.all(by.tagName("tr")).get(2).element(by.tagName("td")).getText()).toBe(Category)
expect(element.all(by.tagName("tr")).get(3).element(by.tagName("td")).getText()).toBe(Quantity)
expect(element.all(by.tagName("tr")).get(4).element(by.tagName("td")).getText()).toBe(UnitPrice)
expect(element.all(by.tagName("tr")).get(5).element(by.tagName("td")).getText()).toBe(Supplier)
expect(element.all(by.tagName("tr")).get(6).element(by.tagName("td")).getText()).toBe(Returnable)
    })

    it("Navigate to product List",function(){
        element(by.id("list-menu")).click()
        expect(element(by.tagName("h3")).getText()).toBe("Product List");
    })

    it("Delete product",function(){
        browser.sleep(4000)
        element.all(by.tagName("tr")).last().element(by.id("delete")).click()
        browser.sleep(3000)
        expect(element.all(by.tagName("tr")).last().element(by.tagName("td:nth-child(1)")).getText()).not.toBe("1001 Activities Book")
    })
})
