import React, {Component} from 'react';
import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Text,
  Left,
  View
} from 'native-base';
import {connect} from 'react-redux';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import NavigationService from './../../services/NavigationService';
import {DrawerActions} from 'react-navigation-drawer';

import {getToken, removerToken} from '../../redux/actions/login';

class MainHeader extends Component {
  constructor (props) {
    super (props);
    this.state = {
      token: null,
    };
  }

  componentDidMount () {
    this._bootstrapSync ();
  }

  _bootstrapSync () {
    this.props.consultarToken ();
  }

  salir () {
    this.props.salir ();
    this.props.navigation.navigate("Home");
    // this.props.Navigate.navigate('Home');
  }

  header () {

      if (this.props.transparent != 'true' || this.props.transparent == null) {
        return (
          <Header
            transparent
            androidStatusBarColor="#127871"
            iosBarStyle="light-content"
          >

            {this.props.token != null || this.props.token != undefined
              ? <Left>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.openDrawer ()}
                  >
                    <IconOutline
                      name="menu"
                      size={20}
                      style={{color: '#ffffff'}}
                    />
                  </Button>
                </Left>
              : <Text />}

            <Body>
              <Title />
            </Body>

            {this.props.token == null || this.props.token == undefined
              ? <Right>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.navigate ('Login')}
                  >
                    <IconOutline
                      name="login"
                      size={20}
                      style={{color: '#ffffff'}}
                    />
                  </Button>
                </Right>
              : <Right>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.navigate ('Profile')}
                  >
                    <Icon name="person" style={{color: '#ffffff'}} />
                  </Button>
                  <Button transparent onPress={() => this.props.salir ()}>
                    <Icon name="power" style={{color: '#ffffff'}} />
                  </Button>
                </Right>}

          </Header>
        );
      } else {
        return (
          <Header
            androidStatusBarColor="#1B687F"
            iosBarStyle="light-content"
            transparent
          >

            {this.props.token != null || this.props.token != undefined
              ? <Left>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.openDrawer ()}
                  >
                    <IconOutline
                      size={20}
                      name="menu"
                      style={{color: '#ffffff'}}
                    />
                  </Button>
                </Left>
              : <Text />}

            <Body>
              <Title />
            </Body>
            {this.props.token == null || this.props.token == undefined
              ? <Right>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.navigate ('Profile')}
                  >
                    <IconOutline
                      name="login"
                      size={20}
                      style={{color: '#ffffff'}}
                    />
                  </Button>
                </Right>
              : <Right>
                  <Button
                    transparent
                    onPress={() => this.props.Navigate.navigate ('Login')}
                  >
                    <Icon name="person" style={{color: '#ffffff'}} />
                  </Button>
                  <Button transparent onPress={() => this.props.salir ()}>
                    <Icon name="power" style={{color: '#ffffff'}} />
                  </Button>
                </Right>}
          </Header>
        );
      }
  }

  render () {
    return (
      <View>
        {this.header ()}
      </View>
    );
  }
}

const mapStateProps = state => {
  return {
    token: state.login.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    consultarToken: () => dispatch (getToken ()),
    salir: () => dispatch (removerToken ()),
  };
};

export default connect (mapStateProps, mapDispatchToProps) (MainHeader);
