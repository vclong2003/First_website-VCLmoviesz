function search() {
    let input, searchValue, main, movs, movLinks, movLinkTxtValue;
    input = document.getElementById("searchBox");
    searchValue = input.value.toUpperCase();
    main = document.getElementById("main");
    movs = main.getElementsByTagName("div");
    for (i = 0; i < movs.length; i ++) {
        movLinks = movs[i].getElementsByTagName("a")[1];
        movLinkTxtValue = movLinks.textContent || movLinks.innerText;
        if (movLinkTxtValue.toUpperCase().indexOf(searchValue) > -1) {
            movs[i].style.display = "";
        }
        else {
            movs[i].style.display = "none";
        }
    }
}
function searchOnMobile() {
    let input, searchValue, main, movs, movLinks, movLinkTxtValue;
    input = document.getElementById("mobileSearchBox");
    searchValue = input.value.toUpperCase();
    main = document.getElementById("main");
    movs = main.getElementsByTagName("div");
    for (i = 0; i < movs.length; i ++) {
        movLinks = movs[i].getElementsByTagName("a")[1];
        movLinkTxtValue = movLinks.textContent || movLinks.innerText;
        if (movLinkTxtValue.toUpperCase().indexOf(searchValue) > -1) {
            movs[i].style.display = "";
        }
        else {
            movs[i].style.display = "none";
        }
    }
}

let movies = [
    {title : "Project Power (2020)", posterLink : "cover/2020/project power.jpg", siteLink : "MOVs/2020/project_power.html"},
    {title : "Dolittle (2020)", posterLink : "cover/2020/dolittle.jpg", siteLink : "MOVs/2020/dolittle.html"},
    {title : "Artemis Fowl (2020)", posterLink : "cover/2020/artemis fowl.jpg", siteLink : "MOVs/2020/artemis_fowl.html"},
    {title : "Peninsula (2020)", posterLink : "cover/2020/peninsula.jpg", siteLink : "MOVs/2020/peninsula.html"},
    {title : "1917 (2019)", posterLink : "cover/2019/1917.jpg", siteLink: "MOVs/2019/1917.html"},
    {title : "Alita Battle Angel (2019)", posterLink : "cover/2019/alita battle angel.jpg", siteLink: "MOVs/2019/alita_battle_angel.html"},
    {title : "Anna (2019)", posterLink : "cover/2019/anna.jpg", siteLink: "MOVs/2019/anna.html"},
    {title : "Apollo 11 (2019)", posterLink : "cover/2019/apollo 11.jpg", siteLink: "MOVs/2019/apollo_11.html"},
    {title : "Avengers Endgame (2019)", posterLink : "cover/2019/avenger andgame.jpg", siteLink: "MOVs/2019/endgame.html"},
    {title : "Brightburn (2019)", posterLink : "cover/2019/brightburn.jpg", siteLink: "MOVs/2019/brightburn.html"},
    {title : "Captain Marvel (2019)", posterLink : "cover/2019/captain marvel.jpg", siteLink: "MOVs/2019/captain_marvel.html"},
    {title : "Ford v Ferrari (2019)", posterLink : "cover/2019/ford v ferrari.jpg", siteLink: "MOVs/2019/ford_v_ferrari.html"},
    {title : "Glass (2019)", posterLink : "cover/2019/glass.jpg", siteLink: "MOVs/2019/glass.html"},
    {title : "Ip Man 4 (2019)", posterLink : "cover/2019/ip man 4.jpg", siteLink: "MOVs/2019/ip_man_4.html"},
    {title : "Pokemon Detective Pikachu (2019)", posterLink : "cover/2019/detective pikachu.jpg", siteLink: "MOVs/2019/detective_pikachu.html"},
    {title : "Radioactive (2019)", posterLink : "cover/2019/radioactive.jpg", siteLink: "MOVs/2019/radioactive.html"},
    {title : "Shazam (2019)", posterLink : "cover/2019/shazam.jpg", siteLink: "MOVs/2019/shazam.html"},
    {title : "Spiderman Far From Home (2019)", posterLink : "cover/2019/far from home.jpg", siteLink: "MOVs/2019/far_from_home.html"},
    {title : "Us (2019)", posterLink : "cover/2019/us.jpg", siteLink: "MOVs/2019/us.html"},
    {title : "Aquaman (2018)", posterLink : "cover/2018/aquaman .jpg", siteLink: "MOVs/2018/aquaman.html"},
    {title : "A Quiet Place (2018)", posterLink : "cover/2018/a quiet place.jpg", siteLink: "MOVs/2018/a_quiet_place.html"},
    {title : "Bumblebee (2018)", posterLink : "cover/2018/bumblebee.jpg", siteLink: "MOVs/2018/bumblebee.html"},
    {title : "Fifty shades freed (2018)", posterLink : "cover/2018/fifty shade freed.jpg", siteLink: "MOVs/2018/fifty_shades_freed.html"},
    {title : "Hunter Killer (2018)", posterLink : "cover/2018/hunter killer.jpg", siteLink: "MOVs/2018/hunter_killer.html"},
    {title : "Johnny English Strikes Again (2018)", posterLink : "cover/2018/johnny english strike again.jpg", siteLink: "MOVs/2018/johnny_english_strikes_again.html"},
    {title : "Skycraper (2018)", posterLink : "cover/2018/skycraper.jpg", siteLink: "MOVs/2018/skyscraper.html"},
    {title : "The Equalizer 2 (2018)", posterLink : "cover/2018/the equalizer 2.jpg", siteLink: "MOVs/2018/the_equalizer_2.html"},
    {title : "Venom (2018)", posterLink : "cover/2018/venom.jpg", siteLink: "MOVs/2018/venom.html"},
]   
let movItems = [];
let main = document.getElementById("main");
for (let i = 0; i < movies.length; i ++) {
    let div = document.createElement("div");
    let img = document.createElement("IMG");
    let movName = document.createElement("a");
    let imgContainer = document.createElement("a");
    div.className = "movItem";
    img.src = movies[i].posterLink;
    img.id = "movCover";
    movName.className = "movName";
    movName.href = movies[i].siteLink;
    movName.innerHTML = movies[i].title;
    imgContainer.href = movies[i].siteLink;
    imgContainer.appendChild(img);
    div.appendChild(imgContainer);
    div.appendChild(movName);
    movItems.push(div);
}

function test() {
    for (let i = 0; i < movItems.length; i++)
    {
        main.appendChild(movItems[i]);
    }
}
test();