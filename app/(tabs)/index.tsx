
import { Text, View } from 'react-native';
import Demo from '../demo';
import { Provider } from 'react-native-paper'
export default function HomeScreen() {
  return (
    <>
    <Provider>
      <Demo/>
    </Provider>
    </>
  
  );
}
