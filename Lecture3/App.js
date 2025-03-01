import React from "react";
import ReactDOM from "react-dom/client";

// USING REACT.CREATE ELEMENT
// const heading1 = React.createElement("h1", {}, "Header1"); // Accepts three things element, props, and content
// const heading2 = React.createElement("h1", {id: 'heading2'}, "Header2");
// const container = React.createElement("div", {}, [heading1, heading2]);

// React element
const subHeader = <h2>Subheader</h2>;

const footer = // To write multiline jsx you need to write it inside ()
  (
    <div>
      <h3>Footer</h3>
      <h3>Copyright</h3>
    </div>
  );

//Another Component
const Header2 = (props) => {
  return (
    <div>
      <h1 style={header2Styles}>{props.text}</h1>
    </div>
  );
};

// USING FUNCTIONAL COMPONENT
const Header = () => {
  return (
    <div>
      <Header2 text="Header2" />{" "}
      {/* Component composition - Component inside component */}
      <h1 style={{ color: "blue" }}>Header1</h1>
      {subHeader}
      {footer}
    </div>
  );
};

// Styles -- an JS object
const header2Styles = {
  color: "red",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
