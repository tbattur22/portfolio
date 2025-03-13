'use client'

import React from 'react'

const ErrorPage = ({ error }) => {
    console.log(`unexpected error`,error);
  return (
    <div>An expected error occurred.</div>
  )
}

export default ErrorPage