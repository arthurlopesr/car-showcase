'use client';

import React, { MouseEventHandler } from 'react'

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}} transition duration-400 ease-in-out hover:opacity-80`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
