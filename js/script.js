const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');

const startScreen = document.getElementById("startScreen");
const preEndScreen = document.getElementById("preEndScreen");

const submitButtonLeaderboard = document.getElementById('submit');
const submittedName = document.getElementById('leaderboardName');
const coinStat = document.getElementById('coinStat');
const keyStat = document.getElementById('keyStat');
const scoreStat = document.getElementById('scoreStat');
const timeStat = document.getElementById('timeStat');
const nameError = document.getElementById('nameTakenError');

const inventoryDisplay = document.getElementById('inventory');
const healthDisplay = document.getElementById('health');
const keyCounterGold = document.getElementById('goldCount');
const keyCounterSilver = document.getElementById('silverCount'); 
const coinCounter = document.getElementById('coinCount');

let badwordCheck = ["4r5e", "idiot", "Anudda Shoah", "ars", "Juden Raus", "Jüdisch versippt", "Kike", "Marrano", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "jävlar", "hora", "fitta", "skit", "jävla", "j4vla", "j4vlar", "sk1t", "f1tt4", "j4vl4r", "h0ra", "hor4", "h0r4", "gädra", "helvettet", "satan", "bajs", "kiss", "horunge", "Rootless cosmopolitan", "Yid", "Yordim", "Zhyd", "Żydokomuna"];
badwordCheck = badwordCheck.map(function (e) { return e.toUpperCase()});

const hearts = {
  1: document.getElementById('heart1'),
  2: document.getElementById('heart2'),
  3: document.getElementById('heart3'),
  4: document.getElementById('heart4'),
}

const fullHeartSrc = 'img/RedHeart/32x32/32x32RedHeart1.png';
const halfHeartSrc = 'img/RedHeart/32x32/32x32RedHeart2.png';
const emptyHeartSrc = 'img/RedHeart/32x32/32x32RedHeart3.png'

//Useful data
const TILE_SIZE = 16;
let gameOn = false;
let mapData;
let animFrame;
let gameUpdate;
let tilesets = {}; 
let tileProperties = {};
let startTime;
let endTime;
let currentLevel = 1;
let maxLevel = 9; 
let invis = false;

//info about each level
const levelInfo = {
  1: {
    startPos: {
      x: 3,
      y: 3
    }
  },
  2: {
    startPos: {
      x: 6,
      y: 4
    }
  },
  3: {
    startPos: {
      x: 2,
      y: 7
    }
  },
  4: {
    startPos: {
      x: 7,
      y: 2
    }
  },
  5: {
    startPos: {
      x: 36,
      y: 13
    }
  },
  6: {
    startPos: {
      x: 2,
      y: 2
    }
  },
  7: {
    startPos: {
      x: 20,
      y: 9
    }
  },
  8: {
    startPos: {
      x: 8,
      y: 7
    }
  },
  9: {
    startPos: {
      x: 3,
      y: 12
    }
  },
}

//Character data
const standardSpeed = 3;
const character = {
  sprite: new Image(),
  x: 4,
  y: 4,
  pixelX: 4 * TILE_SIZE,
  pixelY: 4 * TILE_SIZE,
  speed: 3,
  currentFrameY: 3,
  frameCount: 4,
  direction: 'still'
};

//Character inventory data
const characterInventory = {
  coins: 0,
  totalCoinCount: 0,
  Key: [],
  goldKeyCount: 0,
  silverKeyCount: 0,
  totalKeyCount: 0,
  totalPotionCount: 0,
  score: 0,
  health: 8,
  totalHits: 0,
  goldenPresents: 0
};

//Keystates
const keyStates = {
  still: true,

  w: false,
  ArrowUp: false,

  s: false,
  ArrowDown: false,

  a: false,
  ArrowLeft: false,

  d: false,
  ArrowRight: false
}
let idle = new Image();
let run = new Image();
idle.src = 'img/character/idle.png';
run.src = 'img/character/run.png';

//First initialization
function startGame(){
  character.x = levelInfo[currentLevel].startPos.x
  character.y = levelInfo[currentLevel].startPos.y
  character.pixelY = levelInfo[currentLevel].startPos.y * TILE_SIZE
  character.pixelX = levelInfo[currentLevel].startPos.x * TILE_SIZE

  startScreen.style.display = 'none';
  canvas.style.display = 'block';
  inventoryDisplay.style.display = 'flex';
  healthDisplay.style.display = 'flex';

  loadMap(currentLevel);
  gameOn = true;
  startTime = Date.now();
  return;
}

//Loading the map at the level
async function loadMap(level){
  const data = await fetch(`./Level${level}.json`); //gets the tilemap for the level
  mapData = await data.json(); //gets the data of the map

  //decodes the map
  await Promise.all(mapData.tilesets.map(async tileset => {
    const img = new Image();
    img.src = tileset.image.replace('.json', '.png');
    await img.decode();
    tilesets[tileset.firstgid] = { img, firstgid: tileset.firstgid, imagewidth: tileset.imagewidth};
    
    if(tileset.tiles){
      tileset.tiles.forEach(tile => {
        const globalTileId = tileset.firstgid + tile.id;
        tileProperties[globalTileId] = {};
        tile.properties.forEach(prop => {
          tileProperties[globalTileId][prop.name] = prop.value;
        })
      })
    }
  }))
  await Promise.all(mapData.tilesets.map(async tileset => {
    loadAllEnemies(tileset)
}))
  render();
}

