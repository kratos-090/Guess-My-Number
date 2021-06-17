'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Hello bro';

let temp=20;
let num=Math.trunc(Math.random()*20)+1;
let highscore=0;
console.log(highscore);
document.querySelector('.check').addEventListener(
'click',function()
{
    const x=Number(document.querySelector('.guess').value);
    // console.log(x);
    if(x===0)
    {
        document.querySelector('.message').textContent=`No Number Entered`;
    }
    if(x<num&&x>0)
    {
        document.querySelector('.message').textContent='Number is High from that you entered';
        document.querySelector('.score').textContent=temp;
        temp--;
    }
    else if(x>num&&x>0)
    {
        document.querySelector('.message').textContent='Number is low from that you entered';
        temp--;
        document.querySelector('.score').textContent=temp;
    }
    else if(x===num)
    {
        document.querySelector('.score').textContent=temp;
        document.querySelector('.message').textContent=`You win`;
        if(temp>highscore)
        {
            document.querySelector('.highscore').textContent=temp;
            highscore=temp;
        }
    
        document.querySelector('.number').style.width='30rem';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=num;
    }
    if(temp===0)
    {
        document.querySelector('.message').textContent=`You loose`;
        
        document.querySelector('.number').textContent=num;
    }
    // console.log(temp);
    
}
)
document.querySelector('.again').addEventListener(
    'click',function()
    {
        document.querySelector('.message').textContent=`Start guessing...`;
        document.querySelector('.guess').value=null;
        document.querySelector('.score').textContent='20';
        document.querySelector('.number').textContent='?';
        document.querySelector('.number').style.width='15 rem';
        document.querySelector('body').style.backgroundColor='#222';
        temp=20;

        num=Math.trunc(Math.random()*20)+1;



    }


)





// document.querySelector('.check').addEventListener(
// 'click',function()
// {
//     const x=Number(document.querySelector('.guess').value);
//     if(!x)
//     {
//         document.querySelector('.message').textContent='NO Number Entered';
//     }
//     var y=Number(document.querySelector('.score').textContent);
//     // console.log(y);

//     const rand=Math.floor(Math.random()*20)+1;
//     // console.log(rand);
    
//     if(x===rand)
//     {
//         console.log('You win');
//         document.querySelector('.highscore').textContent=y;
//         document.querySelector('.message').textContent='You win';
//         document.querySelector('.number').textContent=x;
//     }
//     else
//     {
//         y--;
//         document.querySelector('.score').textContent=y;
//     }
//     if(y===0)
//     {
//         document.querySelector('.message').textContent='You loose';
//     }
//     if()
// }


// )