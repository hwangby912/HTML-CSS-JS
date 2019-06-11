let p1;
function contact_button_handler() {
    /*
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;

    alert(name + " " + email + " " + comments);
    */

    let name = document.forms["contact_name"]["name"].value;
    let email = document.forms["contact_name"]["email"].value;
    let comments = document.forms["contact_name"]["comments"].value;
    
    p1 = new Person(name, email, comments);
    p1.returnValue();
    
}

function Person(name, email, comments) {
    this.name = name;
    this.email = email;
    this.comments = comments;
}

Person.prototype.returnValue = function() {
    alert(this.name + " " + this.email + " " + this.comments);
    let contact_div = document.getElementById("contact_div");
    contact_div.innerHTML = this.name + " 환영합니다. ";
}

function subscribeEventHandler() {
    let subEmail = document.getElementById("subscribeEmail").value;
    let subHandValue = document.getElementById("subHandler");
    if(subEmail == p1.email) {
        //alert("Same Email");
        document.getElementById("subscribeIcon").innerHTML = p1.name + " 환영합니다. ";
        subHandValue.innerHTML = "Log Out"
    }
}
