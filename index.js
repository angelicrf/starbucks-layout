const changeLisColor = (thisClass, thisEvent, thisColor) => {
  document.querySelectorAll(thisClass).forEach((item) => {
    item.addEventListener(thisEvent, function (event) {
      event.target.style.color = thisColor;
      console.log("hovered");
    });
  });
};
function changeBtnColors() {
  changeLisColor(".changeUl", "mouseover", "red");
  changeLisColor(".changeUl", "mouseout", "black");
  changeLisColor(".signIn", "mouseout", "purple");
  changeLisColor(".signOut", "mouseout", "pink");
}
changeBtnColors();
