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
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('mainContainer');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

