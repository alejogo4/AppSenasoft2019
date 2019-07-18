import React , {PureComponent} from 'react';
import {Button, FooterTab, Icon, Footer, Text} from "native-base";
import styles from "../home/styles";

export default class TabFooter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: true
        };
    }
    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false

        });
    }
    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false

        });
    }
    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
        });
    }

    render(){
        return (
            <Footer>
                <FooterTab style={styles.primaryColor}>
                    <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                        <Icon name="apps" style={{ color: "white" }}/>
                        <Text numberOfLines={1} style={styles.iconText}>
                            Inicio
                        </Text>
                    </Button>
                    <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                        <Icon active name="paper" style={{ color: "white" }}/>
                        <Text numberOfLines={1} style={styles.iconText}>
                            Proyectos
                        </Text>
                    </Button>
                    <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
                        <Icon active name="happy" style={{ color: "white" }}  />
                        <Text numberOfLines={1} style={styles.iconText}>
                            Información
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }

}

