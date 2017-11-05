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

