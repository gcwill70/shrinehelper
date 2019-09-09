const regions = [
  "Akkala",
  "Central Hyrule",
  "Dueling Peaks",
  "Eldin",
  "Faron",
  "Gerudo Desert",
  "Gerudo Highlands",
  "Great Hyrule Forest",
  "Great Plateau",
  "Hebra",
  "Hyrule Ridge",
  "Lake Hylia",
  "Lanayru",
  "Necluda",
  "Tabantha"
];

const discoveryMethods = [
  "Sheikah Sensor",
  "Quest"
];

const towers = [
  "Akkala Tower",
  "Central Tower",
  "",
];

const shrineTable = [
  // Akkala
  {name: "Dah Hesho",region: regions[0], hint: "Paraglide southeast of Akkala tower & stay north of the waterfalls."},
  {name: "Katosa Aug", region: regions[0], hint: "Upon entering the Akkala region from the south, you will find many roads to take. All of them will lead to this shrine."},
  {name: "Ke’nai Shakah", region: regions[0], hint: "Find the road just south of Akkala tower. Follow it to the east. Just after crossing the third bridge, veer off to the right across the plains toward the pine trees. This shrine is well hidden!"},
  {name: "Ritaag Zumo", region: regions[0], hint: "Follow the hill down into the spiral. You'll need to do some light reading before entering the beach."},
  {name: "Tu Ka’loh", region: regions[0], hint: "Go as far northeast as you can! You'll need your paraglider."},
  {name: "Tutsuwa Nima", region: regions[0], hint: "This shrine is located in a sacred place. A traveler at East Akkala Stable can give some guidance."},
  {name: "Ze Kasho", region: regions[0], hint: "You won't need to venture far from Akkala Tower to find this shrine."},
  {name: "Zuna Kai", region: regions[0], hint: "\"Eye\" would make sure to visit northwest Akkala."},
  // Central Hyrule
  {name: "Dah Kaso", region: regions[1], hint: "The plateau is surrounded almost entirely by cliffs. Find the only exception and allow it to guide you."},
  {name: "Kaam Ya'tak", region: regions[1], hint:""},
];

// Top Screenshot Upload
var topFileSelector = document.getElementById('fileTopId');
var topFiles;
document.getElementById('buttonTopId').addEventListener('click', openTopDialog);
var topCanvas = document.getElementById('canvasTopId');
// Bottom Screenshot Upload
var bottomFileSelector = document.getElementById('fileBottomId');
var bottomFiles;
var bottomCanvas = document.getElementById('canvasBottomId');
document.getElementById('buttonBottomId').addEventListener('click', openBottomDialog);
// Show Hints
var showHintRadios = document.getElementsByName('showHint');
// Find Shrines
document.getElementById('buttonFindShrinesId').addEventListener('click', findShrines);

function openTopDialog() {
  document.getElementById('fileTopId').click();
}

function openBottomDialog() {
  document.getElementById('fileBottomId').click();
}

topFileSelector.onchange = function(event) {
  topFiles = event.target.files;
  findShrines();
}

bottomFileSelector.onchange = function(event) {
  bottomFiles = event.target.files;
}

function findShrines() {
  //1. Scan top screenshot
  if (topFiles && topFiles[0]) {
    var topImageFile = topFiles[0];
    var context = topCanvas.getContext("2d");
    var url = URL.createObjectURL(topImageFile);
    var img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0);
      var imageData = context.getImageData(0, 0, topCanvas.width, topCanvas.height);
      var r, g, b, a;
      const x = 150;
      for (var i = 0; i < imageData.data.length; i += 4)
      {
        r = i;
        g = i + 1;
        b = i + 2;
        a = i + 3;
        imageData.data[r] = 0;
        imageData.data[g] = 0;
        if (imageData.data[b] > 150 && InRange(imageData.data[r], 60, 100) && InRange(imageData.data[g], 150, 100))
        {
          imageData[b] = 255;
        }
        else
        {
          imageData[b] = 0;
          imageData.data[a] = 0;
        }
      }
      context.putImageData(imageData, 0, 0);
    };
    img.src = url;
  }
  //2. Scan bottom screenshot
}

function InRange(val, desired, tolerance)
{
  var dist = val - desired;
  if (dist < 0)
  {
    dist *= -1;
  }
  var ratio = dist / desired;
  var percentage = ratio * 100;
  return percentage <= tolerance;
}