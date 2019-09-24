import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Linking,
    ScrollView,
    PermissionsAndroid,
} from 'react-native';

import {
    Text,
    H1,
    H2,
} from 'native-base';

import { Grid, Row, Col } from "react-native-easy-grid";

import Icon from 'react-native-vector-icons/FontAwesome';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';


import {validarRefrigerio} from '../../redux/actions/refrigerio'
import { connect } from 'react-redux';
import styles from "../Header/styles";
import MainHeader from "../MainHeader";


class Refrigerios extends Component {
    constructor() {

        super();

        this.state = {

            cedula: '',

            Start_Scanner: false,

            read:false

        };
    }

    openLink_in_browser = () => {

        Linking.openURL(this.state.cedula);

    }

    onQR_Code_Scan_Done = (QR_Code) => {

        this.setState({ cedula: QR_Code });

        this.setState({ Start_Scanner: false });
    }

    open_QR_Code_Scanner=()=> {

        var that = this;

        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                            'title': 'Camera App Permission',
                            'message': 'Camera App needs access to your camera '
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                        that.setState({ cedula: '' });
                        that.setState({ Start_Scanner: true });
                    } else {
                        alert("CAMERA permission denied");
                    }
                } catch (err) {
                    alert("Camera permission err", err);
                    console.warn(err);
                }
            }
            requestCameraPermission();
        } else {
            that.setState({ cedula: '' });
            that.setState({ Start_Scanner: true });
        }
    }

    componentDidUpdate(prevProps, prevState){

        if(prevState.cedula != this.state.cedula){
            console.log("leer QR");
        }
    }

    render() {
        if (!this.state.Start_Scanner) {

            return (
                <ScrollView>
                    <MainHeader Navigate={this.props.navigation}/>
                    <Grid>
                        <Row style={{height:40, marginTop:10}}>
                            <Col size={100} style={{alignItems:'center'}}>
                                <H2>Refrigerios</H2>
                            </Col>
                        </Row>
                        <Row style={{height:100}}>
                            <Col style={{alignItems:'center', backgroundColor:'#f1f1f1'}}>
                                <TouchableOpacity style={styles.escanear} onPress={this.open_QR_Code_Scanner} >
                                    <Icon name="qrcode" size={60}/>
                                    <Text>Escanear</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.QR_text}>
                                    {this.state.cedula ? 'Cedula Registrada : ' + this.state.cedula : ''}
                                    {this.state.cedula ? this.props.consultarRespuesta(this.state) : ''}
                                </Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.info_qr}>
                                <Text style={{color:"#cccccc", textAlign:'center'}}>
                                    Escanea el QR situado en la escarapela para realizar el registro de refrigerios
                                </Text>
                            </Col>
                        </Row>
                    </Grid>

                </ScrollView>

            );
        }
        return (
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

const mapStateProps = state =>{
    return {
        respuestaRefrigerio : state.refrigerio.respuesta,

    }
}

const mapDispatchToProps = dispatch =>{
    return {
        consultarRespuesta : (data) => {

            dispatch(validarRefrigerio(data))}
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Refrigerios);