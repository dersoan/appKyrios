import styled from 'styled-components/native';
import img1 from '../../assets/grupo4203.png';


export const Wrapper = styled.SafeAreaView `
background: #53038E;
flex: 1;
`;
export const Container = styled.View ``;

export const Header = styled.View`
height:50px;
padding: 0 16px;
flex-direction: row;
align-items: center;
justify-content: space-between; 
background: #53038E;

`;

export const BalanceContainer = styled.View`
height:100px;
background: #6E1CAB;
padding: 0 45px;
text-align: center;
flex-direction: row;
justify-content: space-between;
border-width:-1px;
border-top-left-radius:25px;
border-top-right-radius:25px;
`;



export const BalanceBoxText = styled.View`
color: #fff;
text-align: center;
`;
export const BalanceBoxUser = styled.View`
width:100px;
height:120px;
text-align: center;
justify-content:center;
flex-direction: row; 
margin-top:5px;
`;

export const BalanceTitle = styled.Text`
color: #fff;
font-weight: 700;
margin-top:15px;
`;

export const BalanceSubTitle = styled.Text`
color: #fff;
`;
export const Balance = styled.Text`
color: #FFBF67;
font-weight: 700;
`;

