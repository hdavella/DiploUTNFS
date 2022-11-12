function cambioColorBody(ids){
    
    //console.log(ids);

    switch(ids){
        case'box1':
        document.getElementsByTagName("BODY")[0].style.backgroundColor = document.getElementById("box1").style.backgroundColor;
        break;
        case'box2':
        document.getElementsByTagName("BODY")[0].style.backgroundColor = document.getElementById("box2").style.backgroundColor;
        break;
        case'box3':
        document.getElementsByTagName("BODY")[0].style.backgroundColor = document.getElementById("box3").style.backgroundColor;
        break;
    }
}