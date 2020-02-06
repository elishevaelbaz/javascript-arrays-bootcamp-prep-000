function addElementToBeginningOfArray(array, element){

  var newArray = [element, ...array] 
  return newArray
}



function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){

  var newArray = [...array, element] 
  return newArray
}



function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
 return arrat
}


function accessElementInArray(array, index){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
    

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}
  

 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
 }
  
function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1)
  return newArray
}
