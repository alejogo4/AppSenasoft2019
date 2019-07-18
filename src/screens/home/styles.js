const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },

    container: {
        backgroundColor: "#FFF"
    },

    mb: {
        marginTop:5,
        marginBottom: 5
    },
    mt: {
        marginTop:20,
    },
    primaryColor:{
        backgroundColor: "#207CA0",
    },
    photo_log:{
        width:150,
        height:150,
        borderRadius: 100,
        marginLeft: deviceWidth / 4,
        marginTop:20,
        marginBottom:20,
    },
    secondColor:{
        backgroundColor: "#1B687F",
    },
    contentForm:{
      paddingLeft:15,
      paddingRight:15,
    },
    inputColor:{
      color:"#FFFFFF",
    },
    itemForm:{
      marginTop:10,
    },
    buttonLogin:{
        margin: 15, marginTop: 50,backgroundColor: "#207CA0"
    }
};