function loadAllEnemies(tileset){
  projectiles = [];
  projectilesSpecial = [];
  turrets = [];
  turretsSpecial = [];
  walkers = [];
  ghosts = [];

  loadTurrets(tileset);
  loadTurretsSpecial(tileset);
  startShooting();

  loadWalkers(tileset);
  loadGhosts(tileset);

  loadTeleporters(tileset);
}

function render(){
  ctx.clearRect(0,0,canvas.width,canvas.height); //clears the rectangle for update
  
  renderMap();
  renderCharacter();

  updateProjectiles();
  drawProjectiles();
  drawProjectilesSpecial();
  projectileCollision();

  updateWalkers();
  drawWalkers();

  updateGhosts();
  drawGhost();  
  animFrame = requestAnimationFrame(render); //puts render in an animation
}

//Map render
function renderMap(){
  if(!mapData || Object.keys(tilesets).length === 0) return; //if the map dont exist, return
  
  mapData.layers.forEach(layer => {
    if(layer.type === "tilelayer"){
      layer.data.forEach((tileIndex, i) => {
        if(tileIndex === 0) return;
        const tileset = getTilesForIndex(tileIndex);
        const localIndex = tileIndex - tileset.firstgid;
        
        const col = i%mapData.width;
        const row = Math.floor(i/mapData.width);
        
        const tileX = (localIndex % (tileset.img.width / TILE_SIZE)) * TILE_SIZE;
        const tileY = Math.floor(localIndex / (tileset.img.width / TILE_SIZE)) * TILE_SIZE;
        
        ctx.drawImage(
          tileset.img,
          tileX, tileY, TILE_SIZE, TILE_SIZE,
          col*TILE_SIZE, row*TILE_SIZE, TILE_SIZE, TILE_SIZE
        );
      });
    }
  });
}
function getTilesForIndex(tileIndex){
  let selectedTileset = null;
  Object.values(tilesets).forEach(tileset => {
    if(tileIndex >= tileset.firstgid){
      selectedTileset = tileset;
    }
  })
  return selectedTileset;
}

//Renders the characters sprite
function renderCharacter(){
  let currentFrameY = character.currentFrameY;
  
  character.sprite = idle;
  
  switch(character.direction){
    case 'still': character.sprite = idle; currentFrameY = 3; break;
    case 'w':
    case 'up': character.sprite = run; currentFrameY = 4; break;
    case 's':
    case 'down': character.sprite = run; currentFrameY = 3; break;
    case 'a':
    case 'left': character.sprite = run; currentFrameY = 2; break;
    case 'd':
    case 'right': character.sprite = run; currentFrameY = 1; break;
  }
  
  let frameX = animationFrameX * 80 - 45;
  let frameY = currentFrameY * 80 - 47;
  
  ctx.drawImage(
    character.sprite,
    frameX, frameY, TILE_SIZE, TILE_SIZE,
    character.pixelX, character.pixelY, TILE_SIZE, TILE_SIZE
  );
}

//animates the character
let animationFrameX = 1;
setInterval(() => {
  if(gameOn == false) return;
  frameCount = 8;
  if(keyStates.still){frameCount = 4;}
  animationFrameX = (animationFrameX+1)%frameCount +1
}, 1000/6);

//Gets the corners of the character for collision
function getCharacterCorners(nextPixelX,nextPixelY){
  const characterCorners = [
    { x: nextPixelX, y: nextPixelY },
    { x: nextPixelX + TILE_SIZE, y: nextPixelY },
    { x: nextPixelX, y: nextPixelY + TILE_SIZE },
    { x: nextPixelX + TILE_SIZE, y: nextPixelY + TILE_SIZE }
  ]
  return characterCorners
}
let hasTeleported = false;
//Updates the characters position
function updateCharacterPos(){
  if(!gameOn) return;
  let nextPixelX = character.pixelX;
  let nextPixelY = character.pixelY;
  
  if(keyStates.still){
    character.direction = 'still';
  }
  if(keyStates.ArrowUp || keyStates.w){
    character.direction = 'up';
    nextPixelY -= character.speed;
  }
  if(keyStates.ArrowDown || keyStates.s){
    character.direction = 'down';
    nextPixelY += character.speed;
  }
  if(keyStates.ArrowLeft || keyStates.a){
    character.direction = 'left';
    nextPixelX -= character.speed;
  }
  if(keyStates.ArrowRight || keyStates.d){
    character.direction = 'right';
    nextPixelX += character.speed;
  }

  const characterCorners = getCharacterCorners(nextPixelX,nextPixelY);
  
  //moves if it wouldn't result in collision
  if(!hasTeleported && ifTeleported(characterCorners)){hasTeleported = true; setTimeout(()=>{hasTeleported = false;},1000); return};
  if(!colliding(characterCorners, isPlayer=true)){
    character.pixelX = nextPixelX;
    character.pixelY = nextPixelY;
  }
  //if possible, get collectible
  getCollectible(characterCorners);
}

