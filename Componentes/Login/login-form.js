// import liraries
import React from 'react';
import {
  View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'galio-framework';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const field = props => (
  <View style={styles.fields}>
    <Input
      style={styles.textInput}
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      autoCapitalize="none"
      secureTextEntry={!!((props.input.name === 'password'))}
      onBlur={props.input.onBlur}
      placeholderTextColor="white"
      color="white"
      bgColor="rgba(255, 255, 255, 0.3)"
      icon={props.icon}
      family="FontAwesome"
      iconColor="white"
      right

      password={!!((props.input.name === 'password'))}
    />
    {/* {props.meta.touched && props.meta.error
       && <Text style={styles.errors}>{props.meta.error}</Text>} */}
  </View>
);

const validate = (values) => {
  const errors = {};

  if (!values.user) {
    errors.user = 'Ingrese su usuario';
  }

  if (!values.password) {
    errors.password = 'Ingrese su contraseña';
  }

  return errors;
};

const LoginForm = (props) => {
  const { invalid } = props;
  let color1 = 'grey';
  let color2 = 'grey';
  if (invalid) {
    color1 = '#7575753b';
    color2 = '#7575753b';
  } else {
    color1 = '#105187';
    color2 = '#1d9eb1';
  }
  return (


    <View
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        onPress={Keyboard.dismiss}
        keyboardVerticalOffset={80}
      >

        <Field name="user" component={field} ph="Usuario" icon="user" />

        <Field name="password" component={field} ph="Contraseña" icon="lock" />

      </KeyboardAvoidingView>


      <View style={{ flex: 1, paddingTop: 50 }}>
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [color1, color2],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          title="Iniciar Sesión"
          disabled={invalid}
          disabledStyle={{
            backgroundColor: '#afaeae',
          }}
          disabledTitleStyle={{ color: '#4a4444' }}
          buttonStyle={{
            borderRadius: 80, width: 300,
          }}
          onPress={props.handleSubmit(props.login)}
        />
      </View>


    </View>


  );
};
const styles = StyleSheet.create({
  fields: {
    marginBottom: 30,
    flex: 1,
  },
  textInput: {
    borderRadius: 40,
    // borderColor: 'white',
    borderWidth: 0,
  },
  errors: {
    color: '#c32f29',
  },
  container: {
    flex: 2,
  },
});

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
