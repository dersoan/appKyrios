import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  box-shadow: 12px 25px 25px #000;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-top:00px;
 `;

export const Label = styled.Text`
  font-size: 10px;
  font-weight:700;
  color: ${({ focused }) => focused ? '#53038E' : '#fff'};
`;
