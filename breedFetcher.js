const request = require('request');

const url = process.argv[2];




request(url, function(error, response, body) {
  const data = JSON.parse(body);
  // console.log(data);
  if (error) {
    console.log("error at location!");
  } else {
    console.log("this is the data", data);
    console.log(data[0].description);
  }
});

