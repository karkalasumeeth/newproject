describe("Protractor dropdown demo 2", function () {
    function calc(a,b,c){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item){//Getting dropdown location using tagName and wrapping data
            item.getAttribute("value").then(function(value){//Getting Attribute value for option present
                if(value==c){//value is the attribute value and c is the user input data
                  item.click()//select the option when attribute value and user value is equal
                }           
            })
        })
           element(by.id("gobutton")).click();
    }
         it('Dropdown 2',function() { 
         browser.get('http://juliemr.github.io/protractor-demo/');
         calc(2,5,"MULTIPLICATION");//User data
         browser.sleep(2000);
         calc(3,4,"ADDITION");
         browser.sleep(2000);
         calc(10,20,"SUBTRACTION");
         browser.sleep(2000);  
           element.all(by.repeater("result in memory")).each(function(item)//repeater should be used when data is wrapped from webtable
            {
               item.element(by.css("td:nth-child(3)")).getText().then(function(values){
               console.log(values)           
          })
                })          
            })
         })


         
     


