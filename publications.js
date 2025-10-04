// Update publication here
const publications = [
  {
    title: "A nonstationary probabilistic approach for probable maximum precipitation estimation based on global climate model large ensembles",
    intro: "Probable maximum precipitation (PMP) with annual exceedance probability and climate change projections",
    summary: "Traditional PMP methods can only provide deterministic and stationary estimates. We introduce a new approach that provides PMP estimates with exceedance probabilities and future projections, using global climate model (GCM) large ensembles and stochastic downscaling.",
    authors: "Yuan Liu, Daniel Wright, Felipe Quintero, John England, James Smith, and Lei Yan",
    journal: "Water Resources Research",
    journalShort: "WRR",
    year: "Under Review",
    link: "https://essopenarchive.org/users/706054/articles/1273322-a-nonstationary-probabilistic-approach-for-probable-maximum-precipitation-estimation-based-on-global-climate-model-large-ensembles",
    code: "https://github.com/lorenliu13/StormLab",
    pdf: "https://essopenarchive.org/users/706054/articles/1273322-a-nonstationary-probabilistic-approach-for-probable-maximum-precipitation-estimation-based-on-global-climate-model-large-ensembles",
    figure: "images/publications/wrr_2025.png"
  },
  {
    title: "Increased flooding hazard due to sequential extreme storms in the Lower Mississippi River",
    intro: "Extreme Mississippi floods are driven by groups of extreme storms, not single events",
    summary: "The role of clustered extreme storms on Mississippi floods has received little attention. We show that compound storm clusters, rather than isolated events, produce the most extreme floods and show increased frequency under future climate scenarios.",
    authors: "Yuan Liu, Daniel Wright, Felipe Quintero, Alexander Michalek, Gabriele Villarini, and James Smith",
    journal: "Science Advances",
    journalShort: "Sci. Adv.",
    year: "2025",
    link: "https://www.science.org/doi/10.1126/sciadv.adt1868",
    figure: "images/publications/sa_2025.png"
  },
  {
    title: "A nonstationary stochastic rainfall generator conditioned on global climate models for design flood analyses in the Mississippi and other large river basins",
    intro: "StormLab: Rainfall stochastic downscaling with space-time correlation structure",
    summary: "Traditional stochastic downscaling often overlooks rainfall space-time correlations. Our novel 'StormLab' approach incorporates rainfall space-time correlation structures in downscaling. It can efficiently downscale 1° GCM precipitation into 4-km scale with high accuracy over the continental U.S.",
    authors: "Yuan Liu, Daniel Wright, and David Lorenz",
    journal: "Water Resources Research",
    journalShort: "WRR",
    year: "2024",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023WR036826",
    code: "https://github.com/lorenliu13/StormLab",
    pdf: "https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2023WR036826",
    figure: "images/publications/wrr_2024.gif"
  },
  {
    title: "Accessing environmental, economic, and social impacts of inter-basin water transfer in China",
    authors: "Yuan Liu, Zhuohang Xin, Siao Sun, Chi Zhang, and Guangtao Fu",
    journal: "Journal of Hydrology",
    journalShort: "JOH",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S0022169423009502",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0022169423009502/pdfft",
    figure: "images/publications/joh_2023.png"
  },
  {
    title: "A storm-centered multivariate modeling of extreme precipitation frequency based on atmospheric water balance",
    intro: "STARCH: An efficient storm tracking and characterization algorithm",
    summary: "We introduce a new method STARCH to track and analyze extreme storms in the U.S. We use vine copula to model storm rainfall by linking weather factors like water vapor and moisture transport.",
    authors: "Yuan Liu and Daniel Wright",
    journal: "Hydrology and Earth System Sciences",
    journalShort: "HESS",
    year: "2022",
    link: "https://hess.copernicus.org/articles/26/5241/2022/",
    code: "https://github.com/lorenliu13/starch",
    pdf: "https://hess.copernicus.org/articles/26/5241/2022/hess-26-5241-2022.pdf",
    figure: "images/publications/hess_2022.gif"
  },
  {
    title: "Flood-induced geomorphic change of floodplain extent and depth: A case study of Hurricane Maria in Puerto Rico",
    authors: "Yihan Li, Daniel Wright, and Yuan Liu",
    journal: "Journal of Hydrologic Engineering",
    journalShort: "JHE",
    year: "2022",
    link: "https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29HE.1943-5584.0002199",
    pdf: "https://ascelibrary.org/doi/pdf/10.1061/%28ASCE%29HE.1943-5584.0002199"
  },
  {
    title: "Real-time construction of sloshing-induced hydrodynamic field based on an intelligent image processing technique integrated with artificial damping model",
    intro: "Real-time pressure field visualization in a tank with sloshing liquid",
    summary: "We combine computer vision and a hydrodynamic model to visualize the pressure field in a tank with sloshing liquid in real time.",
    authors: "Yuan Liu, Jierao Dai, and Chongwei Zhang",
    journal: "Ocean Engineering",
    journalShort: "OE",
    year: "2021",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801820312890",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0029801820312890/pdfft",
    figure: "images/publications/oe_2021.gif"
  }
];

// Add array for selected publications to show on main page
const selectedPublications = [
  "A nonstationary probabilistic approach for probable maximum precipitation estimation based on global climate model large ensembles",
  "Increased flooding hazard due to sequential extreme storms in the Lower Mississippi River",
  "A nonstationary stochastic rainfall generator conditioned on global climate models for design flood analyses in the Mississippi and other large river basins",
  "A storm-centered multivariate modeling of extreme precipitation frequency based on atmospheric water balance"
];

