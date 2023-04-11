import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mt-5 md:w-5/6 mx-auto'>
            <div className='qna'>
                <strong>When Should we use eontext api?</strong>
                <p>The React Context API can be used to provide state to multiple components far away in the component tree.</p>
            </div>

            <div className='qna'>
                <strong>What Is custom hook?</strong>
                <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of our app.</p>
            </div>

            <div className='qna'>
                <strong>What is useRef?</strong>
                <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.</p>
            </div>

            <div className='qna'>
                <strong>What Is useMemo?</strong>
                <p>Hooks are relatively new feature of react, they were introduced in React 16.8, they help us make use of state and react features from a function based component, for example useState, useEffect, useHistory and many others. Hooks help us to avoid the complexities of classes and make our code simpler to read and understand.</p>
            </div>
        </div>
    );
};

export default Blog;