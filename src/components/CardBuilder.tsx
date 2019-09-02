import * as React from "react";
import { observer, inject } from "mobx-react";
import {
	withStyles,
	createStyles,
	WithStyles 
} from "@material-ui/styles";

import {
	Button,
	TextField,
	Typography,
	CardActions,
	CardContent,
} from "@material-ui/core";

import Card from "./CardWrapper";
import { ICardController } from "../controllers/CardController";

const styles = createStyles({
	root: {
		display: "flex"
	},
	textArea: {
		width: "100%"
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
})

interface ICardBuilder {
	controller: ICardController
}

type IProps = ICardBuilder & WithStyles<typeof styles>;

@inject("controller")
@observer
class CardBuilder extends React.Component<IProps>{

	constructor(props: IProps) {
		super(props);
		props.controller.newCard();
	}

	private onAdd() {

		const { controller } = this.props;
		controller.onAdd();
		controller.newCard();

	}

	render(): React.ReactNode {

		const { classes, controller } = this.props;

		return(
			<div>
				<Card>
					<CardContent>

						<Typography gutterBottom variant="h5" component="h2">
							Fråga:
						</Typography>

						<TextField
							className={classes.textArea}
							multiline
							rows="5"
							variant="outlined"
							value={controller.model.question}
							onChange={e => controller.onChange("question", e.target.value)}/>

						<Typography gutterBottom variant="h5" component="h2">
							Svar:
						</Typography>

						<TextField
							className={classes.textArea}
							multiline
							rows="8"
							variant="outlined"
							value={controller.model.answer}
							onChange={e => controller.onChange("answer", e.target.value)}/>

					</CardContent>

					<CardActions className={classes.footer}>

						<Button size="small" color="primary" onClick={() => console.log("Save question")}>
							end
						</Button>

						<Button size="small" color="primary" onClick={() => this.onAdd()}>
							add new
						</Button>

					</CardActions>
				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(CardBuilder)