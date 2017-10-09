// 1. Implement the sort function  - native sort is cheating. Don't use it.
//
// var sort = function() {}
//
// var arr = [5, 1, 4, 2, 3];
// var sorted = sort(arr);
// console.log(sorted); // [1, 2, 3, 4, 5]


var arr = [5, 1, 4, 2, 3];

var sort = function() {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++){
      if (arr[j] > arr[j + 1]) {
          var k = arr[j];
          arr[j] = arr[j + 1]
          arr[j + 1] = k;
        }
      }
    }
    return arr
  }

var sorted = sort(arr);

console.log(sorted)




// 2. Only once – implement the once function as it works below.
//
// var once = function() {}
//
// function bootstrapApp() {
//   console.log('executed once');
//   return 22;
// }
//
// var initialize = once(bootstrapApp);
// console.log(initialize());
// console.log(initialize());
// // executed once
// // 22
// // 22
// //


var once = function() {
  var flag = false;

    function bootstrapApp() {
      if (!flag) {
        flag = true;
        console.log('executed once');
      }
      return 22;
    }

  return bootstrapApp
}

var initialize = once();

console.log(initialize());
console.log(initialize());




// 3. Implement the curry function below.
//
// var curry = function() {}
//
// function add(a, b) {
//   return a + b;
// }
//
// var curried = curry(add);
// console.log(  curried(1)(2)  ); // 3



// var curry = function(a) {
//   return function (b) {
//     return a + b
//   }
//
// }

var curry = function ( fn ) {
  var arity = fn.length;
  return (function resolver() {
    var memory = Array.prototype.slice.call( arguments ); //convert array like objects to array
    return function() {
      var local = memory.slice(), next;
      Array.prototype.push.apply( local, arguments ); //combining 2 arrays
      next = local.length >= arity ? fn : resolver;
      return next.apply( null, local );
    };
  }());
}

var add = function(a,b) {
  return a + b
}

var curried = curry(add);


console.log(  curried(1)(2) );
