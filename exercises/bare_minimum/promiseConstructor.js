/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, function (err, data) {
      if (!err) {
        var allData = data.toString().split('\n');
        var firstLineData = allData[0];
        resolve(firstLineData);
      } else {
        reject(err);
      }
    });
  
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise ( (resolve, reject) => {
    request(url, (err, res) => {
      if (!err) {
        resolve(res.statusCode);
      } else {
        reject(err);
      }
    });
    
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
