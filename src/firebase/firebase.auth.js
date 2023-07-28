import { getAuth } from "firebase/auth"
import app from "@/firebase/firebase.config.js"

const auth = getAuth(app)


export default auth;