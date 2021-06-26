import React, { useState } from 'react';
import styled from 'styled-components';

import firebase from '../../firebaseInstance';
import useFireDataBase from '../../hooks/useFireDataBase';
import Question from './question';

const StyledQuestionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const QuestionsList = () => {
    const questionData = useFireDataBase();

    return (
        <div>
            <h2>Questions</h2>
            <StyledQuestionList>
                {
                    questionData.map(({ id, name, question}) => {
                        return (
                            <Question 
                                key={id}
                                id={id}
                                name={name}
                                question={question}
                            />
                        );
                    })
                }
            </StyledQuestionList>
        </div>
    )
};

export default QuestionsList;