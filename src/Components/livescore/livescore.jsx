import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import './livescore.css'

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
})

const Heading = ()=>{
    const css = style();
    return(
        <Paper className={css.label}>
            <div className="featnewhead">
                    <div className="col"></div>
                    <Typography>
                        Live score
                    </Typography>
            </div>
        </Paper>

    )
}




class Livescore extends Component {
    state = {  }
    render() { 
        return (
            <div className="livescore">
                <Heading/>
                <div className="container"></div>
            </div>
          );
    }
}
 
export default Livescore;