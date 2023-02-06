import React from 'react'

function Home() {
  return (
    <div>
      <h1 className='text-6xl'>Home </h1>
      {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home