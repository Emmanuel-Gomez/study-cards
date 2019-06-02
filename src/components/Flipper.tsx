import * as React from "react";
import { observer } from "mobx-react";
import mergeClassNames from "classnames";
import { WithStyles } from "@material-ui/styles";
import { withStyles, createStyles } from "@material-ui/core";


interface IFlipper {
	children: React.ReactNode
	flipped?: boolean
}

const styles = createStyles({
	root: {
		color: "red"
	},
	container: {
		perspective: 1000,
		height: 400,
		width: 500,
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
		width: 500,
		height: 500,
		position: "absolute",
	},
	front: {
		transform: "rotateY(0deg)",
	},
	back: {
		transform: "rotateY(180deg)",
	}
});

@observer
class Flipper extends React.Component<IFlipper & WithStyles<typeof styles>> {

	render(){

		const {
			children,
			classes,
			flipped
		} = this.props;

		const flipper = [
			classes.flipper,
			flipped? classes.flip: null
		]

		const side = [
			classes.wrapper,
			flipped? classes.back: classes.front
		]

		return(
			<div className={classes.container}>
				<div className={mergeClassNames(flipper)}>
					<div className={mergeClassNames(side)}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Flipper);