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

import styles from "./styles";
import { StyleSheet, View, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

class Header1 extends Component {
    constructor() {

        super();

        this.state = {

            QR_Code_Value: '',

            Start_Scanner: false,

        };
    }

    openLink_in_browser = () => {

        Linking.openURL(this.state.QR_Code_Value);

    }

    onQR_Code_Scan_Done = (QR_Code) => {

        this.setState({ QR_Code_Value: QR_Code });

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

                        that.setState({ QR_Code_Value: '' });
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
            that.setState({ QR_Code_Value: '' });
            that.setState({ Start_Scanner: true });
        }
    }

    render() {
        if (!this.state.Start_Scanner) {

            return (
                <View style={styles.MainContainer}>

                    <Text style={{ fontSize: 22, textAlign: 'center' }}>React Native Scan QR Code Example</Text>

                    <Text style={styles.QR_text}>
                        {this.state.QR_Code_Value ? 'Dato escaneado: ' + this.state.QR_Code_Value : ''}
                    </Text>

                    {this.state.QR_Code_Value.includes("http") ?
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
                            Open QR Scanner
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

export default Header1;
