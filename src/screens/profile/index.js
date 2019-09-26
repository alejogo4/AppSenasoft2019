import React, { Component } from "react";
import {Image, ImageBackground, ScrollView} from "react-native";
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
    Content, Header, Title, View
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

    componentWillMount(){
        this._consultaUser();
    }

    _consultaUser() {
        this.props.consultarUser();

    }

    listarEquipo(){
        return this.props.user.equipo == null ? <Text></Text>
        :
         this.props.user.equipo.map((e, i)=><View>
            <Text>{e.documento}</Text>
            <Text>{e.nombres} {e.apellidos}</Text>
            <Text>{e.correo_principal}</Text>
            <Text>{e.telefono}</Text>
            <Text>{e.nombre_regional}</Text>
            <Text>{e.nombre_centro}</Text>
            <Image source={{uri: 'https://senasoft.fabricadesoftware.co/archivos/fotos/'+e.foto}} style={{height: 100, width: 100, resizeMode: 'stretch'}}/>
        </View>)
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={bg_profile} style={{width: '100%', height: '70%'}}>
                    <MainHeader Navigate={this.props.navigation} />
                    <Text>{this.props.user==null?"":this.props.user.user.name}</Text>
                    <Text>{this.props.user==null?"":this.props.user.user.email}</Text>
                    <Text>{this.props.user==null?"":(this.props.user.persona != null ? this.props.user.persona.nombre_regional : "")}</Text>
                    <Text>{this.props.user==null?"":(this.props.user.persona != null ? this.props.user.persona.nombre_centro : "")}</Text>
                </ImageBackground>
                <ScrollView>
                {this.props.user != null ? 
                    <View>
                        <Text>Equipo</Text>
                        {this.listarEquipo()}
                    </View>
                : <Text></Text>}
                </ScrollView>
                
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