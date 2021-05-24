import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Yeeeoooo = () => {
    const codeString = `console.log('yeeeoooo');`;

    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {codeString}
        </SyntaxHighlighter>
    )
};

export default Yeeeoooo;