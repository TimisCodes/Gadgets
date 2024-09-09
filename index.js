document.getElementById("headset").addEventListener("click", function(){

    var clickedHere = this.innerHTML;

    makeSound(clickedHere);
})

    function makeSound(clickedHere){

        var sound = new Audio("wizkidsong.mp3");
        sound.play();
       
    }