import React from 'react';

function Header(props) {
console.log(props)

const setCurrentPage = props.setCurrentPage

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
					Daniel Sapione
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {props.pages.map(page => (
						<li key={page.name}>
							<button onClick={() => setCurrentPage(page)}>
								{page.name}
							</button>
						</li>
					))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;