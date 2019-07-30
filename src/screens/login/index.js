import React, { Component } from "react";
import {ImageBackground, toyse, ActivityIndicator, View, KeyboardAvoidingView} from  'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    H1,
    Text,
    Body, Button, Icon, Left, Thumbnail,
    Right, Form, Item, Input
} from "native-base";

import { connect } from 'react-redux';
import { validarLogin, getToken, loading } from '../../redux/actions/login';

import styles from "./../home/styles";
const bg_login = require("../../../assets/bg_login.png");
const img_login = require("../../../assets/contacts/himanshu.png");

class Login extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            email : null,
            password : null
        };
    }

    componentDidMount(){
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        this.props.consultarToken().then(() => {
            if  (this.props.token !== null){
                this.props.navigation.navigate('Home');
            }
        })
        .catch(error => {
            this.setState({ error })
        })
    };

    guardar(){
        this.props.carga(true);
        console.log(this.props.isLoading);
        this.props.validarUsuario(this.state);
        console.log(this.props.isLoading);
    }

    boton(){
        if(this.props.isLoading == null || this.props.isLoading == false){
            return (<Button
                block
                rounded
                style={styles.buttonLogin}
                onPress={()=>{this.guardar()}}
                >
                    <View><Text>Ingresar</Text></View>
                </Button>);
        }else{ 
            return (<Button
                rounded
                style={styles.buttonLogin}
                >
                    <View><ActivityIndicator /></View>
                </Button>)
        }                       
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={bg_login} style={{width: '100%', height: '100%'}}>
                    <Header style={{ backgroundColor: "#207CA0" }}
                            androidStatusBarColor="#1B687F"
                            iosBarStyle="light-content">
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                        <Title>Login</Title>
                        </Body>
                        <Right/>
                    </Header>

                    <Content padder>
                        <Thumbnail style={styles.photo_log} source={img_login} />
                        <KeyboardAvoidingView>
                            <Form style={styles.contentForm}>
                                <Item rounded style={styles.itemForm}>
                                    <Icon active name="mail" style={{ color: "white" }} />
                                    <Input onChangeText={(email) => this.setState({email})} returnKeyType={"next"} style={styles.inputColor} placeholder="Correo" placeholderTextColor="white"/>
                                </Item>
                                <Item rounded style={styles.itemForm}>
                                    <Icon active name="key" style={{ color: "white" }} />
                                    <Input onChangeText={(password) => this.setState({password})} style={styles.inputColor} placeholder="Contraseña" secureTextEntry placeholderTextColor="white"/>
                                </Item>
                            </Form>
                            <View style={{display:"flex", justifyContent:"center"}}>
                            {this.boton()}
                            </View>
                            
                        </KeyboardAvoidingView>
                    </Content>

                </ImageBackground>
            </Container>
        );
    }
}

const mapStateProps = state =>{
    return {
        datosLogin: state.login.respuesta,
        token: state.login.token,
        isLoading: state.login.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        validarUsuario : datosUsuario => dispatch(validarLogin(datosUsuario)),
        consultarToken : () => dispatch(getToken()),
        carga : estado => dispatch(loading(estado))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Login);

