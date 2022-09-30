import React, { useState } from 'react';

function Projects() {
	const [photos] = useState([
    {
      name: 'Horiseon',
			description: 'screenshot of Horiseon website',
      path: 'horiseon',
			link: 'https://dsapione.github.io/Horiseon-refractor',
			github: 'https://github.com/dsapione/Horiseon-refractor'
    },
    {
      name: 'Hourly Organizer',
			description: 'screenshot of Hourly Organizer website',
      path: 'hourly-organizer',
			link: 'https://dsapione.github.io/Hourly-organizer',
			github: 'https://github.com/dsapione/Hourly-organizer'
    },
    {
      name: 'Movie Quiz',
			description: 'screenshot of Movie Quiz website',
      path: 'movie-quiz',
			link: 'https://dsapione.github.io/Movie-Quiz',
			github: 'https://github.com/dsapione/Movie-Quiz'
    },
    {
      name: 'Password Creator',
			description: 'screenshot of Password Creator website',
      path: 'password-creator',
			link: 'https://dsapione.github.io/Password-creator',
			github: 'https://github.com/dsapione/Password-creator'
    },
    {
      name: 'Run Buddy',
			description: 'screenshot of Run Buddy website',
      path: 'run-buddy',
			link: 'https://dsapione.github.io/run-buddy',
			github: 'https://github.com/dsapione/run-buddy'
    },
    {
      name: 'Soccer Standings',
			description: 'screenshot of Soccer Standings News website',
      path: 'soccer-standings-news',
			link: 'https://ryanweiler92.github.io/Soccer-Standings-News',
			github: 'https://github.com/ryanweiler92/Soccer-Standings-News'
    },
    {
      name: 'XYZ Rentals',
			description: 'screenshot of XYZ Rentals website',
      path: 'xyz-rentals',
			link: 'https://secret-savannah-63468.herokuapp.com',
			github: 'https://github.com/ryanweiler92/XYZ-Rentals'
    },
		{
      name: 'Coast2Coast',
			description: 'screenshot of Coast2Coast website',
      path: 'coast-2-coast',
			link: 'https://coast-2-coast.herokuapp.com',
			github: 'https://github.com/reggietenk/Coast-2-Coast-'
    }
  ]);

  return (
		<section>
			<h1 data-testid="h1tag">Projects</h1>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{photos.map((image) => (
					<div className="col">
						<div className="card">
							<a href={image.link} target="blank">
								<img
									src={require(`../../assets/projects/${image.path}.jpg`)}
									alt={image.description}
									width='250px'
									className="card-img-top"
									key={image.description}
								/>
							</a>
							<div className="card-body">
								<h5 className="card-title text-center text-dark">{image.name}</h5>
								<a href={image.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-5x d-flex justify-content-center"></i></a>
							</div>
						</div>
					</div> 
				))} 
			</div>
		</section>
  );
}

export default Projects;

