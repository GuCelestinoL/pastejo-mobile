import React from 'react'
import AppLoading from 'expo-app-loading';
import { Container, ContainerButton, Title, SubTitle, ButtonGreen, TextButton } from './style'
import { useFonts, FiraSans_500Medium, FiraSans_600SemiBold } from '@expo-google-fonts/fira-sans';

export default function Home() {
    var [fontsLoaded] = useFonts({
        FiraSans_500Medium,
        FiraSans_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <Container>
                <Title>Bem-vindo, João!</Title>
                <SubTitle>Áreas de acesso</SubTitle>
                <ContainerButton>
                    <ButtonGreen onPress={() => { }}>
                        <TextButton>Mapa de Gado</TextButton>
                    </ButtonGreen>
                    <ButtonGreen onPress={() => { }}>
                        <TextButton>Manejo de Pastagem</TextButton>
                    </ButtonGreen>
                    <ButtonGreen onPress={() => { }}>
                        <TextButton>Suplementação</TextButton>
                    </ButtonGreen>
                </ContainerButton>
            </Container>
        </>
    );
}