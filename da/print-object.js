"use strict";

// Intended input is an array of objecs
var users = {
  'Students': [ 
      {first_name:  'Michael', last_name : 'Jordan'},
      {first_name : 'John', last_name : 'Rosales'},
      {first_name : 'Mark', last_name : 'Guillen'},
      {first_name : 'KB', last_name : 'Tonel'}
   ],
  'Instructors': [
      {first_name : 'Michael', last_name : 'Choi'},
      {first_name : 'Martin', last_name : 'Puryear'}
   ]
  }

  /* Sample output
  Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
*/
function traverse(obj) {
  for (i in obj) {
      if (!!obj[i] && typeof(obj[i])=="object") {
          console.log(i, obj[i])
          traverse(obj[i] );
      }
  }
}

var traverse = function(o, fn) {
  for (var i in o) {
    fn.apply(this,[i,o[i]]);  
    if (o[i] !== null && typeof(o[i])=="object") {
      traverse(o[i], fn);
    }
  }
}

// usage
var obj = {'your':'object'};
traverse(obj, function(k,v){
  console.log(k + " : " + v);
});

function printObject(arrOfObj) 
{
  // Print out the array of objects
  console.log(arrOfObj);
  //
  for (const key in arrOfObj) {
    if (arrOfObj.hasOwnProperty(key)) {
      console.log(key);
      const element = arrOfObj[key];
      console.log(element);
      for (const key1 in element) {
        if (element.hasOwnProperty(key1)) {
          console.log(key1);
          const element1 = element[key1];
          console.log(element1);         
        }
      }
      // console.log("{"+key+":"+arrOfObj[key]+"}");
      
    }
  }
  console.log((arrOfObj)[0]);
    
}

printObject (users);