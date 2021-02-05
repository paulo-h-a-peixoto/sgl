import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';


import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { createStackNavigator } from '@react-navigation/stack';
export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    
   

    return (
        <C.Container>
            <C.Logo 
                source={require('../../assets/sgl.png')}
                resizeMode="contain"
            />
        </C.Container>
    );
}