import React, { Component } from "react";
import {Image, ImageBackground} from "react-native";
import {
    Container,
    Button,
    Text,
    Left,
    Right,
    Icon,
    Body,
    CardItem,
    Thumbnail,
    Card,
    Content, Header, Title,

} from "native-base";

import styles from "./../home/styles";
import { Grid, Row, Col } from "react-native-easy-grid";
const bg_profile = require('../../../assets/bg_profile.png');
import MainHeader from '../MainHeader/index';
import {connect} from 'react-redux';
import { getUser } from '../../redux/actions/login';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount(){
        this._consultaUser();
    }

    _consultaUser() {
        this.props.consultarUser();
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={bg_profile} style={{width: '100%', height: '70%'}}>
                    <MainHeader transparent='true'/>
                    <Text>{this.props.user==null?"":this.props.user.name}</Text>
                </ImageBackground>

            </Container>
        );
    }
}

const mapStateProps = state => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        consultarUser : () => dispatch(getUser())
    }
}


export default connect(mapStateProps, mapDispatchToProps)(Profile);