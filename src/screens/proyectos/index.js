import React, {Component} from 'react';
import {
    Container,
    Left,
    Button,
    Right,
    Content,
    List,
    ListItem,
    Thumbnail, Text,Body
} from 'native-base';


import {connect} from 'react-redux';
import {getProjects} from '../../redux/actions/proyecto';

const sankhadeep = require("../../../assets/contacts/sankhadeep.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.png");
import styles from "./styles";
const datas = [
    {
        img: sankhadeep,
        text: "Sankhadeep",
        note: "Its time to build a difference . ."
    },
    {
        img: supriya,
        text: "Supriya",
        note: "One needs courage to be happy and smiling all time . . "
    },
    {
        img: shivraj,
        text: "Shivraj",
        note: "Time changes everything . ."
    },
    {
        img: shruti,
        text: "Shruti",
        note: "The biggest risk is a missed opportunity !!"
    },
    {
        img: himanshu,
        text: "Himanshu",
        note: "Live a life style that matchs your vision"
    },
    {
        img: shweta,
        text: "Shweta",
        note: "Failure is temporary, giving up makes it permanent"
    }
];

import MainHeader from '../MainHeader/index';
import TabFooter from "../footerTab/TabFooter";

class Proyecto extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this._bootstrapAsync();
    }

    _bootstrapAsync(){
        this.props.consultarProyectos().then(() => {
           console.log(this.props.proyectos);
        }).catch(error => {
            this.setState({ error })
        })
    }


    render(){
        return(
            <Container style={styles.container}>
                <MainHeader Navigate={this.props.navigation}/>
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={data.img} />
                                </Left>
                                <Body>
                                <Text>
                                    {data.text}
                                </Text>
                                <Text numberOfLines={1} note>
                                    {data.note}
                                </Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        }
                    />
                </Content>
                <TabFooter Navigate={this.props.navigation}/>
            </Container>
        )
    }

}


const mapStateProps = state =>{
    return {
        proyectos: state.proyectos.projects
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        consultarProyectos : () => dispatch(getProjects())
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Proyecto);