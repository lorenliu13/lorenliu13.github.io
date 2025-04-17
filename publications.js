// Update publication here
const publications = [
  {
    title: "A nonstationary probabilistic approach for probable maximum precipitation estimation based on global climate model large ensembles",
    authors: "Yuan Liu, Daniel Wright, Felipe Quintero, John England, James Smith, and Lei Yan",
    journal: "Water Resources Research",
    year: "Under Review",
    link: "https://essopenarchive.org/users/706054/articles/1273322-a-nonstationary-probabilistic-approach-for-probable-maximum-precipitation-estimation-based-on-global-climate-model-large-ensembles",
    code: "https://github.com/lorenliu13/StormLab",
    pdf: "https://essopenarchive.org/users/706054/articles/1273322-a-nonstationary-probabilistic-approach-for-probable-maximum-precipitation-estimation-based-on-global-climate-model-large-ensembles"
  },
  {
    title: "Increased flooding hazard due to sequential extreme storms in the Lower Mississippi River",
    authors: "Yuan Liu, Daniel Wright, Felipe Quintero, Alexander Michalek, Gabriele Villarini, and James Smith",
    journal: "Science Advances",
    year: "Under Revision",
    link: "#"
  },
  {
    title: "A nonstationary stochastic rainfall generator conditioned on global climate models for design flood analyses in the Mississippi and other large river basins",
    authors: "Yuan Liu, Daniel Wright, and David Lorenz",
    journal: "Water Resources Research",
    year: "2024",
    link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023WR036826",
    code: "https://github.com/lorenliu13/StormLab",
    pdf: "https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2023WR036826"
  },
  {
    title: "Accessing environmental, economic, and social impacts of inter-basin water transfer in China",
    authors: "Yuan Liu, Zhuohang Xin, Siao Sun, Chi Zhang, and Guangtao Fu",
    journal: "Journal of Hydrology",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S0022169423009502",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0022169423009502/pdfft"
  },
  {
    title: "A storm-centered multivariate modeling of extreme precipitation frequency based on atmospheric water balance",
    authors: "Yuan Liu, Daniel Wright",
    journal: "Hydrology and Earth System Sciences",
    year: "2022",
    link: "https://hess.copernicus.org/articles/26/5241/2022/",
    code: "https://github.com/lorenliu13/starch",
    pdf: "https://hess.copernicus.org/articles/26/5241/2022/hess-26-5241-2022.pdf"
  },
  {
    title: "Flood-induced geomorphic change of floodplain extent and depth: A case study of Hurricane Maria in Puerto Rico",
    authors: "Yihan Li, Daniel Wright, and Yuan Liu",
    journal: "Journal of Hydrologic Engineering",
    year: "2022",
    link: "https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29HE.1943-5584.0002199",
    pdf: "https://ascelibrary.org/doi/pdf/10.1061/%28ASCE%29HE.1943-5584.0002199"
  },
  {
    title: "Real-time construction of sloshing-induced hydrodynamic field based on an intelligent image processing technique integrated with artificial damping model",
    authors: "Yuan Liu, Jierao Dai, and Chongwei Zhang",
    journal: "Ocean Engineering",
    year: "2021",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801820312890",
    pdf: "https://www.sciencedirect.com/science/article/pii/S0029801820312890/pdfft"
  }
];

// Add array for selected publications to show on main page
const selectedPublications = [
  "A nonstationary probabilistic approach for probable maximum precipitation estimation based on global climate model large ensembles",
  "Increased flooding hazard due to sequential extreme storms in the Lower Mississippi River",
  "A nonstationary stochastic rainfall generator conditioned on global climate models for design flood analyses in the Mississippi and other large river basins",
  "Accessing environmental, economic, and social impacts of inter-basin water transfer in China",
  "A storm-centered multivariate modeling of extreme precipitation frequency based on atmospheric water balance"
];

// Function to generate HTML for a publication
function generatePublicationHTML(pub) {
  const buttons = [];
  if (pub.code) {
    buttons.push(`
      <a href="${pub.code}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors mr-2">
        Code
      </a>
    `);
  }
  if (pub.pdf) {
    buttons.push(`
      <a href="${pub.pdf}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
        PDF
      </a>
    `);
  }
  const buttonsHTML = buttons.length > 0 ? `
    <div class="mt-1">
      ${buttons.join('')}
    </div>
  ` : '';

  return `
    <li class="mb-6">
      <a href="${pub.link}" class="text-blue-800">
        ${pub.title}
      </a><br>
      <span class="text-gray-600 text-sm">${pub.authors}</span><br>
      <span class="text-gray-600 text-sm italic">${pub.journal}</span>, <span class="text-gray-600 text-sm">${pub.year}</span>
      ${buttonsHTML}
    </li>
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
      <ul class="list-disc pl-5">
        ${pubs.map(pub => generatePublicationHTML(pub)).join('')}
      </ul>
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
  const container = document.getElementById('recent-publications');
  if (!container) {
    console.error('Could not find recent-publications container');
    return;
  }

  const selectedPubs = publications.filter(pub => 
    selectedPublications.includes(pub.title)
  );

  if (selectedPubs.length === 0) {
    console.error('No selected publications found');
    return;
  }

  container.innerHTML = selectedPubs
    .map(pub => {
      // Underline Yuan Liu's name in authors
      const authorsWithUnderline = pub.authors.replace(/Yuan Liu/g, '<span class="underline">Yuan Liu</span>');
      
      const buttons = [];
      if (pub.code) {
        buttons.push(`
          <a href="${pub.code}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors mr-2">
            Code
          </a>
        `);
      }
      if (pub.pdf) {
        buttons.push(`
          <a href="${pub.pdf}" class="inline-block px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            PDF
          </a>
        `);
      }
      const buttonsHTML = buttons.length > 0 ? `
        <div class="mt-1">
          ${buttons.join('')}
        </div>
      ` : '';

      return `
        <li class="mb-4">
          <a href="${pub.link}" class="text-blue-800 hover:underline">
            ${pub.title}
          </a><br>
          <span class="text-gray-600 text-sm">${authorsWithUnderline}</span><br>
          <span class="text-gray-600 text-sm italic">${pub.journal}</span>, <span class="text-gray-600 text-sm">${pub.year}</span>
          ${buttonsHTML}
        </li>
      `;
    })
    .join('');
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
  displayPublicationsByYear();
  populateYearFilter();
  displaySelectedPublications();
  
  // Add event listeners for search and filter
  document.getElementById('searchInput')?.addEventListener('input', filterPublications);
  document.getElementById('yearFilter')?.addEventListener('change', filterPublications);
}); 