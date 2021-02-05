import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';


import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { createStackNavigator } from '@react-navigation/stack';
export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLoginButton = async () => {
        if(cpf && password) {
            let result = await api.login(cpf, password);
            if(result.error === '') {
                dispatch({ type: 'setToken', payload: { token: result.token }});
                dispatch({ type: 'setUser', payload: { user: result.user }});

                navigation.reset({
                    index: 1,
                    routes:[{name: 'MainDrawer'}]
                });
            } else {
                alert(result.error);
            }
        }else {
            alert("Preencha os campos");
        }
    }

    return (
        <C.Container>
            <C.Logo 
                source={require('../../assets/sgl.png')}
                resizeMode="contain"
            />
            <C.Field 
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />
            <C.Field 
                placeholder="Digite sua Senha"
                value={password}
                secureTextEntry={true}
                onChangeText={t=>setPassword(t)}
            />

            <C.ButtonArea onPress={handleLoginButton}>
                <C.ButtonText>Entrar</C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}