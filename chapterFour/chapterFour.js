//Section 4.2

let add = function (a,b) {
    return a + b;
}

//Section 4.3
 let myObject = {
     value: 0;
     increment: function (inc) {
         this.value += typeof inc === "number" ? inc : 1;
     }
 };

 myObject.increment();
 document.writeln(myObject.value);

 myOject.increment(2);
 document.writeln(myObject.value);