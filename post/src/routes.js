import React, { Component } from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import PostList from './containers/post_list';


class Routes extends Component {
    render () {
        return (

            <BrowserRouter>
                <Route path="/" component={PostList}/>
            </BrowserRouter>        
        )
    }
}

export default Routes