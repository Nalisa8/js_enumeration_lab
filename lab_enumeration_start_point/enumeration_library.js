const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find=function(callback, array) {
  let found;
  this.array.forEach((item) => {

    if(callback(item) === true){
      found = item;
    }
  });
  return found;
}

EnumerationLibrary.prototype.map = function(callback, array) {
  newArray = []
  this.array.forEach((item) => {
    newArray.push(callback(item))
  })
  return newArray;
}

EnumerationLibrary.prototype.filter = function(callback, array) {
  newArray = []
  this.array.forEach((item) => {
    if (item === callback(item)){
      newArray.push(item)
    }
  })
  return newArray;
}

EnumerationLibrary.prototype.some = function(callback) {

}

EnumerationLibrary.prototype.every = function(callback) {

}


module.exports = EnumerationLibrary;
