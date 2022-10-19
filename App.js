import React,{useState} from 'react';
import {View, StyleSheet,Image,ScrollView,Modal,Button,TouchableHighlight} from 'react-native';
const App = () =>{
  const [modalplaya,setModalplaya] = useState(false);
 return(
 <>

 <Modal transparent={true} animationType="slide" visible={modalplaya} onRequestClose={()=>{
   alert('modal has been closed');
 }} >
 <View style={styles.vistamodal}>
<View style={styles.modal}>
 
  <Button title="cerrar" onPress={() => {setModalplaya(!modalplaya)}}> </Button>


</View>
 </View>

 </Modal>



<View >
 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('./src/img/bg.jpg')} />

 </View>
</View>

<View style={styles.contendor}>
<text style={styles.titulo}>que hacer el el salvador</text>
<ScrollView horizontal>

<TouchableHighlight onPress={()=>{setModalplaya(!modalplaya)}}>
 <Image
 style={styles.banner}
 source={require('./src/img/actividad1.jpg')} />
</TouchableHighlight>

 <Image
 style={styles.banner}
 source={require('./src/img/actividad1.jpg')} />
<Image
 style={styles.banner}
 source={require('./src/img/actividad2.jpg')} />

 <Image
 style={styles.banner}
 source={require('./src/img/actividad3.jpg')} />

 <Image
 style={styles.banner}
 source={require('./src/img/actividad4.jpg')} />

 <Image
 style={styles.banner}
 source={require('./src/img/actividad5.jpg')} />

</ScrollView>
</View>


<View style={styles.contendor}>
<text style={styles.titulo}>platillos salvadoreños</text>
<ScrollView horizontal>
 <Image
 style={styles.mejores}
 source={require('./src/img/mejores1.jpg')} />
<Image
 style={styles.mejores}
 source={require('./src/img/mejores2.jpg')} />

 <Image
 style={styles.mejores}
 source={require('./src/img/mejores3.jpg')} />



</ScrollView>
</View>
<View style={styles.contendor}>
<text style={styles.titulo}>rutas turisticas</text>
  <View style={styles.listado}>

  <View style={styles.listaitem}>
  <Image
 style={styles.mejores}
 source={require('./src/img/ruta1.jpg')} />

  </View>

   <View style={styles.listaitem}>
  <Image
 style={styles.mejores}
 source={require('./src/img/ruta2.jpg')} />

  </View>

  <View style={styles.listaitem}>
  <Image
 style={styles.mejores}
 source={require('./src/img/ruta3.jpg')} />

  </View>

  <View style={styles.listaitem}>
  <Image
 style={styles.mejores}
 source={require('./src/img/ruta4.jpg')} />

  </View>


  </View>
</View>



</>
 );
};
const styles = StyleSheet.create({
 banner:{
   height:250,
   flex:1
 },

 listaitem:{
   flexBasis:'49%'

 },

 listado:{
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between'

 },

 vistamodal:{
   backgroundColor:'white',
 },
 modal:{
   backgroundColor:'#fff',
   margin:50,
   padding:40,
   borderRadius:10,
   flex:1,
 },


subtitulo:{
  fontWeight:'bold',
  fontSize:'14',
  justifyContent:'center',
},

 mejores:{
   height:200,
   width:200,
   marginVertical:5
  
 },

 titulo:{
   fontWeight:'bold',
   fontSize:24,
   marginVertical:10

 },
 
  contendor:{
  
   marginHorizontal:10

 },

 ciudad:{
   width:250,
   height:300,
   marginRight:10

 }

});



export default App;

