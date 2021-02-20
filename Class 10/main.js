
/*
string 
number
booliun True/False
undefined
null

operator: + - * / =
  assign oparator:  = < > ++ -- == === !


*/

var name = "Rahim" ;

console.log('He is '+ name);
console.log(name+' is 29 yesr Old');
console.log(name+' lives in Dhaka');
//variable
var x=10;
var y=101;
var result=x+y
console.log(x===y);


// array

var arrayValue=[10,20,50,40, 'Anis']

console.log(arrayValue[4]);

//condition statement
var x=120;
var y=120;
var result=x+y
if(x!=y){
    console.log(result);
}else if(x<y){
    console.log("Y is large");
}else if(x>y){
    console.log("x is large");
}else{
   console.log('Resut is wrong'); 
}




// Loop
// initiaization condition inreement/decriment

var i='';

for(i=0; i<100; i++){
    console.log(i+" I am Anis");
}

//Function
var pixel= function(a, b){
    var result=a*b;
    return result;
}

var m=pixel(10,50)
var n=pixel(50,20)

console.log(m);
console.log(n);

//Object
var man={
    name:"anis",
    age:29,
    district:"comilla"
}

var weman={
    name:"Shamima",
    age:20,
    district:"Dhaka",
    head:function() {
        return "I am From Object and Function"
    }
}
console.log(man.name);
console.log(weman.head());