import styled from 'styled-components/native';


export const Container = styled.ScrollView`
background:#6E1CAB;
height:130px; 
`;
export const colors = {
orange: "#FFBF67",
pink: "#ea3372",

};

export const gs = StyleSheet.create({
sectionContainer: {
paddingVertical: 24,
paddingHorizontal: 32,
marginBottom: 8,
backgroundColor: colors.lightBg
},
sectionTitle:{
  fontWeight:"700",
  color: "#000",
  fontSize: 15
},
});