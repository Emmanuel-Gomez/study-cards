import { observable } from "mobx";
import { ICard } from "../interfaces/card";
import { IServer } from "../Server";
import { Card } from "../models/Card";

export interface ICardController {
	model: ICard,
	newCard: () => void,
	onChange: (key: keyof ICard, value: string) => void,
	onAdd: () => void,
	onEnd: () => void 
}

export class CardController implements ICardController {

	private readonly server: IServer;

	@observable model: Card;

	constructor(server: IServer) {
		this.server = server;
		this.server.newCardDeck();
	}

	newCard() {
		this.model = new Card();
	}

	onChange(key: keyof ICard, value: string) {
		this.model[key] = value;
	}

	onAdd() {
		this.server.addCard(this.model.toJson());
	}

	onEnd() {}
}