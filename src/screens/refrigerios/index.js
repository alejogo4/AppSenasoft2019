import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text
} from "native-base";

import {validarRefrigerio} from '../../redux/actions/refrigerio'
import { connect } from 'react-redux';
import styles from "../Header/styles";
import { StyleSheet, View, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import {getToken} from "../../redux/actions/login";


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
                <View style={styles.MainContainer}>

                    <Text style={{ fontSize: 22, textAlign: 'center' }}>Escanear la escarapela para registro de fichos</Text>

                    <Text style={styles.QR_text}>
                        /*{this.state.cedula ? 'Dato escaneado: ' + this.state.cedula : ''}*/
                        {this.state.cedula ? this.props.consultarRespuesta(this.state) : ''}
                    </Text>

                    {this.state.cedula.includes("http") ?
                        <TouchableOpacity
                            onPress={this.openLink_in_browser}
                            style={styles.button}>
                            <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
                        </TouchableOpacity> : null
                    }

                    <Button
                        onPress={this.open_QR_Code_Scanner}
                        style={styles.button}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>
                            Abrir escaner
                        </Text>
                    </Button>

                </View>
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
        consultarRespuesta : (data) => dispatch(validarRefrigerio(data))
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Refrigerios);