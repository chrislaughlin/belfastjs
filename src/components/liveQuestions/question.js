import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #ffffff6e;
`;

const Question = ({ id, name, question}) => {
    return (
        <StyledQuestion>
            <span>Name: {name}</span>
            <span>Question: {question}</span>
        </StyledQuestion>
    );
};

export default Question;

