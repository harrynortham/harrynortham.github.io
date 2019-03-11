/*Toggle hamburger menu links*/

function burgerNavigationToggle() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Create a cookie*/

function createCookie(name,value,days) {
     if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+";";
}


/*Add a promo popup, hide for X days when clicked*/

document.getElementById('promoClick').addEventListener("click", promoCookieSet);

function promoCookieSet() {
    document.getElementById("demo").innerHTML = "Cookie is set";
    createCookie("hello","there",12);
    console.log("Button clicked");
  }
