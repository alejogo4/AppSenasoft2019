import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Item,
  Label,
  Input,
  Button,
  Form,
} from 'native-base';
import {KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class FormIngreso extends Component {
  render () {
    return (
        <ScrollView>
      <Container>
        <Content padder>
        <KeyboardAvoidingView style={{alignSelf: 'stretch'}} enabled>
          <Card>
            <CardItem header bordered>
              <Text>Recibir Equipaje</Text>
            </CardItem>
            <CardItem bordered>
              <Body>

                
                  <Form style={{alignSelf: 'stretch'}}>
                    <Item floatingLabel>
                      <Label>Username</Label>
                      <Input />
                    </Item>
                    <Item floatingLabel last>
                      <Label>Password</Label>
                      <Input />
                    </Item>
                    <Item floatingLabel last>
                      <Label>Password</Label>
                      <Input />
                    </Item>
                  </Form>
                

              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button rounded block>
                <Text>Click Me!</Text>
              </Button>
            </CardItem>
          </Card>
          </KeyboardAvoidingView>
        </Content>
      </Container>
      </ScrollView>
    );
  }
}
