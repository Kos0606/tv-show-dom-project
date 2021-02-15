//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
makePageForEpisodes(allEpisodes);
let root = document.getElementById('root');
let search = document.getElementById('search');
let mainContainer = document.createElement('ul');
mainContainer.id = 'mainContainer';
root.appendChild(mainContainer);
// let input = document.createElement('input');
// input.type = 'text';
// input.id = 'myInput';
// input.onkeyup = 'mySearchFunction()';
// input.placeholder = 'Search';
// search.appendChild(input);
function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}



function setup() {
  // const allEpisodes = getAllEpisodes();
  // makePageForEpisodes(allEpisodes);
  // let root = document.getElementById('root');
  // level 100 
  allEpisodes.forEach(elem => {
    // let container = document.createElement('container');
    let list = document.createElement('li'); 
    let title = document.createElement('p'); // display title
    let img = document.createElement('img'); // display image
    let summary = document.createElement('p'); // display summary
    list.id = 'list';
    title.id = 'title';
    img.id = 'img';
    summary.id = 'summary';
    title.innerText = `${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}`;
    img.src = `${elem.image.medium}`;
    summary.innerHTML = elem.summary;
    list.appendChild(title);
    list.appendChild(img);
    list.appendChild(summary);
    mainContainer.appendChild(list);
  })
}
function myFunction() {
  // Declare variables

  

  // Loop through all list items, and hide those who don't match the search query
  
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

const mainContainer = document.getElementById('mainContainer');
const searchBar = document.getElementById('searchBar');
let allTvEpisodes = [];
searchBar.addEventListener('keyup', (e) => {
const searchString = e.target.value.toLowerCase();
const filteredEpisodes = allTvEpisodes.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
     displayEpisodes(filteredEpisodes);
});

const displayEpisodes = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li id ="list">
                <h2>Title: ${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}</h2>
                <p>Summary: ${elem.summary}</p>
                <img src= ${elem.image.medium}></img>
            </li>
        `;
        })
        .join('');
    mainContainer.innerHTML = htmlString;
};

loadCharacters();

