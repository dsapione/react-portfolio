import React from 'react';
import portrait from "../../assets/self/portrait.jpg";

function About() {
	return (
		<section className="my-5">
			<h1 id="about">About Me</h1>
			<img src={portrait} className="my-2" style={{ width: "50%" }} alt="Headshot of Daniel Sapione" />
		</section>
  );
}

export default About;