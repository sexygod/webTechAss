#Question 1
first_names = ["Preston", "Piper", "Nick", "Conrad", "Arthur"]
last_names = ["Garvey", "Wright", "Valentine", "Kellogg", "Maxson"]

#Part a
def mergeHandler(arr1, arr2, func):
    if(len(arr1) != len(arr1)):
        print("Arrays are not the same length")
        return

    mergedArr = []
    for i in range(0, len(arr1)):
        mergedArr.append(func(arr1[i], arr2[i]))

    return mergedArr

#Part b
def merge2Single(element1, element2):
    return element1 + " " + element2

#Part c
def merge2Object(element1, element2):
    obj = {
        "firstname" : element1,
        "lastname" : element2
    }
    return obj