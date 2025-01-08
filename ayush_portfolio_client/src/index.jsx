/* @refresh reload */
import { render } from 'solid-js/web';
import { Router,Route } from "@solidjs/router";
import { lazy } from "solid-js";
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}


const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Project = lazy(() => import("./pages/Project"));
const About_me = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/ContactForm"));



import NotFound from "./pages/404";

render(() => (
  <Router root={App}>
    <Route path="/projects" component={Projects} />
    <Route path="/projects/:id" component={Project} />
    <Route path="/about_me" component={About_me} />
    <Route path="/contact" component={Contact} />
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
), root);