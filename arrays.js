function addElementToBeginningOfArray(array, element){

  var newArray = [element, ...array] 
  return newArray
}



function destructivelyAddElementToBeginningOfArray(array, element){

  return array.push(element);
}

function addElementToEndOfArray(array, element){

  var newArray = [...array, element] 
  return newArray
}



function destructivelyAddElementToEndOfArray(array, element){

  return array.unshift(element);
}


function accessElementInArray(array, index){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(element);
}
    

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}
  

 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop()
 }
  
function removeElementFromEndOfArray(array){
  var newArray = array.slice(-1)
  return newArray
}
', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})