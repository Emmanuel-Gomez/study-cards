import { IServer, Server } from "./Server";
import { ICard } from "./interfaces/card";

export interface IStore {
	addCard: (card: ICard) => void
}

export class Store implements IStore{

	protected readonly server: IServer;

	constructor() {
		this.server = new Server();
	}

	public addCard(card: ICard): void {

		console.log(card)
		console.log("adding card...")
		//this.server.addCard();
	}
}