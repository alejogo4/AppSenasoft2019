import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Toast,
} from 'native-base';

import {connect} from 'react-redux';
import {salida} from '../../redux/actions/equipaje';

class formSalida extends Component {

  constructor(props){
    super(props);
    this.state = {
      documento:0,
      fecha_ingreso:null,
      descripcion: null,
      cantidad: 0
    }
  }

  async componentDidMount(){
    await this.setState({
      documento: this.props.cedula,
    });
    
    this.props
      .sacarEquipaje(this.state)
      .then(() => {
        setTimeout(() => {
          if (this.props.respuestaEquipaje != null) {
            if (this.props.respuestaEquipaje.ok) {
              
              Toast.show({
                text: this.props.respuestaEquipaje.message,
                buttonText: 'Ok',
                type: 'success',
                duration: 6000,
              });

              this.setState({
                ...this.props.respuestaEquipaje.data
              })
            } else {
              Toast.show({
                text: this.props.respuestaEquipaje.message,
                buttonText: 'Ok',
                type: 'danger',
                duration: 6000,
              });
            }
          }
        }, 1);
      })
      .catch(() => {
        if (this.props.error == null) {
          Toast.show({
            text: 'Error',
            buttonText: 'Ok',
            type: 'danger',
            duration: 6000,
          });
        }
      });
  }

  render() {

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Documento: {this.props.cedula == null ? '': this.props.cedula}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Cantidad de elementos:  {this.state.cantidad == null ? '': this.state.cantidad} </Text>
                <Text>Descripción:  {this.state.descripcion == null ? '': this.state.descripcion} </Text>
                <Text>Fecha de ingreso:  {this.state.fecha_ingreso == null ? '': this.state.fecha_ingreso} </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


const mapStateProps = state => {
  return {
    respuestaEquipaje: state.equipaje.respuesta,
    error: state.equipaje.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sacarEquipaje: data => dispatch(salida(data)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(formSalida);