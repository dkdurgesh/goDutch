import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import SilverBox from '../components/Card';
import Button from '../components/Button';


export default class AccountSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: '',
            name: '',
            upiId: '',
            profession: 'Student'
        };
    }

    componentDidMount() {
        this.setState({ mobileNumber: this.props.navigation.getParam("mobileNumber", '') })
    }

    onContinue() {
        if (this.state.name.length < 2) {
            alert('Please enter full name')
        }
        var result = /([\w.-]*[@][\w]*)/.test(this.state.upiId);
        if (result) {
            this.props.navigation.navigate('AccountDetail', {
                data:
                {
                    mobileNumber: this.state.mobileNumber,
                    name: this.state.name,
                    upiId: this.state.upiId,
                    profession: this.state.profession
                }
            })
        } else {
            alert('Enter valid UPI ID')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20 }}>
                <Text style={{ fontSize: 14, color: '#333333' }}>setup your GoDutch account</Text>
                <SilverBox style={{ flex: 2 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>
                    <View style={{ flex: 2, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 12 }}>current profession</Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity style={{ flex: 1, marginRight: 10, height: 40, borderRadius: 5, borderWidth: 1, borderColor: (this.state.profession === 'Student') ? '#5A67F2' : '#f1f1f1', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => this.setState({ profession: 'Student' })}
                            >
                                <Text style={{ color: (this.state.profession === 'Student') ? '#5A67F2' : '#444' }}>Student</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, height: 40, borderRadius: 5, borderWidth: 1, borderColor: (this.state.profession === 'Professional') ? '#5A67F2' : '#f1f1f1', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => this.setState({ profession: 'Professional' })}
                            >
                                <Text style={{ color: (this.state.profession === 'Professional') ? '#5A67F2' : '#444' }}>Professional</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12 }}>full name<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                textAlign={'center'}
                                placeholder="Name"
                                onChangeText={(name) => this.setState({ name })}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12 }}>UPI ID<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                textAlign={'center'}
                                placeholder="Upi id"
                                onChangeText={(upiId) => this.setState({ upiId })}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }} />
                        <Button
                            style={{ flex: 2 }}
                            title={'Continue'}
                            onPress={() => this.onContinue()}
                        />
                        <View style={{ flex: 1 }} />
                    </View>
                </SilverBox>
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