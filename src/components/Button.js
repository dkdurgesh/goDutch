import React from 'react';
import { TouchableOpacity, Text} from 'react-native'


export default Button = (props) => {
    let {
        style
    } = props;
    if(style == null || style === undefined) {
        style = {}
    }
    return (
        <TouchableOpacity 
        style={[{ backgroundColor:'#5A67F2', borderRadius: 5, height: 40, alignItems:'center', justifyContent:'center'}, style]}
        onPress={props.onPress}
        >
            <Text style={{ color: '#fff', fontSize: 16}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

