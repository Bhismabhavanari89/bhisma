function fu(){
    var salary = fim.sa.value;
    selectElement = document.querySelector('#per')
    output = selectElement.value;
    if(output == 'a'){
        window.open("","excell.html","widht=500px,height=500px");
    }
    else if(output=='b'){
        fim.bo.value = 10;
        fim.to.value = parseInt(salary)+parseInt(salary)*10/100;
        window.open("","gallery.html", "widht=500px,height=500px");

    }
    else{
        fim.bo.value = 0;
        fim.to.value = parseInt(salary);
    }
}