document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    
    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstPost');

    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.write( data.title + `<br>`)
        document.write( data.createdAt + `<br>` )
    })
    
});

function updatePost(e) {
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstPost');
    myPost.update({ title: e.target.value })
}