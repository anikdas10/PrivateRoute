import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);

    const [loading,setLoading]=useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign out
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
        })

        return ()=>{
            unSubscribed();
        }
    },[])
    // onAuthStateChanged(auth , currentUser =>{
    //     if(currentUser){
    //         console.log(currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null)
    //     }
    // })


      const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        loading,
        user
    }


    return (
       <AuthContext.Provider value={authInfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;