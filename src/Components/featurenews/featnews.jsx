import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import './featnews.css'

const style = makeStyles({
    label: {
        height: '70px',
        width: '400px',
        '& p':{
            margin: '15px auto 10px 5px',
            fontSize: '24px',
            fontFamily: 'Roboto',
        }
    },
    postheading:{
        fontSize: '24px',
        fontFamily: 'Roboto',
        margin: '5px 200px 5px 20px',

    },
    button:{
        height: '40px',
        width: '100px',
        margin: '20px 235px 5px 10px',
        color: '#fff',
        background: '#8B8F97',
        fontFamily: 'Roboto',
        fontSize: '12px',
        padding: '3px 5px 3px 5px',
    }
})


const Heading = ()=>{
    const css = style();
    return(
        <Paper className={css.label}>
            <div className="featnewhead">
                    <div className="col"></div>
                    <Typography>
                        Feature News
                    </Typography>
            </div>
        </Paper>

    )
}

const Mainframe = (props)=>{
    props={value:[
        {
            id: 1,
            heading: 'Post Heading',
            img_url : 'https://media.gettyimages.com/photos/sachin-tendulkar-of-the-indian-cricket-team-poses-with-the-icc-world-picture-id111487120?s=2048x2048',
            date: '6 jul, 2019'
        }

    ]}
    const css = style();

    return(
        <div className="mainfrm">
            <div className="banner">
                <img src={props.value[0].img_url} alt="News banner"/>
                <div className="hover">
                    <p>{props.value[0].date}</p>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt-square" className="svg-inline--fa fa-share-alt-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z"></path></svg>
                </div>
            </div>
            <Typography className={css.postheading}>{props.value[0].heading}</Typography>
            <Button variant='contained' className={css.button}>Read More</Button>
        </div>
    )
}

class Featnews extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="featnews">
                <Heading/>
                <Mainframe/>
            </div>
         );
    }
}
 
export default Featnews;