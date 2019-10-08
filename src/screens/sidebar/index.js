import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
} from 'native-base';

import styles from './style';

import {getUser} from '../../redux/actions/login';
import {connect} from 'react-redux';

const drawerCover = require('../../../assets/drawer-cover.png');
const drawerImage = require('../../../assets/logo-kitchen-sink.png');

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      menu: [],
    };
  }

  componentDidMount() {
    this.props.consultarUsuario().then(e => {
      let menu = [
        {
          name: 'Inicio',
          route: 'Home',
          icon: 'home',
          bg: '#48525D',
        },
        {
          name: 'Pefil',
          route: 'Profile',
          icon: 'people',
          bg: '#48525D',
        },
      ];
      if (this.props.user.user.rol == 0) {
        menu.push(
          {
            name: 'Refrigerios',
            route: 'Refrigerios',
            icon: 'pizza',
            bg: '#48525D',
          },
          {
            name: 'Equipaje',
            route: 'Equipaje',
            icon: 'finger-print',
            bg: '#48525D',
          }
        );
      }else if (this.props.user.user.rol == 1){
        menu.push(
          {
            name: 'Confirmar asistencia',
            route: 'Asistencia',
            icon: 'calendar',
            bg: '#48525D',
          },
          {
            name: 'Hotel y trasporte',
            route: 'HotelTransporte',
            icon: 'bed',
            bg: '#48525D',
          }
        );
      }else if (this.props.user.user.rol == 2){
        menu.push(
          {
            name: 'Hotel y trasporte',
            route: 'HotelTransporte',
            icon: 'bed',
            bg: '#48525D',
          }
        );
      }else if (this.props.user.user.rol == 3){
        menu.push(
          {
            name: 'Refrigerios',
            route: 'Refrigerios',
            icon: 'pizza',
            bg: '#48525D',
          },
        );
      }else if (this.props.user.user.rol == 4){
        menu.push(
          {
            name: 'Equipaje',
            route: 'Equipaje',
            icon: 'finger-print',
            bg: '#48525D',
          }
        );
      }

      this.setState({menu})
    });

  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{flex: 1, backgroundColor: '#fff', top: -1}}
        >
          <Image source={drawerCover} style={styles.drawerCover} />

          <List
            dataArray={this.state.menu || []}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{color: '#777', fontSize: 26, width: 30}}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{flex: 1}}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg,
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateProps = state => {
  return {
    user: state.login.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    consultarUsuario: () => dispatch(getUser()),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(SideBar);
