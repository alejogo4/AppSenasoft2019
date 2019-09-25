import React, { Component } from "react";
import {Image, View, TouchableOpacity} from "react-native";
import {
    Container,
    Text,
    Thumbnail,

    Content,
    H1,
    H3

} from "native-base";

import Icon3 from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

import { Grid, Row, Col } from "react-native-easy-grid";
const categorias = [
    {
        icon:"file-code-o",
        color:"#dfcdfa",
        iconColor:"#6d3f71",
        nombre:"Desarrollo Web"
    },{
        icon:"sitemap",
        color:"#d1e0e5",
        iconColor:"#61a4bc",
        nombre:"Desarrollo Algoritmos"
    },{
        icon:"cube",
        color:"#c3e0dd",
        iconColor:"#059e8f",
        nombre:"Animación 3D"
    },{
        icon:"file-movie-o",
        color:"#bae8f7",
        iconColor:"#176c8b",
        nombre:"Pr. Medios Aud. Dig."
    },{
        icon:"database",
        color:"#c6c6c6",
        iconColor:"#565656",
        nombre:"Bases de Datos"
    },{
        icon:"android",
        color:"#c7eae5",
        iconColor:"#008584",
        nombre:"Desarrollo de Ap. Mov."
    },{
        icon:"desktop",
        color:"#c1df70",
        nombre:"Pr. de Multimedia"
    },{
        icon:"globe",
        color:"#a9bebf",
        iconColor:"#003c47",
        nombre:"Redes y Mnto."
    },{
        icon:"gamepad",
        color:"#e4dd97",
        iconColor:"#ad9923",
        nombre:"Desarrollo Videojuegos"
    },{
        icon:"lightbulb-o",
        color:"#f5e2cb",
        iconColor:"#ea931f",
        nombre:"Ideatic"
    }
]


import TabFooter  from '../footerTab/TabFooter';
import MainHeader from '../MainHeader/index'
const personaje = require("../../../assets/personaje.png");
const bg_profile = require('../../../assets/bg_profile.png');

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={

        }
    }

    listarCategoria(){
        let cont = 0;
        return [0,1,2,3].map((ee,i)=><Row style={styles.col}>
            {categorias.slice(cont, cont+=3).map((e,i)=><Col style={styles.me_col}>
                <TouchableOpacity style={{backgroundColor:e.color,...styles.columns}}>
                    <Icon3 name={e.icon} style={{ color: e.iconColor,...styles.center_items,...styles.sizeIcon }} />
                    <Text style={{color: e.iconColor,...styles.center_items}}>
                        {e.nombre}
                    </Text>
                </TouchableOpacity></Col>)}
        </Row>)




    }

  render() {
    return (

        <Container style={styles.container}>
            <Content>
            <Image source={bg_profile} style={styles.head} />

            <MainHeader Navigate={this.props.navigation}/>
            <View style={styles.container_text_intro}>
                <H1 style={styles.text_head_h1}>SENASOFT 2019</H1>
                <Text style={styles.text_head_p}>SENASOFT es el mayor encuentro de tecnología realizado por el SENA, como iniciativa de la red de conocimiento en informática, Diseño Y Desarrollo de Software.</Text>
                <Thumbnail source={personaje} style={styles.personaje}/>
            </View>
            <View style={styles.categoria}>

                <H3 style={styles.tittle}>CATEGORIAS</H3>
                <Grid style={styles.mt}>
                    {this.listarCategoria()}
                </Grid>


            </View>
            </Content>
            <TabFooter Navigate={this.props.navigation}/>
        </Container>

    );
  }
}

export default Home;
