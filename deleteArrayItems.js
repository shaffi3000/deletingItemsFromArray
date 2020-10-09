function createArray () {
    var userArray = []
    var counter = 0 
    while(counter < 5) {
      var itemIn = prompt("Please enter the next item")
      userArray.push(itemIn)
      counter ++
    }
    return userArray
  }
  
  function deleteItem(array1) {
    //.indexOf("string")
    var itemOff = prompt("What item do you want me to delete")
    var itemIndex = array1.indexOf(itemOff)
    array1.splice(itemIndex, 1)
  }
  
  var userArray = createArray()
  var deleteAgain = true
  
  while((userArray.length != 0) && (deleteAgain == true)){
    deleteA = prompt("Would you like to delete an item")
    if (deleteA.toLowerCase() == "yes" || "y") {
      deleteItem(userArray)
    } else if (deleteA.toLowerCase == "no" || "n") {
      deleteAgain = false
    } else {
      console.log("Please say yes or no")
    }
  
  }
  if (userArray.length === 0) {
    console.log("The array is empty, goodbye")
  } else {
    console.log("Good bye")
  }