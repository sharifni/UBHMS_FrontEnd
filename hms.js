<<<<<<< HEAD
// window.onload=function () {
// 	alert("HELLLO");
// 	// body...
// }
// function checkLogin() {
// 	//alert('HEEELLLOO');
// var name = document.getElementById("userName").value;
// var password = document.getElementById("userPassword").value;
// // var userJson = {
// // 	userName:name;
// // 	userPassword:password;
// // }
//
// if (!name) {
//         $("#nullUserName").css("display", "block");
//     }
//     else if(!password){
//     	        $("#nullPassword").css("display", "block");
//     }
//     // else if(!IsEmail(emailBox.val()))
//     // {
//     //     emailBox.prev().text("Invalid E-mail").show();
//     // }
//     $("input#userName").focus(function(){
//         $(this).prev("#nullUserName").hide();
//     });
//     $("input#userPassword").focus(function(){
//         $(this).prev("#nullPassword").hide();
//     });
// $.ajax
//   ({
//     type: "GET",
//     url: "http://54.200.178.6:8889/login?userName="+name+"&password="+password,
//     dataType: 'json',
//     // userName:name,
//     // password:password,
//     //async: false,
//    //data: {userJson},
//     // data: '{"username": "' + username + '", "password" : "' + password + '"}',
//     success: function (response){
//     	//var abc = JSON.stringify(response);
//     	window.location.href = "team_registration.html";
//     	console.log("Resopnse"+status);
//     //alert('Logged In'+response);
//     },
//
//     error: function(xhr, status, error){
//     	console.log(error);
//     	$('.loginError').show();
//     return false;
//     }
// });
// }
// localStorage.setItem('session', JSON.stringify(a));
=======
>>>>>>> v1


    var counter = 1;
function addMember(){

      if(counter>5){
            alert("Only 5 members are allowed to Register");
            return false;
    }

    var newTextBoxDiv = $(document.createElement('div'))
         .attr("id", 'TextBoxDiv' + counter);

    newTextBoxDiv.after().html('<label>Member '+ counter + ' : </label>' +
          '<input type="text" name="textbox' + counter +
          '" id="textbox' + counter + '" value="" >');

    newTextBoxDiv.appendTo("#TextBoxesGroup");


    counter++;
     

    

}

function removeMember(){

    if(counter==1){
          alert("Atleast One Member Required");
          return false;
       }

    counter--;

        $("#TextBoxDiv" + counter).remove();

    }

