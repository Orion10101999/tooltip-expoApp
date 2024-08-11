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
            <Tooltip title='click display text ' enterTouchDelay={100} leaveTouchDelay={200}>
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
