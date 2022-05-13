
let btnBig = document.getElementById('sizeBig');
let btnSml = document.getElementById('sizeSmall');
let colorBtn =document.getElementById('colorBtn')
let dynText = document.getElementsByTagName("p");
let powBig = 16;

btnBig.onclick = function(){
   
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powBig+4)+"px";}
        powBig++;
}

btnSml.onclick = function(){
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.fontSize = (powBig-4)+"px";}
        powBig--;
}

colorBtn.onclick=function(){
    let colorvalue = document.getElementById('input').value;
    let dynText = document.getElementsByTagName("p");
    for(let i=0;i<dynText.length;i++){
        dynText[i].style.color = colorvalue;}
}

