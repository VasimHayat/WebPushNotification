   /*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/  
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase.js'); 
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js')

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
     apiKey: "AIzaSyB1ShOJW209qRD8csxTLHDIcNkAAPd84CY",
    authDomain: "fir-cloud-messaging-147ff.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-147ff.firebaseio.com",
    projectId: "fir-cloud-messaging-147ff",
    storageBucket: "",
    messagingSenderId: "869529021649",
    appId: "1:869529021649:web:b72f20fcb90b72f4e1a9f0",
    measurementId: "G-M73821FC0W"
})

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
        icon: notification.icon
    }; 

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
