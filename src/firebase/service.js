import firebase from "firebase/compat/app";
import { db } from "./config";

export const addDocument = (collection, data) => {
  const query = db.collection(collection);

  query.add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
