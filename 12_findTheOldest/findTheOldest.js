const findTheOldest = function(people) {
    return people.reduce((oldestPerson , currentPerson)=> {

            if( `yearOfDeath` in currentPerson)
            {
                
                return currentPerson.yearOfDeath - currentPerson.yearOfBirth > oldestPerson.age ?
                {name: currentPerson.name , age: currentPerson.yearOfDeath - currentPerson.yearOfBirth}
                : oldestPerson
                
               
            }
            else
            {
                currentPerson.yearOfDeath = new Date().getFullYear() 

                return currentPerson.yearOfDeath - currentPerson.yearOfBirth > oldestPerson.age ?
                {name: currentPerson.name , age: currentPerson.yearOfDeath - currentPerson.yearOfBirth}
                : oldestPerson
                

            }
          
    } , {name: '' , age:0})

};

// Do not edit below this line
module.exports = findTheOldest;
