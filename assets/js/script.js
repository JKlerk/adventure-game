//Tabs
var title = document.getElementById("title");
var text = document.getElementById("text");
var image = document.getElementById("image");
var button1 = document.getElementById("button_1")
var button2 = document.getElementById("button_2")
var button3 = document.getElementById("button_3")
var inventorybutton = document.getElementById("inventorybutton")
var main = document.getElementById("main")
var currentScene;

var hatchet = true;
var pistol = true;
var m4 = false;
var scavDead = false;
var water = false;
var key = false;

function show(){
    main.style.display = "block";
    button1.style.display = "block";
    button2.style.display = "block";
    button3.style.display = "block";
    inventorybutton.style.display = "block";
    image.style.display = "block";
    text.style.display = "block";
}

function hide(){
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    inventorybutton.style.display = "block";
    image.style.display = "block";
    text.style.display = "block";
}

function fade(){
    main.style.animation = "fade 1.5s"
}

function hidemenu(){
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function startWoods(){
    currentScene = "Woods";
    title.innerHTML = "Woods";
    text.innerHTML = "You are in the woods";
    show();
    image.src = "assets/img/strandempty.png";
    button1.innerHTML = "Go forward";
    button1.setAttribute("onClick", 'midWay()');
    button2.innerHTML = "Go to the bunker";
    button2.setAttribute("onClick", 'goBunker()');
    button3.innerHTML = "Search the grass";
    button3.setAttribute("onClick", 'searchGrass()');
    console.log("Startwoods")
    if (hatchet == true){
        image.src = "assets/img/woodshatchet.png";
    } else{
        image.src = "assets/img/woodsempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/woodspistol.png";
        button3.style.display = "none"
    }
    if (m4 == true){
        image.src = "assets/img/woodsm4.png";
    }
}

function midWay(){
    currentScene = "midWay"
    title.innerHTML = "The field"
    text.innerHTML = "You are walking on a beautiful grass field"
    show()
    button1.innerHTML = "Go to the house"
    button1.setAttribute("onClick", 'insideHouse()')
    button2.innerHTML = "Go to the right"
    button2.setAttribute("onClick", 'waytoBeach()')
    button3.innerHTML = "Go to the trees"
    button3.setAttribute("onClick", 'startWoods()')
    console.log("midWay")
    if (hatchet == true){
        image.src = "assets/img/midwayhatchet.png";
    } else{
        image.src = "assets/img/midwayempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/midwaypistol.png";
    }
    if (m4 == true){
        image.src = "assets/img/midwaym4.png";
    }
}

function insideHouse(){
    currentScene = "insideHouse";
    title.innerHTML = "The house";
    text.innerHTML = "Hmmm.. An old house"
    show()
    button3.style.display = "none";
    inventorybutton.style.display = "block";
    button1.innerHTML = "Search the house";
    button1.setAttribute("onClick", 'searchHouse()')
    button2.innerHTML = "Leave the house"
    button2.setAttribute("onClick", 'midWay()')
    console.log("insideHouse")
    if (scavDead == true){
        text.style.display = "block";
        text.innerHTML = "The scav you killed does not have anything good on him.."
    }
    if (pistol == true){
        image.src = "assets/img/huispistol.png";
    }
    if (m4 == true){
        image.src = "assets/img/huism4.png";
        button1.style.display = "none";
    }
}

function searchHouse(){
    currentScene = "searchHouse";
    title.innerHTML = "The M4";
    text.innerHTML = "Looks like an M4!"
    show() 
    if (scavDead == false){
        button2.setAttribute("onClick", 'searchHouseExit()');
    } else{
        button2.setAttribute("onClick", 'insideHouse()');
    }  
    button3.style.display = "none";
    inventorybutton.style.display = "block";
    button1.innerHTML = "Take the M4";
    button1.setAttribute("onClick", 'takeM4()');  
    button2.innerHTML = "Leave the M4";
    console.log("searchHouse")
    if (hatchet == true){
        image.src = "assets/img/m4hatchet.png"
    } else {
        image.src = "assets/img/m4empty.png"
    }
    if (pistol == true){
        image.src = "assets/img/m4pistol.png"
    }
}

function takeM4(){
    m4 = true;
    if (scavDead == false){
        searchHouseExit();
    } else{
        insideHouse();
    }
}

function searchHouseExit(){
    if (scavDead == false){
        currentScene = "searchHouseExit"
        title.innerHTML = "Someone is here!"
        text.innerHTML = "Someone has found me!"
        show()
        if (pistol && hatchet == true){
            button1.style.display = "block";
            button1.innerHTML = "Shoot the scav";
            button1.setAttribute("onClick", 'killScav()');
            image.src = "assets/img/huisexitpistol.png"
        }
        if (hatchet == true){
            button1.style.display = "none";
            image.src = "assets/img/huisexithatchet.png"
        } else{
            button1.style.display = "none"
            image.src = "assets/img/huisexitempty.png"
        }
        if (pistol == true){
            button1.style.display = "block";
            button1.innerHTML = "Shoot the scav";
            button1.setAttribute("onClick", 'killScav()');
            image.src = "assets/img/huisexitpistol.png"
        }
        if (m4 == true){
            button1.style.display = "block";
            button1.innerHTML = "Shoot the scav";
            button1.setAttribute("onClick", 'killScav()');
            image.src = "assets/img/huisexitm4.png"
        }
        button2.innerHTML = "Do nothing";
        button2.setAttribute("onClick", 'youDied()');
        button3.style.display = "none";
        console.log("searchHouseExit");
    }
}

function killScav(){
    scavDead = true;
    insideHouse();
}

function searchGrass(){
    currentScene = "searchGrass"
    title.innerHTML = "The pistol"
    show()
    button1.innerHTML = "Take the pistol"
    button1.setAttribute("onClick", 'pistolFunc()')
    button2.innerHTML = "Leave the pistol"
    button2.setAttribute("onClick", 'startWoods()')
    button3.style.display = "none"
    console.log("searchGrass")
    if (hatchet == true){
        image.src = "assets/img/pistolhatchet.png"
    } else{
        image.src = "assets/img/pistolempty.png"
    }
    if (m4 == true){
        image.src = "assets/img/pistolm4.png"
    }
}

function pistolFunc(){
    pistol = true
    startWoods()
}

function waytoBeach(){
    currentScene = "waytoBeach";
    title.innerHTML = "Going to the beach!";
    text.innerHTML = "What a beautiful view!"
    show()
    button1.innerHTML = "Keep going";
    button1.setAttribute("onClick", 'tent()');
    button2.innerHTML = "Go back"
    button2.setAttribute("onClick", 'midWay()');
    button3.style.display = "none";
    console.log("waytoBeach");
    if (hatchet == true){
        image.src = "assets/img/waytobeachhatchet.png";
    } else{
        image.src = "assets/img/waytobeachempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/waytobeachpistol.png";
    }
    if (m4 == true){
        image.src = "assets/img/waytobeachm4.png";
    }
}

function waytoBeachBack(){
    currentScene = "waytoBeachBack";
    title.innerHTML = "Going back!";
    text.innerHTML = "Back at the field"
    show()
    button1.innerHTML = "Go to the house";
    button1.setAttribute("onClick", 'midWay()');
    button2.innerHTML = "Go back to the tent"
    button2.setAttribute("onClick", 'tent()');
    button3.style.display = "none";
    console.log("waytoBeachBack");
    if (hatchet == true){
        image.src = "assets/img/waytobeachbackhatchet.png";
    } else{
        image.src = "assets/img/waytobeachbackempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/waytobeachbackpistol.png";
    }
    if (m4 == true){
        image.src = "assets/img/waytobeachbackm4.png";
    }
}

function tent(){
    currentScene = "tent";
    title.innerHTML = "The tent";
    text.innerHTML = "Looks like a tent"
    show()
    button1.innerHTML = "Go to the tent";
    button1.setAttribute("onClick", 'lootTent()');
    button2.innerHTML = "Go to the beach"
    button2.setAttribute("onClick", 'startBeach()');
    button3.innerHTML = "Go to the house"
    button3.setAttribute("onClick", 'waytoBeachBack()')
    console.log("tent")
    if (hatchet == true){
        image.src = "assets/img/tenthatchet.png";
    } else{
        image.src = "assets/img/tentempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/tentpistol.png";
    }
    if (m4 == true){
        image.src = "assets/img/tentm4.png";
    }
}

function lootTent(){
    currentScene = "lootTent";
    show()
    button2.innerHTML = "Go to the beach"
    button2.setAttribute("onClick", 'startBeach()');
    button3.innerHTML = "Go back"
    button3.setAttribute("onClick", 'tent()');
    console.log("lootTent")
    if (water == true){
        button1.style.display = "none";
        title.innerHTML = "You have water!"
        text.innerHTML = "Looks like there is nothing left to take"
        if (hatchet == true){
            image.src = "assets/img/tentlootafterhatchet.png";
        } else{
            image.src = "assets/img/tentlootafterempty.png";
        }
        if (pistol == true){
            image.src = "assets/img/tentlootafterpistol.png";
        }
        if (m4 == true){
            image.src = "assets/img/tentlootafterm4.png";
        }
    } else {
        title.innerHTML = "At the tent";
        text.innerHTML = "Theres some water here"
        button1.innerHTML = "Take the water";
        button1.setAttribute("onClick", 'takeWater()');
        if (hatchet == true){
            image.src = "assets/img/tentloothatchet.png";
        } else{
            image.src = "assets/img/tentlootempty.png";
        }
        if (pistol == true){
            image.src = "assets/img/tentlootpistol.png";
        }
        if (m4 == true){
            image.src = "assets/img/tentlootm4.png";
        }
    }
}

function takeWater(){
    water = true
    lootTent()
}

function startBeach(){
    currentScene = "Beach"
    title.innerHTML = "Beach";
    show()
    button1.innerHTML = "Go to the boat"
    button1.setAttribute("onClick", 'lootHatchet()');
    button2.innerHTML = "Turn around";
    button2.setAttribute("onClick", 'leaveBeach()');
    button3.style.display = "none"
    text.innerHTML = "On the beach"
    console.log("startBeach")
    if (hatchet == true){
        image.src = "assets/img/beachhatchet.png";
        button1.style.display = "none"
        text.innerHTML = "Theres nothing left on the beach"
    } else {
        image.src = "assets/img/beachempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/beachpistol.png";
    } 
    if (m4 == true){
        image.src = "assets/img/beachm4.png";
    }
}

function lootHatchet(){
    currentScene = "lootHatchet"
    title.innerHTML = "The hatchet"
    show()
    button1.innerHTML = "Take the hatchet"
    button1.setAttribute("onClick", 'takeHatchet()');
    button2.innerHTML = "Go back";
    button2.setAttribute("onClick", 'startBeach()');
    button3.style.display = "none"
    text.innerHTML = "Looks like I found a hatchet!"
    console.log("lootHatchet")
    if (pistol == true){
        image.src = "assets/img/hatchetbeachpistol.png";
    } else{
        image.src = "assets/img/hatchetbeachempty.png"
    }
    if (m4 == true){
        image.src = "assets/img/hatchetbeachm4.png";
    }
}
function takeHatchet(){
    hatchet = true
    startBeach()
}

function leaveBeach(){
    currentScene = "leaveBeach"
    title.innerHTML = "On the beach";
    show()
    image.style.display = "block";
    button1.innerHTML = "Go to the tent"
    button1.setAttribute("onClick", 'tent()');
    button2.innerHTML = "Turn around";
    button2.setAttribute("onClick", 'startBeach()');
    button3.style.display = "none"
    console.log("leaveBeach")
    if (hatchet == true){
        image.src = "assets/img/beachbackhatchet.png";
    } else {
        image.src = "assets/img/beachbackempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/beachbackpistol.png";
    } 
    if (m4 == true){
        image.src = "assets/img/beachbackm4.png";
    }
}

function youDied(){
    hide();
    image.src = "assets/img/died.jpg";
    inventorybutton.style.display = "none";
    title.innerHTML = "You died!";
    text.innerHTML = "I'm very dead";
    console.log("You are dead");
}
function startOcean(){
    currentScene = "startOcean"
    title.innerHTML = "In the ocean";
    text.innerHTML = "In the ocean"
    show();
    image.src = "assets/img/ocean.jpg"
    button1.innerHTML = "Swim up to the beach (No return)";
    button1.setAttribute("onClick", 'startBeach()');
    button2.innerHTML = "Swim down";
    button2.setAttribute("onClick", 'swimDown()');
    button3.style.display = "none";
    console.log("Ocean")
}

function swimDown(){
    currentScene = "swimDown";
    title.innerHTML = "In the ocean";
    text.innerHTML = "At the boat";
    show();
    image.src = "assets/img/underwaterboat.jpg";
    button1.innerHTML = "Swim into the boat";
    button1.setAttribute("onClick", 'insideBoat()');
    button2.innerHTML = "Go back";
    button2.setAttribute("onClick", 'startOcean()');
    button3.style.display = "none";
    console.log("At the boat")
}

function goBunker(){
    currentScene = "goBunker";
    title.innerHTML = "At the bunker";
    text.innerHTML = "Just outisde the bunker";
    show();
    button1.innerHTML = "Go into the bunker";
    button1.setAttribute("onClick", 'insideBunker()');
    button2.innerHTML = "Go back";
    button2.setAttribute("onClick", 'startWoods()');
    button3.style.display = "none";
    console.log("goBunker");
    if (hatchet == true){
        image.src = "assets/img/bunkerhatchet.png";
    } else {
        image.src = "assets/img/bunkerempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/bunkerpistol.png";
    } 
    if (m4 == true){
        image.src = "assets/img/bunkerm4.png";
    }
}

function insideBunker(){
    currentScene = "insideBunker";
    title.innerHTML = "Inside the bunker";
    text.innerHTML = "Inside the dark bunker";
    show();
    if (key == false){
        button1.innerHTML = "Search the box";
        button1.setAttribute("onClick", 'searchBox()');
    } else{
        button1.style.display = "none";
    }
    button2.innerHTML = "Go back";
    button2.setAttribute("onClick", 'goBunker()');
    button3.style.display = "none"
    if (hatchet == true){
        image.src = "assets/img/inbunkerhatchet.png";
    } else {
        image.src = "assets/img/inbunkerempty.png";
    }
    if (pistol == true){
        image.src = "assets/img/inbunkerpistol.png";
    } 
    if (m4 == true){
        image.src = "assets/img/inbunkerm4.png";
    }
}

function searchBox(){
    currentScene = "searchBox";
    title.innerHTML = "The box";
    text.innerHTML = "Looting the box";
    show();
    button1.innerHTML = "Take the key";
    button1.setAttribute("onClick", 'takeKey()');
    button2.innerHTML = "Leave the key";
    button2.setAttribute("onClick", 'insideBunker()');
    button3.style.display = "none";
    if (hatchet == true){
        image.src = "assets/img/hatchetbox.png";
    } else {
        image.src = "assets/img/emptybox.png";
    }
    if (pistol == true){
        image.src = "assets/img/pistolbox.png";
    } 
    if (m4 == true){
        image.src = "assets/img/m4box.png";
    }
    //More weapons inventory
    if (hatchet && pistol == true){
        image.src = "assets/img/pistolhatchetbox.png";
    }
    if (hatchet && m4 == true){
        image.src = "assets/img/m4hatchetbox.png";
    }
    if (pistol && m4 == true){
        image.src = "assets/img/pistolm4box.png";
    }
    if (pistol && m4 && hatchet == true){
        image.src = "assets/img/inventoryallbox.png";
    }
}

function takeKey(){
    key = true;
    insideBunker();
}

function openInventory(){
    title.innerHTML = "Your inventory"
    hide()
    button1.style.display = "block"
    button1.innerHTML = "Go back"
    button1.setAttribute("onClick", 'checkScene()')
    inventorybutton.style.display = "none"
    console.log("Inventory")
    //Simple Inventory
    if (hatchet == true){
        image.src = "assets/img/inventoryhatchet.png";
    } else {
        image.src = "assets/img/inventoryempty.png";
    }

    if (pistol == true){
        image.src = "assets/img/inventorypistol.png";
    }

    if (m4 == true){
        image.src = "assets/img/inventorym4.png";
    }

    //More weapons inventory
    if (hatchet && pistol == true){
        image.src = "assets/img/inventorypistolhatchet.png";
    }
    if (hatchet && m4 == true){
        image.src = "assets/img/inventorym4hatchet.png";
    }
    if (pistol && m4 == true){
        image.src = "assets/img/inventorypistolm4.png";
    }
    if (pistol && m4 && hatchet == true){
        image.src = "assets/img/inventoryall.png";
    }
    //Water inventory
    if (water == true){
        image.src = "assets/img/emptywater.png";
    }
    if (water && pistol == true){
        image.src = "assets/img/pistolwater.png";
    }
    if (water && hatchet == true){
        image.src = "assets/img/hatchetwater.png";
    }
    if (water && m4 == true){
        image.src = "assets/img/m4water.png";
    }
    //More water inventory
    if (water && hatchet && pistol == true){
        image.src = "assets/img/pistolhatchetwater.png";
    }
    
    if (water && hatchet && m4 == true){
        image.src = "assets/img/m4hatchetwater.png";
    }
    if (water && pistol && m4 == true){
        image.src = "assets/img/m4pistolwater.png";
    }
    if (water && hatchet && pistol && m4 == true){
        image.src = "assets/img/allwater.png";
    }
    //Key inventory
    if (key == true){
        image.src = "assets/img/emptykey.png";
    }
    if (key && pistol == true){
        image.src = "assets/img/pistolkey.png";
    }
    if (key && hatchet == true){
        image.src = "assets/img/hatchetkey.png";
    }
    if (key && m4 == true){
        image.src = "assets/img/m4key.png";
    }
    //More key inventory
    if (key && hatchet && pistol == true){
        image.src = "assets/img/pistolhatchetkey.png";
    }
    
    if (key && hatchet && m4 == true){
        image.src = "assets/img/m4hatchetkey.png";
    }
    if (key && pistol && m4 == true){
        image.src = "assets/img/m4pistolkey.png";
    }
    if (key && hatchet && pistol && m4 == true){
        image.src = "assets/img/allkey.png";
    }
    //Key + Water inventory simple
    if (key && water == true){
        image.src = "assets/img/emptykey.png";
    }
    if (key && water && pistol == true){
        image.src = "assets/img/pistolkey.png";
    }
    if (key && water && hatchet == true){
        image.src = "assets/img/hatchetkey.png";
    }
    if (key && water && m4 == true){
        image.src = "assets/img/m4key.png";
    }
    //Key + Water inventory advanced
    if (key && water && hatchet && pistol == true){
        image.src = "assets/img/pistolhatchetkey.png";
    }
    if (key && water && hatchet && m4 == true){
        image.src = "assets/img/m4hatchetkey.png";
    }
    if (key && water && pistol && m4 == true){
        image.src = "assets/img/m4pistolkey.png";
    }
    if (key && water && hatchet && pistol && m4 == true){
        image.src = "assets/img/allkey.png";
    }
} 
function checkScene()
{
    switch(currentScene){
        case "Woods":
            startWoods();
            break;
        case "insideHouse":
            insideHouse();
            break;
        case "searchHouse":
            searchHouse();
            break;
        case "searchHouseExit":
            searchHouseExit();
            break;
        case "searchGrass":
            searchGrass();
            break;
        case "midWay":
            midWay();
            break;
        case "waytoBeach":
            waytoBeach();
            break;
        case "waytoBeachBack":
            waytoBeachBack();
            break;
        case "tent":
            tent();
            break;
        case "lootTent":
            lootTent();
            break;
        case "Beach":
            startBeach();
            break;
        case "lootHatchet":
            lootHatchet();
            break;
        case "leaveBeach":
            leaveBeach();
            break;
        case "startOcean":
            startOcean();
            break;
        case "swimDown":
            swimDown();
            break;
        case "goBunker":
            goBunker();
            break;
        case "insideBunker":
            insideBunker();
            break;
        case "searchBox":
            searchBox();
            break;
        default:
            startWoods();
    }
}