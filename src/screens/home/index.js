import React, { Component } from "react";
import { Image } from "react-native";
import {
    Container,
    Button,
    Text,
    Header,
    Left,
    Right,
    Icon,
    Body,
    Title,
    CardItem,
    Thumbnail,
    Card,
    Content,

} from "native-base";

import styles from "./styles";
import { Grid, Row, Col } from "react-native-easy-grid";
import TabFooter  from '../footerTab/TabFooter';
import MainHeader from '../MainHeader/index'
const mascota = require("../../../assets/mascota.png");
const cardImage = require("../../../assets/bienvenida-cover.png");

class Home extends Component {

  render() {
    return (
      <Container style={styles.container}>
          <MainHeader Navigate={this.props.navigation}/>
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
