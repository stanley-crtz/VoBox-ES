import { Config } from "../Config";

class Firebase {
  constructor() {
    this.db = Config.connectFirebase;
  }

  // Usuario

  createUser = (email, password) => {
    return this.db.auth().createUserWithEmailAndPassword(email, password);
  };

  sendEmailVerification = () =>
    this.db.auth().currentUser.sendEmailVerification();

  sendPasswordResetVerification = (email) =>
    this.db.auth().sendPasswordResetEmail(email);

  verifyEmail = (code) => this.db.auth().applyActionCode(code);

  verifiedPasswordReset = (code) =>
    this.db.auth().verifyPasswordResetCode(code);

  confirmPasswordReset = (code, newPassword) =>
    this.db.auth().confirmPasswordReset(code, newPassword);

  uploadPhotoProfile = (img, name) => {
    const date = new Date();

    const join = name + date.toISOString();

    return this.db.storage().ref(`Perfil/${join}`).put(img);
  };

  uploadFiles = (binder, img, name) => {
    const date = new Date();

    const join = name + date.toISOString();

    return this.db.storage().ref(`${binder}/${join}`).put(img);
  };

  insertUser = (user) =>
    this.db.firestore().collection("Users").doc(user.uid).set(user);

  updateUser = (user) => this.db.auth().currentUser.updateProfile(user);

  signInWithEmailAndPassword = (email, password) => {
    return this.db
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        return user;
      });
  };

  checkoutUser = async () => {
    let check = null;

    await this.db.auth().onAuthStateChanged((user) => {
      console.log("admin => ", user);
      check = user ? this.__get("Users", user.uid) : null;
    });

    return check;
  };

  //CRUD

  __get = async (collection, doc) => {
    if (doc) {
      return (
        await this.db.firestore().collection(collection).doc(doc).get()
      ).data();
    }

    const snapshot = await this.db.firestore().collection(collection).get();

    let data = [];

    snapshot.forEach((doc) => data.push({ id: doc.id, data: doc.data() }));

    return data;
  };

  __post = async (collection, data) => {
    return await this.db.firestore().collection(collection).doc().set(data);
  };

  __getOrder = async (collection, doc) => {
    if (doc) {
      return (
        await this.db
          .firestore()
          .collection(collection)
          .doc(doc)
          .orderBy("publish", "desc")
          .get()
      ).data();
    }

    const snapshot = await this.db
      .firestore()
      .collection(collection)
      .orderBy("publish", "desc")
      .get();

    let data = [];

    snapshot.forEach((doc) => data.push({ id: doc.id, data: doc.data() }));

    return data;
  };
}

export default new Firebase();

