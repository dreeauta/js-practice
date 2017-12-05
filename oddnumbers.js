function oddNumbers(l, r) {
    var newarr = []

    for (var i = l; i <= r; i++){
        if ((i % 2) != 0){
            newarr.push(i);
        }
    }

    console.log(newarr)
    return newarr
}

oddNumbers(1,10);


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
