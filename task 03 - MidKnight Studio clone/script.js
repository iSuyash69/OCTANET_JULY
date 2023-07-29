//code for loader
window.addEventListener("load",function(){
    var loader=document.querySelector(".loader");
    loader.style.display="none";
})
//code for nav menu toggle
document.querySelector(".nav_items div").addEventListener("click",function(){
    document.querySelector(".menu_wrap").classList.toggle("menu_wrap_toogle");
});
//code for navigation bar color
window.addEventListener("scroll",function(){
    var nav=document.querySelector("nav");
    if(window.scrollY>40){
        nav.style.backgroundColor="black";
    }
    else{
        nav.style.backgroundColor="transparent";
    }
}); 
function mouseClick(){   
    let buttons=document.querySelectorAll("button").length; 
    for(let i=0;i<=buttons;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(event){
            let currentButton=document.querySelectorAll("button")[i].innerHTML;
            let displaycurrentButton=document.querySelector("input").innerHTML;
            let finalDisplayValue=document.querySelector("input").value;
            if(event.target.innerHTML=='='){
                document.querySelector("input").value=eval(finalDisplayValue);  
            }
            else if(event.target.innerHTML=='AC'){
                document.querySelector("input").value='';
            }
            else if(event.target.innerHTML=='DE'){
                document.querySelector("input").value=finalDisplayValue.toString().slice(0,-1);
            }
            else{
            displaycurrentButton=currentButton;
            document.querySelector("input").value+=displaycurrentButton;
            }
        });
    }
}
//code for title animation 
document.addEventListener("DOMContentLoaded",function(){
    var title=document.querySelector(".title h1");
    function showTitle(){
        // title.classList.remove("hidden");
        title.style.visibility="visible";
        title.classList.add("visible");
    }
    setTimeout(showTitle,1500);
});
// code for slider
let scroll=document.querySelector(".gallery");
let backbtn=document.querySelector(".backbtn");
let nextbtn=document.querySelector(".nextbtn");
scroll.style.scrollBehavior="smooth";

nextbtn.addEventListener("click",function(){
    scroll.scrollLeft+=2000;
});
backbtn.addEventListener("click",function(){
    scroll.scrollLeft-=2000;
});

function error(){

    let btn=document.querySelector(".btn");
    let error=document.createElement("div");

    document.querySelector(".btn button").addEventListener("click",function(){

        let textInput=document.querySelectorAll("input")[0].value;
        let passwordInput=document.querySelectorAll("input")[1].value;

        if(textInput==''){
            error.innerHTML="Please Enter your Username";
            btn.appendChild(error);
            document.querySelector(".btn div").classList.add("error");
            document.querySelector(".sub-container").classList.add("shake");
            setTimeout(function(){
                document.querySelector(".sub-container").classList.remove("shake");
            },500);
        }
        else if(passwordInput==''){
            error.innerHTML="Please Enter your Password";
            btn.appendChild(error);
            document.querySelector(".btn div").classList.add("error");
            document.querySelector(".sub-container").classList.add("shake");
            setTimeout(function(){
                document.querySelector(".sub-container").classList.remove("shake");
            }, 500);
        }
        else{
            error.innerHTML='';
            btn.appendChild(error);
            document.querySelector(".btn div").classList.remove("error");
        }
    });
}

function mouseClick(){   
    let buttons=document.querySelectorAll("button").length; 
    for(let i=0;i<=buttons;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(event){
            let currentButton=document.querySelectorAll("button")[i].innerHTML;
            let displaycurrentButton=document.querySelector("input").innerHTML;
            let finalDisplayValue=document.querySelector("input").value;
            if(event.target.innerHTML=='='){
                document.querySelector("input").value=eval(finalDisplayValue);  
            }
            else if(event.target.innerHTML=='AC'){
                document.querySelector("input").value='';
            }
            else if(event.target.innerHTML=='DE'){
                document.querySelector("input").value=finalDisplayValue.toString().slice(0,-1);
            }
            else{
            displaycurrentButton=currentButton;
            document.querySelector("input").value+=displaycurrentButton;
            }
        });
    }
}





