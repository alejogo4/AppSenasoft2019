import React, {Component} from 'react';
import {
  Content,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
} from 'native-base';

import {connect} from 'react-redux';
import {obtener_puntajes, respuesta} from '../../redux/actions/puntajes';

class PuntajeCategoria extends Component {
  constructor (props) {
    super (props);
    
  }

  componentWillMount () {
    this.props.resp();
    this.props.obtener_puntajes (this.props.categoria_id);
  }

  render () {
    return (
      <Content>
        {this.props.respuesta != null
          ? this.props.respuesta.map ((e, i) => (
              <List key={i}>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{fontSize: 18}}>{e.nombre}</Text>
                  </Left>
                  <Right>
                    <Text style={{fontSize: 20}}>
                      {e.puntaje}%
                    </Text>
                  </Right>
                </ListItem>
                {e.grupoxpersonas.map ((ee, ii) => (
                  <ListItem key={ii} style={{flexDirection:'column'}}>
                    <Text style={{flex:1, textAlign: 'center'}}>{ee.persona.nombres} {ee.persona.apellidos} </Text>
                    <Text style={{flex:1, textAlign: 'center', fontSize:9}}>{ee.persona.centro.regional.nombre_regional} </Text>
                    <Text style={{flex:1, textAlign: 'center', fontSize:9}}>{ee.persona.centro.nombre_centro} </Text>
                  </ListItem>
                ))}
              </List>
            ))
          : <Text>Cargando...</Text>}
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    respuesta: state.puntaje.respuesta,
    error: state.puntaje.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    obtener_puntajes: id_categoria =>
      dispatch (obtener_puntajes (id_categoria)),
    resp: () =>
      dispatch (respuesta (null)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (PuntajeCategoria);
