import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '1038618882644-q0qr8phhvjdvlfhanc97v05d1ur95vt5.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDnPALwF0Thl23g6ef3A9MVzGdoK3Ah4Qc';
function GoogleAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    useEffect(() => {
        const initClient = async () => {
            try {
                await gapi.load('client:auth2', async () => {
                    await gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        scope: 'email'
                    });
                });
            } catch (error) {
                console.error('Error initializing Google API client', error);
            }
        };
        initClient();
    }, []);

    const handleLogin = async () => {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
            if (authInstance) {
                const user = await authInstance.signIn();
                const profile = user.getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                setIsLoggedIn(!isLoggedIn);

            } else {
                console.error('Google Auth instance not initialized');
            }
        } catch (error) {
            console.error('Error during sign-in', error);
        }
    };

    const handleLogout = async () => {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
            if (authInstance) {
                setIsLoggedIn(!isLoggedIn);
                await authInstance.signOut();
                console.log('User signed out.');
            } else {
                console.error('Google Auth instance not initialized');
            }
        } catch (error) {
            console.error('Error during sign-out', error);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <button className='btn btn-outline-danger' onClick={handleLogout}> Logout</button>
            ) : (
                <button className='btn btn-outline-info' onClick={handleLogin}>Login with Google</button>
            )}
        </div>

    );
};

export default GoogleAuth;