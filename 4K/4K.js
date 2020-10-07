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
    {title : "Project Power (2020)", posterLink : "../cover/2020/project power.jpg", siteLink : "../MOVs/2020/project_power.html"},
    {title : "Dolittle (2020)", posterLink : "../cover/2020/dolittle.jpg", siteLink : "../MOVs/2020/dolittle.html"},
    {title : "Artemis Fowl (2020)", posterLink : "../cover/2020/artemis fowl.jpg", siteLink : "../MOVs/2020/artemis_fowl.html"},
    {title : "Radioactive (2019)", posterLink : "../cover/2019/radioactive.jpg", siteLink: "../MOVs/2019/radioactive.html"},

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

function pushMov() {
    for (let i = 0; i < movItems.length; i++)
    {
        main.appendChild(movItems[i]);
    }
}
pushMov();