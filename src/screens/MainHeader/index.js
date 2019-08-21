import React, { Component } from "react";
import {Body, Button, Header, Icon, Right, Title, Text, Left} from "native-base";
import {connect} from 'react-redux';

import { getToken, removerToken } from '../../redux/actions/login';

class MainHeader extends Component{

    constructor(props) {
        super(props);
        this.state = {
            token: null
        }
    }

    componentWillReceiveProps(){
        this._bootstrapSync();
    }

    componentDidMount(){
        this._bootstrapSync();
    }

    _bootstrapSync() {
        this.props.consultarToken().then(()=>{
            if(this.props.token != null){
                this.setState({
                    token: this.props.token
                });
            }
        })
    }

    salir(){
        this.props.salir();
        this.props.Navigate.navigate("Home");
    }

    render(){

        console.log(this.props.token)
        return(
            <Header style={{ backgroundColor: "#207CA0" }}
                    androidStatusBarColor="#1B687F"
                    iosBarStyle="light-content">

                {this.state.token != null || this.state.token != undefined ? <Left>
                    <Button transparent onPress={() => this.props.Navigate.openDrawer()}>
                    <Icon name="menu" />
                    </Button>
                </Left> : <Text></Text>}

                <Body>
                <Title>Senasoft 2019</Title>
                </Body>
                <Right>
                    {this.state.token == null || this.state.token == undefined ?
                    <Button transparent onPress={() => this.props.Navigate.navigate("Login")}>
                        <Icon name="person" />
                    </Button>
                    : 
                    <Button transparent onPress={() => this.props.salir()}>
                        <Icon name="power" />
                    </Button>}
                    
                </Right>
            </Header>
        )
    }

}

const mapStateProps = state => {
    return {
        token: state.login.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        consultarToken : () => dispatch(getToken()),
        salir : () => dispatch(removerToken()),
    }
}


export default connect(mapStateProps, mapDispatchToProps)(MainHeader);