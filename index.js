var clicks=0;

function dark_mode(){
clicks+=1; 
console.log(clicks);
if(clicks%2!==0){
    
var right=document.getElementById("right");
var sidebar=document.getElementById("sidebar");
var header=document.getElementById("header");
var announcements=document.getElementById("announcements");
var trending=document.getElementById("trending");
var searchbar=document.getElementById("searchbar");
var dashboard_icon=document.getElementById("dashboard-icon");
var git=document.getElementById("git");
var project=document.getElementsByClassName("project");
var buttons=document.getElementsByTagName("button");
var a=document.getElementsByTagName("a");
var text=document.getElementsByTagName("h3");
var icons=document.getElementsByClassName("material-symbols-outlined");
var profile=document.getElementsByClassName("profile");
var profpic=document.getElementById("ppic");
var dash=document.getElementsByClassName("left-list");



var sidebar_dark="background-color: #344949;";
var right_dark="background-color: #222222;";
var header_dark="background-color: #333333;";
var dashboardIcon_dark="filter: invert(90%);";
var git_dark="background-image: url(images/github-mark-white.png);";
var opacity="opacity:0.85;";
var project_dark="box-shadow: 0px 0px 40px -22px #636262;";
var trending_dark="background-color: #cf9636;";
var icons_dark="color: whitesmoke;";
var border="border-color: #cf9636;"
var dash_dark="border-bottom-color: #cf9636;";

sidebar.setAttribute('style', sidebar_dark+icons_dark);
right.setAttribute('style', right_dark);
header.setAttribute('style', header_dark);
searchbar.setAttribute('style', right_dark+icons_dark);
dashboard_icon.setAttribute('style', dashboardIcon_dark);
git.setAttribute('style', git_dark);
trending.setAttribute('style', trending_dark);
announcements.setAttribute('style', sidebar_dark);
profpic.setAttribute('style', opacity+border);
buttons[0].setAttribute('style', header_dark+icons_dark);


for(let i=0;i<project.length;i++){
    project[i].setAttribute('style', project_dark);
}

project[1].setAttribute('style', opacity);

for(let i=0;i<dash.length;i++){
    dash[i].setAttribute('style', dash_dark);
}

for(let i=0;i<profile.length;i++){
   profile[i].setAttribute('style', icons_dark);
}

for(let i=0;i<text.length;i++){
    text[i].setAttribute('style', icons_dark);

}

for(let i=1;i<buttons.length;i++){
buttons[i].setAttribute('style',trending_dark);
}

}

else{
    location.reload();
}
}