import React, { Component } from "react";
import { Text, View, TextInput,KeyboardAvoidingView,TouchableOpacity } from "react-native";
import container from "../../Styles/Container/style";
import Color from "../../Config/Color";
import Button from "../../Component/Button/index";
export default class signUP extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={{ marginVertical: 20, marginHorizontal: 15,}}>
          <TextInput
            style={{
              borderColor: Color.steel,
              borderWidth: 0.5,
              borderRadius: 5,
              fontSize: 18,
              marginVertical: 10,
              paddingHorizontal: 15,
              paddingVertical: 7,
              fontFamily:'UberMoveText-Regular',
            }}
            placeholderTextColor={Color.steel}
            placeholder="Mobile number"
            underlineColorAndroid={"transparent"}
            keyboardType="phone-pad"
            autoCapitalize = 'none'
          />
        </View>

        <Button Text="Next" textStyle={{ fontSize: 15}} onPress={this.props.onPress}/>

      </KeyboardAvoidingView>
    );
  }
}
