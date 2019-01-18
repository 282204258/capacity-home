function ajax(method, url, data,fn) {  //封装为方法
    let htp = null;                    //定义个变量
    //判断兼容低版本ie
    try {
        htp = new XMLHttpRequest();
    }
    catch (err) {
        htp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //判断使用get方法传输还是用posh方法传输
    if (method == "get") {
        htp.open(method, url +"?"+ data);
        htp.send();
    } else {
        htp.open(method, url);
        htp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        htp.send(data);
    }
    //监听交互事件
    htp.onreadystatechange = function () {
        //判断传输是否成功
        if (htp.readyState == 4 && htp.status == 200) {
            fn(htp.responseText);
        }

    }
}