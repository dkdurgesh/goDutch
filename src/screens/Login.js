import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import SilverBox from '../components/Card';
import Button from '../components/Button';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: ''
        };
    }

    componentDidMount() {
    }
    onContinue(){
        if(this.state.mobileNumber.trim().length > 9){
            this.props.navigation.navigate('AccountSetup',{mobileNumber: this.state.mobileNumber})
        }else{
            alert('Please enter valid mobile number')
        }
    }
    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View style={{ flex: 1 }} />
                <SilverBox style={{ flex: 2 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/icon.png')}
                                style={{ height: 40, width: 40, marginRight: 5 }}
                                resizeMode={'contain'}
                            />
                            <Image
                                source={require('../assets/goDutch.png')}
                                style={{ height: 40 }}
                                resizeMode={'contain'}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 12 }}>Mobile Number<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={styles.input}
                            textAlign={'center'}
                            maxLength={10}
                            placeholder="Mobile Number"
                            keyboardType={'numeric'}
                            onChangeText={(mobileNumber) => this.setState({ mobileNumber }) }
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }} />
                        <Button
                            style={{ flex: 2 }}
                            title={'Continue'}
                            onPress={()=> this.onContinue()}
                        />
                        <View style={{ flex: 1 }} />
                    </View>
                </SilverBox>
                <View style={{ flex: 1 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#f1f1f1',
        borderWidth: 1,

    }
})