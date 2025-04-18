// Array for talks
const talks = [
  {
    title: "Increasing flood hazard due to extreme storm sequences in the Lower Mississippi River Basin in a warming climate",
    authors: "Yuan Liu, Daniel Wright, Felipe Quintero, Alexander Michalek, Gabriele Villarini, and James Smith",
    event: "AGU Fall Meeting",
    year: "2024",
    location: "Washington, D.C.",
    date: "December, 2024",
    abstract: "Extreme floods in large river basins such as the Lower Mississippi River Basin (LMRB) can have significant regional and global socioeconomic impacts. These floods are often caused by sequences of extreme storms rather than a single event, due to the basin's large water storage capacity and complex river network. However, the interactions between extreme storm sequences and resulting floods, as well as their changes in a warming climate, remain poorly understood. Here we combine a novel stochastic rainfall generator (StormLab) with a large-scale hydrologic model (the Hillslope Link Model) to simulate 10,000 realizations of winter-spring flood scenarios for 1900-2100 in the LMRB, conditioned on large ensembles of a global climate model. We find a nonlinear increase in winter-spring flood hazard caused by sequential extreme storms under future climate conditions (SSP3-7.0 scenario). The annual exceedance probability of the official LMRB design flood is approximately 1/57,000 (95% CI: 1/15,000-1/680,000) under the current climate, which is projected to rise to 1/1,700 (95% CI: 1/900-1/3,600) in the middle of the century and to only 1/150 (95% CI: 1/90-1/260) by the century's end. We also find substantial increases in flood peak duration and total flood volume that have implications for dam and levee safety. The increased flood hazard is linked to an intensification of extreme storm sequences, characterized by increased storm frequency, higher precipitation intensity, greater storm area, and shorter intervals between storms. These findings provide insights into the potential impacts of climate change on future flood hazard in the Lower Mississippi River Basin. The approach used in this study demonstrates the value of utilizing information from large ensembles of global climate models for flood frequency analysis in a changing climate.",
    figure: "images/talks/agu2024_figure.png"
  },
  {
    title: "A Semi-dynamic model of rainstorms and rainfall frequency up to the probable maximum precipitation for continental river basins",
    authors: "Yuan Liu, Daniel Wright, and David Lorenz",
    event: "EWRI Congress",
    year: "2024",
    location: "Milwaukee, WI",
    date: "May, 2024",
    abstract: "TBD",
    figure: "images/talks/ewri2024_figure.png"
  },
  {
    title: "A climate-model-informed stochastic rainfall generator for the Mississippi River Basin",
    authors: "Yuan Liu, Daniel Wright, and David Lorenz",
    event: "AGU Fall Meeting",
    year: "2023",
    location: "San Francisco, CA",
    date: "December, 2023",
    abstract: "TBD",
    figure: "images/talks/agu2023_figure.png"
  },
  {
    title: "Stochastic design storm sequence in the Lower Mississippi River Basin",
    authors: "Yuan Liu, Daniel Wright, and David Lorenz",
    event: "8th Annual Probabilistic Flood Hazard Assessment Research Workshop",
    year: "2023",
    location: "Rockville, MD",
    date: "October, 2023",
    abstract: "TBD",
    figure: "images/talks/pfhar2023_figure.png"
  },
  {
    title: "A Multivariate model of atmospheric water balance to estimate extreme storm frequency in the Mississippi basin",
    authors: "Yuan Liu and Daniel Wright",
    event: "AGU Fall Meeting",
    year: "2022",
    location: "Chicago, IL",
    date: "December, 2022",
    abstract: "TBD",
    figure: "images/talks/agu2022_figure.png"
  },
  {
    title: "A storm-centered multivariate modeling of extreme precipitation frequency based on atmospheric water balance",
    authors: "Yuan Liu and Daniel Wright",
    event: "Iowa Flood Workshop",
    year: "2022",
    location: "Iowa City, IA",
    date: "June, 2022",
    abstract: "TBD",
    figure: "images/talks/iowa2022_figure.png"
  }
];

// Function to generate HTML for a talk
function generateTalkHTML(talk) {
  const buttons = [];
  if (talk.pdf) {
    buttons.push(`
      <a href="${talk.pdf}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
        PDF
      </a>
    `);
  }
  const buttonsHTML = buttons.length > 0 ? `
    <div class="mt-1">
      ${buttons.join('')}
    </div>
  ` : '';

  // Underline "Yuan Liu" in authors
  const authorsWithUnderline = talk.authors.replace(/Yuan Liu/g, '<u>Yuan Liu</u>');

  return `
    <li class="mb-4">
      <a href="talks/talk_${talk.year}_${talk.event.toLowerCase().replace(/\s+/g, '_')}.html" class="text-blue-800 hover:underline">
        ${talk.title}
      </a><br>
      <span class="text-gray-600 text-sm">${authorsWithUnderline}</span><br>
      <span class="text-gray-600 text-sm">${talk.event}, ${talk.location}, ${talk.year}</span>
      ${buttonsHTML}
    </li>
  `;
}

// Function to display talks
function displayTalks() {
  const container = document.getElementById('talks-list');
  if (!container) return; // Exit if container doesn't exist
  
  // Sort talks by date in descending order
  const sortedTalks = [...talks].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Display only the 3 most recent talks
  const recentTalks = sortedTalks.slice(0, 3);
  
  container.innerHTML = recentTalks.map(talk => `
    <li class="mb-4">
      <div class="flex items-start">
        <div class="flex-shrink-0 w-3 h-3 mt-1.5 bg-blue-500 rounded-full"></div>
        <div class="ml-4">
          <p class="text-gray-800">${talk.title}</p>
          <p class="text-sm text-gray-600">${talk.event} - ${talk.date}</p>
        </div>
      </div>
    </li>
  `).join('');
}

// Function to display latest talks on main page
function displayLatestTalks() {
  const container = document.getElementById('recent-talks');
  if (!container) {
    console.error('Could not find recent-talks container');
    return;
  }

  // Sort talks by year in descending order and take the first 3
  const latestTalks = [...talks]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 3);

  container.innerHTML = latestTalks
    .map(talk => generateTalkHTML(talk))
    .join('');
}

// Only run browser-specific code if we're in a browser environment
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    if (document.getElementById('talks-list')) {
      displayTalks();
    }
    if (document.getElementById('recent-talks')) {
      displayLatestTalks();
    }
  });
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { talks, generateTalkHTML };
} 