import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
  TextInput,
  Image,
} from 'react-native';

import {
  Button,
  Text,
  Grid,
  Row,
  Col,
  H1,
  H2,
  Badge,
  Picker,
  Item,
  Toast,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

import MainHeader from './../MainHeader';
import FormIngreso from './formIngreso';
import FormSalida from './formSalida';

const bg_header = require('../../../assets/bg_header.png');

import {contar, ingreso, salida} from '../../redux/actions/equipaje';

class Equipaje extends Component {
  constructor() {
    super();

    this.state = {
      cedula: '',
      scanner: false,
      read: false,
      estado: 0,
      tipo: 'QR',
      modal: false,
      _cedula: '',
    };
  }

  componentDidMount() {
    this.props.contarEquipaje();
  }

  componentDidUpdate() {
    this.props.contarEquipaje();
  }

  // componentWillReceiveProps() {
  //   setTimeout(() => {
  //     if (this.props.respuestaEquipaje != null && this.props.respuestaEquipaje.data == null) {
  //       this.setState({cedula: ''});
  //     }
  //   }, 1);
  // }

  onQR_Code_Scan_Done = QR_Code => {
    this.setState({cedula: QR_Code});
    this.setState({scanner: false});
  };

  open_QR_Code_Scanner = () => {
    var that = this;
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera App Permission',
              message: 'Camera App needs access to your camera ',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.setState({cedula: ''});
            that.setState({scanner: true});
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      that.setState({cedula: ''});
      that.setState({scanner: true});
    }
  };

  abrirEscaner(estado) {
    this.setState({
      estado,
      cedula: '',
    });
    if (this.state.tipo == 'QR') {
      this.open_QR_Code_Scanner();
    } else {
      this.setModalVisible(true);
    }
  }

  validarEscaner() {
    if (this.state.cedula == '' || this.state.cedula == null) {
      return (
        <Col
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Text style={{color: '#cccccc', textAlign: 'center'}}>
            Selecciona recibir o entregar para iniciar el proceso
          </Text>
        </Col>
      );
    } else {
      if (this.state.estado == 1) {
        return <FormIngreso cedula={this.state.cedula} />;
      } else {
        return <FormSalida cedula={this.state.cedula} />;
      }
    }
  }

  onValueChange(value) {
    this.setState({
      tipo: value,
    });
  }

  setModalVisible(visible) {
    this.setState({modal: visible});
  }

  render() {
    return this.state.scanner === false
      ? <Grid>
          <Image
            source={bg_header}
            style={{
              flex: 1,
              resizeMode: 'cover', // or 'stretch',
              width: '100%',
              height: 80,
              position: 'absolute',
            }}
          />
          <MainHeader Navigate={this.props.navigation} />
          <Row style={{height: 40, marginTop: 10, alignItems: 'center'}}>
            <Col size={60} style={{alignItems: 'center'}}>
              <H2>Equipaje</H2>
            </Col>
            <Col size={40}>
              <Picker
                mode="dropdown"
                placeholder="Select One"
                placeholderStyle={{color: '#2874F0'}}
                note={false}
                selectedValue={this.state.tipo}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="QR" value="QR" />
                <Item label="Manual" value="Manual" />
              </Picker>
            </Col>
          </Row>
          <Row style={{height: 100, marginTop: 10}}>
            <TouchableOpacity
              onPress={() => this.abrirEscaner(1)}
              style={style.entregar}
            >
              <Icon name="suitcase" size={40} />
              <Text>Recibir</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.abrirEscaner(2)}
              style={style.recibir}
            >
              <Icon name="briefcase" size={40} />
              <Text>Entregar</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            {this.validarEscaner()}
            <Badge info style={{position: 'absolute', bottom: 10, right: 10}}>
              <Text style={{fontSize: 14}}>
                Cantidad de equipaje:{' '}
                {this.props.contadorEquipaje == null
                  ? 0
                  : this.props.contadorEquipaje}
              </Text>
            </Badge>
          </Row>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modal}
            style={{height: 200}}
          >
            <View>
              <View
                style={{
                  padding: 30,
                  paddingTop: 60,
                  backgroundColor: '#015d7c',
                }}
              >
                <Text style={{color: '#fff'}}>Documento de identidad</Text>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    backgroundColor: '#fff',
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
                  onChangeText={_cedula => this.setState({_cedula})}
                  value={this.state._cedula}
                />

                <Button
                  style={{marginTop: 10, marginBottom: 40}}
                  success
                  block
                  onPress={async () => {
                    await this.setState({cedula: this.state._cedula});
                    this.setModalVisible(!this.state.modal);
                  }}
                >
                  <Text>Procesar</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </Grid>
      : <View style={{flex: 1}}>
          <CameraKitCameraScreen
            showFrame={true}
            scanBarcode={true}
            laserColor={'#FF3D00'}
            frameColor={'#00C853'}
            colorForScannerFrame={'black'}
            onReadCode={event =>
              this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)}
          />
        </View>;
  }
}

const style = StyleSheet.create({
  entregar: {
    backgroundColor: '#f1f1f1',
    height: 100,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recibir: {
    backgroundColor: '#ccc5cc',
    height: 100,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateProps = state => {
  return {
    respuestaEquipaje: state.equipaje.respuesta,
    equipaje: state.equipaje.equipaje,
    contadorEquipaje: state.equipaje.contador,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contarEquipaje: () => dispatch(contar()),
    ingresarEquipaje: data => dispatch(ingreso(data)),
    salidaEquipaje: data => dispatch(salida(data)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Equipaje);
