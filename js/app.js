// This is a JavaScript file

ons.ready(function(){
     });
     
// Add another Onsen UI element

function compiletabbar(){
var content = document.getElementById("tabbarplaceholder");
content.innerHTML='<ons-tabbar var="tabbar"><ons-tabbar-item icon="home" label="Home" page="home.html" active="true"></ons-tabbar-item><ons-tabbar-item page="search.html" icon="search" label="Search"></ons-tabbar-item><ons-tabbar-item icon="comment" label="Messages" page="message.html"></ons-tabbar-item><ons-tabbar-item onclick="sleep(500, getuserdetails)" icon="gear" label="Settings" page="settings.html"></ons-tabbar-item></ons-tabbar>'; 
ons.compile(content);
}

function getuserdetails(){
document.getElementById("get_user").innerHTML = localStorage.getItem("local_user");
document.getElementById("get_user_email").innerHTML = localStorage.getItem("local_email"); 
//document.getElementById("get_user_id").src ='http://graph.facebook.com/' + localStorage.getItem("local_id") + '/picture?type=small';
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}

var options = {
  animation: 'slide', // What animation to use
  onTransitionEnd: function() {alert("Hello!")} // Called when finishing transition animation
};

var launchmap = {
  animation: 'slide',
  onTransitionEnd: function() {launchol()}
  };