import * as React from "react";
import { observer } from "mobx-react";

import CardFlipper from "./CardFlipper";
import { CardContent, Typography } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";;

const styles = createStyles({
	root: {
		display: "flex",
		margin: "auto"
	}
})

interface ICardHolder {
	children?: React.ReactNode
}

type IProps = ICardHolder & WithStyles<typeof styles>;

@observer
class CardHolder extends React.Component<IProps> {

	public content(): React.ReactNode {
		return (
			<CardContent>

				<Typography gutterBottom variant="h5" component="h2">
					Fråga
				</Typography>

				<Typography>
					Vad heter Costa Ricas huvudstad?
				</Typography>

			</CardContent>
		)
	}

	render(): React.ReactNode {
		return(
			<div>
				<CardFlipper content={this.content()}/>
			</div>
		)
	}
}

export default withStyles(styles)(CardHolder);