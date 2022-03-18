const time=document.getElementById('time');
const greeting = document.getElementById('greeting');
nam = document.getElementById('name');
focus = document.getElementById('focus');

function changeColor()
{
    // document.getElementById('greeting').style.color="white";
    // document.getElementById('name').style.color="white";
    // document.getElementById('focus').style.color="white";
    document.getElementById('task').style.color="white";
    // document.getElementById('focus2').style.color="white";
}
function changeColorn()
{
    document.getElementById('greeting').style.color="white";
    document.getElementById('time').style.color="white";
    document.getElementById('name').style.color="white";
    document.getElementById('focus').style.color="white";
    document.getElementById('focus1').style.color="white";
    document.getElementById('task').style.color="white";
    document.getElementById('focus2').style.color="white";
    document.getElementById('task').innerHTML="Your Completed Tasks";
}
function showTime(){
    let today= new Date();
    hour=today.getHours();
    min=today.getMinutes();
    sec=today.getSeconds();
    const ampm = hour >= 12?'PM': 'AM';
    if(hour>=12)
    {
        hour = hour%12;
    }
    if(sec<10)
    {
        sec='0' + sec;
    }
    if(min<10)
    {
        min='0' + min;
    }
    // if(hour<10)
    // {
    //     hour='0' + hour;
    // }
    time.innerHTML=`${hour}:${min}:${sec}`;
    setTimeout(showTime, 1000);
}

function greet()
{
    let today=new Date();
    hour=today.getHours();
    if(today.getHours()<12 )
    {
        document.getElementById('greeting').innerHTML="Good Morning";
        document.body.style.backgroundImage="url('im.jpg')";       
        changeColor();        
    }
    else if(today.getHours()<16 )
    {
        document.getElementById('greeting').innerHTML="Good Afternoon";
        document.body.style.backgroundImage="url('im.jpg')";       
        changeColor();
    }   
    else if(hour<20 )
    {     
        document.getElementById('greeting').innerHTML="Good Evening";
        document.body.style.backgroundImage="url('im.jpg')";       
        changeColor();
    }
    else
    {
        document.getElementById('greeting').innerHTML="Good Night";
        document.body.style.backgroundImage="url('n.jpg')";
        changeColorn();
    }
}
showTime();
greet();
