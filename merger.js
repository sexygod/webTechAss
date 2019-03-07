//Question 1
var first_names = ["Preston", "Piper", "Nick", "Conrad", "Arthur"]
var last_names = ["Garvey", "Wright", "Valentine", "Kellogg", "Maxson"]

//Part a
function mergeHandler(arr1, arr2, func){
    if(arr1.length != arr2.length)
        return "Arrays are not the same length";
    return func(arr1, arr2);
}

//Part b
function merge2Single(arr1, arr2){
    var mergedArr = [];
    for(var i = 0; i < arr1.length; i++){
        mergedArr.push(arr1[i] + " " + arr2[i]);
    }
    return mergedArr;
}

//Part c
function merge2Object(arr1, arr2){
    var mergedArr = [];
    for(var i = 0; i < arr1.length; i++){
        var obj = {
            "firstname" : arr1[i],
            "lastname" : arr2[i]
        };
        mergedArr.push(obj);
    }
    return mergedArr;
}

function test(){
    console.log(mergeHandler(first_names, last_names, merge2Object));
}

test();