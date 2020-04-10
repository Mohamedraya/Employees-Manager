import React ,{Component}from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey :'AIzaSyBp52t7xdHhxR9UY4dW8bdpievWbWSzAvw',
            authDomain: 'manager-f8c23.firebaseapp.com'
        };
        firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <View>
                    <Router/>
                </View>
            </Provider>
        );
    }
}