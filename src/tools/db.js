import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from './firebase.config.js';
const db = getFirestore(app);

export {db}