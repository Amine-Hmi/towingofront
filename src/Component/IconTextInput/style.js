import Color from '../../Config/Color';
export default{
    mainView:{flexDirection:'row',marginVertical: 10,},
    image:{width:30,height:30,alignItems:'center', resizeMode: 'contain',},
    imageView:{flex:0.15,justifyContent:'center'},
    viewText:{flexDirection:'column',flex:0.85,justifyContent:'center'},
    titleText:{color:Color.steel,fontSize:14,fontFamily:'OpenSans-Regular',marginVertical:5},
    addressText:{color:Color.black,fontSize:16,fontFamily:'OpenSans-Regular',marginBottom:5},
    image2:{width:20,height:20,alignItems:'flex-end', resizeMode: 'contain',marginBottom:5},
    imageView2:{alignSelf: 'flex-end',flex:0.1},
}
