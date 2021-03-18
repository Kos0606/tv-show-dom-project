//You can edit ALL of the code here
const shows = getAllShows();
const allEpisodes = getAllEpisodes();
makePageForEpisodes(allEpisodes);
let root = document.getElementById('root');
let search = document.getElementById('search');
let mainContainer = document.createElement('ul');
mainContainer.id = 'mainContainer';
root.appendChild(mainContainer);
function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
//Level 300
let form = document.createElement("form");
form.class = "Selection";
document.body.appendChild(form);
let label = document.createElement("label");
label.for ="episodes";
label.id = "allEpisodes";
label.innerHTML = "Episodes Selector";
form.appendChild(label);
let select = document.createElement("select");
select.name = "episodes";
select.id = "episodes";
form.appendChild(select);
for( let i =0; i < allEpisodes.length; i++) {
  let option = document.createElement("option");
  option.id = "option";
  select.appendChild(option);
  let elem = allEpisodes[i];
  option.value = `${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}`;
  

}
//Level 400
// show drop down
function ShowsDropdown(){
  let choice = document.getElementById( 'episodes' );
  shows.forEach( ( show ) =>
  { 
    let chooseFrom  = document.getElementById( 'option' );
    option.innerHTML = shows.name;
  } );
  select.addEventListener( 'change', (e) =>
  {
    let showId = e.target.value;
      updateEpisode(showId)
  })
}

//Level 350 and 500

function populateShowListings()
{
  shows.forEach( (show) =>
  {
    let container = document.createElement( 'div' );
    container.id = show.id;
    let title = document.createElement( 'h3' );
    title.innerHTML = show.name;
    container.appendChild( title );
    if ( show.image != null )
    {
      let img = document.createElement( 'img' );
      img.src = show.image.medium;
      container.appendChild( img );
    }
    let summary = document.createElement( 'div' );
    summary.innerHTML = show.summary;
    container.appendChild( summary );
    let genres = document.createElement( 'p' );
    genres.innerHTML = show.genres.join();
    container.appendChild( genres );
    let status = document.createElement( 'p' );
    status.innerHTML = `STATUS: ${show.status}`;
    container.appendChild( status );
    let rating = document.createElement( 'p' );
    rating.innerHTML = show.rating.average;
    container.appendChild( rating );
    let runtime = document.createElement( 'p' );
    runtime.innerHTML = show.runtime;
    container.appendChild( runtime );
    let showsView = document.createElement("showsView");
    showsView.appendChild( container );
    container.addEventListener( 'click', ( e ) =>
    {
      const showId = e.currentTarget.id;
      updateEpisode( showId );
      showsView.style.display = 'none';
      
    })
  })
}
function updateEpisode(showId)
{
  fetch( `https://api.tvmaze.com/shows/${showId}/episodes` )
    .then( response => response.json() )
    .then( (data) => {
      const allEpisodes = data;
      populateEpisodeDropdown( allEpisodes );
      makePageForEpisodes( allEpisodes );
    } )
}

// level 100 
function setup() {
   
allEpisodes.forEach(elem => {
    let list = document.createElement('li');
    let title = document.createElement('h4'); // create display title tag
    let img = document.createElement('img'); // create display image tag
    title.id = 'title';
    img.id = 'img';
    title.innerText = `${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}`;
    img.src = `${elem.image.medium}`;
    list.innerHTML = elem.summary;
    list.insertBefore(title, list.childNodes[0]);
    list.insertBefore(img, list.childNodes[1]);
    mainContainer.appendChild(list);
  })
}
  
  // level 200 (live search)
function mySearchFunction() {
  // Declare variables
  let input, filter, ul, li, title, summaryNoP, i;
  // User Input
  input = document.getElementById("myInput");
  // Filter, makes search not case sensitive
  filter = input.value.toUpperCase();
  console.log("filter", filter);
  // Grabs the parent element by id
  ul = document.getElementById("mainContainer");
  // Individual item on list
  li = ul.getElementsByTagName("li");
  console.log(li.length);
  // Treats lists items like an array, where each item can be accessed through      it's index
  for (i = 0; i < allEpisodes.length; i++) {
    title = allEpisodes[i].name;
    summaryNoP = allEpisodes[i].summary;
    summaryNoP = summaryNoP.replace(/(<p>|<\/p>)/g, ""); // regex to remove <p> tag from data
    // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
    if (summaryNoP.toUpperCase().indexOf(filter) > -1 || title.toUpperCase().indexOf(filter) > -1) {
      // Displays list items that are a match, and nothing if no match
      li[i].classList.remove('hidden');
    } else {
      li[i].classList.add('hidden');
    }
  }
  // display search's result number
  //document.getElementById('result').textContent = `Displaying ${document.querySelectorAll('#mainContainer li:not(.hidden)').length}/${allEpisodes.length} episodes`;
} 
  
  
//Level 300 (Add an Episode Selector)
//let form = document.createElement("form");
//form.class = "Selection";
//document.body.appendChild(form);
//let label = document.createElement("label");
//label.for ="episodes";
//label.innerHTML = "Episodes Selector";
//form.appendChild(label);
//let select = document.createElement("select");
//select.name = "episodes";
//select.id = "episodes";
//form.appendChild(select);
//let option = document.createElement("option");
//option.value = allEpisodes.forEach(elem => {`${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}`;
//for( let i =0; i < allEpisodes.length; i++) {
  //let option = document.createElement("option");
  //select.appendChild(option);
  //let elem = allEpisodes[i];
  //option.value = `${elem.name} - S${pad(elem.season, 2)}E${pad(elem.number,2)}`;

//}

//})
//select.appendChild(option);

  // Loop through all list items, and hide those who don't match the search query
  


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
//rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;





