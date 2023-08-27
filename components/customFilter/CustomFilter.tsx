import React from 'react'

type CustomFilterProps = {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div>{title}</div>
  )
}

export default CustomFilter