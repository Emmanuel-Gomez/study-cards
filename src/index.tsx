import './style/index.css';
import * as React from 'react';
import { Server } from './Server';
import App from './components/App';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { CardController, ICardController } from './controllers/CardController';

const controller: ICardController = new CardController(new Server()); 

ReactDOM.render(
	<Provider controller={controller}>
		<App />
	</Provider>,
	document.getElementById('root'));
