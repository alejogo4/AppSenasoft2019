import React, {Component} from 'react';
import {
  Content,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
} from 'native-base';

import {connect} from 'react-redux';
import {obtener_puntajes} from '../../redux/actions/puntajes';

class PuntajeCategoria extends Component {
  constructor (props) {
    super (props);
  }

  componentWillMount () {
    this.props.obtener_puntajes (this.props.categoria_id);
  }

  puntajes () {
    return this.props.respuesta
      ? this.props.respuesta.map ((e, i) => (
          <List key={i}>
            <ListItem itemDivider>
              <Left>
                <Text>Categoria 1</Text>
              </Left>
              <Right>
                <Text>
                  20%
                </Text>
              </Right>
            </ListItem>
            {e.aprendices.map ((ee, ii) => (
              <ListItem key={ii}>
                <Text>Kumar Pratik</Text>
              </ListItem>
            ))}

          </List>
        ))
      : <Text />;
  }

  render () {
    return (
      <Content>
        {this.puntajes ()}
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
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (PuntajeCategoria);
