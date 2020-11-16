
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
 
import img3 from '../../assets/kyrios.png';
import img4 from '../../assets/ministerios.png';
import img5 from '../../assets/ligas.png';
import img6 from '../../assets/podcast.png';
import img7 from '../../assets/agenda.png';
import img8 from '../../assets/abek.png';

import { Container } from './styles';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Kyrios", image: img3 },
        {id:2, title: "Ministérios", image: img4 },
        {id:3, title: "Ligas", image: img5 } ,
        {id:4, title: "Podcast", image: img6 } ,
        {id:5, title: "Agenda", image: img7 } ,
        {id:6, title: "ABEK", image: img8 } ,
       
        
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (
      <>
      
      <Container>
    
      <View style={styles.container}>

          <View style={styles.headerTitle}>
            <Text style={styles.textHeader}> Seja bem Vindo de Volta!</Text>    
            <Text style={styles.textHeader2}> Você está na Kyrios</Text>  
            </View>

        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          
          renderItem={({item}) => {
            return (
              

              
              <View>
                
                <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.cardImage} source={require=item.image}/>
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}>
           

          </FlatList>
          
      </View>
     
      </Container>
      
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:5,
    
    backgroundColor:'#6E1CAB',
    
  },
  list: {
    paddingHorizontal: 0,
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:'#fff',
    width:380,
    marginLeft:6,
    paddingTop:25,
  },
  listContainer:{
    alignItems:'center',
   
  },
  /******** card **************/
  card:{
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:70,
    height:70,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 6,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:15,
    flex:1,
    alignSelf:'center',
    color: '#6E1CAB',
  },
  headerTitle:{
    height:150,
    width:380,
    marginLeft:6,
    backgroundColor:'#fff',
    borderWidth:0,
    borderColor:'#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position:'relative',
    justifyContent:'space-evenly',
    
  },

  textHeader:{
    fontSize:18,
    marginTop:15,
    color: '#6E1CAB',
    fontWeight:'700',
    alignSelf:'center',
      },
      textHeader2:{
        fontSize:15,
        marginTop:0,
        color: '#000',
        alignSelf:'center',
          },
});     