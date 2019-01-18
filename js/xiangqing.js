setTimeout(()=>{
    let Holi=document.getElementsByClassName('Hbox')[0].getElementsByTagName('li');
    for(let j=0;j<Holi.length;j++){
        Holi[j].className="";
    }
    Holi[3].className="Hli";
},100);
let olid=location.search.substring(location.search.indexOf('?')+1,);
let ztbox=document.getElementsByClassName('ztbox')[0];
// console.log(json)
for(let i=0;i<json.length;i++){
    for(let j=0;j<json[i].img.length;j++){
        // console.log(json[i].img[j].id)
        if(olid==json[i].img[j].id){
            console.log(json[i].img[j]);
            ztbox.innerHTML+=`
            <aside style="background-image:url('${json[i].img[j].xiangqing[0].zurl}')">
                <div class="abox">
                    <p>${json[i].img[j].xiangqing[0].name[0]}</p>
                    <p>${json[i].img[j].xiangqing[0].name[1]}</p>
                    <p>
                        ${json[i].img[j].xiangqing[0].name[2]}
                    </p>
                </div>
            </aside>
            <div class="pbox">
                <p>${json[i].img[j].text}</p>
                <p><span>_____</span></p>
                <p>
                    ${json[i].img[j].xiangqing[0].jieshao}
                </p>
            </div>
            <div class="pbox">
                <p>场景与特征</p>
                <p><span>_____</span></p>
                <div>
                    <img src="${json[i].img[j].xiangqing[0].cptz[1]}">
                </div>
                
            </div>
            <div class="pbox">
                <p>技术参数</p>
                <p><span>_____</span></p>
                <div>
                <img src="${json[i].img[j].xiangqing[0].jscs[1]}"> 
                </div>
                
            </div>
            <div class="pbox">
                <p>安装示意</p>
                <p><span>_____</span></p>
                <div>
                    <img src="${json[i].img[j].xiangqing[0].anzhuang[1]}">
                </div>
                
            </div>
            `;
        }
        
    }
}