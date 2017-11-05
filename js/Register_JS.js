var formId="registerFormId";

var userNameString="userName";
var firstNameString="textbox";
var lastNameString="test";
var pwdString="password";
var teamNameString="teamName";
var projObjString="projectObjective";
var projDescString="description";
var teamLeadString="teamLeadName";
var univString = "";
var majorString = "";
var yearString = "";
var degreeString = "";
var phoneString = "";
var emailString = "";
var hwString="hardwareId";
var swString="softwareId";

var firstNameArr = new Array();
var lastNameArr = new Array();
var univArr = new Array();
var majorArr = new Array();
var yearArr = new Array();
var degreeArr = new Array();
var phoneArr = new Array();
var emailArr = new Array();
var userName = "vijay37";
var teamName = "vijay_hacking";
var userPassword= "vijay_pwd";
var projObj="To develop a hacking website";
var projDesc="NA";
var teamLead="";
var softwaresUsed=new Array();
var hardwaresUsed=new Array();
var nextPageUrl="login.html";
function register(){
    var formElements = document.forms[formId].getElementsByTagName("input");
    var element;
    var id;
    var value;
    for(var i=0;i<formElements.length;i++){
        element=formElements[i];
        id=element.id;
        // alert("ID : "+id);
        if(id.indexOf(userNameString)>=0) {
            userName = element.value;
        }
        else if(id.indexOf(firstNameString)>=0)
            firstNameArr[firstNameArr.length] = element.value;
        else if(id.indexOf(lastNameString)>=0)
            lastNameArr[lastNameArr.length] = element.value;
        else if(id.indexOf(pwdString)>=0)
            userPassword = element.value;
        else if(id.indexOf(teamNameString)>=0)
            teamName = element.value;
        else if(id.indexOf(projObjString)>=0)
            projObj = element.value;
        else if(id.indexOf(projDescString)>=0)
            projDesc = element.value;
        else if(id.indexOf(univString)>=0)
            univArr[univArr.length] = element.value;
        else if(id.indexOf(yearString)>=0)
            yearArr[yearArr.length] = element.value;
        else if(id.indexOf(majorString)>=0)
            majorArr[majorArr.length] = element.value;
        else if(id.indexOf(degreeString)>=0)
            degreeArr[degreeArr.length] = element.value;
        else if(id.indexOf(phoneString)>=0)
            phoneArr[phoneArr.length] = element.value;
        else if(id.indexOf(emailString)>=0)
            emailArr[emailArr.length] = element.value;
        else if(id.indexOf(teamLeadString)>=0)
            teamLead = element.value;
        if(id.indexOf(hwString)>=0)
            hardwaresUsed = element.value.split(",");
        if(id.indexOf(swString)>=0) {
            softwaresUsed = element.value.split(",");
        }
    }
    prepareRegisterJsonObject();
}

function prepareRegisterJsonObject(){
    var team = {};
    var teamMembersArr = new Array();
    var teamMembers = {};
    team.teamLeadName=teamLead;
    team.userName=userName;
    team.softwareOrProgrammingLanguageUsed=softwaresUsed;
    team.hardwareUsed=hardwaresUsed;
    team.isAdmin="false";
    team.teamName=teamName;
    team.projectObjective=projObj;
    team.description=projDesc;

    team.password=userPassword;
    team.teamLeadName=teamLead;
    for(var i=0;i<firstNameArr.length;i++){
        teamMembers.fName=firstNameArr[i];
        teamMembersArr[teamMembersArr.length]=teamMembers;
    }
    team.teamMembers=teamMembersArr;

    var jsonTeam = JSON.stringify(team);
    var url= "http://54.200.178.6:8889/team/update";
    callServerUsingPost(url,jsonTeam);
}
function processRegistration(response){
    alert(response.status);
    if(response.status==200){
        window.open(nextPageUrl,"_self");
    }
}