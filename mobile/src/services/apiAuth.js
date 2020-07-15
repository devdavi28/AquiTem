import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const apiAuth = create({
  baseURL: 'http://192.168.0.104:3333'
});

apiAuth.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

apiAuth.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default apiAuth;
