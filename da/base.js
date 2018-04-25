"use strict";

function sampleFunction (arr) {

  for(var i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }  

  console.log("The input array of objects: "+arr);

}

var myLoc = { 'city': 'Dallas' };
var foo=[ true, null, ('version'+2.0), {'a_key':'a_value'}, myLoc ];

sampleFunction(foo);