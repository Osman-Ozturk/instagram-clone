import React from 'react'
import Post from '../../components/post/Post.jsx'
import RightBox from '../../components/rightBox/RightBox.jsx'
import './home.scss'

function Home({top,bottom}) {
  return (
    <div className='container'>
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            <Post top bottom/>
            <Post />
          
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>

      </div>
    </div>
  )
}

export default Home
