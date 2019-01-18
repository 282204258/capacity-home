let lunbo=document.getElementsByClassName('lunbo')[0];
let lunboTp=lunbo.getElementsByTagName('div');
let lunboQh=lunbo.getElementsByTagName('li');
let a=0;
let a1=setInterval(()=>{
    for(let j=0;j<lunboQh.length;j++){
        lunboTp[j].style.opacity="0";
        lunboQh[j].style.background="gray";
    }
    lunboTp[a].style.opacity="1";
    lunboQh[a].style.background="#37A990";
    a++;
    if(a==2){
        a=0;
    }
},2000);
for(let i=0;i<lunboQh.length;i++){
    lunboTp[i].style.transition="1s";
    lunboQh[i].onmouseover=function(){
        clearInterval(a1);
        for(let j=0;j<lunboQh.length;j++){
            lunboTp[j].style.opacity="0";
            lunboQh[j].style.background="gray";
        }
        lunboTp[i].style.opacity="1";
        lunboQh[i].style.background="#37A990";
    }
    lunboQh[i].onmouseout=function(){
        a1=setInterval(()=>{
            for(let j=0;j<lunboQh.length;j++){
                lunboTp[j].style.opacity="0";
                lunboQh[j].style.background="gray";
            }
            lunboTp[a].style.opacity="1";
            lunboQh[a].style.background="#37A990";
            a++;
            if(a==2){
                a=0;
            }
        },2000);
    }
    lunboTp[i].onmouseover=function(){
        clearInterval(a1);
    }
    lunboTp[i].onmouseout=function(){
        a1=setInterval(()=>{
            for(let j=0;j<lunboQh.length;j++){
                lunboTp[j].style.opacity="0";
                lunboQh[j].style.background="gray";
            }
            lunboTp[a].style.opacity="1";
            lunboQh[a].style.background="#37A990";
            a++;
            if(a==2){
                a=0;
            }
        },2000);
    }
}
//引入产品结构生成数据
let ztbox=document.getElementsByClassName('ztbox')[0];
for(let i=0;i<json.length;i++){
    ztbox.innerHTML+=`
    <section class="zNbox" data-id="${json[i].id}" name="${json[i].id}">
        <div>
            <p id="${json[i].id}">${json[i].name}</p>
            <p></p>
        </div>
        <div class="zN_zbox">
            <ul>
            </ul>
        </div>
    </section>
    `;
    let oul=document.getElementsByClassName('zN_zbox')[i].getElementsByTagName('ul')[0];
    for(let j=0;j<json[i].img.length;j++){
        oul.innerHTML+=`
        <li data-id="${json[i].img[j].id}">
            <img src="${json[i].img[j].url}">
            <p>${json[i].img[j].text}</p>
        </li>
        `
    }
}
//跳转至指定位置
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
    if(document.documentElement.scrollTop>0){
        document.documentElement.scrollTop-=100;
    }
    if(document.documentElement.scrollTop<0){
        document.documentElement.scrollTop=0;
    }
},0);
ztbox.addEventListener("click",(e)=>{
    console.log(e.target.parentNode.getAttribute('data-id'))
    let xQid=e.target.parentNode.getAttribute('data-id');
    open("xiangqing.html?"+xQid,"_black");
});
