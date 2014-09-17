// This is a JavaScript file
/*    
     function testparse(){
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({foo: "bar"}, {
      success: function(object) {
      },
      error: function(model, error) {
      }
    });
    }
*/
function parse_addnewuser(id,pass,email,fbname,fname,lname,gender,tzone){
var user = new Parse.User();
user.set("username", id);
user.set("password", pass);
user.set("email", email);
user.set("name", fbname);
user.set("first_name", fname);
user.set("last_name", lname);
user.set("gender", gender);
user.set("timezone", tzone);
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    // alert("Error: " + error.code + " " + error.message);
  }
});
};      

   

function parse_country(id,country){
    var LocationObject = Parse.Object.extend("LocationObject");
    var locationObject = new LocationObject();
    locationObject.set("username", id);
    locationObject.set("country", country);
    locationObject.save(null, {
      success: function(object) {
      },
      error: function(model, error) {
      }
    });
    }
    
function parse_latlon(id,lat,lon){
    var LocationObject = Parse.Object.extend("LocationObject");
    var query = new Parse.Query(LocationObject);
    var point = new Parse.GeoPoint({latitude: lat, longitude: lon});
    query.equalTo("username",id);
    query.first({
    success: function (LocationObject) {
        LocationObject.save(null, {
        success: function (results) {
        LocationObject.set("location", point);
        LocationObject.save();
                                    }
                                });

                            }
                        });

                    }

function parse_serviceprovider(){
var checkornot=document.getElementById("serviceprovidercheck").checked;
var userid=localStorage.getItem("local_id");
  var LocationObject = Parse.Object.extend("LocationObject");
    var query = new Parse.Query(LocationObject);
    query.equalTo("username",userid);
    query.first({
    success: function (LocationObject) {
        LocationObject.save(null, {
        success: function (LocationObject) {
        LocationObject.set("serviceprovider", checkornot);
        LocationObject.save();
                                    }
                                });

                            }
                        });
}