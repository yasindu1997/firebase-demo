import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Button } from 'native-base';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['ISBN', 'Name', 'Author', 'Option'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd']
            ]
        }
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Delete</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Button block success style={{marginBottom:'20%'}}>
                    <Text>Success</Text>
                </Button>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: 'red', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});