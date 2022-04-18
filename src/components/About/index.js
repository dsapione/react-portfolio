import React from 'react';
import portrait from "../../assets/self/portrait.jpg";

function About() {
	return (
		<section className='container'>
			<h1 data-testid="h1tag">About Me</h1>
			<div className="card">
				<img src={portrait} className="card-img-top w-50" alt="Headshot of Daniel Sapione" />
				<div className="card-body">
					<p className="card-text text-dark">My name is Daniel Sapione, I am currently a car sales man in Connecticut looking for a carrer change. This porftfolio shows off my skills in HTML and CSS. Which I am learning in my second week of a UCONN full stack coding bootcamp. I am excited for what I will learn in the coming weeks, as I really enjoy this field. I amm self motivated, detailed oriented, and enjoy working though problems. Please go to my 'Work' section to see thing's I am working on and have finished. Always, feel free to contact me through any of the links provided at the bottom of the page.</p>
				</div>
			</div>
		</section>
  );
}

export default About;
