var connection = new require("./kafka/Connection");
//topics files
//var signin = require('./services/signin.js');
var LoginOwner = require("./services/loginowner.js");
var LoginTraveler = require("./services/logintraveler.js");
var SignUpOwner = require("./services/signupowner");
var SignUpTraveler = require("./services/signuptraveler");
var ConfirmListing = require("./services/confirmListing");
var Search = require("./services/search");
var SendMessage = require("./services/sendMessage");
var ReplyMessage = require("./services/replyMessage");
var GetMessage = require("./services/gettravelermessage");
var GetMessageOwner = require("./services/getownermessage");
var UpdateProfile = require("./services/profileupdate");
var OwnerDashboard = require("./services/ownerDashboard");
var Booking = require("./services/booking");
var SerachResults = require("./services/searchresults");
var TravelerDashboard = require("./services/travelerDashboard");

function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res
          }),
          partition: 0
        }
      ];
      producer.send(payloads, function(err, data) {
        console.log(data);
      });
      return;
    });
  });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("login_o", LoginOwner);
handleTopicRequest("login_t", LoginTraveler);
handleTopicRequest("signup_o", SignUpOwner);
handleTopicRequest("signup_t", SignUpTraveler);
handleTopicRequest("confirm_listing", ConfirmListing);
handleTopicRequest("search", Search);
handleTopicRequest("send_msg", SendMessage);
handleTopicRequest("reply_msg", ReplyMessage);
handleTopicRequest("get_msg", GetMessage);
handleTopicRequest("get_msg_o", GetMessageOwner);
handleTopicRequest("profile_update", UpdateProfile);
handleTopicRequest("ownerdashboard", OwnerDashboard);
handleTopicRequest("booking", Booking);
handleTopicRequest("search_results", SerachResults);
handleTopicRequest("travelerdashboard", TravelerDashboard);
