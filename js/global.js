//加载函数
function addLoadEvent(func)
{
	var old=window.onload;
	if(typeof window.onload != 'function')
	window.onload=func;
	else{
		window.onload= function(){
		old();
		func();
		}
	}
}
//标签插入函数
function insertAfter(newElement,targetElement)
{
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement)
	parent.appendChild(newElement);
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//增加类函数
function addClass(element,value){
	
if(!element.className)
element.className = value;
else
{
newClassName = element.className;
newClassName+= " ";
newClassName+= value;
element.className=newClassName;	
}
}
//移动元素函数
function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	
	if(!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);

	if(elem.movement){
	clearTimeout(elem.movement);	
	}
	if(!elem.style.left)
	elem.style.left = "0px";
	if(!elem.style.top)
	elem.style.top = "40px";
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos==final_x&&ypos==final_y) return true;
	if(xpos < final_x){
		var dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos + dist;
	}
	if(xpos > final_x){
		var dist = Math.ceil((xpos-final_x)/10);
		xpos = xpos - dist;
	}
	if(ypos < final_y){
		var dist = Math.ceil((final_y-ypos)/10);
		ypos = ypos + dist;
	}
	if(ypos > final_y){
		var dist = Math.ceil((ypos-final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left=xpos + "px";
	elem.style.top=ypos + "px";
	var repeat ="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}
	
	
	

//show differences from pages
function highlightPage(){
if(!document.getElementById) return false;
if(!document.getElementsByTagName) return false;
var headers = document.getElementsByTagName('header');
if(headers.length==0)return false;
var navs = headers[0].getElementsByTagName('nav');
if(navs.length==0)return false;
var links=navs[0].getElementsByTagName("a");
var linkurl;
for(var i=0;i<links.length;i++)
{
	linkurl=links[i].getAttribute("href");
	if(window.location.href.indexOf(linkurl)!= -1){
		links[i].className = "here";
		var linkText=links[i].lastChild.nodeValue.toLowerCase();
		document.body.setAttribute("id",linkText);
		}
}

}

addLoadEvent(highlightPage);

//prepared slideshow
function preparedSlideshow(){
	if(!document.getElementById) return false;
if(!document.getElementsByTagName) return false;
var nav_bg = document.getElementById("nav-bg");
var slideshow = document.createElement("div");
slideshow.setAttribute("id","ps-container");
var frame=document.createElement("img");
frame.setAttribute("src","images/frame.gif");
frame.setAttribute("alt","");
frame.setAttribute("id","frame");
slideshow.appendChild(frame);
var preview =document.createElement("img");
preview.setAttribute("src","images/slideshow.jpg");
preview.setAttribute("id","ps-preview");
slideshow.appendChild(preview);
insertAfter(slideshow,nav_bg);
var button=document.getElementById("ps-button");
var links=button.getElementsByTagName('a');

for(var i=0;i<links.length;i++)
{


	links[i].onmouseover= function(){
		destination= this.getAttribute("rel");
		if(destination.indexOf("pic-1")!=-1)
		{
			moveElement("ps-preview",0,0,5);
             
		}
		if(destination.indexOf("pic-2")!=-1)
		{
			moveElement("ps-preview",-930,0,5);

}
		if(destination.indexOf("pic-3")!=-1){
			moveElement("ps-preview",-1860,0,5);
			
		}
		
		if(destination.indexOf("pic-4")!=-1)
		moveElement("ps-preview",-2790,0,5);
		
	}
}

}
addLoadEvent(preparedSlideshow);

