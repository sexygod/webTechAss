function loadList(){
    document.getElementById("nameList").innerHTML = (
        "First names { " + first_names + " } " + "<br>" +
        "Last names { " + last_names + " }"
    );
}

function printMerge2Single(){
    var arr = mergeHandler(first_names, last_names, merge2Single);
    for(var key in arr){
        document.getElementById("mergeSingle-col").innerHTML += ("[" + key + "] " + arr[key] + "<br>");
    }
}

function printMerge2Object(){
    var arr = mergeHandler(first_names, last_names, merge2Object);
    for(var key in arr){
        document.getElementById("mergeObject-col").innerHTML += (
            "[" + key + "] " + 
            "firstname: " + arr[key].firstname +
            ", lastname: " + arr[key].lastname + 
            "<br>"
        );
    }
}

function loadBody(){
    loadList();
    printMerge2Single();
    printMerge2Object();
}