import React, {Component} from 'react';
import './carousel.js'
import './carousel.css'
import data from './data'
import $ from 'jquery';
const imgarray = data[0];
const heading = data[1]
const Img = (props)=>{
  return(
    props.value.map((data)=>{
      return(<img key={data} src={data} alt='post_image'/>);
    }))
}



class Slider extends Component {
  constructor(){
    super();
    this.state = {value: imgarray,
                  heading: data[1],
                  time: 20000,
                }
  }
  componentDidMount(){
    this.img = document.getElementsByClassName('main')[0].getElementsByTagName('img');
    this.count = 0;
    this.index = 0;
   this.myvar = setInterval(() => {
    this.img = document.getElementsByClassName('main')[0].getElementsByTagName('img');
      this.fun()
    }, this.state.time);
  }


  fun(){
    $(this.img).eq(this.count).removeClass('clickrevslider');
      $(this.img).eq(this.count).addClass('slider');
      if(this.index===heading.length-1){
        this.index = -1;
      }
      this.index +=1;
      document.getElementsByClassName('header')[0].getElementsByTagName('p')[0].innerHTML = heading[this.index].post_heading;
      this.count+=1;
      if(this.count===this.img.length-this.state.value.length && this.img.length>2*this.state.value.length){
        this.yo = this.img.length;
        for(let i=0;i<this.yo-this.count;i++){
            $(this.img).eq(0).remove()
        }
        this.count= this.state.value.length;
      }
      if(this.count===this.img.length-1){
        this.copyimgarr = this.state.value;
        for(let i=0;i<this.state.value.length;i++){
        this.sourceImage = document.createElement('img')
        this.sourceImage.src = this.copyimgarr[i];
        document.getElementsByClassName('main')[0].appendChild(this.sourceImage);
        }
      }
  }
  render() { 
    return (
      <section id="carousel">
         <p className="toppost">Top Posts</p>
         <div className="postline"></div>
       <div className="main">
        <svg onClick={this.right.bind(this)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than" className="svg-inline--fa fa-greater-than fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"></path></svg>
         <svg onClick={this.left.bind(this,heading)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than" className="svg-inline--fa fa-greater-than fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"></path></svg>
         <Img value={this.state.value}/>

         <div className="header">
                <p>{heading[0].post_heading}</p>
                    <button className='Readpost'>Read More</button>
            </div>
            </div>
         </section> );
  }

right(){
  $(this.img).eq(this.count).removeClass('clickrevslider');
  $(this.img).eq(this.count).addClass('slider');
  this.fun();
}
left(){
  if(this.count-1>=0){
    this.count -=1;
    if(this.index-1<0){
      this.index =heading.length-1;
    }else{
      this.index -=1;
    }
    $(this.img).eq(this.count).addClass('clickrevslider');
  document.getElementsByClassName('header')[0].getElementsByTagName('p')[0].innerHTML = heading[this.index].post_heading;
  
  }
  if(this.count<0){
    this.count =0
  }
}

}
 
export default Slider;