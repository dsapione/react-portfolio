import React from 'react';

function Header(props) {
console.log(props)

const setCurrentPage = props.setCurrentPage

  return (
		<header class="navbar">
			<section class="navbar-section">
				<a href="#" class="btn btn-link">Daniel Sapione</a>
			</section>
			<section class="navbar-center">
				{/* <!-- centered logo or brand --> */}
			</section>
			<section class="navbar-section">
					{props.pages.map(page => (							
						<a href='#' key={page.name} class="btn btn-link" onClick={() => setCurrentPage(page)}>
							{page.name}
						</a>
					))}
			</section>
		</header>
  );
}

export default Header;