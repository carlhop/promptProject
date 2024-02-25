//newFunk is called when the submit button is clicked in the HTML document
function newFunk(){

  let greet= prompt("Enter Your Name Below");
  if(greet != null){
    //.innerHTML changes the paragraph tag text that was left blank on the HTML document
    document.getElementById('p1').innerHTML= "Hi, " + greet + " we hope you have a great day today!!";
  } else if(greet = " "){
  document.getElementById('p2').innerHTML=  "You must enter a name to be greeted.";
  }
}
