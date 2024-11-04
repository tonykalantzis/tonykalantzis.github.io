import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tony Kalantzis</h2>
        <p>
          <a href="mailto:antonis.kalantzis03@gmail.com">antonis.kalantzis03@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Antonis. I am an{' '}
        <a href="https://www.di.uoa.gr/en" target="_blank" rel="noopener noreferrer">University of Athens DIT</a> undergraduate student.
        {' '} I am especially intrested in Software & Data Engineering, {' '} Artificial Intelligence,
        and application of Algorithms in Real World scenarios.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
