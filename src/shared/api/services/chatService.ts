import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/src/firebaseConfig';

export const sendMessage = async (userId: string, message: string) => {
  await addDoc(collection(db, 'messages'), {
    userId,
    message,
    timestamp: serverTimestamp(),
  });
};

// Подписка на сообщения с сортировкой по времени
export const subscribeToMessages = (onMessageReceived: (message: any) => void) => {
  const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));

  const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
    snapshot.forEach((doc) => {
      onMessageReceived(doc.data());
    });
  });

  return unsubscribe;
};
