function say(what) {
  let elem = document.getElementById('lyrics');

  let newElem = document.createElement('p');
  newElem.innerHTML = what

  elem.appendChild(newElem)
}
