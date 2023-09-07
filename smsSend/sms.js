var sid = "AC401b067ad3dc100619ef109ac94d6e86";
var auth_token = "f3936119e7d8095f3ec143562ed2fd12";

var twilio = require('twilio')(sid,auth_token)

twilio.messages.create({
    from:"+12564641969",
    to:"+918114691098",
    body:"This is for testing"
})
.then((res) => console.log('message has sent'))
.catch((err) => {
    console.log(err)
});