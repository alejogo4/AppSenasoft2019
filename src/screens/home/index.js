import React, { Component } from "react";
import {Image, Dimensions, ImageBackground, View} from "react-native";
import {
    Container,
    Button,
    Text,
    Left,
    Right,
    Icon,
    Body,
    CardItem,
    Thumbnail,
    Card,
    Content,
    H1

} from "native-base";

import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";



import TabFooter  from '../footerTab/TabFooter';
import MainHeader from '../MainHeader/index'
const mascota = require("../../../assets/mascota.png");
const personaje = require("../../../assets/personaje.png");
const cardImage = require("../../../assets/bienvenida-cover.png");
const bg_profile = require('../../../assets/bg_profile.png');

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={

        }
    }

  render() {
    return (
      <Container style={styles.container}>
          <ImageBackground source={bg_profile} style={styles.head}>
              <MainHeader Navigate={this.props.navigation}/>
              <View style={styles.container_text_intro}>
                <H1 style={styles.text_head_h1}>SENASOFT 2019</H1>
                  <Text style={styles.text_head_p}>SENASOFT es el mayor encuentro de tecnología realizado por el SENA, como iniciativa de la red de conocimiento en informática, Diseño Y Desarrollo de Software.</Text>
              </View>
              <Thumbnail source={personaje} style={styles.personaje}/>
          </ImageBackground>
          <Content padder>

              <Card style={styles.mb}>
                  <CardItem>
                      <Left>
                          <Thumbnail source={mascota} />
                          <Body>
                          <Text>Bienvenidos</Text>
                          <Text note>Introducción</Text>
                          </Body>
                      </Left>
                  </CardItem>

                  <CardItem cardBody>
                      <Image
                          style={{
                              resizeMode: "cover",
                              width: null,
                              height: 200,
                              flex: 1
                          }}
                          source={cardImage}
                      />
                  </CardItem>

                  <CardItem style={{ paddingVertical: 0 }}>
                      <Body></Body>

                      <Right>
                          <Button transparent>
                              <Icon active name="eye" />
                              <Text>Ver</Text>
                          </Button>
                      </Right>
                  </CardItem>
              </Card>
              <Grid style={styles.mt}>

                  <Row>
                      <Col style={{ backgroundColor: "#00CE9F" }} >
                          <Button
                              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                              onPress={() => this.props.navigation.navigate('Proyecto')}
                          >
                              <Text>Lets Go!</Text>
                          </Button>
                      </Col>
                      <Col style={{ backgroundColor: "#635DB7" }} >
                          <Button
                              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                              onPress={() => this.props.navigation.openDrawer()}
                          >
                              <Text>Lets Goo!</Text>
                          </Button>
                      </Col>

                  </Row>

              </Grid>
          </Content>
          <TabFooter Navigate={this.props.navigation}/>

      </Container>
    );
  }
}

export default Home;
