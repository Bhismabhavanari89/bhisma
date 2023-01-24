function myfun(){
    var maths = fim.ma.value;
    var eng = fim.en.value;
    var com = fim.co.value;
    fim.to.value = parseInt(maths)+parseInt(eng)+parseInt(com);
    fim.mar.value = (parseInt(fim.to.value)/300)*100;
    if(parseInt(maths)>parseInt(eng) && parseInt(maths)>parseInt(com))	{
        fim.max.value = parseInt(maths);
    }
    else if(parseInt(eng)>parseInt(com)){
        fim.max.value = parseInt(eng);
    }
    else{
        fim.max.value = parseInt(com);
    }
    if(parseInt(maths)<parseInt(eng) && parseInt(maths)<parseInt(com))	{
        fim.min.value = parseInt(maths);
    }
    else if(parseInt(eng)<parseInt(com)){
        fim.min.value = parseInt(eng);
    }
    else{
        fim.min.value = parseInt(com);
    }
}