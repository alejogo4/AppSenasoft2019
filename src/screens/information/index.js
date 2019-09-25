import React, {Component} from 'react';
import {
    Container,
    Content,
    H3
} from 'native-base';


import { Image} from 'react-native';


import styles from "./styles";
import stylesHome from "../home/styles";

import MainHeader from '../MainHeader/index';
import TabFooter from "../footerTab/TabFooter";
const bg_header = require('../../../assets/bg_header.png');
const bola = require('../../../assets/bola.svg');

class Informacion extends Component{


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
                    <H3 style={{marginVertical:30,...stylesHome.tittle}}>INFORMACIÓN GENERAL</H3>

                </Content>
                <TabFooter Navigate={this.props.navigation}/>
            </Container>
        )
    }

}




export default Informacion;