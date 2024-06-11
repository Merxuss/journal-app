import { doc, collection, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `/${ uid }/journal/notas` ) );
        const setDocResp = await setDoc( newDoc, newNote );
        console.log({newDoc, setDocResp});

    }
}