import * as firebase from "firebase/app";
import 'firebase/database';
import {FirebaseConfig} from "./config";

firebase.initializeApp(FirebaseConfig);
const database = firebase.database();

export default database;