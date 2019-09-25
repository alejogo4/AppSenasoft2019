import React, {Component} from 'react';
import {
  Container,
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
  H3,
  Row,
  Col,
  Toast
} from 'native-base';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {ingreso, respuesta} from '../../redux/actions/equipaje';

class FormIngreso extends Component {

  constructor(props){
    super(props);

    this.state = {
      documento: "",
      cantidad: 0,
      descripcion: ""
    };
  }

  async guardar(){
    await this.setState({
      documento: this.props.cedula
    });

    this.props.ingresarEquipaje(this.state).then(()=>{
      
      setTimeout(()=>{

        if(this.props.respuestaEquipaje != null){
          if(this.props.respuestaEquipaje.ok){
            Toast.show({
              text: this.props.respuestaEquipaje.message,
              buttonText: "Ok",
              type: "success",
              duration: 6000
            });
          }else{
            Toast.show({
              text: this.props.respuestaEquipaje.message,
              buttonText: "Ok",
              type: "danger",
              duration: 6000
            });
          }
        }
      },1)
          
    }).catch(()=>{
      if(this.props.error == null){
        Toast.show({
          text: "Error",
          buttonText: "Ok",
          type: "danger",
          duration: 6000
        });
      }
    });

  }

  render () {
    return (
      <ScrollView>
        <Container>
          <Content padder>
            <KeyboardAvoidingView style={{alignSelf: 'stretch'}} enabled>
              <Card style={{alignItems: "center"}}>
                <CardItem header bordered >
                  <H3 style={{color: "#015d7c"}}>Recibir Equipaje de {this.props.cedula}</H3>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Form style={{alignSelf: 'stretch'}}>
                      <Item stackedLabel>
                        <Label>Cantidad de elementos</Label>
                        <Input 
                        keyboardType="numeric" 
                        returnKeyType={"next"}
                        onChangeText={cantidad => this.setState({cantidad})}
                        />
                      </Item>
                      <Item stackedLabel last>
                        <Label>Descripción de los elementos</Label>
                        <Input 
                        multiline
                        numberOfLines={4}
                        onChangeText={descripcion => this.setState({descripcion})}
                        returnKeyType={"done"}
                        />
                      </Item>
                    </Form>
                    <Row>
                        <Col>
                          <Button onPress={()=>this.guardar()} block success>
                            <Text>Guardar</Text>
                          </Button>
                        </Col>
                      </Row>
                  </Body>
                </CardItem>
              </Card>
            </KeyboardAvoidingView>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateProps = state => {
  return {
    respuestaEquipaje: state.equipaje.respuesta,
    error: state.equipaje.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ingresarEquipaje: data => dispatch(ingreso(data))
  };
};

export default connect (mapStateProps, mapDispatchToProps) (FormIngreso);
