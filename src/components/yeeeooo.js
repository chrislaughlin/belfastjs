import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const StyledCodeBlock = styled.div`
    pre {
        color: none !important;
        background: none !important;
        text-shadow:none !important;
        font-family:none !important;
        text-align:none !important;
        white-space:none !important;
        word-spacing:none !important;
        word-break:none !important;
        overflow-wrap:none !important;
        line-height:none !important;
        tab-size:none !important;
        hyphens: none !important;
        padding: none !important;
        margin: none !important;
        overflow: none !important;
        border: none !important;
        border-radius:none !important;
        box-shadow:none !important;
    }
`;

const Yeeeoooo = () => {
    const codeString = `console.log('yeeeoooo');`;

    return (
        <StyledCodeBlock>
            <SyntaxHighlighter language="javascript" style={dark}>
                {codeString}
            </SyntaxHighlighter>
        </StyledCodeBlock>
    )
};

export default Yeeeoooo;