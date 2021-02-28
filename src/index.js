import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import history from './components/helper/history';

import App from './App';
import navbarReducer from './components/Navbar/Navbar.reducer';
import homeReducer from './routes/Home/Home.reducer';
import blogsReducer from './routes/Blogs/Blogs.reducer';
import blogReducer from './routes/Blog/Blog.reducer';
import signInReducer from './routes/SignIn/SignIn.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Combine reducer to 1 root reducer
const RootReducer = combineReducers({
    home: homeReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    token: signInReducer,
    logged: navbarReducer
})

//apply middleware
const store = createStore(RootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));