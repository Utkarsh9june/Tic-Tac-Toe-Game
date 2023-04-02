const cellElements=document.querySelectorAll(".board .cell");

const player1=document.querySelector(".players .player1");
const player2=document.querySelector(".players .player2");
const result=document.querySelector(".result");
const result_text=document.querySelector(".result h1");
const restart_btn=document.querySelector(".result button");

const playerO="O";
const playerX="X";

const win_cond=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,5,8]];
let toggleturn=true;
cellElements.forEach(cell => {
    cell.onclick=()=>{
        let curplayer = toggleturn?playerO:playerX;
        cell.classList.add("disabled");

        addInCell(cell,curplayer);
        if(winnerCheck(curplayer)){
            result.classList.remove("inactive");
            result_text.innerHTML=curplayer+" Wins the game";
        }
        else if(isdraw()){
            result.classList.remove("inactive");
            result_text.innerHTML="Game Draw!";
        }
        else{
            swapPlayer();
        }
    }
});

function winnerCheck(curplayer){
    return win_cond.some(condition=>{
        return condition.every(index=>{
            return cellElements[index].classList.contains(curplayer);
        });
    });
}

function isdraw()
{
    return [...cellElements].every(cell=>{
        return cell.classList.contains(playerO)||cell.classList.contains(playerX);
    })
}

function addInCell(cell,curplayer)
{
    cell.innerHTML=curplayer;
    cell.classList.add(curplayer);
}

function swapPlayer(){
    toggleturn=!toggleturn;
    if(toggleturn)
    {
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

restart_btn.onclick=()=>{
    location.reload();
}