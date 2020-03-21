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

const towers = [
  "Akkala",
  "Central",
  "Dueling Peaks",
  "Eldin",
  "Faron",
  "Gerudo",
  "Great Plateau",
  "Hateno",
  "Hebra",
  "Lake",
  "Lanayru",
  "Ridgeland",
  "Tabantha",
  "Wastelands",
  "Woodland"
];

const shrineTable = [
  // Akkala
  {name: "Dah Hesho",region: regions[0], hint: "Paraglide southeast of Akkala tower & stay north of the waterfalls."},
  {name: "Katosa Aug", region: regions[0], hint: "Upon entering the Akkala region from the south, you will find many roads to take. All of them will lead to this shrine."},
  {name: "Ke’nai Shakah", region: regions[0], hint: "Find the road just south of Akkala tower. Follow it to the east. Just after crossing the third bridge, veer off to the right across the plains toward the pine trees. This shrine is well hidden!"},
  {name: "Ritaag Zumo", region: regions[0], hint: "Follow the hill down into the spiral. You'll need to do some light reading before entering the beach."},
  {name: "Tu Ka’loh", region: regions[0], index: 562320, hint: "Go as far northeast as you can! You'll need your paraglider."},
  {name: "Tutsuwa Nima", region: regions[0], hint: "This shrine is located in a sacred place. A traveler at East Akkala Stable can give some guidance."},
  {name: "Ze Kasho", region: regions[0], hint: "You won't need to venture far from Akkala Tower to find this shrine."},
  {name: "Zuna Kai", region: regions[0], hint: "\"Eye\" would make sure to visit northwest Akkala."},
  // Central Hyrule
  {name: "Dah Kaso", region: regions[1], hint: "The plateau is surrounded almost entirely by cliffs. Find the only exception and allow it to guide you."},
  {name: "Kaam Ya'tak", region: regions[1], hint:""},
  {name: "Katah Chuki", region: regions[1], hint:""},
  {name: "Namika Ozz", region: regions[1], hint:""},
  {name: "Noya Neha", region: regions[1], hint:""},
  {name: "Rota Ooh", region: regions[1], hint:""},
  {name: "Saas Ko'sah", region: regions[1], hint:""},
  {name: "Wahgo Katta", region: regions[1], hint:""},
  // Dueling Peaks
  {name: "Bosh Kala", region: regions[2], hint:""},
  {name: "Ha Dahamar", region: regions[2], hint:""},
  {name: "Hila Rao", region: regions[2], hint:""},
  {name: "Lakna Rokee", region: regions[2], hint:""},
  {name: "Ree Dahee", region: regions[2], hint:""},
  {name: "Shee Vaneer", region: regions[2], hint:""},
  {name: "Shee Venath", region: regions[2], hint:""},
  {name: "Ta'loh Naeg", region: regions[2], hint:""},
  {name: "Toto Sah", region: regions[2], hint:""},
  // Eldin
  {name: "Daqa Koh", region: regions[3], hint:""},
  {name: "Gorae Torr", region: regions[3], hint:""},
  {name: "Kayra Mah", region: regions[3], hint:""},
  {name: "Mo'a Keet", region: regions[3], hint:""},
  {name: "Qua Raym", region: regions[3], hint:""},
  {name: "Sah Dahaj", region: regions[3], hint:""},
  {name: "Shae Mo'sah", region: regions[3], hint:""},
  {name: "Shora Hah", region: regions[3], hint:""},
  {name: "Tah Muhl", region: regions[3], hint:""},
  // Faron
  {name: "Kah Yah", region: regions[4], hint:""},
  {name: "Korgu Chideh", region: regions[4], hint:""},
  {name: "Muwo Jeem", region: regions[4], hint:""},
  {name: "Qukah Nata", region: regions[4], hint:""},
  {name: "Shoda Sah", region: regions[4], hint:""},
  {name: "Shai Utoh", region: regions[4], hint:""},
  {name: "Tawa Jinn", region: regions[4], hint:""},
  {name: "Yah Rin", region: regions[4], hint:""},
  // Gerudo Desert
  {name: "Dako Tah", region: regions[5], hint:""},
  {name: "Daqo Chisay", region: regions[5], hint:""},
  {name: "Dila Maag", region: regions[5], hint:""},
  {name: "Hawa Koth", region: regions[5], hint:""},
  {name: "Jee Noh", region: regions[5], hint:""},
  {name: "Kay Noh", region: regions[5], hint:""},
  {name: "Kema Zoos", region: regions[5], hint:""},
  {name: "Korsh O'hu", region: regions[5], hint:""},
  {name: "Misae Suma", region: regions[5], hint:""},
  {name: "Raqua Zunzo", region: regions[5], hint:""},
  {name: "Suma Sahma", region: regions[5], hint:""},
  {name: "Tho Kayu", region: regions[5], hint:""},
  // Gerudo Highlands
  {name: "Joloo Nah", region: regions[6], hint:""},
  {name: "Keecha Yoog", region: regions[6], hint:""},
  {name: "Kema Kosassa", region: regions[6], hint:""},
  {name: "Kuh Takkar", region: regions[6], hint:""},
  {name: "Sho Dantu", region: regions[6], hint:""},
  {name: "Sasa Kai", region: regions[6], hint:""},
  // Great Hyrule Forest
  {name: "Daag Chokah", region: regions[7], hint:""},
  {name: "Keo Ruug", region: regions[7], hint:""},
  {name: "Ketoh Wawai", region: regions[7], hint:""},
  {name: "Kuhn Sidajj", region: regions[7], hint:""},
  {name: "Maag Halan", region: regions[7], hint:""},
  {name: "Mirro Shaz", region: regions[7], hint:""},
  {name: "Monya Toma", region: regions[7], hint:""},
  {name: "Rona Kachta", region: regions[7], hint:""},
  // Great Plateau
  {name: "Ja Baij", region: regions[8], hint:""},
  {name: "Keh Namut", region: regions[8], hint:""},
  {name: "Oman Au", region: regions[8], hint:""},
  {name: "Owa Daim", region: regions[8], hint:""},
  // Hebra
  {name: "Dunba Taag", region: regions[9], hint:""},
  {name: "Gee Ha'rah", region: regions[9], hint:""},
  {name: "Goma Asaagh", region: regions[9], hint:""},
  {name: "Hia Miu", region: regions[9], index: 523192, hint:""},
  {name: "Lanno Kooh", region: regions[9], hint:""},
  {name: "Maka Rah", region: regions[9], hint:""},
  {name: "Mozo Shenmo", region: regions[9], hint:""},
  {name: "Qaza Tokki", region: regions[9], hint:""},
  {name: "Rin Oyaa", region: regions[9], hint:""},
  {name: "Rok Uwog", region: regions[9], hint:""},
  {name: "Sha Gehma", region: regions[9], index: 539556, hint:""},
  {name: "Shada Naw", region: regions[9], hint:""},
  {name: "To Quoma", region: regions[9], index: 559192, hint:""},
  // Hyrule Ridge
  {name: "Maag No'rah", region: regions[10], hint:""},
  {name: "Mijah Rokee", region: regions[10], hint:""},
  {name: "Mogg Latann", region: regions[10], hint:""},
  {name: "Shae Loya", region: regions[10], hint:""},
  {name: "Sheem Dagoze", region: regions[10], hint:""},
  {name: "Toh Yahsa", region: regions[10], hint:""},
  {name: "Zalta Wa", region: regions[10], hint:""},
  // Lake Hylia
  {name: "Ishto Soh", region: regions[11], hint:""},
  {name: "Ka'o Makagh", region: regions[11], hint:""},
  {name: "Pumaag Nitae", region: regions[11], hint:""},
  {name: "Shae Katha", region: regions[11], hint:""},
  {name: "Shoqa Tatone", region: regions[11], hint:""},
  {name: "Ya Naga", region: regions[11], hint:""},
  // Lanayru
  {name: "Dagah Keek", region: regions[12], hint:""},
  {name: "Daka Tuss", region: regions[12], hint:""},
  {name: "Kah Mael", region: regions[12], hint:""},
  {name: "Kaya Wan", region: regions[12], hint:""},
  {name: "Ne'ez Yohma", region: regions[12], hint:""},
  {name: "Rucco Maag", region: regions[12], hint:""},
  {name: "Shai Yota", region: regions[12], hint:""},
  {name: "Sheh Rata", region: regions[12], hint:""},
  {name: "Soh Kofi", region: regions[12], hint:""},
  // Necluda
  {name: "Chaas Qeta", region: regions[13], hint:""},
  {name: "Dow Na'eh", region: regions[13], hint:""},
  {name: "Jitan Sa'mi", region: regions[13], hint:""},
  {name: "Kam Urog", region: regions[13], hint:""},
  {name: "Mezza Lo", region: regions[13], hint:""},
  {name: "Myahm Agana", region: regions[13], hint:""},
  {name: "Tahno O'ah", region: regions[13], hint:""},
  // Tabantha
  {name: "Akh Va’quot", region: regions[14], hint:""},
  {name: "Bareeda Naag", region: regions[14], hint:""},
  {name: "Kah Okeo", region: regions[14], hint:""},
  {name: "Sha Warvo", region: regions[14], hint:""},
  {name: "Tena Ko’sah", region: regions[14], hint:""},
  {name: "Voo Lota", region: regions[14], hint:""}
];

