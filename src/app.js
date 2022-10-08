import "./style.css";

// images
import favicon from "./images/favicon-32x32.png";
import companyIcon from "./images/icon-company.svg";
import locationIcon from "./images/icon-location.svg";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";
import searchIcon from "./images/icon-search.svg";
import twitterIcon from "./images/icon-twitter.svg";
import websiteIcon from "./images/icon-website.svg";

const faviconElement = document.querySelector("#favicon");
const companyIconElement = document.querySelector("#company-icon");
const locationIconElement = document.querySelector("#location-icon");
const moonIconElement = document.querySelector("#moon-icon");
const sunIconElement = document.querySelector("#sun-icon");
const searchIconElement = document.querySelector("#search-icon");
const websiteIconElement = document.querySelector("#website-icon");
const twitterIconElement = document.querySelector("#twitter-icon");

faviconElement.href = favicon;
companyIconElement.src = companyIcon;
locationIconElement.src = locationIcon;
moonIconElement.src = moonIcon;
sunIconElement.src = sunIcon;
searchIconElement.src = searchIcon;
websiteIconElement.src = websiteIcon;
twitterIconElement.src = twitterIcon;

//  Get elements
const avatar = document.getElementById("profile-img");
const username = document.querySelector(".username-title");
const loginData = document.querySelector(".username-link");
const bio = document.querySelector(".bio-value");
const joined = document.querySelector(".date-value");
const repos = document.getElementById("repos-value");
const followers = document.getElementById("followers-value");
const following = document.getElementById("following-value");
const locationValue = document.getElementById("location-value");
const company = document.getElementById("company-value");
const blog = document.getElementById("blog-value");
const twitter = document.getElementById("twitter-value");
const input = document.getElementById("search-input");
const modalUser = document.getElementById("modal");
const API_URL = `https://api.github.com/users/`;
const searchButton = document.getElementById("search-button");
const modalUserList = document.createElement("ul");

function searchGithubUserByInput(username) {
  username = input.value;
  fetch(API_URL + username)
    .then((response) => response.json())
    .then((data) => {
      if (data.login) {
        displayModalUser(data);
        removeListItems(data);
      }
      if (data.message === "Not Found") {
        const notFoundItem = document.createElement("li");
        notFoundItem.textContent = "User not found";
        modalUserList.appendChild(notFoundItem);
        modalUser.appendChild(modalUserList);

        if (notFoundItem.textContent === "User not found") {
          setTimeout(() => {
            notFoundItem.remove();
          }, 3000);
        }
      }
    });
  return username;
}

function removeListItems(data) {
  const listItems = modalUserList.childNodes;
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      fetchDataAndDisplay(data.login);
      modalUser.removeChild(modalUserList);
      input.value = "";
    });

    input.addEventListener("keyup", (e) => {
      setTimeout(() => {
        item.remove();
      }, 7000);
    });
  });
}

function displayModalUser(data) {
  const modalUserItem = document.createElement("li");

  const modalImg = document.createElement("img");
  modalImg.src = data.avatar_url;
  modalUserItem.appendChild(modalImg);

  const modalUsername = document.createElement("h3");
  modalUsername.textContent = data.name;
  modalUserItem.appendChild(modalUsername);

  const modalLogin = document.createElement("a");
  modalLogin.textContent = `Username: @${data.login}`;
  modalUserItem.appendChild(modalLogin);

  modalUserList.appendChild(modalUserItem);
  modalUser.appendChild(modalUserList);

  input.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (input.value === "" || input.value === " ") {
      modalUserItem.remove();
    }
  });
}

