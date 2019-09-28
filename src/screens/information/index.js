import React, {Component} from 'react';
import {
    Container,
    Content,
    H3,
    H4,
    Icon,
    Tabs,
    Tab,
    Right,
    Left,
    Body,
    ScrollableTab,
    Text, CardItem, Card
} from 'native-base';


import { Image} from 'react-native';


import styles from "./styles";
import stylesHome from "../home/styles";

import MainHeader from '../MainHeader/index';
import TabFooter from "../footerTab/TabFooter";

const bg_header = require('../../../assets/bg_header.png');


class Informacion extends Component{


    constructor(props){
        super(props);
        this.state ={

        }
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
                <Content padder>
                    <H3 style={{marginVertical:30,...stylesHome.tittle}}>INFORMACIÓN GENERAL</H3>
                    <Text style={styles.pTab}>El  presente cronograma podrá estará sujeto a modificaciones y esta tomado en cuenta desde el 22 de Octubre, día en el que inicia la competencia SenaSoft 2019.</Text>
                    <Tabs style={styles.tabHead}  tabBarUnderlineStyle={{ backgroundColor: '#066578' }} renderTabBar={() => <ScrollableTab style={styles.tabHead} />}>
                        <Tab  style={styles.paddingTab} activeTextStyle={{ color: '#066578', fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Martes">
                            <Card >
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>06:00 AM - 02:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Llegada a Medellín..
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>12:00 M - 02:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Registro en el hotel.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>02:00 PM - 03:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Traslado desde el hotel a lugar del evento.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>03:00 PM - 06:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Registro en el evento y entrega de equipos.
                                    </Text>
                                    </Body>
                                </CardItem>

                                <CardItem bordered style={styles.refriColor}>
                                    <Body>
                                    <Text style={styles.refriTextColor}>
                                        Inauguración al evento.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>07:00 PM - 08:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Traslado y cena.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>08:00 PM - 10:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Registro en el evento y entrega de equipos segunda parte.
                                    </Text>
                                    </Body>
                                </CardItem>

                            </Card>
                        </Tab>
                        <Tab style={styles.paddingTab}  activeTextStyle={{ color: '#066578', fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Miercoles">
                            <Card >
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>06:00 AM - 07:00 AM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Traslado desde el hotel al lugar del evento.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>07:00 AM - 09:00 AM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Charla para aprendices e instructores.
                                    </Text>
                                    </Body>
                                </CardItem>

                                <CardItem  header bordered first style={styles.refriColor}>
                                    <Text style={styles.refriTextColor}>
                                        Refrigerio
                                    </Text>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>09:00 AM - 01:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Competencia Aprendices..
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem  header bordered first style={styles.refriColor}>
                                    <Text style={styles.refriTextColor}>
                                        Almuerzo
                                    </Text>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>02:00 PM - 04:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Workshops para los instructores.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>04:00 PM - 06:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Reunión de Instructores por área.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>06:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Finalización de competencia (Traslado a hoteles).
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem  header bordered first style={styles.refriColor}>
                                    <Text style={styles.refriTextColor}>
                                        Cena
                                    </Text>
                                </CardItem>
                            </Card>
                        </Tab>
                        <Tab style={styles.paddingTab} activeTextStyle={{ color: '#066578', fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Jueves">

                            <Card >
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>07:00 AM - 08:00 AM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Traslado desde el hotel al lugar del evento.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem  header bordered first style={styles.refriColor}>
                                    <Text style={styles.refriTextColor}>
                                        Refrigerio
                                    </Text>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>08:00 AM - 12:00 M</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        - Competencia Aprendices.
                                    </Text>
                                    <Text>
                                        - Certificaciones: Autodesk, Adobe, Microsoft.
                                    </Text>
                                    </Body>
                                </CardItem>

                                <CardItem  header bordered first style={styles.refriColor}>
                                    <Text style={styles.refriTextColor}>
                                        Almuerzo
                                    </Text>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>01:00 PM - 04:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Pitch.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>04:00 PM - 06:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Entrega de equipos.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>06:00 PM - 08:00 PM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Traslado a hoteles y cena..
                                    </Text>
                                    </Body>
                                </CardItem>

                            </Card>
                        </Tab>
                        <Tab style={styles.paddingTab} activeTextStyle={{ color: '#066578', fontWeight: 'bold' }} textStyle={{ color: '#000', fontSize: 12 }} tabStyle={{ backgroundColor: 'transparent' }} activeTabStyle={{ backgroundColor: 'transparent' }}  heading="Viernes">
                            <Card >
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>08:00 AM - 10:00 AM</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Transporte de hotel a lugar del evento
                                    </Text>
                                    </Body>
                                </CardItem>

                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>10:00 AM - 12:00 M</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Clausura de Senasoft 2019
                                    </Text>

                                    </Body>
                                </CardItem>
                                <CardItem header bordered first>
                                    <Text style={styles.colorCard}>12:00 M</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        Regreso a ciudades de origen.
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Tab>
                    </Tabs>
                </Content>
                <TabFooter Navigate={this.props.navigation}/>
            </Container>
        )
    }

}




export default Informacion;