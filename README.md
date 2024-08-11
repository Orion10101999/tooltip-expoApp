# app/demo.tsx

### react-native-paper library used for tooltip


###  app/(tabs)/index.tsx


```tsx


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
```

### app/demo.tsx

```tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Portal, Dialog, Button, Tooltip } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Demo = () => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => {
        setVisible(true);  
    };

    const hideTooltip = () => {
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <Tooltip title='display text ' enterTouchDelay={100} leaveTouchDelay={200}>
                <TouchableOpacity onPress={showTooltip} style={styles.button}>
                    <Text style={styles.buttonText}>Display Text</Text>
                </TouchableOpacity>
            </Tooltip>

            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={hideTooltip}
                    style={styles.tooltip}
                >
                    <Dialog.Content>
                        <Text style={styles.text}>This is a tooltip using react-native-paper library. It displays text on click on touch devices and can be adapted for desktop.</Text>
                    </Dialog.Content>

                    <Dialog.Actions>

                        <Button onPress={hideTooltip}>Close</Button>

                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        padding: wp('3%'),
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: wp('4%'),
    },
    tooltip: {
        width: wp('80%'),
        padding: wp('4%'),
        borderRadius: 5,
    },
    text: {
        color: 'black',
    },
});

export default Demo;



```












# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
"# tooltip-expoApp" 
