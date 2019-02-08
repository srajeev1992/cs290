function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

//pass in TRUE to get all attributes, FALSE to get all but car type.
Automobile.prototype.logMe = function(bool){
    if (bool){
    console.log("     " + this.year + " " + this.make + " " + this.model + " " + this.type);
    }
    else{
    console.log("     " + this.year + " " + this.make + " " + this.model);
    }
}

//this function will print out the whole automobile list.
printList = function(autos, bool) {
    for (var i in autos){
        autos[i].logMe(bool);
    }
}

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
         var placeholder;
         for(i=0;i<array.length;++i){
            for (j=0;j<array.length;++j){
                if (comparator(array[j],array[i])){
                   placeholder = array[i];
                   array[i] = array[j];
                   array[j] = placeholder;
               }            
            }
         }
         return array;
}

//Comparison for Model
function exComparator(modela, modelb){
    var a = modela.model.charAt(0).toUpperCase();
    var b = modelb.model.charAt(0).toUpperCase();
    if (a > b){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year < auto2.year){
       return true;
       }
    else{
       return false;
       }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(makea, makeb){
    var a = makea.make.charAt(0).toUpperCase();
    var b = makeb.make.charAt(0).toUpperCase();
    if (a > b){
        return true;
    } else {
        return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(typea, typeb){
    var a = typea.type.charAt(0).toUpperCase();
    var b = typeb.type.charAt(0).toUpperCase();
    if (a > b){
        return true;
    } else {
        return false;
    }
}

console.log("*****");
console.log("The car sorted by year are:");
 console.log("   year make model of the 'greatest' car:");
   printList(sortArr(yearComparator,automobiles),false);
 console.log("   year make model of the 'least' car");
console.log(" ");
console.log("The car sorted by make are:");
 console.log("   year make model of the 'greatest' car");
   printList(sortArr(makeComparator,automobiles),false);
 console.log("   year make model of the 'least' car");
console.log(" ");
console.log("The car sorted by model are:");
 console.log("   year make model of the 'greatest' car");
   printList(sortArr(exComparator,automobiles),false);
 console.log("   year make model of the 'least' car");
console.log(" ");
console.log("The car sorted by type are:");
 console.log("   year make model type of the 'greatest' car");
   printList(sortArr(typeComparator,automobiles),true);
 console.log("   year make model type of the 'least' car");
console.log(" ");
console.log("*****");

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.
 *
 * Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.
 *
 * *****
 * The cars sorted by year are:
 * (year make model of the 'greatest' car)
 * (...)
 * (year make model of the 'least' car)
 *
 * The cars sorted by make are:
 * (year make model of the 'greatest' car)
 * (...)
 * (year make model of the 'least' car)
 *
 * The cars sorted by type are:
 * (year make model type of the 'greatest' car)
 * (...)
 * (year make model type of the 'least' car)
 * *****
 *
 * As an example of the content in the parenthesis:
 * 1990 Ford F-150 */
