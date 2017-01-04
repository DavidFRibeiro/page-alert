var request = require('request');
var twilio = require('twilio');


var accountSid = '{{ Your Account SID }}'; // Your Account SID from www.twilio.com/console
var authToken = '{{ Your auth token }}';   // Your Auth Token from www.twilio.com/console


var minutes = 1,
 the_interval = minutes * 60 * 1000;
 
setInterval(function() {

 console.log("I am doing my 1 minute check.");
 


request('http://www.apple.com/shop/browse/home/specialdeals/apple_watch/series_2', function (error, response, body) {
  if (!error && response.statusCode == 200) {

var string = "42mm-space-gray"; // Thing you are looking for in the page. 
   

if(body.includes(string)){            // If it is found.

console.log("The item is available for purchase");


var client = new twilio.RestClient(accountSid, authToken);
//client with which to send text

client.messages.create({
    body: 'It is here!',
    to: '+12012012011',  // Text this number
    from: '+12012012011' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});


} else {console.log('The item is currently not available for purchase.')} // If thing you are looking for is not found.


  }
})

}, the_interval);


