// Your code here

//moveDogerright()
//const dodger =document.getElementsById("dodger");
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
//dodger.style.bottom = "100px";
//dodger.style.left ="0px";
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  /*function moveDogderRight(){
    const rightNumber =dodger.style.right.replace("px","");
    const right =parseInt(rightNumber,10);

    if (right>0){
        dodger.style.right =`${right-1}px`;
    }
}
    document.addEventListener("keydown", function(e){
        if (e.key ==="ArrowRight"){moveDogderRight();
        }
    })*/
    
    
    function moveDodgerRight() {
      const currentLeft = parseFloat(dodger.style.left) || 0; // Get the current left position
      const newPosition = currentLeft + 10; // Move right by 10 pixels
      dodger.style.left = newPosition + "px"; // Update the left position
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    });
  






  