var noOfButtons = document.querySelectorAll('.drum').length;


for(var i = 0;i<noOfButtons;i++){

    document.querySelectorAll('button')[i].addEventListener("click",function () {
        var inside = this.innerHTML;
        Keyboard(inside);
       buttonAnimation(inside);
        
    });

    

}
document.addEventListener("keypress",function (event) {
    Keyboard(event.key);
    buttonAnimation(event.key);
});
// document.addEventListener("keypress",function(event){
//     console.log(event.key);
// });
function Keyboard(key1){
    
    switch (key1) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
             var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
            break;  

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;  
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;   
        default:
            break;
    }

}
function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
    

}








