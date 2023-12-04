const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "app/pages/home/index.html",
  "/contact": "app/pages/contact/index.html",
  "/work": "app/pages/work/index.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
