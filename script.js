//const userFunctions = (function(){
    const toggleBtn = document.querySelector("#toggle-btn");
    const wrapper = document.querySelector(".wrapper");

    let currentPhase = localStorage.getItem("toggle_phase");
    if(currentPhase == null || currentPhase == undefined){
        currentPhase = "off";
    }

    if(currentPhase == "on"){
        toggleBtn.style.right = "0";
        toggleBtn.style.left = "50%";

        //change the innerText
        toggleBtn.innerHTML = "&larr; Off";

        //change background color
        toggleBtn.style.backgroundColor = "red";
        wrapper.style.backgroundColor = "green";
        

        toggleBtn.setAttribute("onclick", "removeOffBtn()");

        // //Persistence
        // localStorage.setItem("toggle_phase", "on");


    }else{
        toggleBtn.style.right = "50%";
        toggleBtn.style.left = "0";

         //change the innerText
         toggleBtn.innerHTML = "On &rarr;";

         //change the background color
         toggleBtn.style.backgroundColor = "#000";
         wrapper.style.backgroundColor = "blue"

         toggleBtn.removeAttribute("onclick");
         toggleBtn.setAttribute("onclick", "addOnBtn()");

        //   //Persistence
        // localStorage.setItem("toggle_phase", "off");
    }

    toggleBtn.setAttribute("onclick", "addOnBtn()");


    function addOnBtn(){
        
        toggleBtn.style.right = "0";
        toggleBtn.style.left = "50%";

        //change the innerText
        toggleBtn.innerHTML = "&larr; Off";

        //change background color
        toggleBtn.style.backgroundColor = "red";
        wrapper.style.backgroundColor = "green";

        toggleBtn.setAttribute("onclick", "removeOffBtn()");

        //Persistence
        localStorage.setItem("toggle_phase", "on");
      
    }

    function removeOffBtn(){
        toggleBtn.style.right = "50%";
        toggleBtn.style.left = "0";

         //change the innerText
         toggleBtn.innerHTML = "On &rarr;";

         //change the background color
         toggleBtn.style.backgroundColor = "#000";
         wrapper.style.backgroundColor = "blue";

         toggleBtn.removeAttribute("onclick");
         toggleBtn.setAttribute("onclick", "addOnBtn()");

          //Persistence
        localStorage.setItem("toggle_phase", "off");
    }






//}());