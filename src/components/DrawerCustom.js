import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../contexts/StateContext';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

import {} from '../contexts/StateContext';
const DrawerArea = styled.View`
    flex: 1;
    background-color: #FFF;
`;
const DrawerLogoArea = styled.View`
    padding: 10px 0px;
    border-bottom-width: 1px;
    border-bottom-color: #EEE;
`;
const DrawerLogo = styled.Image`
    width: 110px;
    height: 40px;
`;
const DrawerScroller = styled.ScrollView`
    flex:1;
    margin: 20px 0px;
`;
const ChangeUnitArea = styled.View`
    margin: 10px;
`;
const ChangeUnitButton = styled.TouchableOpacity`
    background-color: #31B404;
    padding:12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
const ChangeUnitButtonText = styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
`;
const FooterArea = styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const FooterInfo = styled.View``;
const FooterProfile = styled.Text`
    font-size: 15px;
    color: #000;
`;
const FooterUnitText = styled.Text`
    font-size: 15px;
    color: #666e78;
`;
const FooterUnitButton = styled.TouchableOpacity``;

const MenuButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 5px;
    border-radius: 5px;
    align-items: center;
`;
const MenuSquare = styled.View`
    width: 5px;
    height: 35px;
    margin-right:20px;
    background-color: transparent;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
const MenuButtonText = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    color: #666e79;
`;


export default (props) => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const menus = [
        {title: 'Avisos Pendentes', icon: 'info', screen: ''},
        {title: 'Favoritos', icon: 'star', screen: ''},
        {title: 'Gestão de Usuários', icon: 'user-plus', screen: ''},
        {title: 'Gestão de Organizações', icon: 'users', screen: ''},
        {title: 'Cadastro de Materiais', icon: 'window-restore', screen: ''},
        {title: 'Gestão de Patrimônio', icon: 'viacoin', screen: ''},
        {title: 'Necessidades Logisticas', icon: 'bolt', screen: ''},
        {title: 'Situação Operacional', icon: 'check', screen: ''},
        {title: 'Relatório', icon: 'align-justify', screen: ''},
        {title: 'Chamados', icon: 'inbox', screen: ''}
    ];

    const handleLogoutButton = async () => {
        
        await api.logout();
        navigation.reset({
            index: 1,
            routes:[{name: 'LoginScreen'}]
        });
    }

    return (
        <DrawerArea>
            <DrawerLogoArea>
                <DrawerLogo source={require('../assets/sgl.png')} resizeMode="contain" />
            </DrawerLogoArea>
            <DrawerScroller>
                    
                {menus.map((item, index)=>(
                    <MenuButton key={index} >
                        <MenuSquare></MenuSquare>
                        <Icon name={item.icon} size={20} color={'#666e78'} />
                        <MenuButtonText>{item.title}</MenuButtonText>
                    </MenuButton>
                ))}
            </DrawerScroller>
            <ChangeUnitArea>
                <ChangeUnitButton onPress={handleLogoutButton}>
                    <ChangeUnitButtonText>Sair</ChangeUnitButtonText>
                </ChangeUnitButton>
            </ChangeUnitArea>
            <FooterArea>
                <FooterInfo>
                    <FooterProfile>Olá Paulo Peixoto</FooterProfile>
                    <FooterUnitText>ADMINISTRADOR GERAL</FooterUnitText>
                </FooterInfo>
                <FooterUnitButton>
                    <Icon name="gear" size={24} color="#666E78" />
                </FooterUnitButton>
            </FooterArea>
        </DrawerArea>
    );
}