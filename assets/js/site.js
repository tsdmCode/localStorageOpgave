//Opgave 1 kode
function saveName() {
  const name = document.getElementById('nameInput').value;
  // din localStorage code her: gem navnet i localStorage
  localStorage.setItem('name', name);
  showGreeting();
}

function showGreeting() {
  // din localStorage code her opret en const med navn savedName som indeholder navnet fra localStorage
  const savedName = localStorage.getItem('name');

  if (savedName) {
    document.getElementById('greeting').textContent = `Hej, ${savedName}!`;
  }
}

// Opgave 2 kode
function saveColor() {
  const color = document.getElementById('colorPicker').value;
  // din localStorage code her: gem farven i localStorage

  localStorage.setItem('color', color);

  document.body.style.backgroundColor = color;
}

function loadColor() {
  // din localStorage kode her: opret en const med navn savedColor som indeholder farven fra localStorage
  const savedColor = localStorage.getItem('color');

  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

//--- service functions nix pille! -------------------------------------------------------------------------------------

window.onload = loadApp;

function loadApp() {
  showGreeting();
  loadColor();
}
