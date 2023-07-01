/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import { StartRating } from './components/StartRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StartRating maxRating={10} color='skyblue' bgColor='gray' size='2rem' />
	</React.StrictMode>
);
