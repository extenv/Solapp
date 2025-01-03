/* @refresh reload */
import { render } from "solid-js/web";
import './style.css';
import App from "./App";

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found.',
  );
}
render(() => <App />, document.getElementById('root'));
