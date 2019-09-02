import * as React from "react";
import { observer } from "mobx-react";
import { Card } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles"

const styles = createStyles({
	root: {
		margin: "auto",
		width: 500,
		height: 500,
		position: "relative",
	}
});

interface ICardWrapper {}

type IProps = ICardWrapper & WithStyles<typeof styles>;

@observer
class CardWrapper extends React.Component<IProps> {

	render(): React.ReactNode {

		const { classes, children } = this.props;

		return(
			<div>
				<Card className={classes.root}>
				
					{children}

				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(CardWrapper);
