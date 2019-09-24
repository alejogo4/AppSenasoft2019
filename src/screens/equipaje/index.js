import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Linking,
  PermissionsAndroid,
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Grid,
  Row,
  Col,
  H1,
  H2,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

import MainHeader from './../MainHeader';
import FormIngreso from './formIngreso';

import styles from '../Header/styles';
import {validarEquipaje} from '../../redux/actions/equipaje';
import {getToken} from '../../redux/actions/login';

class Equipaje extends Component {

  constructor () {
    super();

    this.state = {
      cedula: '',
      scanner: false,
      read: false,
      estado: 0
    };
  }

  onQR_Code_Scan_Done = QR_Code => {
    this.setState ({cedula: QR_Code});
    this.setState ({scanner: false});
  };

  open_QR_Code_Scanner = () => {
    var that = this;
    if (Platform.OS === 'android') {
      async function requestCameraPermission () {
        try {
          const granted = await PermissionsAndroid.request (
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera App Permission',
              message: 'Camera App needs access to your camera ',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.setState ({cedula: ''});
            that.setState ({scanner: true});
          } else {
            alert ('CAMERA permission denied');
          }
        } catch (err) {
          alert ('Camera permission err', err);
          console.warn (err);
        }
      }
      requestCameraPermission ();
    } else {
      that.setState ({cedula: ''});
      that.setState ({scanner: true});
    }
  };

  abrirEscaner(estado){
    this.setState({
        estado
    })
    this.open_QR_Code_Scanner();
  }

  validarEscaner(){
    if(this.state.cedula == '' || this.state.cedula == null){
        return  <Col style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <Text style={{color:"#cccccc", textAlign:'center'}}>
                        Selecciona recibir o entregar para iniciar el proceso
                    </Text>
                </Col>  
    }else{
        return <FormIngreso />
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.cedula != this.state.cedula) {
    }
  }

  render () {
    return (
        this.state.scanner === false ?
        <Grid>
            <MainHeader Navigate={this.props.navigation}/>
            <Row style={{height:40, marginTop:10}}>
                <Col size={100} style={{alignItems:'center'}}>
                    <H2>Equipaje</H2>
                </Col>
            </Row>
            <Row style={{height:100}}>
                <TouchableOpacity  onPress={()=>this.abrirEscaner(1)} style={style.entregar}>
                    <Icon name="suitcase" size={40}/>
                    <Text>Recibir</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.abrirEscaner(2)} style={style.recibir}>
                    <Icon name="briefcase" size={40}/>
                    <Text>Entregar</Text>
                </TouchableOpacity>
            </Row>
            <Row>
                {this.validarEscaner()}
            </Row>
        </Grid>
        :
        <View style={{ flex: 1 }}>
            <CameraKitCameraScreen
                showFrame={true}
                scanBarcode={true}
                laserColor={'#FF3D00'}
                frameColor={'#00C853'}
                colorForScannerFrame={'black'}
                onReadCode={event =>
                    this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
                }
            />
        </View>
    );
  } 
}

const style = StyleSheet.create({
    entregar :  {
        backgroundColor:'#f1f1f1',
        height: 100, 
        flex:1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    recibir : {
        backgroundColor:'#ccc5cc',
        height: 100, 
        flex:1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

const mapStateProps = state => {
  return {
    respuestaEquipaje: state.equipaje.respuesta,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    consultarRespuesta: data => {
      dispatch (validarEquipaje (data));
    },
  };
};

export default connect (mapStateProps, mapDispatchToProps) (Equipaje);
