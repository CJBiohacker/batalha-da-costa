import { firestoreDB } from "../database/config";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { extractEditionNumber } from "../utils/helpers";
import { mockTournamentData } from "../utils/consts";

const battlesCollection = collection(
  firestoreDB,
  import.meta.env.VITE_FIREBASE_COLLECTION_1
);
const rankingsCollection = collection(
  firestoreDB,
  import.meta.env.VITE_FIREBASE_COLLECTION_2
);

export const getBattleEditions = async () => {
  try {
    const querySnapshot = await getDocs(battlesCollection);
    const edições = [];

    querySnapshot.forEach((doc) => {
      const { num_edicao, data_edicao } = doc.data();
      edições.push({
        num_edicao,
        data_edicao: new Date(data_edicao.seconds * 1000).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        ),
      });
    });

    return edições;
  } catch (error) {
    console.error("Error fetching edições: ", error);
    throw new Error("Failed to fetch edições");
  }
};

export const getSelectedBattleData = async (battleInfo) => {
  try {
    const editionNumber = extractEditionNumber(battleInfo);
    console.log("Data type of Edition Number => ", typeof editionNumber);
    const q = query(
      battlesCollection,
      where("num_edicao", "==", editionNumber)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { ...doc.data() };
    } else {
      console.log(`No battle found with num_edicao: ${editionNumber}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching the brackets data: ", error);
    throw new Error("Failed to fetch brackets data");
  }
};

export const getAllRankings = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(firestoreDB, import.meta.env.VITE_FIREBASE_COLLECTION_2)
    );
    const rankings = [];

    querySnapshot.forEach((doc) => {
      rankings.push(doc.data());
    });

    return rankings;
  } catch (error) {
    console.error("Error fetching rankings: ", error);
    throw new Error("Failed to fetch rankings");
  }
};