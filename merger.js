//Question 1
var first_names = ["Preston", "Piper", "Nick", "Conrad", "Arthur"];
var last_names = ["Garvey", "Wright", "Valentine", "Kellogg", "Maxson"];

//Part a
function mergeHandler(arr1, arr2, func){
    if(arr1.length != arr2.length){
        console.log("Arrays are not the same length");
        return;
    }
    
    var mergedArr = [];
    for(var i =0; i < arr1.length; i++){
        mergedArr.push(func(arr1[i], arr2[i]));
    }
    return mergedArr;
}

//Part b
function merge2Single(element1, element2){
    return element1 + " " + element2;
}

//Part c
function merge2Object(element1, element2){
    obj = {
        "firstname" : element1,
        "lastname" : element2
    };
    return obj;
}