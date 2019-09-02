import * as React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";

import {
	Button,
	TextField,
	Typography,
	CardActions,
	Card as MUCard,
	CardContent as MUCardContent,
} from '@material-ui/core';

import { 
	withStyles,
	WithStyles,
	createStyles,
} from '@material-ui/styles';

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

type IProps = ICard & WithStyles<typeof styles>

@observer
class CardContent extends React.Component<IProps> {

	@observable flip: boolean = false;

	private onFlip() {
		this.props.onFlip();
		this.flip = !this.flip;
	}

	public getCardContent(): React.ReactNode {

		const {
			classes
		} = this.props;

		if(this.flip) {
			return (
				<div>
					<MUCardContent>

						<Typography gutterBottom variant="h5" component="h2">
							Svar
						</Typography>

						<Typography>
							San Jose
						</Typography>

					</MUCardContent>
					
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
					<MUCardContent>

						<Typography gutterBottom variant="h5" component="h2">
							Fråga
						</Typography>

						<Typography>
							Vad heter Costa Ricas huvudstad?
						</Typography>

						<TextField className={classes.textArea} multiline rows="10" variant="outlined"/>

					</MUCardContent>

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
				{/* {this.getCardContent()} */}
			</MUCard>
		)
	}
}

export default withStyles(styles)(CardContent);