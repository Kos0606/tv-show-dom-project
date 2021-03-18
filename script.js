//You can edit ALL of the code here
let rootElem;
let mainContainer;
let allEpisodes;

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

}

function makePageForEpisodes(episodeList) {
  rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  mainContainer = document.createElement("ul");
  mainContainer.id = "mainContainer";
  root.appendChild(mainContainer);
  episodeList.forEach((episode) => {
    displayEpisode(episode);
  })
  
}

function displayEpisode(episode) {
  // rootElem.textContent = episode.name;
  let list = document.createElement("li");
  episode.display = list;
  let title = document.createElement("h4"); // create display title tag
  let img = document.createElement("img"); // create display image tag
  // title.id = 'title';
  // img.id = 'img';
  title.innerText = `${episode.name} - S${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
  img.src = `${episode.image.medium}`;
  list.innerHTML = episode.summary;
  list.insertBefore(title, list.childNodes[0]);
  list.insertBefore(img, list.childNodes[1]);
  mainContainer.appendChild(list);
}

//level 200 (live search)
function mySearchFunction() {
  // Declare variables
  let input, searchText, ul, li, title, summaryNoP, i;
  // User Input
  input = document.getElementById("myInput");
  // Filter, makes search not case sensitive
  searchText = input.value.toLowerCase();
  console.log("searchText", searchText);
  allEpisodes.forEach((episode) => {
    title = episode.name;
    summaryNoP = episode.summary;
    summaryNoP = summaryNoP.replace(/(<p>|<\/p>)/g, ""); // regex to remove <p> tag from data
    // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
    if (
      summaryNoP.toLowerCase().indexOf(searchText) > -1 ||
      title.toLowerCase().indexOf(searchText) > -1
    ) {
      // Displays list items that are a match, and nothing if no match
      episode.display.classList.remove("hidden");
    } else {
      episode.display.classList.add("hidden");
    }
  }); 
  // display search's result number
  //document.getElementById('result').textContent = `Displaying ${document.querySelectorAll('#mainContainer li:not(.hidden)').length}/${allEpisodes.length} episodes`;
} 

window.onload = setup;
