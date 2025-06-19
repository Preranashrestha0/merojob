import React from 'react';
import { Button } from './ui/button';

const HeadingTag = ({ heading='', description='', content='' }) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 flex flex-col justify-center items-center">
     <Button variant={'destructive' } className=''>{heading}</Button>
      <p className="sm:text-4xl text-2xl my-2 font-medium ">{description}</p>
     <div className="md:w-full lg:w-3/4 text-center text-gray-500 sm:w-full px-4">{content} </div>
    </div>
  );
};

export default HeadingTag;
