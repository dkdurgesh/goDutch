import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import SilverBox from '../components/Card';
import Button from '../components/Button';


export default class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.navigation.getParam("data", {})})
    }

    onContine(){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
            });
            this.props.navigation.dispatch(resetAction);
}
    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20 }}>
                <Text style={{ fontSize: 14, color: '#333333' }}>Your Details</Text>
                <SilverBox style={{ flex: 4 , padding: 10}}>
                    
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#444444' }}>Name</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#5A67F2' }}>{this.state.data.name && this.state.data.name}</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#444444' }}>MobileNo</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#5A67F2' }}>{this.state.data.mobileNumber && this.state.data.mobileNumber}</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#444444' }}>Upi Id</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#5A67F2' }}>{this.state.data.upiId && this.state.data.upiId}</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#444444' }}>Profession</Text> 
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={{ fontSize: 14, color:'#5A67F2' }}>{this.state.data.profession && this.state.data.profession}</Text> 
                    </View>
                </SilverBox>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }} />
                        <Button
                            style={{ flex: 2 }}
                            title={'Continue'}
                            onPress={()=>this.onContine()}
                        />
                        <View style={{ flex: 1 }} />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        flex: 1, 
        paddingHorizontal: 10 , 
        borderBottomWidth: 1, 
        borderBottomColor:'#f1f1f1', 
        justifyContent:'center'
    }
})