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
    Content, Header, Title, View, H1, H3
} from "native-base";

import styles from "./../home/styles";
import { Grid, Row, Col } from "react-native-easy-grid";
const bg_profile = require('../../../assets/bg_profile.png');
import MainHeader from '../MainHeader/index';
import {connect} from 'react-redux';
import { getUser } from '../../redux/actions/login';
import TabFooter from "../footerTab/TabFooter";

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

        return this.props.user.equipo == null || this.props.user.equipo.length == 0 ? <Text></Text>
        :
         this.props.user.equipo.map((e, i)=>
             <View style={styles.container_text_profile}>
                 <H3 style={styles.tittle_profile}>COMPAÑERO(S) DE COMPETENCIA</H3>
                 <Card style={styles.mb}>
                     <CardItem bordered>
                         <Left>
                             {this.props.user != null ?
                                 <Thumbnail source={{uri: 'https://senasoft.fabricadesoftware.co/images/fotos_app/'+e.foto}} />
                                 : <Text></Text>}

                             <Body>
                             <Text>{e.nombres} {e.apellidos}</Text>
                             <Text note>{e.correo_principal}</Text>
                             </Body>
                         </Left>
                     </CardItem>

                     <CardItem>
                         <Body>

                         <Text>
                             {e.nombre_regional} - {e.nombre_centro}
                         </Text>
                         </Body>
                     </CardItem>
                 </Card>
             </View>
             )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Image source={bg_profile} style={styles.head} />

                    <MainHeader Navigate={this.props.navigation}/>
                    <View style={styles.container_text_profile}>
                        {this.props.user != null ?
                            <Image source={{uri: 'https://senasoft.fabricadesoftware.co/images/fotos_app/'+this.props.user.persona.foto}} style={styles.photo_log}/>
                            : <Text></Text>}

                    </View>

                    <View style={styles.container_text_profile}>
                        <Card style={styles.mb}>
                            <CardItem header bordered>
                                <Text style={styles.tittle}>{this.props.user==null?"":this.props.user.user.name.toUpperCase()}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Text>
                                    <Text>Email : {this.props.user==null?"":this.props.user.user.email}</Text>
                                </Text>
                            </CardItem>
                            <CardItem bordered>
                                <Text>
                                    <Text>{this.props.user==null?"":this.props.user.persona.nombre_regional} - {this.props.user==null?"":this.props.user.persona.nombre_centro}</Text>
                                </Text>
                            </CardItem>
                        </Card>

                    </View>
                    {this.props.user != null ? this.listarEquipo():<Text>Cargando...</Text>}


                </Content>
                <TabFooter Navigate={this.props.navigation}/>
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