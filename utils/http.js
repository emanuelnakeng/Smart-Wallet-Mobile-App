import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	setDoc,
	where,
	writeBatch,
} from 'firebase/firestore';
import { db } from './firebase';

const usersCardsRef = collection(db, 'Users Cards');
const newCardRef = doc(usersCardsRef);

const saveCard = async (userId, cardData) => {
	const validatedBarcodeType = isNaN(cardData.cardNumber)
		? 'org.iso.QRCode'
		: 'org.iso.Code128';

	const docRef = await addDoc(usersCardsRef, {
		...cardData,
		userId,
		barcodeType: validatedBarcodeType,
	});
	return docRef.id;
};

const fetchUserCards = async user => {
	const q = query(usersCardsRef, where('userId', '==', user));
	const querySnapshot = await getDocs(q);
	return querySnapshot;
};

const deleteUserCard = async cardId => {
	await deleteDoc(doc(db, 'Users Cards', cardId));
};

const deleteAllCardsUser = async user => {
	const q = query(usersCardsRef, where('userId', '==', user));
	const batch = writeBatch(db);
	const snapshot = await getDocs(q);
	snapshot.forEach(doc => batch.delete(doc.ref));

	await batch.commit();
};

export { saveCard, fetchUserCards, deleteUserCard, deleteAllCardsUser };
