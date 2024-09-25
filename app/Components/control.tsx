import React from 'react';
import Right from '../Icons/Right';
import Left from '../Icons/Left';

export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}:any) => (
  <button
    className='w-6 h-80 bg-none transition-all duration-300 hover:bg-gray-800/60 active:bg-gray-800'
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    <Left/>
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }:any) => (
  <button
  className='w-6 h-80 bg-none transition-all duration-300 hover:bg-gray-800/60 active:bg-gray-800 '
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    <Right/>
  </button>
);

export const renderBottomCenterControls=({goToSlide}:any)=>(
    <button className='bg-orange-500 w-2 h-2 rounded-full'>

    </button>
);