import * as React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";
import mergeClassNames from "classnames";
import { withStyles } from '@material-ui/styles';

import {
	Button,
	TextField,
	WithStyles,
	Typography,
	CardActions,
	CardContent,
	createStyles,
	Card as MUCard,
} from '@material-ui/core';

const styles = createStyles({
	root: {
		width: 500,
		height: 500,
		position: "relative",
	},
	textArea: {
		width: "100%",
		marginTop: 20,
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

interface ICard {
	onFlip: () => void;
}

@observer
class Card extends React.Component<ICard & WithStyles<typeof styles>> {

	@observable flip: boolean = false;

	private onFlip() {
		this.props.onFlip();
		this.flip = !this.flip;
	}

	public getCardContent(){

		const {
			classes
		} = this.props;

		if(this.flip) {
			return (
				<div>
					<CardContent>

						<Typography gutterBottom variant="h5" component="h2">
							Svar
						</Typography>

						<Typography>
							San Jose
						</Typography>

					</CardContent>
					
					<CardActions className={classes.footer}>

						<Button size="small" color="primary" onClick={() => this.onFlip()}>
							Vänd
						</Button>

					</CardActions>
				</div>
			)
		}
		else {
			return(
				<div>
					<CardContent>

						<Typography gutterBottom variant="h5" component="h2">
							Fråga
						</Typography>

						<Typography>
							Vad heter Costa Ricas huvudstad?
						</Typography>

						<TextField className={classes.textArea} multiline rows="10" variant="outlined"/>

					</CardContent>

					<CardActions className={classes.footer}>

						<Button size="small" color="primary">
							Flagga
						</Button>

						<Button size="small" color="primary" onClick={() => this.onFlip()}>
							Vänd
						</Button>

					</CardActions>
				</div>
			)
		}
	}

	render() {

		const { classes } = this.props;

		return(
			<MUCard className={classes.root}>
				{this.getCardContent()}
			</MUCard>
			
		)
	}
}

export default withStyles(styles)(Card);