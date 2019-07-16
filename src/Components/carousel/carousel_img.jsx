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
        this.sourceImage = document.createElement('img'),
        this.sourceImage.src = this.copyimgarr[i];
        document.getElementsByClassName('main')[0].appendChild(this.sourceImage);
        }
      }
  }
  render() { 
    return (
      <section id="carousel">
       <div className='main'>
         <Img value={this.state.value}/>
            </div>
            <div className="header">
                <p>{heading[0].post_heading}</p>
                    <button onClick={this.right.bind(this)}>right</button>
                    <button onClick={this.left.bind(this,heading)} >{this.state.time}left</button>
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


