
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
      tempObj = {};
      var j = 0;
        for (var i = 0; i < inputs.length; i++) {
          if (tempObj[inputs[i]] !== tempObj[outputs[i]]) {
              console.log(inputs[i]);
              return "no"
        }
        tempArr.push(inputs[i]);
    }
    return "yes"
};

// var arr = [[1], [2], [2], [3], [4], [4]]
// function singleArraySort() {
//     var tempObj = {};
//     var tempArr = [];
//     var j = 0;
//     for(var i = 0; i < arr.length; i++) {
//          if(tempObj[arr[i]] !== 1) {
//                tempObj[arr[i]] = 1;
//                tempArr[j++] = arr[i];
//                console.log(tempObj);
//          }
//     }
//     return tempArr;
//     console.log(tempArr);
// }


console.log('Are the arrays the same (regardless of order)? : ' + areTheseArraysTheSame());
// console.log(singleArraySort());
