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
let S3box=document.getElementsByClassName('S3box')[0];
let ospan=S3box.getElementsByTagName('span');
console.log(ospan)
let a=0;
let b=0;
let c=0;
 let os1=setInterval(()=>{
    a++;
    ospan[0].innerHTML=a+"+";
    if(a==50){
        a=0;
        clearInterval(os1);
    }
},10)
let os2=setInterval(()=>{
    b++;
    ospan[1].innerHTML=b+"+";
    if(b==100){
        b=0;
        clearInterval(os2);
    }
},10)
let d=2;
let os3=setInterval(()=>{
    d+=100;
    c+=d;
    if(c>=1700000){
        c=1700000;
        clearInterval(os3);
    }
    ospan[2].innerHTML=parseInt(c).toLocaleString()+"+";
},8)