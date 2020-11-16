import React from 'react';
import { AntDesign, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Wrapper, Header, Container, BalanceContainer, BalanceTitle, BalanceSubTitle, Balance, BalanceBoxText, BalanceBoxUser } from './styles';
import img1 from '../../assets/grupo4203.png';
import img2 from '../../assets/user67.png';
import Activities from '../../components/Activities';
import Suggestion from '../../components/Suggestions';

export default function Home() {
  return ( 
    <Wrapper>
      <Container>
        <Header>
          <AntDesign name="arrowleft" size={25} color="#ffffff" /> 
          <MaterialCommunityIcons name="dots-vertical-circle-outline" size={25} color="#ffffff" />
        </Header>
        <BalanceContainer>
          <BalanceBoxText>
          <BalanceTitle>Olá Anderson</BalanceTitle>
          <BalanceSubTitle>Bem-Vindo de volta</BalanceSubTitle>
          <View style={{borderBottomColor: '#fff',borderBottomWidth: 1,}}/>
          <Balance>45% Comcluído</Balance>
          </BalanceBoxText>
            <BalanceBoxUser>
              <ImageBackground source={img1} style={styles.image}>
                <ImageBackground source={img2} style={styles.imageUser}>
                </ImageBackground>
              </ImageBackground>
            </BalanceBoxUser>
          </BalanceContainer>
          
          
           <Activities />
          </Container>

    </Wrapper>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    height:90,
    resizeMode: "cover",
    justifyContent: "center"
  },
  imageUser: {
    width:65,
    height:65,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginLeft: 17,
    marginTop:9,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",

  }
});