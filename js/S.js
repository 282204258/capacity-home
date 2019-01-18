let Sbox=document.getElementsByClassName('Sbox')[0];
let oSbox=Sbox.getElementsByTagName('div');
let oli=Sbox.getElementsByTagName('li');
let a=0;
for(let i=0;i<oli.length;i++){
    oli[i].index=i;
    oSbox[i].style.transition="2s";
    oli[i].onclick=function(){
        for(let j=0;j<oli.length;j++){
            oli[j].className="";
            oSbox[j].style.opacity="0";
        }
        oli[i].className="Soli";
       oSbox[this.index].style.opacity="1";
       a=this.index;
    }
}
let lunBo=setInterval(function(){
    a++;
    for(let i=0;i<oli.length;i++){
        oli[i].className="";
        oSbox[i].style.opacity="0";
    }
    oli[a].className="Soli";
    oSbox[a].style.opacity="1";
    if(a==3){
        a=-1;
    }
},2000);
Sbox.onmouseover=function(){
    clearInterval(lunBo);
}
Sbox.onmouseout=function(){
    lunBo=setInterval(function(){
        if(a==3){
            a=-1;
        }
        a++;
        for(let i=0;i<oli.length;i++){
            oli[i].className="";
            oSbox[i].style.opacity="0";
        }
        oli[a].className="Soli";
        oSbox[a].style.opacity="1";
    },2000);
}
let S1box=document.getElementsByClassName('S1box')[0];
let S1oul=S1box.getElementsByTagName('section')[0].getElementsByTagName('ul');
let S1oli=S1box.getElementsByTagName('footer')[0].getElementsByTagName('li');
let jsq=0;
for(let i=0;i<S1oli.length;i++){
    S1oli[i].onclick=function(){
        for(let j=0;j<S1oli.length;j++ ){
            S1oli[j].className="";
        }
        S1oli[i].className="Bk";
        S1oul[0].style.transition="2s";
        S1oul[0].style.left=-(i+1)*1280+"px";
    }
}
//商品展示轮播
let S3webox=document.getElementsByClassName('S3webox')[0];
let S3leftbox=S3webox.getElementsByTagName('div')[0];
let S3rightbox=S3webox.getElementsByTagName('div')[1];
let S3lbbox=document.getElementsByClassName('S3lbbox')[0];
let S3oul=S3lbbox.getElementsByTagName('ul')[0];
let S3oli=S3oul.getElementsByTagName('li');
let S3a=2;
let S3b=-427;
let kai=true;
S3leftbox.onclick=function(){
    if(kai){
        kai=false;
        S3a--;
        for(let i=0;i<S3oli.length;i++){
            S3oli[i].className="";
        }
        S3oul.style.transition="1s";
        S3oul.style.left=S3a*S3b+"px";
        S3oli[S3a+1].className="S3oli";
        setTimeout(()=>{
        if(S3a==0){
                S3a=5;
                S3oul.style.transition="none";
                S3oul.style.left=S3b*(S3a)+"px";
                S3oli[S3a+1].className="S3oli";
            } 
        },900);
        setTimeout(()=>{
             kai=true;
        },950);
       
    }
}
S3rightbox.onclick=function(){
    if(kai){
        kai=false;
        for(let i=0;i<S3oli.length;i++){
            S3oli[i].className="";
        }
        if(S3a==5){
            S3a=0;
            S3oul.style.transition="none";
            S3oul.style.left=S3b*(S3a)+"px";
            S3oli[S3a+1].className="S3oli";
        }
        setTimeout(()=>{
            S3a++;
            S3oul.style.transition="1s";
            S3oul.style.left=S3a*S3b+"px";
            S3oli[S3a+1].className="S3oli";
        },0);
        setTimeout(()=>{
            kai=true;
       },950);
   }
}
//商品展示轮播完
for(let i=0;i<S3oli.length;i++){
    S3oli[i].onclick=function(){
        console.log(this.getAttribute('data-id'))
        open("cpxq.html?"+3+"#"+this.getAttribute('data-id'),"_black")
    }
}
//视频播放窗口
let vdbox=document.getElementsByClassName('vdbox')[0];
let guanbi=document.getElementsByClassName('x')[0];
let S2box=document.getElementsByClassName('S2box')[0];
let kzbf=S2box.getElementsByTagName('div');
kzbf[2].onclick=function(){
    vdbox.style.display="block";
    guanbi.style.display="block";
}
guanbi.onclick=function(){
    vdbox.style.display="none";
    guanbi.style.display="none";
}
