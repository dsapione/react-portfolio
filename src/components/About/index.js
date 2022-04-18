import React from 'react';
import portrait from "../../assets/self/portrait.jpg";

function About() {
	return (
		<section className="my-5">
			<h1 id="about">About Me</h1>
			<img src={portrait} className="my-2" style={{ width: "50%" }} alt="Headshot of Daniel Sapione" />
			<p>
				My name is Daniel Sapione, I am currently a car sales man in Connecticut looking for a carrer change. This porftfolio shows off my skills in HTML and CSS. Which I am learning in my second week of a UCONN full stack coding bootcamp. I am excited for what I will learn in the coming weeks, as I really enjoy this field. I amm self motivated, detailed oriented, and enjoy working though problems. Please go to my 'Work' section to see thing's I am working on and have finished. Always, feel free to contact me through any of the links provided at the bottom of the page.
				</p>
		</section>
  );
}

export default About;