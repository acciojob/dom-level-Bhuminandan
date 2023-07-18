const Item5 = document.getElementById("level");

function domLevel(element) {
  let level = 0;
  while (element.parentNode) {
    level++;
    element = element.parentNode;
  }
  return level;
}

const result = domLevel(Item5);

alert("The level of the element is:", $(Item5));