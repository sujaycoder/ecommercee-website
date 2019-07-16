import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/styles'

import './newsletter.css'

const style = makeStyles({
    inputfield: {
        width: '300px',
        margin: '5px auto 5px 30px'
    },
    button:{
        width: '100px',
        height: '40px',
        margin: '10px auto 5px auto',
        background: '#8B8F97',
        color: '#fff',

    },
    label:{
        fontSize: '20px'

    },
    paper:{
        width: '800px',
        height: '300px',
    }
})



const Letterfrom = ()=>{
    const css = style();

    return(
        <Paper className={css.paper}>
            <div className="form">
               <div className="head">
                   <div className="col"></div>
               <p className="label">News Letter</p>
                   </div> 
                <p className="sub">Subscribe Us!</p>
            <form className='newsletter' action="#" >
                <Textfield required onChange={handle} className={css.inputfield}  name='username'  id='user_name' label='Name'/>
                <Textfield required type='Email' onChange={handle} className={css.inputfield}  name='useremail'  id='user_email' label='Email'/>
                <Button value='Submit' variant='contained' size='medium' type='submit' className={css.button}>Submit</Button>

            </form>
         </div>
        </Paper>

    )
        function handle(event){
            console.log(event.target.value)
        }
}


class Newsletter extends Component {
    state = {  }
    render() { 
        return ( 
            <Letterfrom/>
         );
    }
}
 
export default Newsletter;