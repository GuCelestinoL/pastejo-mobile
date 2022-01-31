import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'


export const Container = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    background-color: #57CE71;
`

export const ContainerButton = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 36px;
    font-family: FiraSans_600SemiBold;
    margin-left: 20px;
`

export const SubTitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-family: FiraSans_500Medium;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 20px;
`

export const ButtonGreen = styled(TouchableOpacity)`
    background: #365951;
    width: 325px;
    height: 70px;
    border-radius: 35px;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 30px;
`

export const TextButton = styled.Text`
    color: #62B8AE;
    font-size: 24px;
    font-family: FiraSans_500Medium;
`