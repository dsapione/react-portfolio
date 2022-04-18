import React from "react";
import resume from "../../assets/self/resume.pdf";

function Resume() {

  return (
		<div>
			<h1 data-testid="h1tag">Resume</h1>
			<p className="text-center">
				<a href={resume} target='blank'>DOWNLOAD RESUME</a>
			</p>
			<ul class="list-group mb-3">
				<li class="list-group-item text-center">Front End</li>
				<li class="list-group-item">HTML</li>
				<li class="list-group-item">CSS</li>
				<li class="list-group-item">React</li>
			</ul>
			<ul class="list-group">
				<li class="list-group-item text-center">Back End</li>
				<li class="list-group-item">Node</li>
				<li class="list-group-item">Express</li>
				<li class="list-group-item">MYSQL</li>
			</ul>
		</div>
  );
}

export default Resume;
