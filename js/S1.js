let Hbox=document.getElementsByClassName('Hobox')[0];
Hbox.addEventListener('click',function(e){
    let DaId=e.target.getAttribute('data-id');
    if(DaId==1){
        open("index.html?"+DaId,"_self");
    }
    if(DaId==2){
        open("index.html?"+DaId,"_black");
    }
    if(DaId==3){
        open("cpxq.html?"+DaId,"_black");
    }
    if(DaId==4){
        open("index.html?"+DaId,"_black");
    }
    if(DaId==5){
        open("zsjm.html?"+DaId,"_black");
    }
    if(DaId==6){
        open("gywm.html?"+DaId,"_black");
    }
    if(DaId==7){
        open("ymzs.html?"+DaId,"_black");
    }
})