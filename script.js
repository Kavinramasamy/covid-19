var divtag=document.createElement("div");
divtag.style.textAlign="center";
var inp=document.createElement("input");
inp.setAttribute("type","text");
inp.setAttribute("id","country");

var butt=document.createElement("button");
butt.setAttribute("type","button");
butt.setAttribute("btn","btn-primary");
butt.innerHTML="search";
butt.style.marginLeft="5px";
butt.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

divtag.append(inp,butt,active,death,recovered);
document.body.append(divtag);

async function foo(){
  let res=document.getElementById("country").value;
  console.log(res);
  let url=`https://api.covid19api.com/total/dayone/country/${res}`;
  let res1=await fetch(url);
  let res2=await res1.json();
  let index=res2.length-1;
  console.log(res2[index]);
  console.log(res2[index].active);
  console.log(res2[index].death);
  console.log(res2[index].recovered);
  active.innerHTML=`Total Active Cases:${res2[index].Active}`;
  death.innerHTML=`Total Deaths Cases:${res2[index].Deaths}`;
  recovered.innerHTML=`Total Recovered Cases:${res2[index].Recovered}`;
}