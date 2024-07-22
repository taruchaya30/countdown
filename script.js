let startbtn=document.querySelector("#start");
let stopbtn=document.querySelector("#stop");
let resetbtn=document.querySelector("#reset");
const newdate=document.querySelector("#date");
const newtime=document.querySelector("#time");
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");


startbtn.addEventListener("click",() => {
  start();
})


function start(){
    const endtime=new Date(newdate.value +  " " + newtime.value);
    console.log(endtime);

    const interval=setInterval(() => starttimer(endtime),1000);
    stopbtn.addEventListener("click",()=>{
        clearInterval(interval);
        })

        resetbtn.addEventListener("click",()=>{
            resetvalue();
        })
}


function starttimer(endtime){
    const currtime=new Date();
    if(endtime>currtime){
        const timeleft=(endtime-currtime)/1000;
        console.log(timeleft)
        days.innerHTML= Math.floor(timeleft/(24*60*60));
        hours.innerHTML= Math.floor((timeleft/ (60*60) %24));
        minutes.innerHTML= Math.floor((timeleft/60)%60);
        seconds.innerHTML= Math.floor((timeleft%60));
    }
    else{
        days.innerHTML= 0;
        hours.innerHTML= 0;
        minutes.innerHTML= 0;
        seconds.innerHTML= 0;
    }
}

function resetvalue(){
    days.innerHTML=0;
    hours.innerHTML=0 ;
    minutes.innerHTML=0;
    seconds.innerHTML= 0;
}