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

function showObject(obj) {
  var result = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " , " + obj[p] + "\n";
    } 
  }              
  return result;
}

function showObjectQuery(obj) {
  var result = "";
  $.each(obj, function(k, v) {
    result += k + " , " + v + "\n";
  });
  return result;
}

showObject(users);
showObjectQuery(users);


function traverse(jsonObj) {
  if( typeof jsonObj == "object" ) {
      Object.entries(jsonObj).forEach(([key, value]) => {
          // key is either an array index or object key
          traverse(value);
      });
  }
  else {
      // jsonObj is a number or string
  }
}
function js_traverse(o) {
  var type = typeof o 
  if (type == "object") {
      for (var key in o) {
          print("key: ", key)
          js_traverse(o[key])
      }
  } else {
      print(o)
  }
}