//Collision check
function colliding(characterCorners, isPlayer) {
  for(const corner of characterCorners){
    let nextTileX = Math.floor(corner.x/TILE_SIZE);
    let nextTileY = Math.floor(corner.y/TILE_SIZE);
    
    if(nextTileX < 0 || nextTileX >= mapData.width || nextTileY < 0 || nextTileY >= mapData.height) return true; //checks if out of bounds
    
    //handles collision for different objects
    for(const layer of mapData.layers){
      if(layer.type === "tilelayer"){
        const tileIndex = layer.data[nextTileY * mapData.width + nextTileX];
        if(tileIndex !== 0 && tileProperties[tileIndex]?.Type === 'Door' && isPlayer){
          if(tileProperties[tileIndex]?.Subtype === 'Regular Door' && characterInventory.Key.includes('Silver Key')){
            characterInventory.silverKeyCount--;
            openAndRemove('Silver Key', findObjectAtCords(corner.x, corner.y), layer)
            return false;
          }
          if(tileProperties[tileIndex]?.Subtype === 'Boss Door' && characterInventory.Key.includes('Gold Key')){
            characterInventory.goldKeyCount--;
            openAndRemove('Gold Key',findObjectAtCords(corner.x, corner.y), layer)
            return false;
          }
        }
        if(tileIndex !== 0 && tileProperties[tileIndex]?.Type === 'Chest' && isPlayer){
          if(tileProperties[tileIndex]?.Subtype === 'Golden Chest' && characterInventory.Key.includes('Gold Key')){
            characterInventory.goldKeyCount--;
            openAndRemove('Gold Key',findObjectAtCords(corner.x, corner.y), layer)
            initiateNewLevel()
            return false;
          }else{
            return true;
          }
        }
        if(tileIndex !== 0 && tileProperties[tileIndex]?.Type === 'Enemy' && isPlayer){
          hurt()
          return true;
        }
        if(tileIndex !== 0 && tileProperties[tileIndex]?.Type === 'Floor' && isPlayer){
          if(!isSpeed) {character.speed = standardSpeed};
          if(isSpeed) {character.speed = 5};
          if(tileProperties[tileIndex]?.Subtype === 'Slower'){
            if(isSpeed) {character.speed = standardSpeed; break;};
            character.speed = 1;
          }
          if(tileProperties[tileIndex]?.Subtype === 'Spikes'){
            hurt();
          }
        }
        if(tileIndex !== 0 && tileProperties[tileIndex]?.Collidable) return true;
        if(!isPlayer && (
          corner.x > character.pixelX &&
          corner.x < character.pixelX + TILE_SIZE &&
          corner.y > character.pixelY &&
          corner.y < character.pixelY + TILE_SIZE
        )){
          hurt();
        }
      }
    }
  }
  return false;
}
function ifTeleported(characterCorners){
  for(const corner of characterCorners){
    let nextTileX = Math.floor(corner.x/TILE_SIZE);
    let nextTileY = Math.floor(corner.y/TILE_SIZE);
    for(const layer of mapData.layers){
      if(layer.type === 'tilelayer'){
        const tileIndex = layer.data[nextTileY * mapData.width + nextTileX];
       if(tileProperties[tileIndex]?.Subtype === 'Teleporter'){
        const index = teleporters.findIndex(tele => {
          return tele.x === nextTileX &&
                tele.y === nextTileY 
        });
        let i = null;
        (index === 0)? i = 1 : i = 0;
        character.x = teleporters[i].x;
        character.y = teleporters[i].y;
        character.pixelX = teleporters[i].x * TILE_SIZE;
        character.pixelY = teleporters[i].y * TILE_SIZE;
        console.log(teleporters[i].x, character.x)

        console.log(teleporters)
        console.log(index)
        return true
       }
      }
    }
  }
}

