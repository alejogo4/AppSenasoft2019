import {
    AsyncStorage
} from 'react-native';

export const URL = 'https://senasoft.fabricadesoftware.co/api';

export const TOKEN = () => AsyncStorage.getItem('token');
