import {Account, Avatars} from "react-native-appwrite";
import * as Linking from 'expo-linking';

export const config={
    platform:'com.hashmeet.nestquest',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client=new Client();
client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar= new Avatars(client);
export const account=new Account(client);

export async function login(){
    try{
        const redirectUri=Linking.createURL('/'); //If authenticated by Google Oauth get back to the app home page.
    }catch(error){
        console.error(error);
        return false;
    }
}