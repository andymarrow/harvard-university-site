import React from 'react'

export const metadata = {
  title: 'Blog - Centeral hub', 
  description: 'Read our latest blog posts and articles on various topics.', 
};

function Bloglayout({children}) {
  return (
    <div>{children}</div>
  )
}

export default Bloglayout