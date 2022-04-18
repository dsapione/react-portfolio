import React from 'react';

function Header(props) {
	console.log(props)

	const setCurrentPage = props.setCurrentPage

  return (
		<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Daniel Sapione</span>
      </a>
			<ul className="nav nav-pills">
				{props.pages.map(page => (
					<li className="nav-item">							
						<a href='#' key={page.name} className="nav-link px-3 text-white" onClick={() => setCurrentPage(page)}>
							{page.name}
						</a>
					</li>
				))}
			</ul>	
		</header>
  );
}

export default Header;
