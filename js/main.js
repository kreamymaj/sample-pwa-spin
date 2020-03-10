onload=main;
var vel,theta,t,spinner,speedometer;
function main()
{
    vel=0;
    theta=0;
    spinner=document.getElementById("spinner");
    speedometer=document.getElementById("speedometer");
}
function accelerate()
{
    navigator.vibrate(50);
    vel+=400;
    if(vel==400)
    {
        t=setInterval(spin,10);
    }
}
function spin()
{
    theta+=vel*0.01;
    theta=theta%360; spinner.style.transform="rotate("+theta+"deg)";
    speedometer.innerHTML="Angular Velocity : "+Math.floor(vel*100)/(200*360)+" rot/sec";
    if(vel<=0)
    {
        clearInterval(t);
        return;
    }
    vel=vel-vel*vel/500000;
}
function stopper()
{
    navigator.vibrate(100);
    clearInterval(t);
    vel=0;
}