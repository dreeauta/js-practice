var arr = [ [ 0,0,0,1,1,1,0],
            [ 0,0,1,1,0,0,0],
            [ 0,0,1,0,1,0,0],
            [ 1,1,1,0,0,0,0],
            [ 1,1,0,0,0,0,1]];


var rows= arr.length;
var columns = arr[0].length;
var count = 0;
var newarr = [];
var width, height;
var conseq = 0;

for (var i = 0; i < rows; i++){
  for (var j = 0; j < columns; j++){
    if(arr[i][j] === 0){
       conseq++
      }
    if (conseq>3) {
      count++;
      conseq=0;
    }

  }
}




console.log(count)

// for (var k = 1; k < rows; k++) {
//   if (arr[k][j] === 0 ) {
//     for (var l = 1; l < columns; l++) {
//       if (arr[i][l] === 0 ){
//         if ( arr[k][l] === 0 ){
//           count++
//         }
//       }
//     }
//   }
// }
