import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import Card from "./CardWrapper";
import { Button, CardContent } from "@material-ui/core";

import { createStyles, WithStyles, withStyles } from "@material-ui/styles";

const styles = createStyles({
	wrapper: {
		display: "flex",
		flexDirection: "column"
	},
})

@observer
class Home extends React.Component<WithStyles<typeof styles>> {

	@observable flipped: boolean = false;

	render(): React.ReactNode {

		const { classes } = this.props; 
		return (
			<Card>
				<CardContent className={classes.wrapper}>

					<Button>
						<Link to="/newCards">New Cards</Link>
					</Button>

					<Button>
						Import Cards
					</Button>
					
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(Home);
