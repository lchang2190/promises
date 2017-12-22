/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function (err, data) {
    if (!err) {
      var allData = data.toString().split('\n');
      var firstAllData = allData[0];
      callback(err, firstAllData);
    } else {
      console.log('no data');
      callback(err, null);
    }
  });
  
  
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request( url, (err, res) => {
    if (err) {
      callback(err);
    } else {
      console.log(res.statusCode);  
      callback(err, res.statusCode);
    }
  
  });// TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
