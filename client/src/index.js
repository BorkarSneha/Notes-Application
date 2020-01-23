import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import configureStore from './store/configureStore'

import {startSetCategories} from './actions/categories'
import {startSetNotes} from './actions/notes'

import {startGetUser} from './actions/user'

const store=configureStore()


if(localStorage.getItem('authToken')){ //if token dan make api call
    store.dispatch(startSetCategories())
    store.dispatch(startSetNotes())
    store.dispatch(startGetUser())
}
const ele=(
    <Provider store = {store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));



