const request = require('request');


const breedName = process.argv[2].slice(4);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;


const fetchBreedDescription = function(breedName, callback) {
  request(url, function(error, name, body) {
    const data = JSON.parse(body);
    // console.log(data);
    if (error) {
      callback();
      console.log("error at location!");
    } else {
      console.log("this is the data", data);
      console.log(data[0].description);
    }
  });
};
fetchBreedDescription();
module.exports = { fetchBreedDescription };