const perks = [
  {
    title: "Google One AI Premium – Student Offer (Gemini Advanced, NotebookLM Plus, 2 TB storage)",
    description: "Get access to Gemini Advanced (2.5 Pro), Deep Research, video generation, NotebookLM+, plus 2 TB cloud storage. In the U.S., eligible students can receive a FREE offer that lasts 15 months—extends through spring 2026 if you sign up before June 30, 2025. Verify student status (via email or verification service).",
    link: "https://one.google.com/offers/edu/gemini"
  },
  {
    title: "Gemini for Education (via Workspace for Education)",
    description: "Free access to Gemini 2.5 Pro, NotebookLM, video creation tools with enterprise-level data protection, for students within Google Workspace for Education. If your school uses Google Workspace for Education, Gemini is automatically available with no cost—ask your IT admin for details.",
    link: "https://edu.google.com/products/gemini/"
  },
  {
    title: "Amazon Prime Student (aka Prime for Young Adults)",
    description: "Six-month free trial. After that, $7.49/month or $69/year (half-price vs. standard). Benefits include free 2-day shipping, Prime Video/music, Twitch perks, plus extras like free Grubhub+. Sign up with a valid .edu email or student ID. Enjoy the 6-month free trial, then half-price plan for up to 4 years.",
    link: "https://www.amazon.com/amazonprime?primeCampaignId=primeStudentWlp&ref_=st_prm_c_0_nw_t2_prm_ms_0_0"
  },
  {
    title: "Spotify Premium Student Bundle",
    description: "$5.99/month (includes Hulu With Ads and SHOWTIME). One month free, then discounted rate for up to 12 months. Sign up on Spotify with student verification through platforms like SheerID, UNiDAYS, or Student Beans.",
    link: "https://www.spotify.com/us/student/"
  },
  {
    title: "Adobe Creative Cloud – Student Discount",
    description: "Over 60% off the Creative Cloud All Apps suite—example price: $19.99/month first year. Verify student status via Adobe’s site (usually requires .edu email).",
    link: "https://www.adobe.com/creativecloud/buy/students.html"
  },
  {
    title: "Microsoft 365 – Student Edition",
    description: "$2.99/month (compared to $6.99 regular) for Office apps + 1 TB OneDrive. Use your .edu email to sign up, yearly re-verification required.",
    link: "https://www.microsoft.com/en-us/education/products/office"
  },
  {
    title: "Student Discount Platforms (UNiDAYS, Student Beans, ID.me, SheerID)",
    description: "Perks available: e.g., Bose 15%, Gymshark 15%, Ulta 50%, Apple, Dell, HP, Lenovo 5–20%. Create an account on UNiDAYS or Student Beans. Verify your student status (often via .edu or SID-based). Access deals in-app or online stores.",
    link: "https://www.myunidays.com/US/en-US" // Example: UNiDAYS
  }
];

const perksContainer = document.getElementById('perksContainer');
const searchBar = document.getElementById('searchBar');

function renderPerks(perksToShow) {
  perksContainer.innerHTML = '';
  perksToShow.forEach(perk => {
    const card = document.createElement('div');
    card.className = 'perk-card';
    card.innerHTML = `
      <h3>${perk.title}</h3>
      <p>${perk.description}</p>
      ${perk.link ? `<a href="${perk.link}" target="_blank">Learn More</a>` : ''}
    `;
    perksContainer.appendChild(card);
  });
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Shuffle perks for initial display
const shuffledPerks = shuffleArray(perks);
renderPerks(shuffledPerks);

// Search functionality
searchBar.addEventListener('input', function() {
  const query = searchBar.value.trim().toLowerCase();
  // filter is used :)
  const filtered = perks.filter(perk =>
    perk.title.toLowerCase().includes(query) ||
    perk.description.toLowerCase().includes(query)
  );
  renderPerks(filtered);
}); 