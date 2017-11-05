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
function callServerUsingPost(url,data){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            readGetServerResponse(xhttp.responseText);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send(data);
}

function readGetServerResponse(response){
    var decResp=JSON.parse(response);
    var apiType=decResp.typeAPI;
    if(apiType == 1)
        processLoginResp(decResp);
    else if(apiType == 2.1)
        processRegistration(decResp);
}

