import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Text,
  CardItem,
  Card,
  Content,
  Body,
  View,
  H1,
  H3,
  TabHeading,
  Tab,
  ScrollableTab,
  Tabs,
  List,
  ListItem,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './../home/styles';
import stylesTab from '../information/styles';
import MainHeader from '../MainHeader/index';

import {connect} from 'react-redux';
import {obtener_hotel} from '../../redux/actions/hotel';

const bg_profile = require ('../../../assets/bg_profile.png');

class HotelTransporte extends Component {
  constructor (props) {
    super (props);
    this.state = {
      user: null,
    };
  }

  componentDidMount () {
    this._consultaUser ();
  }

  _consultaUser () {
    this.props.obtenerhotel ();
  }

  render () {
    console.log(this.props.respuesta)
    return (
      <Container style={styles.container}>
        <Content>
          <Image source={bg_profile} style={styles.head} />

          <MainHeader Navigate={this.props.navigation} />

          <View style={styles.container_text_profile} />

          <View style={styles.container_text_profile}>
            <Tabs
              style={stylesTab.tabHead}
              tabBarUnderlineStyle={{
                backgroundColor: '#059e8f',
              }}
              renderTabBar={() => <ScrollableTab style={stylesTab.tabHead} />}
            >
              <Tab
                style={stylesTab.paddingTab}
                activeTextStyle={{
                  color: '#fff',
                  fontWeight: 'bold',
                }}
                textStyle={{color: '#000', fontSize: 12}}
                tabStyle={{backgroundColor: 'transparent'}}
                activeTabStyle={{backgroundColor: 'transparent'}}
                heading={
                  <TabHeading
                    style={{backgroundColor: 'transparent', color: '#fff'}}
                  >
                    <Icon style={{color: '#fff'}} name="hotel" />
                    <Text>Hotel</Text>
                  </TabHeading>
                }
              >
                <List>
                  <ListItem itemDivider>
                    <Text style={{color: '#059e8f'}}>
                      Hotel {this.props.respuesta ? this.props.respuesta.nombre_hotel : "Sin asignar"}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Nombre del instructor responsable: {this.props.respuesta ? this.props.respuesta.nombre_instructor : "Sin asignar"}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Teléfono: {this.props.respuesta ? this.props.respuesta.telefono : "Sin asignar"}</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Correo: {this.props.respuesta ? this.props.respuesta.correo : "Sin asignar"}</Text>
                  </ListItem>
                </List>
              </Tab>
              <Tab
                style={stylesTab.paddingTab}
                activeTextStyle={{
                  color: '#fff',
                  fontWeight: 'bold',
                }}
                textStyle={{color: '#000', fontSize: 12}}
                tabStyle={{backgroundColor: 'transparent'}}
                activeTabStyle={{backgroundColor: 'transparent'}}
                heading={
                  <TabHeading
                    style={{backgroundColor: 'transparent', color: '#fff'}}
                  >
                    <Icon style={{color: '#fff'}} name="car" />
                    <Text>Transporte</Text>
                  </TabHeading>
                }
              >
                <List>
                  <ListItem itemDivider>
                    <Text style={{color: '#059e8f'}}>
                      Día 1 - Martes 22 de Octubre
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Hoteles - 7:00 p.m. a 7:30 p.m.</Text>
                  </ListItem>
                  <ListItem itemDivider>
                    <Text style={{color: '#059e8f'}}>
                      Día 2 - Miércoles 23 de Octubre
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Plaza Mayor - 6:00 a.m. a 6:30 a.m.</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Hoteles - 6:00 p.m. a 6:30 p.m.</Text>
                  </ListItem>
                  <ListItem itemDivider>
                    <Text style={{color: '#059e8f'}}>
                      Día 3 - Jueves 23 de Octubre
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Plaza Mayor - 6:00 a.m. a 6:30 a.m.</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Hoteles - 5:30 p.m. a 6:30 p.m.</Text>
                  </ListItem>
                  <ListItem itemDivider>
                    <Text style={{color: '#059e8f'}}>
                      Día 4 - Viernes 24 de Octubre
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>Traslado a Plaza Mayor - 8:00 a.m. a 9:00 a.m.</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      Traslado a Terminales Aéreas o Terrestres - 12:30 m. a 1:00 p.m.
                    </Text>
                  </ListItem>
                </List>
              </Tab>

            </Tabs>

          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateProps = state => {
  return {
    respuesta: state.hotel.respuesta,
    error: state.hotel.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    obtenerhotel: () => dispatch (obtener_hotel()),
  };
};

export default connect (mapStateProps, mapDispatchToProps) (HotelTransporte);
