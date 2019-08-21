import React, { Component } from "react";
import {Body, Button, Header, Icon, Right, Title} from "native-base";

class MainHeader extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Header style={{ backgroundColor: "#207CA0" }}
                    androidStatusBarColor="#1B687F"
                    iosBarStyle="light-content">
                <Body>
                <Title>Senasoft 2019</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.Navigate.navigate("Login")}>
                        <Icon name="person" />
                    </Button>
                </Right>
            </Header>
        )
    }

}

export default MainHeader;