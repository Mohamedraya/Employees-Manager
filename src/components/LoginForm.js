import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {emailchanged,passwordchanged,loginUser} from '../actions';
import {Card,CardSection,Input,Button,Spinner} from './common/indexx';
import { View ,Text} from 'react-native';

class LoginForm extends Component {

    onEmailChange(text) {
       this.props.emailchanged(text);
    }

    onPasswordChange(text) {
       this.props.passwordchanged(text);
    }

    onButtonPress () {
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderError () {
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                   <Text style={Styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton () {
        if(this.props.loading) {
            return <Spinner size="large"/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login 
            </Button>
        );
    }

    render(){
        return(
          <Card>
            <CardSection>
               <Input label="Email" placeholder="user@gmail.com"
                      onChangeText={this.onEmailChange.bind(this)}
                      value = {this.props.email}
               />
            </CardSection>
             
            <CardSection>
               <Input label="Password" placeholder="password"
                      secureTextEntry
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
               />
            </CardSection>
   
            {this.renderError()}
            
            <CardSection>
               {this.renderButton()}
            </CardSection>
          </Card>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {
        email : auth.email,
        password : auth.password,
        error : auth.error,
        loading : auth.loading
    };
};

const styles = {
    errorTextStyle: {
        fontSize : 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect (mapStateToProps,
    {emailchanged,passwordchanged,loginUser})(LoginForm);