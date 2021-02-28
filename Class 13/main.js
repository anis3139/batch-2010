var btn= $('#btn')
var para=$('#para')
var btn2=$('#btn2')



btn.click(function(){
    // para.css('color', 'red')
    // para.html('I am change')
    // para.fadeToggle(3000)

    para.prepend("Some appended text.");
})

btn2.click(function () {
    para.fadeIn(3000)
})




$('#formId').submit(function(event) {
        event.preventDefault() 
       var name=  $('#uName').val();
       var pass= $('#password').val();

       var passInput= $('#password')
       var Uname= $('#uName')
    var alertPass=$('#alert')
       if( pass==''){
        passInput.attr('placeholder', 
           'Password is empty').focus(); 
           alertPass.html('Password is empty')
        //    alertPass.css('color', 'red')

       }else if(name==''){
        Uname.attr('placeholder', 
        'User Name is empty').focus(); 
       }else{
            if(name=="admin" && pass==12345){
                alert("login success")
            }else{
                alert("User Name or Password is wrong")
            }
       }
       
    })