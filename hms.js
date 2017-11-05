// window.onload=function () {
// 	alert("HELLLO");
// 	// body...
// }
function checkLogin() {
	//alert('HEEELLLOO');
var name = document.getElementById("userName").value;
var password = document.getElementById("userPassword").value;
// var userJson = {
// 	userName:name;
// 	userPassword:password;
// }

if (!name) {
        $("#nullUserName").css("display", "block");
    }
    else if(!password){
    	        $("#nullPassword").css("display", "block");
    }
    // else if(!IsEmail(emailBox.val()))
    // {
    //     emailBox.prev().text("Invalid E-mail").show();
    // }
    $("input#userName").focus(function(){
        $(this).prev("#nullUserName").hide();
    }); 
    $("input#userPassword").focus(function(){
        $(this).prev("#nullPassword").hide();
    });
$.ajax
  ({
    type: "GET",
    url: "http://54.200.178.6:8889/login?userName="+name+"&password="+password,
    dataType: 'json',
    // userName:name,
    // password:password,
    //async: false,
   //data: {userJson},
    // data: '{"username": "' + username + '", "password" : "' + password + '"}',
    success: function (response){
    	//var abc = JSON.stringify(response);
    	window.location.href = "team_registration.html";	
    	console.log("Resopnse"+status);
    //alert('Logged In'+response); 
    }, 
    
    error: function(xhr, status, error){
    	console.log(error);
    	$('.loginError').show();
    return false;
    }
});
}
localStorage.setItem('session', JSON.stringify(a));

var a = [];
function addMember(){


  //  alert("YOOOOOOOO");
    var fName= $("#fName").val();
    var lName= $("#lName").val();
    var universityName= $("#universityName").val();
    var year= $("#year").val();
    var major= $("#major").val();
	var email= $("#email").val();
    
    var json = {fName:fName, lName:lName, universityName:universityName, year:year, major:major, email:email};
    var receiveddata = JSON.stringify(json);
    if(localStorage.getItem('members')){
    		a = localStorage.getItem('members');
    		a.push(receiveddata);
           // alert(a);
    }    
    else{
    	a=[json]
    }
    localStorage.setItem('members', a);

    

    // var array = jQuery("#memberForm").val().serializeArray();
    // var json = {};
    
    // jQuery.each(array, function() {
    //     json[this.name] = this.value || '';
    // });
    console.log(JSON.stringify(json));
    
   


    return json;
   
}


function teamUpdate(){

var memberData = localStorage.getItem('members');

 $.ajax
  ({
    type: "POST",
    url: "http://54.200.178.6:8889/team/update",
    dataType: 'json',
    data:memberData,
    // userName:name,
    // password:password,
    //async: false,
   //data: {userJson},
    // data: '{"username": "' + username + '", "password" : "' + password + '"}',
    success: function (response){
    	//var abc = JSON.stringify(response);
    	// window.location.href = "team_registration.html";	
    	// console.log("Resopnse"+status);
    alert('Logged In'); 
    }, 
    
    error: function(xhr, status, error){
    	console.log(error);
    	$('.loginError').show();
    return false;
    }
});

}