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
        backgroundColor: "#e9ecf4"
    },

    mb: {
        marginTop:5,
        marginBottom: 5,
        position: 'relative'
    },
    mt: {
        marginTop:20,
    },
    head:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        width:"100%",
        height:280,
        position:'absolute'
    },
    col:{
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    center_items:{
      textAlign:"center"
    },
    sizeIcon:{
      fontSize: 30,
        marginBottom:5
    },
    columns:{
        width:100,
        paddingHorizontal: 5,
        paddingVertical: 30,
        borderRadius: 20,
    }
    ,
    container_text_intro:{
      flex:0.5,
        width:"70%",
        paddingLeft: 10,
        paddingBottom:60,
        position:"relative"
    },
    text_head_h1:{
      color:"#f8ffff",
        textAlign: "left",
        fontFamily: "Roboto_medium"
    },
    text_head_p:{
        color:"#f8ffff",
        textAlign: "left",
        marginTop:20,
        fontSize:14
    },
    personaje:{
        width:150,
        height:170,
        position:'absolute',
        right:-140,
        bottom:-30,
        resizeMode:"stretch"
    },
    categoria:{
        flex: 1,
        paddingLeft: 10,
        marginTop:55
    },
    tittle:{
      fontWeight: "bold",
        fontFamily: "Roboto_medium",
        color:"#066578"
    },
    primaryColor:{
        backgroundColor: "#FFFFFF",
    },
    footer:{
        backgroundColor: "#FFFFFF",
        borderTopRightRadius:20,
        borderTopLeftRadius:20,

    },
    cont_footer:{
      backgroundColor:"transparent",
        overflow:'hidden'
    }
    ,
    photo_log:{
        width:150,
        height:150,
        borderRadius: 100,
        marginLeft: deviceWidth / 4,
        marginTop:20,
        marginBottom:20,
        borderColor:"#fff",
        borderWidth:0.7
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
    },
    categorias_text:{
      paddingVertical: 0,
        width: 180,
        position: 'absolute',
        bottom: 10,
        color:"#424242"
    }
};
