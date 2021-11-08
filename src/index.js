import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
export { default as Chart } from './components/Chart/Chart';
export { default as CountryPicker } from './components/CountryPicker/CountryPicker';
export { default as Cards } from './components/Cards/Cards';

ReactDOM.render(<App />, document.getElementById('root'));