function hurt(){
  characterInventory.totalHits++;
  if(invis) {return}
  invis = true;

  let count = 0;
  let visible = true;
  let flashInterval = setInterval(() => {
    visible = !visible;
    if(visible){
      animationFrameX = 1;
    }else if(!visible){
      animationFrameX = 100;
    }
    count++;
    if(!invis){
      visible = true;
      animationFrameX = 1;
      clearInterval(flashInterval);
    }
  }, 100)

  setTimeout(() => {
    invis = false;
  }, 1000)
  characterInventory.health--;
  healthHandling();
}
function heal(amount){
  if(characterInventory.health < 8){
    characterInventory.health += amount;
    healthHandling();
  }
}
let isSpeed = false;
//Handles collection
function getCollectible(characterCorners){
  for(const corner of characterCorners){
    let nextTileX = Math.floor(corner.x/TILE_SIZE);
    let nextTileY = Math.floor(corner.y/TILE_SIZE);
    for(const layer of mapData.layers){
      if(layer.type === "tilelayer"){
        const tileIndex = layer.data[nextTileY*mapData.width+nextTileX];
        const collectibleIndex = (nextTileY*mapData.width)+nextTileX;
        if(tileProperties[tileIndex]?.Collectible){
          layer.data[collectibleIndex] = 0;
          if(tileProperties[tileIndex]?.Type === 'Key'){
            characterInventory['Key'].push(tileProperties[tileIndex]?.Subtype);
            characterInventory.totalKeyCount++;
            updateInventory();
          }else if(tileProperties[tileIndex]?.Type === 'Coin'){
            characterInventory.coins++;
            characterInventory.totalCoinCount++;
            updateInventory();
            if(tileProperties[tileIndex]?.Subtype === 'Golden Present'){
              characterInventory.coins += 4;
              characterInventory.totalCoinCount += 4;
              characterInventory.goldenPresents++;
              updateInventory();
            }
          }else if(tileProperties[tileIndex]?.Type === 'Potion'){
            characterInventory.totalPotionCount++;
            if(tileProperties[tileIndex]?.Subtype === 'SmallHealth'){
              heal(1);
            }else if(tileProperties[tileIndex]?.Subtype === 'LargeHealth'){
              heal(2);
            }else if(tileProperties[tileIndex]?.Subtype === 'SpeedPotion'){
              isSpeed = true;
              setTimeout(() => {
                isSpeed = false;
              }, 3000);
            }
          }
}}}}}

//Handles door opening
function openAndRemove(keyType, toRemove, layer){
  characterInventory.Key.splice(characterInventory.Key.indexOf(keyType), 1);
  updateInventory()
  characterInventory.keyCount = characterInventory.Key.length;
  
  interactableAndRemovable(indexFinderMultitiles(toRemove), layer);
}

//Finds the index of tile
function indexFinderMultitiles(itemTofind){
  for(const layerE of mapData.layers){
    if(layerE.type === 'objectgroup'){
      for(const item of layerE.objects){
        if(item.name === itemTofind){
          return layerE.objects.indexOf(item)
}}}}}

//Removes tile
function interactableAndRemovable(itemToRemove, layer){
  let objectGroup;
  for(const layerE of mapData.layers){
    if(layerE.type === 'objectgroup'){
      objectGroup = layerE.objects;
    }
  }
  const startTileX = Math.floor(objectGroup[itemToRemove].x / TILE_SIZE);
  const startTileY = Math.floor(objectGroup[itemToRemove].y / TILE_SIZE);
  const endTileX = startTileX + Math.floor(objectGroup[itemToRemove].width / TILE_SIZE);
  const endTileY = startTileY + Math.floor(objectGroup[itemToRemove].height / TILE_SIZE);
  
  for(let Ycord = startTileY; Ycord <= endTileY; Ycord++){
    for(let Xcord = startTileX; Xcord <= endTileX; Xcord++){
      const objectTileIndex = (Ycord * mapData.width) + Xcord;
      layer.data[objectTileIndex] = 0;
    }
  }
}

function healthHandling(){
  switch(characterInventory.health){
    case 8: 
      hearts[1].src = fullHeartSrc;
      hearts[2].src = fullHeartSrc;
      hearts[3].src = fullHeartSrc;
      hearts[4].src = fullHeartSrc;
    break;
    case 7:
      hearts[1].src = fullHeartSrc;
      hearts[2].src = fullHeartSrc;
      hearts[3].src = fullHeartSrc;
      hearts[4].src = halfHeartSrc;
    break;
    case 6:
      hearts[1].src = fullHeartSrc; 
      hearts[2].src = fullHeartSrc; 
      hearts[3].src = fullHeartSrc;
      hearts[4].src = emptyHeartSrc;
    break;

    case 5: 
      hearts[1].src = fullHeartSrc; 
      hearts[2].src = fullHeartSrc; 
      hearts[3].src = halfHeartSrc; 
      hearts[4].src = emptyHeartSrc;
    break;

    case 4: 
      hearts[1].src = fullHeartSrc; 
      hearts[2].src = fullHeartSrc; 
      hearts[3].src = emptyHeartSrc; 
      hearts[4].src = emptyHeartSrc;
    break;

    case 3: 
      hearts[1].src = fullHeartSrc; 
      hearts[2].src = halfHeartSrc; 
      hearts[3].src = emptyHeartSrc; 
      hearts[4].src = emptyHeartSrc;
    break;

    case 2: 
      hearts[1].src = fullHeartSrc; 
      hearts[2].src = emptyHeartSrc; 
      hearts[3].src = emptyHeartSrc; 
      hearts[4].src = emptyHeartSrc; 
    break;

    case 1:  
      hearts[1].src = halfHeartSrc; 
      hearts[2].src = emptyHeartSrc; 
      hearts[3].src = emptyHeartSrc;  
      hearts[4].src = emptyHeartSrc;
    break;

    case 0: 
      hearts[1].src = emptyHeartSrc; 
      hearts[2].src = emptyHeartSrc; 
      hearts[3].src = emptyHeartSrc;  
      hearts[4].src = emptyHeartSrc;
      endOfGame(true); 
    break;
  }
  if(characterInventory.health > 8){characterInventory.health = 8}
}

