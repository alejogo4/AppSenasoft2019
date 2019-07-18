import React, { Component } from "react";
import {ImageBackground} from 'react-native';
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

import styles from "./../home/styles";
const bg_login = require("../../../assets/bg_login.png");
const img_login = require("../../../assets/contacts/himanshu.png");

export default class Login extends Component{
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={bg_login} style={{width: '100%', height: '100%'}}>
                    <Header style={{ backgroundColor: "#207CA0" }}
                            androidStatusBarColor="#2691B2"
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
                    </Content>
                    <Content style={styles.contentForm}>
                        <Form>
                            <Item>
                                <Input style={styles.inputColor} placeholder="Correo" placeholderTextColor="white"/>
                            </Item>
                            <Item>
                                <Input style={styles.inputColor} placeholder="Contraseña" secureTextEntry placeholderTextColor="white"/>
                            </Item>
                        </Form>
                        <Button
                            block
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