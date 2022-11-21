// Code your solution in this file!
//drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//function returnFirstTwoDrivers (drivers){ 
  // const returnFirstTwoDrivers = function(drivers){
//     [...drivers.slice([0][1])]
//     return returnFirstTwoDrivers 
//    }
        
//   }
    
const returnFirstTwoDrivers = function(drivers){
   return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
   return drivers.slice(-2)
}

 const selectingDrivers = [
   returnFirstTwoDrivers,
   returnLastTwoDrivers ]

function createFareMultiplier(integer){
    return function(fare){
      return integer*fare}

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func){
//   if(func=returnFirstTwoDrivers){return returnFirstTwoDrivers(arrayOfDrivers)}
//   else if(func=returnLastTwoDrivers){return returnLastTwoDrivers(arrayOfDrivers)}
           return func(arrayOfDrivers) }