//Initiates new level (resets character)
async function initiateNewLevel(){
  await renderNewLevel();
  const { x, y } = levelInfo[currentLevel].startPos
  character.x = x;
  character.y = y;
  character.pixelX = x * TILE_SIZE;
  character.pixelY = y * TILE_SIZE;
  characterInventory.Key = [];
  teleporters = [];
  updateInventory();
  return;
}

//Renders the new level
function renderNewLevel(){
  if(currentLevel < maxLevel){ currentLevel++ }else{ endOfGame(); return };

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cancelAnimationFrame(animFrame);
  turretIntervals.forEach(intervalID => clearInterval(intervalID));
  turretIntervals = [];
  loadMap(currentLevel);
  return;
}

//Gets the object at coordinates
function findObjectAtCords(x,y,layerName='MultiTiled'){
  const layer = mapData.layers.find(l => l.type==='objectgroup' && l.name===layerName);
  let object;
  for(const index in layer.objects){
    const layerNum = layer.objects[index];
    if(x >= layerNum.x && y >= layerNum.y && x < layerNum.x + layerNum.width && y < layerNum.y + layerNum.height){
      object = layer.objects[index]; 
      break;
    }
  }
  return object.name 
}

//Counts the amount of keytypes
const keyCounter = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//Updates character inventory
function updateInventory(){
  characterInventory.silverKeyCount = keyCounter(characterInventory.Key, 'Silver Key');
  characterInventory.goldKeyCount = keyCounter(characterInventory.Key, 'Gold Key');
  keyCounterGold.innerHTML = characterInventory.goldKeyCount;
  keyCounterSilver.innerHTML = characterInventory.silverKeyCount;
  coinCounter.innerHTML = characterInventory.coins;
}

//When a key is pressed
window.addEventListener('keydown', function(event){
  if(keyStates.hasOwnProperty(event.key)) { keyStates[event.key] = true; keyStates.still = false; }
});
//and released
window.addEventListener('keyup', function(event){
  if(keyStates.hasOwnProperty(event.key)) keyStates[event.key] = false;
  if(Object.values(keyStates).every((v) => v === false)){
    keyStates.still = true;
    animationFrameX = 1;
  }
});

//updates character pos and collision
gameUpdate = setInterval(updateCharacterPos, 1000/30);

