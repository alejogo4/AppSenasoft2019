import React, {Component} from 'react';
import {
    Container,
    Left,
    Button,
    Right,
    Content,
    List,
    ListItem,
    Thumbnail, Text, Body, CardItem, Icon, Card, H3
} from 'native-base';

import {DrawerActions } from 'react-navigation';

import Icon2 from "react-native-vector-icons/Entypo";
import {connect} from 'react-redux';
import {FlatList, Image} from 'react-native';
import {getProjects} from '../../redux/actions/proyecto';


import styles from "./styles";
import stylesHome from "../home/styles";

import MainHeader from '../MainHeader/index';
import TabFooter from "../footerTab/TabFooter";
const bg_header = require('../../../assets/bg_header.png');

class Proyecto extends Component{


    constructor(props){
        super(props);
        this.state ={
            proyectos:null
        }
    }

    componentDidMount(){
        this._bootstrapAsync();
    }

    _bootstrapAsync(){
        this.props.consultarProyectos().then(() => {

           if(this.props.proyectos != null){
               this.setState({
                   proyectos:this.props.proyectos
               })

           }

        }).catch(error => {
            this.setState({ error })
        })
    }


    render(){
        console.log(this.state.proyectos);
        return(
            <Container style={styles.container}>
                <Image source={bg_header} style={{flex: 1,
                    resizeMode: 'cover', // or 'stretch',
                    width:"100%",
                    height:80,
                    position:'absolute'}} />
                <MainHeader Navigate={this.props.navigation} transparent='true'/>
                <Content padder={4}>
                    <H3 style={{marginVertical:30,...stylesHome.tittle}}>PROYECTOS GANADORES</H3>
                    <FlatList
                        data={this.state.proyectos}
                        renderItem={({item}) => <Card style={styles.mb}>
                            <CardItem bordered>
                                <Left>
                                    <Icon2 active name="medal" style={{color:"#ffc200"}} size={40} />
                                    <Body>
                                    <Text>{item.nombre_centro}</Text>
                                    <Text note>{item.nombre_regional}</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Text>
                                    {item.descripcion}
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                                <Left>
                                    <Button dark transparent>
                                        <Icon name="star" />
                                        <Text>{item.puntaje} PUNTOS</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>}
                    />
                </Content>
                <TabFooter Navigate={this.props.navigation}/>
            </Container>
        )
    }

}


const mapStateProps = state =>{
    return {
        proyectos: state.proyectos.projects
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        consultarProyectos : () => dispatch(getProjects())
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Proyecto);