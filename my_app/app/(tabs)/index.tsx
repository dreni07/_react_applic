import {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const Fox = () => {
  const [imageUrl,setImage] = useState(null);

  const fetchImage = async () => {
    try{
      const response = await fetch('https://randomfox.ca/floof/');

      if(!response.ok){
        throw new Error('something went wrong!');
      }

      const data = await response.json();

      setImage(data.image);
    } catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchImage();
  },[])

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Fox</Text>
     {imageUrl ? (
      <Image source={{ uri:imageUrl }} style={styles.image}/>
     ) : (
      <Text>Still Loading!!</Text>
     )}
     <TouchableOpacity style={styles.button} onPress={fetchImage}>
        <Text style={styles.buttonText}>Refresh Page</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#f5f5f5'
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20
  },
  image:{
    width:300,
    height:300,
    borderRadius:10,
    marginBottom:10,
    resizeMode:'cover'
  },
  button:{
    backgroundColor:"orange",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:10,
    marginTop:10
  },
  buttonText:{
    fontSize:18,
    color:"white",
    fontWeight:"bold"
  }
})

export default Fox;