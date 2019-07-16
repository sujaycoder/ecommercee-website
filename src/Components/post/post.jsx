import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import './post.css'
import $ from 'jquery'

const style = makeStyles({
    button:{
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        fontFamily: 'Roboto',
        fontSize: '15px',
        color: '#8B8F97',
        padding: '3px 3px 3px 3px',
        width: '120px',
        height: '50px'
    },
    label: {
        height: '70px',
        width: '750px',
        '& p':{
            margin: '15px auto 10px 5px',
            fontSize: '24px',
            fontFamily: 'Roboto',
        }
    },
})

const Postpage = (props)=>{
    const css = style();
    props = {
        value:[
            {
                id: 1,
                article: 'any article line will here',
                img_url: 'http://p.imgci.com/db/PICTURES/CMS/292000/292067.4.jpg',
                heading: 'post heading',
                readtime: '5 min read',
                date: '9 jul, 2019',
                username: 'user name'
            },
            {
                id: 2,
                article: 'any article line will here',
                img_url: 'http://p.imgci.com/db/PICTURES/CMS/292000/292067.4.jpg',
                heading: 'post heading',
                readtime: '5 min read',
                date: '9 jul, 2019',
                username: 'user name'
            },
            {
                id: 3,
                article: 'any article line will here',
                img_url: 'http://p.imgci.com/db/PICTURES/CMS/292000/292067.4.jpg',
                heading: 'post heading',
                readtime: '5 min read',
                date: '9 jul, 2019',
                username: 'user name'
            },
        ]
    }

    return(

        <div className="post">
            {
                props.value.map((data)=>{
                    return(
                        <div key={data.id} className="post_card">
                        <div className="postbanner">
                            <img src={data.img_url} alt="post banner"/>
                        </div>
                        <div className="postinf">
                            <Button size='medium'  className={css.button} variant='outlined'>Read More</Button>
                            <p className="article">{data.article}</p>
                            <p className="date">{data.date}</p>
                            <p className="readtime">{data.readtime}</p>
                            <p className='username'>{data.username}</p>
                            <p className="heading">{data.heading}</p>
                            <svg width="240" height="42" viewBox="0 0 240 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39 0H240V42H0L39 0Z" fill="#674C4C"/>
                            </svg>
                            <svg className='bookmark' onClick={makebookmark.bind(data.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </div>
                    </div>
                    )
                })
            }
        </div>

    )

    function makebookmark(){
        $('.bookmark').eq(this-1).toggleClass('makemark');
    }


}

const Heading = ()=>{
    const css = style();
    return(
        <Paper className={css.label}>
            <div className="featnewhead">
                    <div className="col"></div>
                    <Typography>
                        New Posts
                    </Typography>
            </div>
        </Paper>

    )
}

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="postcontainer">
                <Heading/>
                <Postpage/>
            </div>
         );
    }
}
 
export default Post;