// Function to generate HTML for a publication
function generatePublicationHTML(publication) {
  const buttons = [];

  // Add PDF button if available
  if (publication.pdf) {
    buttons.push(`
      <a href="${publication.pdf}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
        PDF
      </a>
    `);
  }

  // Add Code button if available
  if (publication.code) {
    buttons.push(`
      <a href="${publication.code}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
        Code
      </a>
    `);
  }

  const buttonsHTML = buttons.length > 0 ? `
    <div class="mt-1">
      ${buttons.join('')}
    </div>
  ` : '';

  // Underline "Yuan Liu" in authors
  const authorsWithUnderline = publication.authors.replace(/Yuan Liu/g, '<u>Yuan Liu</u>');

  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row h-full">
        <!-- Left side: Figure -->
        <div class="md:w-2/5 p-4 flex items-center justify-center bg-gray-50">
          <div class="w-full h-48 flex items-center justify-center">
            <img src="${publication.figure || 'images/placeholder.png'}" alt="${publication.title}" 
                 class="max-w-full max-h-full object-contain rounded">
          </div>
        </div>
        
        <!-- Right side: Paper information -->
        <div class="md:w-3/5 p-6 flex flex-col h-full">
          <div class="space-y-3">
            ${publication.intro ? 
              `<p class="text-blue-800 text-base font-bold">${publication.intro}</p>` : 
              `<p class="text-blue-800 text-base font-bold">${publication.title}</p>`
            }
            ${publication.summary ? 
              `<p class="text-gray-600 text-base text-justify">${publication.summary}</p>` : 
              ``
            }
          </div>
          <div class="mt-3">
            <p class="text-gray-600 text-base mb-4">
              ${publication.link ? 
                `<a href="${publication.link}" target="_blank" class="text-blue-800 hover:underline">${authorsWithUnderline}, ${publication.journalShort}, ${publication.year}</a>` : 
                `${authorsWithUnderline}, ${publication.journalShort}, ${publication.year}`
              }
            </p>
            ${buttonsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to group publications by year
function groupPublicationsByYear(pubs) {
  const groups = {};
  
  // First, group all publications by year
  pubs.forEach(pub => {
    const year = pub.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(pub);
  });
  
  // Sort years in descending order
  return Object.entries(groups)
    .sort(([yearA], [yearB]) => {
      // Handle special cases like "Under Review" and "Under revision"
      const numA = isNaN(yearA) ? 9999 : parseInt(yearA);
      const numB = isNaN(yearB) ? 9999 : parseInt(yearB);
      return numB - numA;
    });
}

// Function to generate HTML for a year section
function generateYearSectionHTML(year, pubs) {
  return `
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-blue-800 border-b border-gray-200 pb-2">${year}</h3>
      <div class="space-y-6">
        ${pubs.map(pub => generatePublicationHTML(pub)).join('')}
      </div>
    </div>
  `;
}

// Function to display publications grouped by year
function displayPublicationsByYear(filteredPubs = publications) {
  const groupedPubs = groupPublicationsByYear(filteredPubs);
  const html = groupedPubs
    .map(([year, pubs]) => generateYearSectionHTML(year, pubs))
    .join('');
  
  const container = document.getElementById('publications-by-year');
  if (container) {
    container.innerHTML = html;
  }
}

// Function to get unique years from publications
function getUniqueYears() {
  const years = publications
    .map(pub => pub.year)
    .filter(year => !isNaN(year)) // Filter out non-numeric years (like "Under Review")
    .sort((a, b) => b - a); // Sort in descending order
  return [...new Set(years)]; // Remove duplicates
}

// Function to populate year filter
function populateYearFilter() {
  const yearFilter = document.getElementById('yearFilter');
  if (!yearFilter) return; // Exit if yearFilter doesn't exist
  
  const years = getUniqueYears();
  
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

// Function to filter publications
function filterPublications() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const selectedYear = document.getElementById('yearFilter').value;
  
  const filteredPubs = publications.filter(pub => {
    const matchesSearch = (
      pub.title.toLowerCase().includes(searchTerm) ||
      pub.authors.toLowerCase().includes(searchTerm) ||
      pub.year.toString().toLowerCase().includes(searchTerm) ||
      pub.journal.toLowerCase().includes(searchTerm)
    );
    
    const matchesYear = selectedYear === 'all' || pub.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });
  
  displayPublicationsByYear(filteredPubs);
}

// Function to display selected publications on main page
function displaySelectedPublications() {
  const container = document.getElementById('selected-publications');
  if (!container) return; // Exit if container doesn't exist
  
  const selectedPubs = publications.filter(pub => 
    selectedPublications.includes(pub.title)
  );
  
  container.innerHTML = selectedPubs
    .map(pub => generatePublicationHTML(pub))
    .join('');
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Only run these functions if we're on the publications page
  if (document.getElementById('publications-by-year')) {
    displayPublicationsByYear();
    populateYearFilter();
    
    // Add event listeners for search and filter
    document.getElementById('searchInput')?.addEventListener('input', filterPublications);
    document.getElementById('yearFilter')?.addEventListener('change', filterPublications);
  }
  
  // Always try to display selected publications
  if (document.getElementById('selected-publications')) {
    displaySelectedPublications();
  }
});

// Only run browser-specific code if we're in a browser environment
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    if (document.getElementById('selected-publications')) {
      displaySelectedPublications();
    }
  });
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { publications, selectedPublications, generatePublicationHTML };
} 