import * as React from "react";
import '../style/App.css';
import Card from "./Card";
import Flipper from "./Flipper";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
export class App extends React.Component {

	@observable flipped: boolean = false;

	render() {
		return (
			<div className="App">
				<h1>Study Cards</h1>
				<Flipper flipped={this.flipped}>
					<Card onFlip={() => this.flipped = !this.flipped}/>
				</Flipper>
			</div>
		);
	}
}
