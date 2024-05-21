import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://yt3.googleusercontent.com/ytc/AIf8zZS5-w-s2K8_JFeHXG9Tb0ehxfyYGSgR4y9kvWZSgQ=s900-c-k-c0x00ffffff-no-rj',
        }}
      />
      <Text style={styles.title}>Авторизация</Text>
      <Text style={styles.description}>
        Введите логин и пароль, который создавали ранее при регистрации
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogin}
        value={login}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Пароль"
        secureTextEntry={true}
        keyboardType="invisible-password"
      />
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Успешно', 'Авторизация прошла успешно')}>
        <Text>Войти</Text>
      </Pressable>
      <Button
        title="Зарегистрироваться"
        onPress={() => navigation.navigate('Регистрация')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginEnd: 'auto',
    marginStart: 'auto',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
});

export default Login;
