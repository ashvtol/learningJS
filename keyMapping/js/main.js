function main() {
    console.log("In main");
    changeBorder = [];
    // loop through
    for(var i=0; i<4; i++){
        changeBorder[i] = document.getElementById("box" + (i+1));
        //changeBorder[i].addEventListener('mouseenter', changeItsBorder);
        //changeBorder[i].addEventListener('mouseleave', changeItsBorderAgain);    
    }
    
    // jQuery on $(document).ready(function() {})
    $(function() {
        console.log("Fuckin' ready Bro!");
        defaultFocus();
        
    });
}

function defaultFocus() {
    console.log("Entered Default Focus!");
    var firstElement = changeBorder[0];
    firstElement.style.border = "2px solid #4195fc";
    firstElement.style["boxShadow"] = "0px 0px 10px #4195fc";
}

function changeItsBorder(event) {
    console.log("In changeItsBorder");
    this.style.border = "2px solid #4195fc";
    this.style["boxShadow"] = "0px 0px 10px #4195fc";
}
function changeItsBorderAgain(event) {
    console.log("In changeItsBorderAgain");
    this.style.border = "2px none black";
    this.style["boxShadow"] = "0px 0px 0px #4195fc";
}


