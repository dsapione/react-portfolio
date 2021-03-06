import React from "react";
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

const Main = (props) => {
	const renderPage = () => {
		if (props.currentPage.name === 'About Me') {
			return <About/>
		} else if (props.currentPage.name === 'Portfolio') {
			return <Projects/>
		} else if (props.currentPage.name === 'Contact') {
			return <Contact/>
		} else { return <Resume/>}
	}

	return (
		<div>
			{renderPage()}
		</div>
	)
}

export default Main;