function fetchDataAndDisplay(username) {
  fetch(API_URL + username)
    .then((response) => response.json())
    .then((data) => {
      avatar.src = data.avatar_url;
      getUsername(data);
      getBio(data);

      loginData.href = data.html_url;
      loginData.textContent = "@" + data.login;

      getDateJoined(data);

      repos.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;

      getContactInfo(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getGithubUser(username) {
  username = input.value;
  if (username) {
    fetchDataAndDisplay(username);
    username = "";
    modalUser.removeChild(modalUserList);
  } else {
    fetchDataAndDisplay("Octocat");
  }
}

window.onload = getGithubUser();
input.addEventListener("input", searchGithubUserByInput);
searchButton.addEventListener("click", getGithubUser);

function getUsername(data) {
  if (data.name) {
    username.textContent = data.name;
  } else {
    username.textContent = data.login;
  }
  return username.textContent;
}

function getDateJoined(data) {
  const dateJoined = new Date(data.created_at).toLocaleDateString("en-UK", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  joined.textContent = dateJoined;
  return joined.textContent;
}

function getBio(data) {
  const bioValue = document.querySelector(".bio-value");
  if (data.bio) {
    bioValue.textContent = data.bio;
    bioValue.style.color = "hsl(222, 22%, 79%)";
  } else {
    bioValue.textContent = "This profile has no bio";
    bioValue.style.color = "hsla(0, 0%, 50%, 0.7)";
  }
}

function getContactInfo(data) {
  if (data.location) {
    locationValue.textContent = data.location;
    viewLocation();
  } else {
    locationValue.textContent = "Not available";
    locationValue.classList.remove("valid-info");
    locationValue.classList.add("empty");
  }
  if (data.company) {
    company.textContent = data.company;
    viewCompany();
  } else {
    company.textContent = "Not available";
    company.classList.remove("valid-info");
    company.classList.add("empty");
  }
  if (data.blog) {
    blog.textContent = data.blog;
    viewBlog();
  } else {
    blog.textContent = "Not available";
    blog.classList.remove("valid-info");
    blog.classList.add("empty");
  }
  if (data.twitter_username) {
    twitter.textContent = "@" + data.twitter_username;
    viewTwitter();
  } else {
    twitter.textContent = "Not available";
    twitter.classList.remove("valid-info");
    twitter.classList.add("empty");
  }
}

function viewLocation() {
  locationValue.addEventListener("click", (e) => {
    e.preventDefault();
    locationValue.href =
      "https://www.google.com/maps/place/" + locationValue.textContent;
    window.open(locationValue.href, "_blank");
  }),
    (locationValue.classList.remove("empty"),
    locationValue.classList.add("valid-info"));
}

function viewCompany() {
  company.addEventListener("click", (e) => {
    e.preventDefault();
    const companyValue = company.textContent.slice(1);
    company.href = `https://github.com/${companyValue}`;
    window.open(company.href, "_blank");
  }),
    (company.classList.remove("empty"), company.classList.add("valid-info"));
}

function viewBlog() {
  blog.addEventListener("click", (e) => {
    e.preventDefault();
    blog.href = blog.textContent;
    window.open(blog.href, "_blank");
  }),
    (blog.classList.remove("empty"), blog.classList.add("valid-info"));
}

function viewTwitter() {
  twitter.addEventListener("click", (e) => {
    e.preventDefault();
    twitter.href = "https://twitter.com/" + twitter.textContent;
    window.open(twitter.href, "_blank");
  }),
    (twitter.classList.remove("empty"), twitter.classList.add("valid-info"));
}

// Dark/Light Mode

const toggleDarkMode = document.querySelector(".light-theme");
const toggleLightMode = document.querySelector(".dark-theme");

toggleLightMode.addEventListener("click", () => {
  const visibleDark = toggleDarkMode.getAttribute("data-visible");
  const visibleLight = toggleLightMode.getAttribute("data-visible");
  if (visibleDark === "false") {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
    document.body.classList.add("light-theme");
  }
  if (visibleLight === "true") {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
    document.body.classList.remove("dark-theme");
  }
});

toggleDarkMode.addEventListener("click", () => {
  const visibleDark = toggleDarkMode.getAttribute("data-visible");
  const visibleLight = toggleLightMode.getAttribute("data-visible");
  if (visibleDark === "true") {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
    document.body.classList.remove("light-theme");
  }
  if (visibleLight === "false") {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
    document.body.classList.add("dark-theme");
  }
});

window.onload = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
  } else {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
  }
};
