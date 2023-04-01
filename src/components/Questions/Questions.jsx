import React from 'react';

const Questions = () => {
    return (
        <div className='mb-5 rounded-md'>
            <h2 className='text-2xl font-bold text-center mb-5'>All <span className='text-secondary'>Question</span> <span className='text-rose-400'>Answer</span></h2>
            <div className='w-10/12 mx-auto'>
                <ol className='list-decimal	bg-primary ps-16 py-5'>
                    <li className='p-3'>What is difference between  props and state ?
                        <p><span>Ans: </span>Props - Props is a type of object that stores attribute values of tags.<br />
                            <ol className='list-disc'>
                                <li>Props are immutable</li>
                                <li>Props can not be modified</li>
                                <li>Props are read only</li>
                                <li>Use this to pass data to child components.</li>
                            </ol>
                            * State - The state object is where store property value that belongs to the component.
                            <ol className='list-disc'>
                                <li>State are mutable</li>
                                <li>state can be modified using useState()</li>
                                <li>State changes can be asynchronous.</li>
                            </ol>
                        </p>
                    </li>
                    <li className='px-3 pb-3'>How does useState work?
                        <p>
                            Ans: useState is React Hook that allows you to add state to a functional component. <br />
                            It returns an array with two values: the current state and a function to update it. <br />
                            The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                        </p>
                    </li>
                    <li className='px-3 pb-3'>Purpose of useEffect other than fetching data.
                        <p>useEffect use cases
                            <ol className='list-disc'>
                                <li>Use state change and Validating</li>
                                <li>Live filtering</li>
                                <li>trigger animation on new array value.</li>
                            </ol>
                        </p>
                    </li>
                    <li className='px-3 pb-3'>How Does React work?</li>
                    <p>React creates a DOM similar to the browser's DOM, which is called a virtual DOM. <br />
                        Now this DOM is just like the real DOM, but this virtual DOM is actually a javascript object. <br />
                        React makes it easy to use JavaScript with this dom to modify any htm, css javascript elements in less time and efficiently.</p>
                </ol>
            </div>
        </div>

    );
};

export default Questions;