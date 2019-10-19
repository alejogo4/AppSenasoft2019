import React, { Component } from "react";
import {Image, View, TouchableOpacity, TextInput, Modal,ScrollView} from "react-native";
import {
    Container,
    Text,
    Thumbnail,
    Content,
    H1,
    H3, Button, ScrollableTab, Tab, Card, CardItem, Body, Tabs,

} from "native-base";

import Icon3 from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import stylesTab from "../information/styles";

import { Grid, Row, Col } from "react-native-easy-grid";
const categorias = [
    {
        icon:"file-code-o",
        color:"#dfcdfa",
        iconColor:"#6d3f71",
        nombre:"Desarrollo Web",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.",
        lider:"Héctor Darío Maya Ramírez",
        cat:0
    },{
        icon:"sitemap",
        color:"#d1e0e5",
        iconColor:"#61a4bc",
        nombre:"Desarrollo Algoritmos",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes\n" +
            "de trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la\n" +
            "eficiencia, la productividad y la competitividad de los participantes.\n",
        lider:"Jhonnys Arturo Rodríguez Payares",
        cat:1
    },{
        icon:"cube",
        color:"#c3e0dd",
        iconColor:"#059e8f",
        nombre:"Animación 3D",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.",
        lider:"Andrés Felipe Agudelo González",
        cat:2
    },{
        icon:"file-movie-o",
        color:"#bae8f7",
        iconColor:"#176c8b",
        nombre:"Pr. Medios Aud. Dig.",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.",
        lider:"Luis Fernando Arango Marín",
        cat:3
    },{
        icon:"database",
        color:"#c6c6c6",
        iconColor:"#565656",
        nombre:"Bases de Datos",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.\n",
        lider:"Evis Licet Vargas Barrios",
        cat:4
    },{
        icon:"android",
        color:"#c7eae5",
        iconColor:"#008584",
        nombre:"Desarrollo de Ap. Mov.",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en\n" +
            "ambientes de trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y\n" +
            "fomentan la eficiencia, la productividad y la competitividad de los participantes.",
        lider:"Juan David Ramírez Londoño",
        cat:5
    },{
        icon:"desktop",
        color:"#c1df70",
        nombre:"Pr. de Multimedia",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.",
        lider:"Danny Alexander Celis Bayona",
        cat:6
    },{
        icon:"globe",
        color:"#a9bebf",
        iconColor:"#003c47",
        nombre:"Redes y Mnto.",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en\n" +
            "ambientes de trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y\n" +
            "fomentan la eficiencia, la productividad y la competitividad de los participantes.\n",
        lider:"Andrés Medranda Rodríguez- Aiscardo Mosquera\n",
        cat:7
    },{
        icon:"gamepad",
        color:"#e4dd97",
        iconColor:"#ad9923",
        nombre:"Desarrollo Videojuegos",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la eficiencia,\n" +
            "la productividad y la competitividad de los participantes.\n",
        lider:"Alejandro Díaz Jaramillo",
        cat:8
    },{
        icon:"lightbulb-o",
        color:"#f5e2cb",
        iconColor:"#ea931f",
        nombre:"Ideatic",
        descripcion:"Desarrollar soluciones tecnológicas a problemas reales del sector productivo, en ambientes de\n" +
            "trabajo colaborativo e interdisciplinario, que simulan el contexto laboral y fomentan la\n" +
            "eficiencia, la productividad y la competitividad de los participantes.",
        lider:"Dorian Sully Múnera Rúa",
        cat:9
    }
]

import PuntajeCategoria from './puntaje_categoria';

import TabFooter  from '../footerTab/TabFooter';
import MainHeader from '../MainHeader/index'
const personaje = require("../../../assets/personaje.png");
const bg_profile = require('../../../assets/bg_profile.png');

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            modal: false,
            indice:0
        }
    }

    abrirInfoCategoria(indice){
        console.log(indice);
        this.setState ({modal: true});
        this.setState ({indice: indice});
    }

    cerrarModal(){
        this.setState ({modal: false});
    }

    listarCategoria(){
        let cont = 0;

        return [0,1,2,3].map((ee,ii)=><Row key={ee} style={styles.col}>
            {categorias.slice(cont, cont+=3).map((e,i)=><Col key={i} style={styles.me_col}>
                <TouchableOpacity  onPress={()=>{this.abrirInfoCategoria(e.cat)}} style={{backgroundColor:e.color,...styles.columns}}>
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

                <H3 style={styles.tittle}>CATEGORÍAS</H3>
                <Grid style={styles.mt}>
                    {this.listarCategoria()}
                </Grid>
            </View>
                {this.state.modal ?<Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modal}
                    style={{flex:1}}
                    onRequestClose={()=>this.cerrarModal()}
                >
                    <ScrollView style={{flex:1}}>
                        <ScrollView style={{flex:1,flexDirection: 'column',padding: 30, paddingTop:60, backgroundColor: categorias[this.state.indice].color}}>
                            <Text style={{color: categorias[this.state.indice].iconColor, fontSize:25}}>{categorias[this.state.indice].nombre.toUpperCase()}</Text>
                            <Tabs style={stylesTab.tabHead}  tabBarUnderlineStyle={{ backgroundColor: categorias[this.state.indice].iconColor }} renderTabBar={() => <ScrollableTab style={stylesTab.tabHead} />}>
                                <Tab  style={stylesTab.paddingTab} activeTextStyle={{ color: categorias[this.state.indice].iconColor, fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Habilidad.">
                                    <Card >
                                        <CardItem header bordered first>
                                            <Text style={{...stylesTab.colorCard,color: categorias[this.state.indice].iconColor}}>Objetivo</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                            <Body>
                                            <Text>
                                                {categorias[this.state.indice].descripcion}
                                            </Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem header bordered first>
                                            <Text style={{...stylesTab.colorCard,color: categorias[this.state.indice].iconColor}}>Lider Técnico</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                            <Body>
                                            <Text>
                                                {categorias[this.state.indice].lider}.
                                            </Text>
                                            </Body>
                                        </CardItem>

                                    </Card>
                                </Tab>
                                <Tab  style={stylesTab.paddingTab} activeTextStyle={{ color: categorias[this.state.indice].iconColor, fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Puntajes.">
                                    <PuntajeCategoria categoria_id="1" /> 
                                </Tab>

                            </Tabs>

                            <Button
                                style={{marginTop: 10, marginBottom:40}}
                                success
                                block
                                onPress={()=>this.cerrarModal()}
                                >
                                <Text>Cerrar</Text>
                            </Button>
                        </ScrollView>
                    </ScrollView>
                </Modal>  : <Text/>}

            </Content>
            <TabFooter Navigate={this.props.navigation}/>
        </Container>

    );
  }
}

export default Home;
