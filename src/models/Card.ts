import { observable, action } from "mobx";
import { ICard } from "../interfaces/card";

export class Card implements ICard {

	@observable question: string;
	@observable answer: string;

	constructor(card?: ICard) {
		this.fromJson(card);
	}

	@action
	fromJson(card: ICard) {

		if(card) {
			this.question = card.question;
			this.answer = card.answer;
		}
		else {
			this.question = "";
			this.answer = "";
		}
	}

	toJson(): ICard {
		return {
			question: this.question,
			answer: this.answer
		}
	}
}