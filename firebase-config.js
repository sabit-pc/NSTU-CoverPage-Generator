// ═══════════════════════════════════════════
//   firebase-config.js  — NSTU Cover Generator
//   Import this file wherever Firebase is needed
// ═══════════════════════════════════════════

import { initializeApp }  from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
import { getAnalytics }   from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey:            "AIzaSyCmubs2bthK9fy_GTUybQau2TlqaQUjKPY",
  authDomain:        "nstu-coverpage-generator.firebaseapp.com",
  projectId:         "nstu-coverpage-generator",
  storageBucket:     "nstu-coverpage-generator.firebasestorage.app",
  messagingSenderId: "904772143072",
  appId:             "1:904772143072:web:612221abc845755a530d85",
  measurementId:     "G-1B4KDLME3S"
};

const app       = initializeApp(firebaseConfig);
const auth      = getAuth(app);
const db        = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
