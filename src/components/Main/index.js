import React from "react";
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Main = (props) => {
	const renderPage = () => {
		if (props.currentPage.name === 'about-me') {
			return <About/>
		} else if (props.currentPage.name === 'portfolio') {
			return <Projects/>
		} else if (props.currentPage.name === 'contact') {
			return <Contact/>
		} else { return <Contact/>}
	}

	return (
		<div>
			{renderPage()}
		</div>
	)
}

export default Main;