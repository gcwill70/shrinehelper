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
}

bottomFileSelector.onchange = function(event) {
  bottomFiles = event.target.files;
}

function findShrines() {
  //1. Scan top screenshot
  if (topFiles && topFiles[0]) {
    var topImageFile = topFiles[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var context = topCanvas.getContext("2d");
      var img = new Image();
      context.drawImage(event.target.result, 0, 0);
      var imageData = context.getImageData(0, 0, topCanvas.width, topCanvas.height);
      img.onload = function() {
        
        const imageLength = imageData.height * imageData.width * 4;
        var i = 0;
        var redPixel, greenPixel, bluePixel, alphaPixel;
        // while (i < imageLength)
        // {
        //   redPixel = i++; // red
        //   greenPixel = i++; // green
        //   bluePixel = i++; // blue
        //   alphaPixel = i++; // alpha
        //   if (imageData.data[bluePixel] > 150 && imageData.data[bluePixel] < 160)
        //   {
        //     imageData.data[redPixel] = 255;
        //     imageData.data[greenPixel] = 0;
        //     imageData.data[bluePixel] = 0;
        //   }
        // }
        context.putImageData(imageData, 0, 0);
      }
      img.src = URL.createObjectURL(event.target.result);
    }
    reader.readAsDataURL(topImageFile);
  }
  //2. Scan bottom screenshot
}

function getImageInfo(result) {
  
}