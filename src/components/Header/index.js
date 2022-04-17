import React from 'react';

function Header() {


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
					Daniel Sapione
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
						<a data-testid="about" href="#about">
							About me
						</a>
          </li>
					<li className="mx-2">
						<a data-testid="portfolio" href="#portfolio">
							Portfolio
						</a>
          </li>
					<li className="mx-2">
						<a data-testid="contact" href="#contact">
							Contact
						</a>
          </li>
					<li className="mx-2">
						<a data-testid="resume" href="#resume">
							Resume
						</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;