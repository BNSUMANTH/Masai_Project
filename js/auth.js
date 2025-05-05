import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {doc,getDoc,setDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
document.addEventListener("DOMContentLoaded",()=>{
    const loginBtn=document.getElementById("login-btn");
    const signupBtn=document.getElementById("signup-btn");
    const logoutBtn=document.getElementById("logout-btn");
    if(loginBtn){
        loginBtn.addEventListener("click",async()=>{
            const email=document.getElementById("login-email").value;
            const password=document.getElementById("login-password").value;
            try{
                await signInWithEmailAndPassword(auth,email,password)
                window.open("js/dashboard.html","_blank");
            } catch(error){
                document.getElementById("login-message").innerHTML=error.message;
            }
        })
    }
    if(signupBtn){
        signupBtn.addEventListener("click",async()=>{
            const email=document.getElementById("signup-email").value;
            const password=document.getElementById("signup-password").value;
            const role=document.getElementById("role").value;
            try {
                const userCredentials=await createUserWithEmailAndPassword(auth,email,password)
                const user_id1 =userCredentials.user.uid;
                await setDoc(doc(db,"users",userCredentials.user.uid),{email,role})
                window.location.href="../index.html"
            } catch (error) {
                document.getElementById("signup-message").innerHTML=error.message;
            }
        })
    }
    if(logoutBtn){
        logoutBtn.addEventListener("click",async()=>{
            await signOut(auth);
            window.location.href="index.html";
        })
    }
})