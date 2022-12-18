import React, {Component} from "react";
import { TextInput, View, Button } from 'react-native';

export class Register extends Component{
    constructor( props : any) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: '',
        }

        // @ts-ignore
        this.onSignUp() = this.onSignUp().bind(this);
    };
    onSignUp(){

    };

    render(){
        return (
           <View>
               <TextInput
                   placeholder="userName"
                   onChangeText={(userName) => this.setState({userName})}
               />
               <TextInput
               placeholder="email"
               onChangeText={(email) => this.setState({email})}
               />
               <TextInput
                   placeholder="password"
                   secureTextEntry={true}
                   onChangeText={(password) => this.setState({password})}
               />
               <Button
                   title="Sign Up"
                   onPress={() => this.onSignUp()}
               />
           </View>
        )
    }
}

export default Register