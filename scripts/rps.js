let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loss:0,
    Tie:0
   };
    updateScoreElement();
//    localStorage.setItem(JSON.stringify('score'));
let isauto=false;
let IntervalId;

const butt= document.querySelector('.js-autoplay');
const r= document.querySelector('.rock-button');
const p= document.querySelector('.paper-button');
const s= document.querySelector('.scissor-button');
// const r= document.querySelector('.rock-button');

document.addEventListener('keydown',function(event){
    if(event.key==='r'){
        usermove('Rock');
    }
    else if(event.key==='p'){
        usermove('Paper');
    }
    else if(event.key==='s'){
        usermove('Scissors');
    }
})
        r.addEventListener('click',()=>{
            usermove('Rock');
            });
        p.addEventListener('click',()=>{
            usermove('Paper');
            });
        s.addEventListener('click',()=>{
            usermove('Scissors');
            });


butt.addEventListener('click',()=>{
    automaticplay();
    if(isauto){
        butt.innerHTML='Stop Play';
    }
    else{
        butt.innerHTML='AutoPlay';
    }
});
 
function automaticplay(){
        if(!isauto){
        IntervalId=setInterval(()=>{
                    const player=computerchoice();
                    usermove(player);
            },1000);
       isauto=true;
    }
        else{
            clearInterval(IntervalId);
            isauto=false;
        }
}   
    function usermove(choice){
        let machinechoice=computerchoice();

        let result='';

        if(choice==='Scissors'){

        if(machinechoice==='Rock'){
                result='Lost';
        }
        else if(machinechoice==='Paper'){
                result='Win';
        }
        else{
        result ='Tie';
        }

        }
        else if(choice==='Rock'){

        if(machinechoice==='Rock'){
            result ='Tie';
        }
        else if(machinechoice==='Paper'){
            result='Lost';
        }
        else{
            result='Win';
        }  
    }    
        else{
        
            if(machinechoice==='Rock'){
                result='Win';
            }
            else if(machinechoice==='Paper'){
                result ='Tie';
            }
            else{
                result='Lost';
        }  
        }

        if(result==='Win'){
            score.wins++;
        }
        else if(result==='Lost'){
            score.loss++;
        }
        else{
            score.Tie++;
        }

        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=
        `You <img class="scissors-image"src="images/${choice}-emoji.png">
         <img class="scissors-image"src="images/${machinechoice}-emoji.png">
        Computer`
     }

    function computerchoice(){
         let choice;
         let num=Math.random();
         if(num>=0 && num<1/3){
                choice='Scissors';
         }
         else if(num>=1/3 && num<2/3){
                choice='Rock';
         }
         else{
            choice='Paper';
         } 
         return choice;
    }

    function updateScoreElement(){
        document.querySelector('.js-score')
  .innerHTML=`Win: ${score.wins}  Loss: ${score.loss}   Tie: ${score.Tie}`;


    }