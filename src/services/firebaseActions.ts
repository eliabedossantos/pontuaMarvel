import { config } from "../util/config";
import { auth } from "./firebaseConfig";

export const verifyUserLoggedIn = () => {
    return new Promise((resolve: any, reject: any) => {
        auth.onAuthStateChanged((user) => {
        if (user) {
            resolve(user);
        } else {
            reject();
        }
        });
    });
}

export const signOutUser = () => {
    return new Promise((resolve: any, reject: any) => {
        auth.signOut()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}
