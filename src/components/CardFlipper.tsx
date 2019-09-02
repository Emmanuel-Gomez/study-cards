import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import {
	withStyles,
	createStyles,
	WithStyles 
} from "@material-ui/styles";

import mergeClassNames from "classnames";
import { CardActions, Button } from "@material-ui/core";
import Card from "./CardWrapper";

const styles = createStyles({
	container: {
		perspective: 1000,
		width: 500,
		margin: "auto"
	},
	flip: {
		transform: "rotateY(180deg)",
	},
	flipper: {
		transition: "0.6s",
		position: "relative",
		transformStyle: "preserve-3d",
	},
	wrapper: {
		top: 0,
		left: 0,
		position: "absolute",
	},
	front: {
		transform: "rotateY(0deg)",
	},
	back: {
		transform: "rotateY(180deg)",
	},
	card: {
		width: 500,
		height: 500,
		position: "relative",
	},
	footer: {
		right: 0,
		bottom: 0,
		height: 60,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		position: "absolute",
		justifyContent: "flex-end",
	}
});

interface ICardFlipper {
	content: React.ReactNode
}

@observer
class CardFlipper extends React.Component<ICardFlipper & WithStyles<typeof styles>> {

	@observable flipped: boolean = false;

	public cardActions(): React.ReactNode {
		return(
			<CardActions className={this.props.classes.footer}>

				<Button size="small" color="primary">
					Flagga
				</Button>

				<Button size="small" color="primary" onClick={() => this.flipped =! this.flipped}>
					Vänd
				</Button>

			</CardActions>
		)
	} 

	render(): React.ReactNode {

		const {
			classes,
			content
		} = this.props;

		const flipper = [
			classes.flipper,
			this.flipped? classes.flip: null
		]

		const side = [
			classes.wrapper,
			this.flipped? classes.back: classes.front
		]

		return(
			<div className={classes.container}>

				<div className={mergeClassNames(flipper)}>

					<div className={mergeClassNames(side)}>

						<Card>

							{content}
							{this.cardActions()}

						</Card>

					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(CardFlipper);