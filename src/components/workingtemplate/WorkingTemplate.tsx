import React from 'react';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';

const WorkingTemplate = ({ endvalue=0, description='', header='' }) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 flex flex-col justify-center items-center gap-2">
      <div className='text-[#CCE8C9] text-4xl font-semibold mb-2'>
        <AnimatedCounter
              duration={4000} endValue={endvalue}/>
              {header}
      </div>
     <div className='text-white'>{description}</div>
    </div>
  );
};

export default WorkingTemplate;
