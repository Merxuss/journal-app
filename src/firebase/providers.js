import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({ credentials })
        const user = result.user;
        // console.log({user})
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }

    } catch ( error ) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }

    }

}

export const registerUserEithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, {
            displayName,
        });

        // TODO: actualizar el displayName en firebase

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: 'Este email ya esta en uso' }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: 'Usuario o contraseña invalidos'}
    }
    //! signWithEmailPassword
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}