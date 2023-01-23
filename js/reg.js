function mynum(){
    var name = fim.nm.value;
    if(name==""){
        alert("Name required");
    }
}
function myemail(){
    var name = fim.em.value;
    var nam = fim.nm.value;
    if(name=="" && nam == ""){
        alert("Name and Email required");
    }
    else if(name==""){
        alert("Email required");
    }
}

function myall(){
    var name = fim.nm.value;
    var gender = document.getElementsByName('gender');
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked){
             if(i==0){
                score = "male";
             }
             if(i==1){
                score ="female";
             }
        }
    }
    var email = fim.em.value;
    selectElement = document.querySelector('#per')
    output = selectElement.value;
    var other = fim.ot.value;
    //alert(name);
    alert("Name: "+name+"\nGender:"+score+"\nEmail:"+email+"\nCourse Required:"+output+"\nOther Requirement: "+other);
}
