import "./index.css";
import type { Component } from "solid-js";
import styles from "./App.module.css";
import Project from "./components/Project";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 class="text-green-300 font-press-start">BIG TITLE HERE</h1>
      <img src="" alt="Logo" />
      <h2>
        <a href="">Download Resume</a>
      </h2>

      <article>
        <section>
          <img src="" alt="Profile Picture" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
            amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
            Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </section>

        <section>
          <hr />
          <Project id="1" />
          <Project id="2" />
          <Project id="3" />
          <Project id="4" />
        </section>
      </article>
      <footer>
        <img src="" alt="logo" />
        <div>
          <a href="">
            <p>Social</p>
          </a>
          <a href="">
            <p>Social</p>
          </a>
          <a href="">
            <p>Social</p>
          </a>
        </div>
        <a href="">
          <p>Resume</p>
        </a>
        <p>Copyright 2025 Ethan Carson</p>
      </footer>
    </div>
  );
};

export default App;
