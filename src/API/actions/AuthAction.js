import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";



export const AuthAction = createAsyncThunk('/auth', ({ data, formType }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const auth = getAuth(app);
    
        if (formType == 'Login') {
           const user= signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            
                const user = {
                    email: userCredential.user.email,
                    accessToken: userCredential.user.accessToken,
                }
                
                
                return user
            }).catch((error) => {                
                return rejectWithValue('invalid Emaill or passward')
            });

            return user
    
        } else {
    
            const user = createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
                const user = {
                    email: userCredential.user.email,
                    accessToken: userCredential.user.accessToken
                }
                
            }).catch((error) => {
                
                return rejectWithValue('email already exist')
            });

            return user
        }
    } 



)