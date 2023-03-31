import React from 'react';

const SpentTime = ({blogTime}) => {
    let totalTime= 0;
    for(const time of blogTime){
        totalTime = totalTime + time.readTime
        console.log(time)
    }
    return (
        <div className='sticky top-0'>
            <div className='p-3 text-center border-2 mb-5 rounded-lg bg-rose-100 shadow-2xl'>
                <h3 className='text-2xl font-semibold'>Spent time on read: {totalTime}</h3>
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default SpentTime;