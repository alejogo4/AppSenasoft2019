import React , {Component} from 'react';
import {Button, FooterTab, Icon, Footer, Text} from "native-base";
import styles from "../home/styles";

import {connect} from 'react-redux';
import {changeTab} from '../../redux/actions/tabs';

class TabFooter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tabs : {
                tab1: true,
                tab2: false,
                tab3: false
            }
        };
    }

    componentDidMount(){
        let data = {
            tab1: true,
            tab2: false,
            tab3: false

        };
        this.props.changeTab(data);

        this.setState({tabs : this.props.tabsState==null || this.props.tabsState==undefined ? data : this.props.tabsState});
        //console.log(this.props.tabsState);
    }
    toggleTab1() {
        let data = {
            tab1: true,
            tab2: false,
            tab3: false

        };
        this.props.changeTab(data);
        this.props.Navigate.navigate('Home');
    }
    toggleTab2() {
        let data = {
            tab1: false,
            tab2: true,
            tab3: false

        };
        this.props.changeTab(data);
        this.props.Navigate.navigate('Proyecto');
    }
    toggleTab3() {
        let data = {
            tab1: false,
            tab2: false,
            tab3: true,
        };
        this.props.changeTab(data);
    }

    render(){
        return (
            <Footer>
                <FooterTab style={styles.primaryColor}>
                    <Button active={this.state.tabs.tab1} onPress={() => this.toggleTab1()}>
                        <Icon name="apps" style={{ color: "white" }}/>
                        <Text numberOfLines={1} style={styles.iconText}>
                            Inicio
                        </Text>
                    </Button>
                    <Button active={this.state.tabs.tab2} onPress={() => this.toggleTab2()}>
                        <Icon active name="paper" style={{ color: "white" }}/>
                        <Text numberOfLines={1} style={styles.iconText}>
                            Proyectos
                        </Text>
                    </Button>
                    <Button active={this.state.tabs.tab3} onPress={() => this.toggleTab3()}>
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


const mapStateProps = state =>{
    return {
        tabsState: state.tabs.stateTabs
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        changeTab : (stateTabs) => {
            //console.log(stateTabs);
            return dispatch(changeTab(stateTabs))
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(TabFooter);
