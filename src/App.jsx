import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adoptt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havenese",
    }),

    React.createElement(Pet, {
      animal: "Bird",
      name: "Pepper",
      breed: "Cocktail",
    }),

    React.createElement(Pet, {
      animal: "Cat",
      name: "Doink",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
