// import { BrowserRouter, Router, Route } from "react-router-dom";
import { Routes } from "./routes";

export const Tweets = [
  {
    id: "1",
    content: "Contact me",
  },
  {
    id: "2",
    content: "linkedin.com/in/ana-lucia-souza/",
  },
  {
    id: "3",
    content: "Hihi! My name is Ana, but you can call me Naya, I'm a Software engineer student.",
  },
];

export const App = () => {
  return (
      <Routes />
  );
};
