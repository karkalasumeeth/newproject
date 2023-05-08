let QAlender=function(){

    let companyid=element(by.css("input[placeholder='lenderid']"));
    let username=element(by.css("input[placeholder='username']"));
    let password=element(by.css("input[placeholder='******']"));
    let loginbutton=element(by.id("submit_login"));
    let v =element(by.css("li[class='dropdown']")).click()
    element(by.css("a[href='#/auth/logout']")).click();
  

    this.get=function(url){
        browser.get(url)
    }
    this.setcompanyid=function(id){
        companyid.sendKeys(id);
    }
    this.setname=function(name){
        username.sendKeys(name)
    }
    this.setpassword=function(pswd){
        password.sendKeys(pswd);
    }
    this.clickbutton=function(){
        loginbutton.click()
    }
    this.logout=function(){
        element(by.css("li[class='dropdown']")).click()
        element(by.css("a[href='#/auth/logout']")).click();
    }
    //verify the result
   // let loginpagetitle=function(logintitle){
//  }
}
module.exports=new QAlender();