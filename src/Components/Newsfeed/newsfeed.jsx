import React, {Component} from 'react'
import logo from './banner.svg'
import './newsfeed.css'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import $ from 'jquery'

const page = makeStyles({
    root:{
       color: 'white',
       position: 'absolute',
       left: '5%',
       top: '20%',
       fontFamily: 'roboto',
       fontSize: '20px',

    },
    news:{
        position: 'absolute',
        left:' 35%',
        fontFamily: 'roboto',
        fontSize: '15px',
        top: '3%',
        display: 'none',
        '&:nth-child(1)':{
            display: 'block'
        }

    }

})


const Newsfeed = (props)=> {
        props = {
            value: [
                    {
                        id: 1,
                        news: 'text1'
                    },
                    {
                        id: 2,
                        news: 'text2'
                    },
                    {
                        id: 3,
                        news: 'text3'
                    },
                    {
                        id: 4,
                        news: 'text4'
                    },

            ]
        }
        const  pagestyle = page();
        return (
            <React.Fragment>
                <div className="newsfeed">
                    <Typography className={pagestyle.root} >
                        News Feed
                    </Typography>
                    <img src={logo} alt='banner'/>
                    <div className="row">
                        {props.value.map((data)=>{
                            return(
                            <Typography className={pagestyle.news} key={data.id}>{data.news}</Typography>
                            )
                        })}
                    </div>
                    <svg onClick={leftmove} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than" className="svg-inline--fa fa-greater-than fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"></path></svg>
                    <svg onClick={rightmove} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than" className="svg-inline--fa fa-greater-than fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"></path></svg>
                </div>
            </React.Fragment>
          );
    }


var count = 0;


    function leftmove(){
        if(count-1>=0){
        $('.newsfeed>.row>p').eq(count).fadeOut();
        count-=1;
        $('.newsfeed>.row>p').eq(count).fadeIn();
        }
    }
    function rightmove(){
        if(count+1<$('.newsfeed>.row>p').length){
        $('.newsfeed>.row>p').eq(count).fadeOut('slow');
        count+=1;
        $('.newsfeed>.row>p').eq(count).fadeIn('slow');
        }
    }

 

class News extends Component {
    render() { 
        return ( <Newsfeed/> );
    }

    componentDidMount(){
        setInterval(() => {
            $('.newsfeed>.row>p').eq(count).fadeOut('slow');
            count+=1;
            if(count===$('.newsfeed>.row>p').length){
                count = 0;
            }
            $('.newsfeed>.row>p').eq(count).fadeIn('slow');
            
        }, 5000);
    }
}
 
export default News;