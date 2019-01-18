setTimeout(()=>{
    let Holi=document.getElementsByClassName('Hbox')[0].getElementsByTagName('li');
    //获取地址的id
    let CoId=location.search.substring(location.search.indexOf('?')+1,);
    for(let i=1;i<Holi.length;i++){
        if(Holi[i].getAttribute('data-id')==CoId){
            for(let j=0;j<Holi.length;j++){
                Holi[j].className="";
            }
            Holi[i].className="Hli";
        }
    }
},100);
let S4box=document.getElementsByClassName('S4box')[0];
let odiv=S4box.getElementsByTagName('div');
let Youl=odiv[0].getElementsByTagName('ul')[0];
let Loli=odiv[1].getElementsByTagName('li');
let S4abox=odiv[0].getElementsByTagName('aside');
let wy=1280;
let olubo=0;
for(let i=0;i<Loli.length;i++){
    Youl.style.transition="1s";
    Loli[i].onmouseover=function(){
        olubo=i;
        for(let j=0;j<Loli.length;j++){
            Loli[j].className="";
        }
        Loli[olubo].className="oli";
        Youl.style.left=-(olubo+1)*wy+"px";
        clearInterval(jsq);
    }
    Loli[i].onmouseout=function(){
        jsq=setInterval(()=>{
            olubo++;
            for(let j=0;j<Loli.length;j++){
                Loli[j].className="";
            }
            if(olubo>14){
                Youl.style.transition="none";
                olubo=0;
                Youl.style.left=-(olubo)*wy+"px";
            }
            setTimeout(()=>{
                Youl.style.transition="1s";
                Loli[olubo].className="oli";
                Youl.style.left=-(olubo+1)*wy+"px"; 
            },0);
            
        },2000);
    }
}
S4abox[0].onclick=function(){
    olubo--;
    for(let j=0;j<Loli.length;j++){
        Loli[j].className="";
    }
    if(olubo<0){
        Youl.style.transition="none";
        olubo=14;
        Youl.style.left=-(olubo+2)*wy+"px";
    }
    setTimeout(()=>{
        Youl.style.transition="1s";
        Loli[olubo].className="oli";
        Youl.style.left=-(olubo+1)*wy+"px"; 
    },0);
}
S4abox[1].onclick=function(){
    olubo++;
    for(let j=0;j<Loli.length;j++){
        Loli[j].className="";
    }
    if(olubo>14){
        Youl.style.transition="none";
        olubo=0;
        Youl.style.left=-(olubo)*wy+"px";
    }
    setTimeout(()=>{
        Youl.style.transition="1s";
        Loli[olubo].className="oli";
        Youl.style.left=-(olubo+1)*wy+"px"; 
    },0);
}
var jsq=setInterval(()=>{
    olubo++;
    for(let j=0;j<Loli.length;j++){
        Loli[j].className="";
    }
    if(olubo>14){
        Youl.style.transition="none";
        olubo=0;
        Youl.style.left=-(olubo)*wy+"px";
    }
    setTimeout(()=>{
        Youl.style.transition="1s";
        Loli[olubo].className="oli";
        Youl.style.left=-(olubo+1)*wy+"px"; 
    },0);
    
},2000);
Youl.onmouseover=function(){
    clearInterval(jsq);
}
Youl.onmouseout=function(){
    jsq=setInterval(()=>{
        olubo++;
        for(let j=0;j<Loli.length;j++){
            Loli[j].className="";
        }
        if(olubo>14){
            Youl.style.transition="none";
            olubo=0;
            Youl.style.left=-(olubo)*wy+"px";
        }
        setTimeout(()=>{
            Youl.style.transition="1s";
            Loli[olubo].className="oli";
            Youl.style.left=-(olubo+1)*wy+"px"; 
        },0);
        
    },2000);  
}
S4abox[0].onmouseover=function(){
    clearInterval(jsq);
}
S4abox[0].onmouseout=function(){
    jsq=setInterval(()=>{
        olubo++;
        for(let j=0;j<Loli.length;j++){
            Loli[j].className="";
        }
        if(olubo>14){
            Youl.style.transition="none";
            olubo=0;
            Youl.style.left=-(olubo)*wy+"px";
        }
        setTimeout(()=>{
            Youl.style.transition="1s";
            Loli[olubo].className="oli";
            Youl.style.left=-(olubo+1)*wy+"px"; 
        },0);
        
    },2000);  
}
S4abox[1].onmouseover=function(){
    clearInterval(jsq);
}
S4abox[1].onmouseout=function(){
    jsq=setInterval(()=>{
        olubo++;
        for(let j=0;j<Loli.length;j++){
            Loli[j].className="";
        }
        if(olubo>14){
            Youl.style.transition="none";
            olubo=0;
            Youl.style.left=-(olubo)*wy+"px";
        }
        setTimeout(()=>{
            Youl.style.transition="1s";
            Loli[olubo].className="oli";
            Youl.style.left=-(olubo+1)*wy+"px"; 
        },0);
        
    },2000);  
}
