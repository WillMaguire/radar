
var fs = require('fs');

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

function csvToArray (csvBuffer) {
  csvContent = decoder.write(csvBuffer);
  rows = csvContent.split("\n");
  return rows.map(function (row) {
    return row.split(",");
  });
};

var inputs = csvToArray(fs.readFileSync('./sf-member-cache-inputs.csv'));
var outputs = csvToArray(fs.readFileSync('./sf-member-cache-outputs.csv'));

function areTheseArraysTheSame() {
  if (inputs.length != outputs.length) {
      console.log("id added or missing");
    }
      tempArr = [];
      tempObj1 = {tempArr: inputs[i]}
      tempObj2= {tempArr: outputs[i]}
        for (var i = 0; i < inputs.length; i++) {
          tempArr.push(inputs[i]);
        }
      if (tempObj1 != tempObj2) {
      console.log(tempArr);
  }
};



console.log('Are the arrays the same (regardless of order)? : ' + areTheseArraysTheSame());
