'use client';

import React, { MouseEventHandler } from 'react'

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit' | 'reset';
}

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}} mt-8 transition duration-400 ease-in-out hover:opacity-80`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
