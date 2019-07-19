import React, { Component } from "react";
import {ImageBackground} from  'react-native';
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


import {connect} from 'react-redux';
import {validarLogin} from '../../redux/actions/login';


import styles from "./../home/styles";
const bg_login = require("../../../assets/bg_login.png");
const img_login = require("../../../assets/contacts/himanshu.png");

class Login extends Component{
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
                        <Form style={styles.contentForm}>
                            <Item rounded style={styles.itemForm}>
                                <Icon active name="mail" style={{ color: "white" }} />
                                <Input returnKeyType={"next"} style={styles.inputColor} placeholder="Correo" placeholderTextColor="white"/>
                            </Item>
                            <Item rounded style={styles.itemForm}>
                                <Icon active name="key" style={{ color: "white" }} />
                                <Input style={styles.inputColor} placeholder="Contraseña" secureTextEntry placeholderTextColor="white"/>
                            </Item>
                        </Form>
                        <Button
                            block
                            rounded
                            style={styles.buttonLogin}
                        >
                            <Icon active name="person" />
                            <Text>Iniciar Sesión</Text>
                        </Button>
                    </Content>

                </ImageBackground>
            </Container>
        );
    }
}

const mapStateProps = state =>{
    return{
        datosLogin: state.respuesta
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        validarLogin: (datosUsuario)=>{
            return dispatch(validarLogin(datosUsuario))
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Login);

