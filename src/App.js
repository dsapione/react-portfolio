import React, { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

	const [pages] = useState([
		{
			name: 'About Me'			
		},
		{
			name: 'Portfolio'			
		},
		{
			name: 'Contact'			
		},
		{
			name: 'Resume'			
		}
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='container'>
			<Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			<Main currentPage={currentPage}/>
			<Footer />

    </div>
  );
}

export default App;
