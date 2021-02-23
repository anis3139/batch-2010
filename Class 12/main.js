// document.getElementById('testId').innerHTML="Hi I am From Script"
// var testClass= document.getElementsByClassName('testClass')
// var tag=document.getElementsByTagName('h1')
// tag[1].innerHTML="I am from tag"

// // var some=[1,2,1,2,5,45,5,4,4,4,4]
// // console.log(some.length);

// for (var i = 0; i < testClass.length; i++) {
//     testClass[i].innerHTML="I am from Class";
//     testClass[i].style.color="red"
//     testClass[i].style.backgroundColor="blue"
// }

// document.querySelector(".testClass").style.color="green"


var btn= document.getElementById('btn')
var para=document.getElementById('para')
btn.addEventListener('click', function() {
    para.classList.add("active");
})

var btn= document.getElementById('btn2')
var para=document.getElementById('para')
btn.addEventListener('click', function() {
    para.classList.remove("active");
})