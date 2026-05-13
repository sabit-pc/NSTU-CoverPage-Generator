// ═══════════════════════════════════════════
//   auth.js  — NSTU Cover Generator
//   Handles: login, register, Google sign-in,
//            sign-out, auth state, Firestore profile
// ═══════════════════════════════════════════

import { auth, db } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();

// ─────────────────────────────────────────
//  Save / merge user profile in Firestore
// ─────────────────────────────────────────
async function saveUserProfile(user, extra = {}) {
  const ref  = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid:         user.uid,
      email:       user.email,
      displayName: user.displayName || extra.name || "",
      roll:        extra.roll || "",
      photoURL:    user.photoURL || "",
      createdAt:   new Date().toISOString()
    });
  }
}

// ─────────────────────────────────────────
//  Email / Password — Register
// ─────────────────────────────────────────
export async function registerWithEmail(name, roll, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await saveUserProfile(cred.user, { name, roll });
  return cred.user;
}

// ─────────────────────────────────────────
//  Email / Password — Login
// ─────────────────────────────────────────
export async function loginWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// ─────────────────────────────────────────
//  Google Sign-In
// ─────────────────────────────────────────
export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  await saveUserProfile(result.user);
  return result.user;
}

// ─────────────────────────────────────────
//  Sign Out
// ─────────────────────────────────────────
export async function logoutUser() {
  await signOut(auth);
  window.location.href = "auth.html";
}

// ─────────────────────────────────────────
//  Auth state observer — call on every page
//  requireAuth: if true, redirects to auth.html when not logged in
//  callback(user) fires when state is known
// ─────────────────────────────────────────
export function watchAuthState(callback, requireAuth = false) {
  onAuthStateChanged(auth, user => {
    if (requireAuth && !user) {
      window.location.href = "auth.html";
      return;
    }
    callback(user);
  });
}

// ─────────────────────────────────────────
//  Friendly error messages
// ─────────────────────────────────────────
export function friendlyError(code) {
  const map = {
    "auth/email-already-in-use":   "This email is already registered.",
    "auth/invalid-email":          "Please enter a valid email address.",
    "auth/wrong-password":         "Incorrect password.",
    "auth/invalid-credential":     "Incorrect email or password.",
    "auth/user-not-found":         "No account found with this email.",
    "auth/weak-password":          "Password must be at least 6 characters.",
    "auth/popup-closed-by-user":   "Google sign-in was cancelled.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/too-many-requests":      "Too many attempts. Please try again later."
  };
  return map[code] || "Something went wrong. Please try again.";
}
