import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const userCardsRef = collection(db, 'user-cards');
const newCardRef = doc(userCardsRef);

const saveCard = async (uid, cardData) => {
	await setDoc(newCardRef, {
		uid: {},
	});
};

const fetchUserCards = async uid => {};

const deleteUserCard = async uid => {};

const deleteAllCards = async uid => {};

export { saveCard, fetchUserCards, deleteAllCards, deleteUserCard };
