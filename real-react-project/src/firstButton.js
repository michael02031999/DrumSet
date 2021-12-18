import $ from 'jquery';


function FirstButton () {
    return (
        <>
            <div class ="firstButton">
                <div class= "circle">
                    <p>easy</p>
                </div>
            </div>
        </>
    )
}   

$(document).ready(function(){
    $(".circle").on("click",function() { 
        var audio = new Audio('https://www.myinstants.com/media/sounds/that_was_easy.mp3');
        audio.play();        
    });
});


  




export default FirstButton;