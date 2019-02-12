var rpc = new (require("../kafka/kafkarpc"))();

//make request to kafka
function make_request(queue_name, msg_payload, callback) {
  console.log("in make request and");
  console.log("Message payload is: ", msg_payload);

  rpc.makeRequest(queue_name, msg_payload, function(err, response) {
    if (err) console.error("here i am in error", err);
    else {
      console.log("response is", response);
      callback(null, response);
    }
  });
}

exports.make_request = make_request;
