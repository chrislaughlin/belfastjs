import { useState, useEffect } from 'react';

import firebase from '../firebaseInstance';

const useFireDataBase = () => {
    const [ questionData, setQuestionData ] = useState([])

    useEffect(() => {
        const questionsRef = firebase.database().ref('/questions');
        questionsRef.on('value', (snapshot) =>{
            const data = snapshot.val();
            setQuestionData(Object.values(data));
        });
    }, [])

    return questionData;
}

export default useFireDataBase;