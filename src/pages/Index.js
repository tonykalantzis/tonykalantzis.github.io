import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Tony Kalantzi's personal website."
  >
    <article className="post" id="index">
      <div className="title">
        <h5>
          <Link to="/about">About Me</Link>
        </h5>
        <h5>
          <Link to="/resume">Resume</Link>
        </h5>
        <h5>
          <Link to="/projects">Projects</Link>
        </h5>
        <h5>
          <Link to="/stats">Stats</Link>
        </h5>
        <h5>
          <Link to="/contact">Contact</Link>
        </h5>
      </div>
    </article>
  </Main>
);

export default Index;
