import "./index.css";
import type { Component } from "solid-js";
import styles from "./App.module.css";
import Project from "./components/Project";

const App: Component = () => {
  return (
    <div class={`${styles.App} max-w-screen`}>
      <div class="ml-32 mr-32">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-500 md:text-5xl lg:text-6xl mt-30">
          BIG TITLE HERE
        </h1>
        <img src="" alt="Logo" class="inline" />
        <h2 class="inline ml-5 text-2xl">
          <a href="">Download Resume</a>
        </h2>

        <article class="mt-8">
          <section class="flex flex-row items-center justify-between">
            <img src="" alt="Profile Picture" class="inline flex-1/4" />
            <p class="inline flex-3/4 text-sm text-left indent-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales.
            </p>
          </section>
          <hr />
          <section class="flex flex-row items-center justify-between">
            <Project id="1" />
            <Project id="2" />
            <Project id="3" />
            <Project id="4" />
          </section>
        </article>
      </div>
      <footer>
        <div class="flex flex-row flex-wrap items-center justify-between gap-4">
          <img src="" alt="logo" class="h-12 w-auto" />

          <div class="flex flex-col items-end gap-4">
            <div class="flex flex-row gap-6">
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
          </div>
        </div>
        <p class="mt-8 text-left">Copyright 2025 Ethan Carson</p>
      </footer>
    </div>
  );
};

export default App;
