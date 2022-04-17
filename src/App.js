import React, { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {

	const [pages] = useState([
		{
			name: 'about-me'			
		},
		{
			name: 'portfolio'			
		},
		{
			name: 'contact'			
		},
		{
			name: 'resume'			
		}
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
			<Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			<Main currentPage={currentPage}/>
			<Footer />

    </div>
  );
}

export default App;
