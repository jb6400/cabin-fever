// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  }
function listener(id){
  for (var i=0; i < 6; i++){
    var listenID = "myPopup" + (i+1);

    document.getElementById(listenID).hidden=true;
    console.log(listenID);
  }
    document.getElementById(id).hidden=false;
    document.getElementById(id).classList.toggle("show");
}
