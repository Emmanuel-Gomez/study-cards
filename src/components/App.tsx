import '../style/App.css';
import * as React from "react";
import { observer } from "mobx-react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";

import Home from "./Home";
import CardBuilder from "./CardBuilder"; 

const styles = createStyles({
	wrapper: {
		display: "flex",
		flexDirection: "column"
	}
})

@observer
class App extends React.Component<WithStyles<typeof styles>> {

	render(): React.ReactNode {

		return (
			<Router>
				<div className="App">
					<h1>Study Cards</h1>
					<Switch>

						<Route path="/" exact component={Home}/>
						<Route path="/newCards" component={CardBuilder}/>

					</Switch>
				</div>
			</Router>
		);
	}
}

export default withStyles(styles)(App);
