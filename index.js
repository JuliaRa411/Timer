const audio = document.querySelector("#audio")
 
const button = document.querySelector("#startBtn");
button.addEventListener("click", function() {
    timer();
})


function timer(){
const timer = Number(document.querySelector("#min").value);
let amountTime = (timer*60) + Number(document.querySelector("#sec").value);
 
function calculateTime(){
    const countdown=document.querySelector("#countdown");

    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
  
    if (seconds<10) {
        seconds = "0"+ seconds;
    }
      
    else{
        seconds = seconds
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    

    if (amountTime<0) {
            stopTimer();
        amountTime=0;
      
    }
 
    function stopTimer(){
        clearInterval(timerId);

        if (minutes === 0|| seconds === 0)  {
         
             Swal.fire({
                text: 'Time is up!', 
                imageUrl: 'https://images.unsplash.com/photo-1609517269751-3c8de889ce97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',   
              
                imageWidth: 300,
                imageHeight: 400,
                  
              
              })
          

               
          
    audio.play();   
 
        
     
       
        }

}
}
   
    
 


let timerId = setInterval(calculateTime,1000);

}

// Animation//

gsap.to("h1",{x:550,
 duration:3,
   
  
}
) 