import React, { useState } from 'react';

function Projects() {
	const [photos] = useState([
    {
      description: 'screenshot of Horiseon website',
      path: 'horiseon'
    },
    {
      description: 'screenshot of Hourly Organizer website',
      path: 'hourly-organizer'
    },
    {
      description: 'screenshot of Movie Quiz website',
      path: 'movie-quiz'
    },
    {
      description: 'screenshot of Password Creator website',
      path: 'password-creator'
    },
    {
      description: 'screenshot of Run Buddy website',
      path: 'run-buddy'
    },
    {
      description: 'screenshot of Soccer Standings News website',
      path: 'soccer-standings-news'
    },
    {
      description: 'screenshot of XYZ Rentals website',
      path: 'xyz-rentals'
    }
  ]);

  return (
    <section>
        {photos.map((image) => (
          <img
						src={require(`../../assets/projects/${image.path}.jpg`)}
						alt={image.description}
						width='250px'
						className="img-thumbnail mx-1"
						key={image.description}
					/>
        ))}
    </section>
  );
}

export default Projects;