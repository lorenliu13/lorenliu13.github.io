const fs = require('fs');
const path = require('path');

// Import talks data from talks.js
const { talks } = require('./talks.js');

// Read the template
const template = fs.readFileSync('talk_template.html', 'utf8');

// Function to generate a talk page
function generateTalkPage(talk) {
  // Create filename from talk title and year
  const filename = `talk_${talk.year}_${talk.event.toLowerCase().replace(/\s+/g, '_')}.html`;
  
  // Replace placeholders in template
  let page = template
    .replace(/Talk Title - Yuan Liu/g, `${talk.title} - Yuan Liu`)
    .replace(/Talk Title/g, talk.title)
    .replace(/<p class="mb-2"><span class="font-semibold">Authors:<\/span> Author Names<\/p>\s*<p class="mb-2"><span class="font-semibold">Event:<\/span> Event Name<\/p>\s*<p class="mb-2"><span class="font-semibold">Date:<\/span> Date Range<\/p>\s*<p class="mb-2"><span class="font-semibold">Location:<\/span> City, State<\/p>/g, 
      `<p class="mb-2">${talk.authors}</p>
       <p class="mb-2">${talk.event}, ${talk.date}, ${talk.location}</p>`)
    .replace('Abstract text goes here. This should provide a comprehensive overview of the talk\'s content,\n          including the key findings, methodology, and implications of the research.', talk.abstract)
    .replace(/<p class="text-gray-700 leading-relaxed">/g, '<p class="text-gray-700 leading-relaxed text-justify">');

  // Remove figure section completely
  page = page.replace(/<!-- Talk Figure -->[\s\S]*?<!-- Abstract -->/m, '<!-- Abstract -->');

  // Write the file to the talks directory
  fs.writeFileSync(path.join('talks', filename), page);
  console.log(`Generated talks/${filename}`);
}

// Generate pages for all talks
talks.forEach(generateTalkPage); 