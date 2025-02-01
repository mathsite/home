// Function to get a cookie value by name
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to handle the visitor count
function updateVisitorCount() {
  // Check if the user has a visitor cookie
  let visitorCookie = getCookie('visitor_count');
  
  if (!visitorCookie) {
    // If no cookie is set, it means it's a new visitor
    let newCount = 1;
    setCookie('visitor_count', newCount, 365); // Store the cookie for 1 year
    document.getElementById('visitor-count').textContent = `Welcome, new visitor!`;
  } else {
    // If cookie exists, increment the count
    let currentCount = parseInt(visitorCookie);
    let newCount = currentCount + 1;
    setCookie('visitor_count', newCount, 365);
    document.getElementById('visitor-count').textContent = `You are visitor number ${newCount}`;
  }
}

// Run the function to update the counter when the page loads
updateVisitorCount();

document.getElementById("openPopup").addEventListener("click", function () {
  window.open("https://ajm19826.github.io/home", "_blank", "width=600,height=400");
});

function passWord() {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    const password = prompt("Please Enter Your Password:", "").toLowerCase();
    if (password === "yaywow") {
      alert("We will redirect you shortly...\nNot working? Enable popups.");
      window.open("壞的.html");
      return;
    } else {
      alert("Access Denied - Password Incorrect. Try Again.");
      attempts++;
    }
  }

  if (attempts === maxAttempts) {
    alert("Too many failed attempts!");
    window.history.back();
  }
}

// Replace document.write calls with DOM manipulations
function loadIframe(src, title) {
  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.onclick = () => location.reload();

  document.body.innerHTML = ""; // Clear the page
  document.body.appendChild(iframe);
  document.body.appendChild(backButton);

  document.title = title || "SmartSchool";
}

function gdash() {
  loadIframe("https://geometrydashonline.io", "Geometry Dash");
}

function lessons() {
  loadIframe("lesson.html", "Lessons");
}

function minecraft() {
  loadIframe("https://eaglecraft.pages.dev", "Minecraft");
}
