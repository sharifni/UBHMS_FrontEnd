function checkLogin(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("userPassword").value;
    console.log("Username : "+userName);
    console.log("Password : "+password);
    if(userName!="" && password !=""){
      var url="http://54.200.178.6:8889/login?userName="+userName+"&password="+password;
      callServerUsingGet(url);
    }
}

function callServerUsingGet(url){
    console.log("Server url : "+url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           readGetServerResponse(xhttp.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function readGetServerResponse(response){
    var decResp=JSON.parse(response);
    // alert(decResp.status);
    if(decResp.typeAPI == 1)
        processLoginResp(decResp);

}
function processLoginResp(response){
    if(response.status !=200){
        document.getElementById("loginErrMsgId").style.display="block";
    }
    else{
        if(response.isAdmin){

        }
        else{
            window.open("team_registration.html","_self");
        }
    }
}

