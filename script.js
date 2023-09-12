setTimeout(() => {  
    document.querySelector(".text").textContent = "Have a nice day:)";
    document.querySelector(".text").style.color = "white"; 
    // setTimeout(()=>{
    //     document.querySelector(".text").style.color = "transparent"; 
    //     setTimeout(()=>{
    //         document.querySelector(".text").textContent = "Have a great day:)";
    //         document.querySelector(".text").style.color = "white"; 
            setTimeout(()=>{
                window.close('','_parent','');
            },2000)
    //     },1000)
    // },1000)
}, 4500);