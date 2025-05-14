
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset-btn");
let newGameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turn0=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((game)=>{
    game.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            game.innerText="O";
        turn0=false;
        }
        else{
            game.innerText="X";
            turn0=true;
        }
        game.disabled=true;
        checkWinner();
    });
});
const showWinner=(winner)=>
{
   
msg.innerText=`congratulations,winner is ${winner}`;
msgContainer.classList.remove("hide");

}
const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        /*console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);*/
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
       if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val)
        {
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
       }
    }
}



