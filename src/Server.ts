import * as low from "lowdb";
import * as LocalStorage from 'lowdb/adapters/LocalStorage'
import { ICard } from "./interfaces/card";

export interface IServer {
	newCardDeck: () => void,
	addCard: (card: ICard) => void,
	getCard: () => void,
	getCards: () => void,
	removeCard: () => void,
}

export class Server implements IServer {

	private readonly db: any;

	constructor() {
		const adapter = new LocalStorage('db');
		this.db = low(adapter);
	}

	public newCardDeck(): void {
		this.db.defaults({ cards: [] }).write();
	}

	public addCard(card: ICard): void {
		this.db.get('cards')
		.push({ question: card.question, answer: card.answer })
		.write();
	}

	public removeCard(): void {}

	public getCard(): void {}

	public getCards(): void {
		this.db.get('cards')
		.find({ id: 1 })
		.value()
	}
}