const endScreenTitle = document.getElementById('congrats');
const endScreenSubTitle = document.getElementById('subCongrats');
const goldenPresentStat = document.getElementById('goldenStat');
const favicon = document.getElementById('favicon');
// If game has ended
function endOfGame(death){
  gameOn = false;
  endTime = Date.now()
  updateInventory();
  clearInterval(gameUpdate); 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = 'none';
  healthDisplay.style.display = 'none';
  cancelAnimationFrame(animFrame);
  characterInventory.Time = endTime-startTime;
  console.log('end of game'); 
  characterInventory.score += ((characterInventory.totalKeyCount*4 + characterInventory.totalCoinCount*2 + characterInventory.totalPotionCount*5 + characterInventory.goldenPresents*30)*100);

  if(death){
    endScreenTitle.textContent = 'Sorry! You died';
    endScreenSubTitle.textContent = 'And here are your stats';
    document.title = 'You lost :(';
    favicon.setAttribute('href', 'img/IconDeath.png');
  }else{
    document.title = 'Congratulations! You won!';
    characterInventory.score += (Math.floor(1000/(((characterInventory.Time/1000))+2)) + 10*(characterInventory.health));
    if(character.totalHits === 0) characterInventory.score += 1500;
    timeStat.innerHTML += `Time: ${Math.round(characterInventory.Time/1000)} seconds`
  }
  
  coinStat.innerHTML += `Coins: ${characterInventory.totalCoinCount}`;
  keyStat.innerHTML += `Keys: ${characterInventory.totalKeyCount}`;
  scoreStat.innerHTML += `Score: ${characterInventory.score}`;
  if(characterInventory.goldenPresents !== 0){
    goldenPresentStat.innerHTML += `${characterInventory.goldenPresents}/9 Golden Presents`
  }
  inventoryDisplay.style.display = 'none';
  preEndScreen.style.display = 'flex';
  
  submitButtonLeaderboard.addEventListener("submit", function(event){
    event.preventDefault();
    let nameValue = submittedName.value || false;
    console.log(nameValue)
    if(nameValue === false) {leaderboard(nameValue); return};
    let i = 0,
    keyNames = []
    for(i ; i < localStorage.length ; i++){
     const jsonKey = localStorage.key(i)
      if(jsonKey != 'null'){
      keyNames.push(jsonKey);
    }
  }
  const keyNamesUpper = keyNames.map(function (e) { return e.toUpperCase()});
  if(keyNamesUpper.includes(nameValue.toUpperCase())){
    nameError.innerHTML = 'This name is taken: choose another.';
    nameError.style.display = 'block';
    submittedName.value = '';
    return;
  }else if(badwordCheck.includes(nameValue.toUpperCase())){
    nameError.innerHTML = 'Name cannot be profanity.';
    nameError.style.display = 'block';
    submittedName.value = '';
    return;
  }else if(!isNaN(nameValue)){
    nameError.innerHTML = 'Name cannot be a number.';
    nameError.style.display = 'block';
    submittedName.value = '';
    return;
  } else if(/[!@#$%^&*()+={}[\]:;"<>,.?\/|\\]/.test(nameValue)){
    nameError.innerHTML = 'Name cannot contain special characters.';
    nameError.style.display = 'block';
    submittedName.value = '';
    return;
  }else if(/^[^a-zA-Z0-9\s]+$/.test(nameValue)){
    nameError.innerHTML = 'Name cannot be just special characters.';
    nameError.style.display = 'block';
    submittedName.value = '';
    return;
  }else { leaderboard(nameValue); return; }
  })
}
function leaderboard(nameValue){
  preEndScreen.style.display = 'none';
  if(nameValue !== false){
    const finalInventoryJson = JSON.stringify(characterInventory);
    localStorage.setItem(nameValue, finalInventoryJson);
  }
  window.location.reload()
  return;
}

let teleporters = [];
function loadTeleporters(tileset){
  let teleportGid = {};
  if(tileset.tiles){
    tileset.tiles.forEach(tile => {
    if(tile.properties?.some(p => p.name === "Subtype" && p.value === "Teleporter")){
      teleportGid[tile.id + tileset.firstgid] = tile.properties.reduce((acc,prop) => {
        acc[prop.name] = prop.value;
        return acc;
      }, {});
    }
  });
}else {return};
  mapData.layers.forEach(layer => {
    if(layer.type=== "tilelayer"){
      layer.data.forEach((gid,index) => {
        if(teleportGid[gid]){
          const x = (index%mapData.width);
          const y = Math.floor(index/mapData.width);
          teleporters.push({
            x,y,
            ...teleportGid[gid]
          });
        }
      }
    );
    };
  });
}

/*
  Enemies
*/

//Turrets and TurretsSpecial
let turretIntervals = [];
let turrets = [];
let projectiles = [];
let turretsSpecial = [];
let projectilesSpecial = [];

function loadTurrets(tileset){
  let turretGids = {};
  if(tileset.tiles){
    tileset.tiles.forEach(tile => {
    if(tile.properties?.some(p => p.name === "Subtype" && p.value === "Turret")){
      turretGids[tile.id + tileset.firstgid] = tile.properties.reduce((acc,prop) => {
        acc[prop.name] = prop.value;
        return acc;
      }, {});
    }
  });
}else {return};
  mapData.layers.forEach(layer => {
    if(layer.type=== "tilelayer"){
      layer.data.forEach((gid,index) => {
        if(turretGids[gid]){
          const x = (index%mapData.width)*TILE_SIZE;
          const y = Math.floor(index/mapData.width)*TILE_SIZE;
          turrets.push({
            x,y,
            ...turretGids[gid]
          });
        }
      }
    );
    };
  });
}

function loadTurretsSpecial(tileset){
  let turretGids = {};
  if(tileset.tiles){
    tileset.tiles.forEach(tile => {
    if(tile.properties?.some(p => p.name === "Subtype" && p.value === "TurretS")){
      turretGids[tile.id + tileset.firstgid] = tile.properties.reduce((acc,prop) => {
        acc[prop.name] = prop.value;
        return acc;
      }, {});
    }
  });
}else {return};
  mapData.layers.forEach(layer => {
    if(layer.type=== "tilelayer"){
      layer.data.forEach((gid,index) => {
        if(turretGids[gid]){
          const x = (index%mapData.width)*TILE_SIZE;
          const y = Math.floor(index/mapData.width)*TILE_SIZE;
          turretsSpecial.push({
            x,y,
            ...turretGids[gid]
          });
        }
      }
    );
    };
  });
}

function turretProjectiles(turret){
  const speed = 3;
  let dx = 0, dy = 0;

  if(turret.DirectionY !== 0){
    switch(turret.DirectionY){
      case -1: dy = -speed; break
      case 1: dy = speed; break
    }
  }else if(turret.DirectionX !== 0){
    switch(turret.DirectionX){
      case -1: dx = -speed; break
      case 1: dx = speed; break
    }
  }
  projectiles.push({
    x: turret.x + TILE_SIZE / 2,
    y: turret.y + TILE_SIZE / 2,
    dx,
    dy
  })
}

function turretProjectilesSpecial(turret){
  const dx = character.pixelX +2 - turret.x;
  const dy = character.pixelY +2 - turret.y;
  const distance = Math.sqrt(dx*dx + dy*dy);

  const velX = (dx/distance) * 3
  const velY = (dy/distance) * 3

  projectilesSpecial.push({
    x: turret.x,
    y: turret.y,
    dx: velX,
    dy: velY,
    size: 6
  })
}

function startShooting(){
  turrets.forEach(turret => {
    const intervalID = setInterval(() => turretProjectiles(turret), turret.Speed);
    turretIntervals.push(intervalID)
  });
  turretsSpecial.forEach(turret => {
    const intervalID = setInterval(() => turretProjectilesSpecial(turret), turret.Speed);
    turretIntervals.push(intervalID)
  });
}

function updateProjectiles(){
  for(let i = projectiles.length - 1; i >= 0; i--){
    const projectile = projectiles[i];
    projectile.x += projectile.dx;
    projectile.y += projectile.dy;
    if(
      projectile.x < 0 || 
      projectile.x > mapData.width * TILE_SIZE ||
      projectile.y < 0 || 
      projectile.y > mapData.height * TILE_SIZE
    ){
      projectiles.splice(i,1);
    }
  }for(let i = projectilesSpecial.length - 1; i >= 0; i--){
    const projectile = projectilesSpecial[i];
    projectile.x += projectile.dx;
    projectile.y += projectile.dy;
    if(
      projectile.x < 0 || 
      projectile.x > mapData.width * TILE_SIZE ||
      projectile.y < 0 || 
      projectile.y > mapData.height * TILE_SIZE
    ){
      projectilesSpecial.splice(i,1);
    }
  }
}
function drawProjectiles(){
  ctx.fillStyle = "white";
  projectiles.forEach(projectile => {
    ctx.beginPath();
    ctx.arc(projectile.x - 2, projectile.y - 2, 4, 0, Math.PI*2);
    ctx.fill()
  })
}
function drawProjectilesSpecial(){
  ctx.fillStyle = "red";
  projectilesSpecial.forEach(projectile => {
    ctx.fillRect(projectile.x - 2, projectile.y - 2, projectile.size, projectile.size)
  })
}
function projectileCollision(){
  for(let i = projectiles.length - 1; i >= 0; i--){
    const projectile = projectiles[i];
    if(
      projectile.x > character.pixelX &&
      projectile.x < character.pixelX + TILE_SIZE &&
      projectile.y > character.pixelY &&
      projectile.y < character.pixelY + TILE_SIZE
    ){
      hurt();
      projectiles.splice(i,1);
    }
  }for(let i = projectilesSpecial.length - 1; i >= 0; i--){
    const projectile = projectilesSpecial[i];
    if(
      projectile.x > character.pixelX &&
      projectile.x < character.pixelX + TILE_SIZE &&
      projectile.y > character.pixelY &&
      projectile.y < character.pixelY + TILE_SIZE
    ){
      hurt();
      projectilesSpecial.splice(i,1);
    }
  }
}

//Following Enemy
let walkers = [];

function loadWalkers(tileset){
  let walkerGids = {};
  if(tileset.tiles){
    tileset.tiles.forEach(tile => {
      if(tile.properties?.some(p => p.name === "Subtype" && p.value === "Walker")){
        walkerGids[tile.id + tileset.firstgid] = tile.properties.reduce((acc,prop) => {
          acc[prop.name] = prop.value;
          return acc;
        }, {});
      }
    });
  }else {return};
  mapData.layers.forEach(layer => {
    if(layer.type=== "tilelayer"){
      layer.data.forEach((gid,index) => {
        if(walkerGids[gid]){
          const x = (index%mapData.width);
          const y = Math.floor(index/mapData.width);
          const tileIndex = layer.data[y*mapData.width+x];
          walkers.push({
            x: x * TILE_SIZE,
            y: y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE,
            tileIndex: tileIndex,
            ...walkerGids[gid]
          });
          layer.data[y*mapData.width+x] = 0;
        }
      }
    );
    };
  });
}

function updateWalkers(){
  walkers.forEach(walker => {
    avoidOthers(walker)
    let speed = walker.Speed/10
    const dx = character.pixelX - walker.x;
    const dy = character.pixelY - walker.y;

    const dxAbs = Math.abs(dx);
    const dyAbs = Math.abs(dy);

    let moveX = 0;
    let moveY = 0;
    if(dxAbs >= dyAbs){
      moveX = dx>0 ? speed : -speed;
    }else if(dxAbs < dyAbs){
      moveY = dy>0 ? speed : -speed
    }
    const walkerCorners = getCharacterCorners(walker.x + moveX, walker.y + moveY);
    const distance = Math.sqrt(dx*dx + dy*dy);
    if(!colliding(walkerCorners, isPlayer = false) && distance > 14){
      walker.x += moveX;
      walker.y += moveY;
    }
  })
}

function getTileSprite(tileIndex){
  const localTilesets = Object.values(tilesets).reverse()
  const tileset = Object.values(localTilesets).find(ts => tileIndex >= ts.firstgid);

  if(!tileset) return null;

  const localIndex = tileIndex - tileset.firstgid;
  const cols = Math.floor(tileset.imagewidth / TILE_SIZE);
  const spriteX = (localIndex%cols) * TILE_SIZE;
  const spriteY = Math.floor(localIndex/cols) * TILE_SIZE;

  if(typeof tileset.image === 'string'){
    const img = new Image();
    img.src = tileset.img;
    tileset.img = img;
  }
  return {image: tileset.img, spriteX, spriteY}
}

function drawWalkers(){
  walkers.forEach(walker => {
    const sprite = getTileSprite(walker.tileIndex);
    if(sprite){
      ctx.drawImage(
        sprite.image,
        sprite.spriteX, sprite.spriteY,
        TILE_SIZE, TILE_SIZE,
        walker.x, walker.y,
        walker.width, walker.height
      );
    }else{
        ctx.fillStyle = 'green';
        ctx.fillRect(walker.x, walker.y, walker.width, walker.height);
      }
  })
}

function calcDistance(walkerA, walkerB){
  const dx = walkerA.x - walkerB.x;
  const dy = walkerA.y - walkerB.y;
  return Math.sqrt(dx*dx + dy*dy);
}
function avoidOthers(walker){
  let moveX = 0;
  let moveY = 0;
  for(let otherWalker of walkers){
    if(otherWalker !== walker){
     const distance = calcDistance(walker, otherWalker);
     if(distance < 16){
      const angle = Math.atan2(walker.y - otherWalker.y, walker.x - otherWalker.x);
      moveX += Math.cos(angle)*0.5;
      moveY += Math.sin(angle)*0.5;
     }
    }
  }
  walker.x += moveX;
  walker.y += moveY;
}

//Ghost
let ghosts = [];

function loadGhosts(tileset){
  let ghostGids = {};
  if(tileset.tiles){
    tileset.tiles.forEach(tile => {
      if(tile.properties?.some(p => p.name === "Subtype" && p.value === "Ghost")){
        ghostGids[tile.id + tileset.firstgid] = tile.properties.reduce((acc,prop) => {
          acc[prop.name] = prop.value;
          return acc;
        }, {});
      }
    });
  }else {return};
  mapData.layers.forEach(layer => {
    if(layer.type=== "tilelayer"){
      layer.data.forEach((gid,index) => {
        if(ghostGids[gid]){
          const x = (index%mapData.width);
          const y = Math.floor(index/mapData.width);
          const tileIndex = layer.data[y*mapData.width+x];
          ghosts.push({
            x: x * TILE_SIZE,
            y: y * TILE_SIZE,
            width: TILE_SIZE*1.8,
            height: TILE_SIZE*1.8,
            tileIndex: tileIndex,
            ...ghostGids[gid]
          });
          layer.data[y*mapData.width+x] = 0;
        }
      }
    );
    };
  });
}

function updateGhosts(){
  ghosts.forEach(ghost => {
    avoidOthersGhost(ghost)
    let speed = ghost.Speed/10
    const dx = character.pixelX - ghost.x;
    const dy = character.pixelY - ghost.y;
    const distance = Math.sqrt(dx*dx + dy*dy);
    const ghostCorners = getCharacterCorners(ghost.x, ghost.y)
    if(distance > 14){
      let moveX = (dx/distance)*speed;
      let moveY = (dy/distance)*speed;
      ghost.x += moveX;
      ghost.y += moveY;
    }
    ghostCorners.forEach(corner => {
      if(
        corner.x > character.pixelX &&
        corner.x < character.pixelX + TILE_SIZE &&
        corner.y > character.pixelY &&
        corner.y < character.pixelY + TILE_SIZE
      ){
        console.log(ghost.x)
        ghost.x = (Math.floor(Math.random()*(37) + 1)) * TILE_SIZE;
        ghost.y = (Math.floor(Math.random()*(13) + 1)) * TILE_SIZE;
        hurt();
      }
    })
  })
}

function drawGhost(){
  ghosts.forEach(ghost => {
    const sprite = getTileSprite(ghost.tileIndex);
    if(sprite){
      ctx.drawImage(
        sprite.image,
        sprite.spriteX, sprite.spriteY,
        TILE_SIZE, TILE_SIZE,
        ghost.x, ghost.y,
        ghost.width, ghost.height
      );
    }else{
        ctx.fillStyle = 'orange';
        ctx.fillRect(ghost.x, ghost.y, ghost.width, ghost.height);
      }
  })
}

function avoidOthersGhost(ghost){
  let moveX = 0;
  let moveY = 0;
  for(let otherWalker of ghosts){
    if(otherWalker !== ghost){
     const distance = calcDistance(ghost, otherWalker);
     if(distance < 16){
      const angle = Math.atan2(ghost.y - otherWalker.y, ghost.x - otherWalker.x);
      moveX += Math.cos(angle)*0.5;
      moveY += Math.sin(angle)*0.5;
     }
    }
  }
  ghost.x += moveX;
  ghost.y += moveY;
}
