var container = document.getElementById('container');
//获得箭头
var arrowRight=document.getElementById('right');
var left=document.getElementById("list").style.left;
var index=1;
var timer
//console.log(left);
var arrowLeft=document.getElementById('left');
arrowRight.onclick=function(){
	document.getElementById("list").style.left=parseInt(document.getElementById("list").style.left)-600+'px';
	//console.log(document.getElementById("list").style.left)
	if(parseInt(document.getElementById("list").style.left)==-3600){
		document.getElementById("list").style.left=-600+'px'
	}
	index=Math.abs(parseInt(document.getElementById("list").style.left))/600
	if(index>5)
		{index=1}
	showcir(index)
}

arrowLeft.onclick=function (){
	document.getElementById("list").style.left=parseInt(document.getElementById("list").style.left)+600+'px';
	//console.log(document.getElementById("list").style.left)
	if(parseInt(document.getElementById("list").style.left)==0)
	{
		document.getElementById("list").style.left=-3000+'px'
	}
	index=Math.abs(parseInt(document.getElementById("list").style.left))/600
	//console.log(index)
	showcir(index)
}
//小圆点播放
var span=document.getElementById("btns").getElementsByTagName('span');
for(var i=0;i<span.length;i++)
{   
	span[i].onclick=function(){
		var index=this.getAttribute('index')
		document.getElementById("list").style.left=-600*index+'px'
		showcir(index)
	}
}
function　showcir(index)
{
	for(var i=0;i<span.length;i++)
	{
		if(span[i].className='on')
		{
			span[i].className=''
		}
		span[index-1].className='on'
	}
}
//设置定时器自动播放
function play(){
	timer=setTimeout(function(){
		arrowRight.onclick()
		play()
	},3000)
}
function stop(){
	console.log(timer)
	clearTimeout(timer);
}
container.onmouseover = stop;
container.onmouseout = play;
play()