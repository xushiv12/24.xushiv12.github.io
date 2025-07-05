/*
copy©:xushi®,
[保留所有权利]
你可以用这个文件来获取虚拟注册域名徐房系统里面的网页
*/
class XU{
	constructor(a){
		alert(a);
	}
};
!function(e,t){
	document.querySelectorAll('script[x="xu.js"]').forEach(code=>{
		let a=code.textContent;
		switch(true){
			case a.includes("XY\u0020"):{
				let b=a.match(/XY[\u0020](.*?)=/);
				let c=a.match(/=(.*?);/);
				alert(c[1]);
				break;
			}
		}
	});
}();
async function XfetchHTML(url){
    let x;
	var a=await fetch("https://domain.xushi-1009.cc/1",{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`asd=${url}`
	})
	x=await a.text();
	return x;
}
async function ToPostAndGetResult(url,id){
	var i=document.getElementById(id).value;
    var a=await fetch("https://domain.xushi-1009.cc/1",{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`asd=${url}`
	})
	var b=await a.text();
	let a1=document.createElement("span");
	a1.style="display:none;";
	a1.innerHTML=b;
	document.body.appendChild(a1);
	let accnd=document.querySelector('xushi[id="xu"]');
	let acc=accnd?accnd.textContent:"https://xuxu.xushi-1009.cc/r";
	var c=await fetch(acc,{
		method:"POST",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		},
		body:`y=${i}`
	})
	var d=await c.text();
	return d;
}
function Reglocaldomain(x){
	let sum;
	let a=x.localdomain;
	let b=x.html;
    localStorage.setItem(`${a}`,b);
}
function Getlocaldomain(dm){
	let a=localStorage.getItem(`${dm}`);
	let a1=document.createElement("iframe");
	a1.srcdoc=a;
	document.body.appendChild(a1);
}
function date计时器(数字){
	let xu=Number(数字)*1000;
	let 日期s=1;
	var xxxx=setInterval(()=>{
		let od=document.getElementById("p");
	    if(od){
		    od.remove();
	    }
	    let a1=document.createElement("p");
	    a1.id="p";
	    a1.innerHTML=日期s;
	    document.body.appendChild(a1);
		日期s++;
	},1000);
	setTimeout(()=>{
		clearInterval(xxxx);
        alert("时间到");
		setTimeout(()=>document.getElementById("p").remove(),1000)
	},xu);
}
function cpp解释器(pid){
	document.querySelectorAll("cpp").forEach(e=>{
		e.style="display:none";
		let a=e.textContent;
	    fetch("https://xuxu.xushi-1009.cc/3",{
		    method:"POST",
		    headers:{
			    "content-type":"application/x-www-form-urlencoded"
		    },
		    body:`x1=${a}`
	    })
	    .then(b=>b.text())
	    .then(c=>document.getElementById(pid).innerHTML="<b>这是运行结果(不能换行，即使你输入了\\n):</b><br>"+c)
	    .catch(d=>alert("发生错误:"+d));
	});
}
function 语言解释器(lang,id){
	document.querySelectorAll(lang).forEach(e=>{
		e.style="display:none";
		let a=e.textContent;
	    fetch("https://xuxu.xushi-1009.cc/"+lang,{
		    method:"POST",
		    headers:{
			    "content-type":"application/x-www-form-urlencoded"
		    },
		    body:`x1=${a}`
	    })
	    .then(b=>b.text())
	    .then(c=>document.getElementById(id).innerHTML="<b>这是运行结果(不能换行，即使你输入了\\n):</b><br>"+c)
	    .catch(d=>alert("发生错误:"+d));
	});
}
function xushi(){
	document.querySelectorAll("xushi").forEach(e=>{
		e.style.display="none";
		let a=e.textContent.trim();
		if(a.startsWith("<@")&&a.endsWith("\/>")){
		   let b=a.match(/<@(.*?)\/>/);
		   if(b===null){
			   alert("null");
		   }else{
			   let b1=document.createElement("p");
		       b1.innerHTML=b[1];
		       b1.style.color="purple";
		       document.body.appendChild(b1);
		   }
		}else if(a.includes(":")){
			let c=a.split(":")[0];
			let c1=a.split(":")[1];
			let c2=document.createElement(c);
		    c2.innerHTML=c1;
		    c2.style.color="lime";
		    document.body.appendChild(c2);
		}else{
			let d2=document.createElement("p");
		    d2.innerHTML="xushi语言里没有这个语句";
		    d2.style.color="red";
		    document.body.appendChild(d2);
		}
	});
}
let xxx,xxx1;
function xu_Css(){
	document.querySelectorAll('style[s="function"]').forEach(e=>{
		let a=e.textContent.trim();
		if(a.includes(":")&&a.endsWith(";")){
			xxx=a.match(/:(.*?);/);
			xxx1=a.match(/cf[\u0020](.*?):/);
		}else{
			alert("不合法语句");
		}
	});
	document.querySelectorAll('style[s="use"]').forEach(e=>{
		let a=e.textContent.trim();
		let a1=e.textContent.trim();
		let a2=xxx1[1]+"()";
		if(a1.includes(a2)){
			let a3=a.replaceAll(a2,xxx[1]);
			e.textContent=a3;
		}
	});
}
