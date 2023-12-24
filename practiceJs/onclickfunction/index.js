// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorMassage= document.getElementById("error");
function Error(){
    errorMassage.innerText="Something went wrong, please try again";
    console.log(errorMassage.innerText);
}