const ShrineColors = [
  {red: 44, green: 108, blue: 142},
  {red: 35, green: 125, blue: 161},
  {red: 43, green: 154, blue: 204},
  {red: 58, green: 148, blue: 189},
  {red: 74, green: 163, blue: 214},
  {red: 93, green: 169, blue: 223},
];

// Top Screenshot Upload
var topFileSelector = document.getElementById('fileTopId');
var topFiles;
document.getElementById('buttonTopId').addEventListener('click', openTopDialog);
var topCanvas = document.getElementById('canvasTopId');
var topImageData;
// Bottom Screenshot Upload
var bottomFileSelector = document.getElementById('fileBottomId');
var bottomFiles;
var bottomCanvas = document.getElementById('canvasBottomId');
document.getElementById('buttonBottomId').addEventListener('click', openBottomDialog);
var bottomImageData;
// Show Hints
var showHintRadios = document.getElementsByName('showHint');
// Find Shrines Button
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
  if (topFiles && topFiles[0])
  {
    var topImageFile = topFiles[0];
    var context = topCanvas.getContext("2d");
    var img = new Image();
    img.onload = function()
    {
      context.drawImage(img, 0, 0);
      topImageData = context.getImageData(0, 0, topCanvas.width, topCanvas.height);
      var Pixel = Array.from(Array(topImageData.width), () => new Array(topImageData.height));
      // Copy image to pixel array
      var k = 0; var l = 0;
      for (var i = 0; i < topImageData.data.length; i += 4)
      {
        Pixel[k++][l++] = { red: topImageData.data[i], green: topImageData.data[i + 1], blue: topImageData.data[i + 2], alpha: topImageData.data[i + 3] };
      }
      for (var i = 0; i < topImageData.width; i++)
      {
        for (var j = 0; j < topImageData.height; j++)
        {
          if (IsShrineColor(Pixel[i][j]))
          {
            Pixel[i][j].red = 255;
            Pixel[i][j].green = 0;
            Pixel[i][j].blue = 0;
          }
        }
      }
      k = 0;
      l = 0;
      for (var i = 0; i < topImageData.data.length; i += 4)
      {
        topImageData.data[i] = Pixel[k][l].red;
        topImageData.data[i + 1] = Pixel[k][l].green;
        topImageData.data[i + 2] = Pixel[k][l].blue;
        topImageData.data[i + 3] = Pixel[k++][l++].alpha;
      }
      context.putImageData(topImageData, 0, 0);
    };
    img.src = URL.createObjectURL(topImageFile);
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
  return (percentage <= tolerance);
}

function IsShrineColor(pixel)
{
  for (var j = 0; j < ShrineColors.length; j++)
  {
    if (InRange(pixel.red, ShrineColors[j].red, 15))
    {
      if (InRange(pixel.green, ShrineColors[j].green, 15))
      {
        if (InRange(pixel.blue, ShrineColors[j].blue, 15))
        {
          return true;
        }
      }
    }
  }

  return false;
}