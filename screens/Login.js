import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, Body, View } from 'native-base';

export default class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container>
        <Header >
          <Body>
            <Title>Firebase Demo</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Login</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label>Username</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button success
            style={styles.loginBtn}
            onPress={() => { this.props.navigation.navigate('Home') }}
          >
            <Text> SIGN IN </Text>
          </Button>
          <Button style={{ marginLeft: '26%', marginTop: 15 }}>
            <Text>SIGN UP WITH FACEBOOK</Text>
          </Button>
          <Button danger
            style={{ marginLeft: '28%', marginTop: 15 }}
            onPress={() => {console.log("Google")}}
          >
            <Text>SIGN UP WITH GOOGLE</Text>
          </Button>
          <View style={styles.titleContainer}>
            <Text
              style={{ marginTop: 25 }}
              onPress={() => { this.props.navigation.navigate('SignUp') }}
            >Need a account? SignUp</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    marginTop: 30,
    marginLeft: '40%'
  },
  form: {
    marginTop: '10%'
  },
  input: {
    width: 50
  },
  item: {
    marginBottom: 20
  },
  title: {
    fontSize: 40,
    marginTop: 15
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
