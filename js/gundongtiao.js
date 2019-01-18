//滚动条时间
setTimeout(function(){
    let otop=document.getElementsByClassName('miao')[0];
    let Hbox=document.getElementsByClassName('Hbox')[0];
    if(document.documentElement.scrollTop>50){
        Hbox.style.background="black";
        Hbox.style.color="gray";
        otop.style.display="block";
    }
    if(document.documentElement.scrollTop<=50){
        Hbox.style.background="#F7F6F1";
        Hbox.style.color="black";
        otop.style.display="none";
    }
    window.onscroll= function(){
        let t = document.documentElement.scrollTop||document.body.scrollTop;
        if(document.documentElement.scrollTop>50){
            Hbox.style.background="black";
            Hbox.style.color="gray";
            otop.style.display="block";
        }
        if(document.documentElement.scrollTop<=50){
            Hbox.style.background="#F7F6F1";
            Hbox.style.color="black";
            otop.style.display="none";
        }
    }
    otop.onclick=function(){
        let b=20;
        let a=setInterval(function(){
            document.documentElement.scrollTop-=b;
            b+=10;
            if( document.documentElement.scrollTop<=50){
            clearInterval(a);
            }
        },20); 
    }
},1000);
