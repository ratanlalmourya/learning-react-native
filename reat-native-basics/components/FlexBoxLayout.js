import { Text, View } from "react-native";

export default function FlexBoxLayout() {
    return (
        <View style={{padding: 20, flexDirection: 'row' , height: 200, alignItems: 'stretch', justifyContent: 'space-around'}}>
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>1</Text>
            </View> 
            <View style={{
                backgroundColor: 'blue',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>2</Text>
            </View> 
            <View style={{
                flex: 1,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>3</Text>
            </View> 
        </View>
    )
}