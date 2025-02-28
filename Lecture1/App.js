// Import react through CDN

// Using DOM
const rootHTML = document.getElementById("rootHTML");

const header1 = document.createElement("h1");
header1.innerHTML = "Namaste HTML";

rootHTML.append(header1);


// Using React

const heading1 = React.createElement("h1", {}, "Header1"); // Accepts three things element, props, and content
const heading2 = React.createElement("h1", {id: 'heading2'}, "Header2");
const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

