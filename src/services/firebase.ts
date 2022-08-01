import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc
} from 'firebase/firestore'

import { cardRepository } from '@/database/cards'
import { packRepository } from '@/database/packs'

import { Pack, Card } from '@/application/entity/types/index'

const config = {
  apiKey: 'AIzaSyATTL9htWGHLPYhXIw7H6ynGGcJ2O4EkYY',
  authDomain: 'yellow-teapot-test.firebaseapp.com',
  projectId: 'yellow-teapot-test',
  storageBucket: 'yellow-teapot-test.appspot.com',
  messagingSenderId: '690465463898',
  appId: '1:690465463898:web:5f995ddda1ee79cc258263'
}

async function getPacks() {
  const app = initializeApp(config)
  const db = getFirestore(app)

  const packCollection = collection(db, 'packs')
  const packSnapshot = await getDocs(packCollection)

  return packSnapshot.docs.map((doc) => doc.data() as Pack)
}

async function getPack(packId: number) {
  const app = initializeApp(config)
  const db = getFirestore(app)

  const packCollection = doc(db, 'packs', String(packId))
  const packSnapshot = await getDoc(packCollection)

  return packSnapshot.data() as Pack
}

async function getCardsByPackId(packId: number) {
  const app = initializeApp(config)
  const db = getFirestore(app)

  const packCollection = doc(db, 'cards', String(packId))
  const cardsListSnapshot = await getDoc(packCollection)

  return cardsListSnapshot.data() as Card[]
}

async function populateCardsCollection() {
  const app = initializeApp(config)
  const db = getFirestore(app)

  packRepository.map(async (pack) => {
    const cardsFromPack = cardRepository.filter(
      (card) => card.packId === Number(pack.id)
    )

    await setDoc(doc(db, `cards/${pack.id}`), { ...cardsFromPack })
    // console.log({ ...cardsFromPack })
  })
}

export { getPacks, getPack, getCardsByPackId, populateCardsCollection }
