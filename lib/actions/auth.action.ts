'use server'

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;
export async function signUp(params: SignUpParams){
    const { uid, name, email} = params;

    try {
        const user = await db.collection('users').doc(uid).get();

        if(user.exists){
            return {
                success: false,
                message: "User already exists. Please sign in"
            }
        }

        await db.collection('users').doc(uid).set({
            name,
            email,
            createdAt: new Date()
        })

        return {
            success: true,
            message: "User created successfully"
        }
    } catch (error: any) {
        console.error("Error creating a user", error)

        if(error.code === "auth/email-already-exists"){
            return{
                success: false,
                message: "Email already exists"
            }
        }

        return{
            success: false,
            message: "Failed to create an account"
        }
    }
}

export async  function signIn(params: SignInParams){
    const { email, idToken} = params;

    try {
        const user = await auth.getUserByEmail(email);

        if(!user){
            return {
                success: false,
                message: "User not found. Create an account"
            }
        }

        await setSessionCooke(idToken);

        return {
            success: true,
            message: "User signed in successfully"
        }
    } catch (error) {
        console.log("Error signing in", error)

        return {
            success: false,
            message: "Failed to sign in"
        }
    }
}
export async function setSessionCooke(idToken: string){
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000 
    })

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    })
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const user = await db.collection('users').doc(decodedClaims.uid).get();

        if(!user.exists){
            return null;
        }

        return {
            ...user.data(),
            id: user.id
        } as User
    } catch (error) {
        console.log("Error getting current user:", error);
        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();

    return !!user;
}