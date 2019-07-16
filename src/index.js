import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar'
import Newsfeed from './Components/Newsfeed/newsfeed'
import Featnews from './Components/featurenews/featnews'
import Carousel from './Components/carousel/carousel_blog'
import Teamrank from './Components/teamrank/team'
import Livescore from './Components/livescore/livescore'
import Post from './Components/post/post'
import Newsletter from './Components/newsletter/newsletter'
import Toppost from './Components/toppost/toppost'
import Footer from './Components/footer/footer'

const Body = ()=>{

  return(<React.Fragment>
    <Navbar/>
    <Newsfeed/>
    <Carousel/>
    <section className='section1'>
      <Teamrank/>
      <Featnews/>
      <Livescore/>
    </section>
    <section className='section2'>
    <Newsletter/>
    <Toppost/>
    </section>
    <section className='section3'>
      <Post/>
    </section>
    <Footer/>
  </React.Fragment>
  )

}


ReactDOM.render(
  <Body/>,
  document.getElementById('root')
);
