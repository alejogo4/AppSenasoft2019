import React , {Component} from 'react';
import {Button, FooterTab, Icon, Footer, Text} from "native-base";
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
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
        this.hoverTab();
    }

    hoverTab(){
        let data = {
            tab1: true,
            tab2: false,
            tab3: false

        };
        this.props.changeTab(data);

        this.setState({tabs : this.props.tabsState==null || this.props.tabsState==undefined ? data : this.props.tabsState});
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
            <Footer style={styles.cont_footer}>
                <FooterTab style={styles.footer}>
                    <Button  active={this.state.tabs.tab1} onPress={() => this.toggleTab1()}  style={{ backgroundColor: this.state.tabs.tab1 ? "#f7f7f7" : "transparent"}}>
                        <IconOutline name="home" size={20} style={{ color: this.state.tabs.tab1 ? "#ec7d00" : "#919191"}} />
                        <Text numberOfLines={1} style={{ color: this.state.tabs.tab1 ? "#ec7d00" : "#919191"}}>
                            Inicio
                        </Text>
                    </Button>
                    <Button active={this.state.tabs.tab2} onPress={() => this.toggleTab2()} style={{ backgroundColor: this.state.tabs.tab2 ? "#f7f7f7" : "transparent"}}>
                        <IconOutline active size={20} name="book" style={{ color: this.state.tabs.tab2 ? "#ec7d00" : "#919191"}}/>
                        <Text numberOfLines={1} style={{ color: this.state.tabs.tab2 ? "#ec7d00" : "#919191"}}>
                            Proyectos
                        </Text>
                    </Button>
                    <Button active={this.state.tabs.tab3} onPress={() => this.toggleTab3()} style={{ backgroundColor: this.state.tabs.tab3 ? "#f7f7f7" : "transparent"}}>
                        <IconOutline active name="plus" size={20} style={{ color: this.state.tabs.tab3 ? "#ec7d00" : "#919191"}}  />
                        <Text numberOfLines={1} style={{ color: this.state.tabs.tab3 ? "#ec7d00" : "#919191"}}>
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
            return dispatch(changeTab(stateTabs))
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(TabFooter);
