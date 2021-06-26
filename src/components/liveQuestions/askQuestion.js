import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import firebase from '../../firebaseInstance';

const StyledAskQuestion = styled.div`
    .question-form {
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        max-width: 300px;
    }

    input {
        height: 45px;
        border-radius: 5px;
    }

    textarea {
        resize: none;
        border-radius: 5px;
    }

    label:nth-of-type(2) {
        margin-top: 15px;
    }

    button {
        max-width: 300px;
        margin-top: 15px;
        height: 45px;
        border-radius: 5px;
        font-size: 28px;
        background-color: #f5dd00;
        color: black;
    }
`;

const AskQuestion = () => {
    const [formState, setFormState] = useState({
        name: '',
        question: '',
    }); 

    return (
        <StyledAskQuestion>
            <h1>Ask a Live Question!</h1>
            <div className="question-form">
                <label>
                    Name (Optional): 
                </label>
                <input 
                    placeholder="Enter name"
                    value={formState.name}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            name: event.target.value,
                        })
                    }}
                />
                <label>
                    Question:
                </label>
                <textarea 
                    rows={10} 
                    placeholder="Ask question"
                    value={formState.question}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            question: event.target.value,
                        })
                    }}
                />
                <button
                    onClick={() => {
                        const questionId = uuidv4();
                        firebase.database().ref(`/questions/${questionId}`).set({
                            id: questionId,
                            name: formState.name || 'Anonymous',
                            question: formState.question,
                        }, () => {
                            setFormState({
                                name: '',
                                question: '',
                            });
                        });
                    }}
                >
                    SUBMIT
                </button>
            </div>
        </StyledAskQuestion>
    )
}

export default AskQuestion;


