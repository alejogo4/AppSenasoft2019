import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
import { Grid, Row, Col } from "react-native-easy-grid";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
          <Grid>
              <Row>
                  <Col style={{ backgroundColor: "#DD9E2C" }} >
                      <Button
                          style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                          onPress={() => this.props.navigation.openDrawer()}
                      >
                          <Text>Lets Go!</Text>
                      </Button>
                  </Col>

              </Row>
              <Row>
                  <Col style={{ backgroundColor: "#00CE9F" }} >
                      <Button
                          style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                          onPress={() => this.props.navigation.openDrawer()}
                      >
                          <Text>Lets Go!</Text>
                      </Button>
                  </Col>
                  <Col style={{ backgroundColor: "#635DB7" }} >
                      <Button
                          style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                          onPress={() => this.props.navigation.openDrawer()}
                      >
                          <Text>Lets Go!</Text>
                      </Button>
                  </Col>

              </Row>

          </Grid>
      </Container>
    );
  }
}

export default Home;
