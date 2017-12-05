// sort

var arr = [1,6,2,4,3,5,9]
var newarr = [];

function sorting(){
  for (var i = 0; i <arr.length; i++){
    for(var j = 0; j <arr.length -1; j++){
      if (arr[j] > arr[i]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        }

      }
    }
    return arr
}

sorting(arr);
console.log(arr);
