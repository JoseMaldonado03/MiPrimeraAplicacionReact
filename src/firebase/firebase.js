import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJPfM3E223Uxyu3pHYallwzhbPyT496S4',
  authDomain: 'miprimeraappreact-2221d.firebaseapp.com',
  projectId: 'miprimeraappreact-2221d',
  storageBucket: 'miprimeraappreact-2221d.firebasestorage.app',
  messagingSenderId: '291129949461',
  appId: '1:291129949461:web:272148182d767fd11b3d1c',
  measurementId: 'G-HTJSHY3GYJ',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProduct(id) {
  try {
    const querySnapshot = await getDoc(doc(db, 'items', id));

    console.log(querySnapshot.data());

    if (querySnapshot.exists()) {
      return querySnapshot.data();
    }

    console.log('El documento no existe!');
  } catch (error) {
    console.error('Error al obtener los productos: ', error);
  }
}

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'items'));

    if (querySnapshot.size !== 0) {
      return querySnapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(),
      }));
    }

    console.log('No hay productos!');
  } catch (error) {
    console.error('Error al obtener los productos: ', error);
  }
}

export async function getCategory(catId) {
  try {
    const filteredQuery = query(collection(db, 'items'), where('category', '==', catId));

    const querySnapshot = await getDocs(filteredQuery);

    if (querySnapshot.size !== 0) {
      return querySnapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(),
      }));
    }

    console.log('No hay productos!');
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

export async function enviarCompra(cart) {
    const ordersCollection = collection(db, 'compras');
  try {
    const docRef = await addDoc(ordersCollection, cart);
    alert("Compra registrada.");
    return docRef.id;
  } catch (error) {
    console.error('Error al agregar el documento nuevo ', error);
  }
}
