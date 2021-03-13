import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, Body, View } from 'native-base';

export default class SignupScreen extends Component {
    constructor(props) {
        super(props)
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
                        <Text style={styles.title}>SignUp</Text>
                    </View>
                    <Form style={styles.form}>
                        <Item floatingLabel style={styles.item}>
                            <Label>Email</Label>
                            <Input style={styles.input} />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Confirm Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button success
                        style={styles.loginBtn}
                    >
                        <Text> SIGN UP </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        marginTop: 35,
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
