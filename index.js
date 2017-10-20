import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, TouchableHighlight } from 'react-native';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            result:'',
            values: '',
            operators:'',
            clear: false
        }
    }

    setValue(value) {
        if(this.state.clear === true){
            //this.clearValues();
            this.setState({
                result: value,
                values: value,
                operators:'',
                clear: false
            });
        } else {    
            this.setState({
                result: this.state.result + value,
                values: this.state.values + value
            });
        }
    }

    setOperator(value) {
        if(this.state.operators === ''){
            this.setState({
                operators:value
            })
        } else{
            this.setState({
                operators:',' + value
            })
        }
        
        this.setState({
            values:this.state.values + ',',
            result: this.state.result + value,
            clear: false
        });
    }

    clearValues() {
        this.setState({
            result: '',
            clear: false
        });
    }

    calc() {
        let val = this.state.values.split(',');
        let operator = this.state.operators.split(',');
        let calc = '';
        
        for(let i = 0; i< val.length; i++){
            if(i === 0){
                calc = parseFloat(val[i])*1;
            } else{
                if(operator[i-1] === '+'){
                    calc = calc + parseFloat(val[i])*1;       
                } else if(operator[i-1] === '-'){
                    calc = calc - parseFloat(val[i])*1;       
                } else if(operator[i-1] === 'X'){
                    calc = calc * parseFloat(val[i])*1;       
                } else if(operator[i-1] === '÷'){
                    calc = calc / parseFloat(val[i])*1;       
                }
            }
        }
        this.setState({
            result: String(calc),
            values: String(calc),
            operator: '',
            clear: true
        });
    }

    render(){
        return(
            <View style={styles.container.style}>
                <View style={styles.container.header.style}>
                    <Text style={styles.container.header.title}>Calculadora</Text>
                </View>
                <View style={styles.container.result.style}>
                    <TextInput 
                        editable={false}
                        style={styles.container.result.input} 
                        placeholder='Resultado'
                        value={this.state.result}
                    />
                </View>
                <View style={styles.container.keyboard.style}>
                    <View style={{ flex: 3}}>
                        <View style={styles.container.keyboard.row.style}>
                            <TouchableHighlight onPress={() => this.setValue('7')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>7</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('8')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>8</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('9')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>9</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.container.keyboard.row.style}>
                            <TouchableHighlight onPress={() => this.setValue('4')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>4</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('5')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>5</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('6')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>6</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.container.keyboard.row.style}>
                            <TouchableHighlight onPress={() => this.setValue('1')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>1</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('2')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>2</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('3')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>3</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.container.keyboard.row.style}>
                            <TouchableHighlight onPress={() => this.setValue('.')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>,</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.setValue('0')} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>0</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.calc()} style={styles.container.keyboard.row.buttons.style}>
                                <Text style={styles.container.keyboard.row.buttons.text}>=</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ flex: 1}}>
                        <TouchableHighlight onPress={() => this.clearValues()} style={styles.container.keyboard.row.buttons.style}>
                            <Text style={styles.container.keyboard.row.buttons.text}>C</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.setOperator('÷')} style={styles.container.keyboard.row.buttons.style}>
                            <Text style={styles.container.keyboard.row.buttons.text}>÷</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.setOperator('X')} style={styles.container.keyboard.row.buttons.style}>
                            <Text style={styles.container.keyboard.row.buttons.text}>X</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.setOperator('-')} style={styles.container.keyboard.row.buttons.style}>
                            <Text style={styles.container.keyboard.row.buttons.text}>-</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.setOperator('+')} style={styles.container.keyboard.row.buttons.style}>
                            <Text style={styles.container.keyboard.row.buttons.text}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = {
    container:{
        style:{
            flex:1,
            backgroundColor: '#dfd'
        },
        header:{
            style:{
                height:50,
                backgroundColor: '#417690',
                alignItems: 'center',
                justifyContent: 'center'
            },
            title:{
                fontSize: 20,
                color: '#f0f0f0',
                fontWeight: 'bold'
            }
        },
        result:{
            style:{
                backgroundColor: '#fff',
            },
            input:{
                height: 100,
                fontSize: 30,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'center'
            },
        },
        keyboard:{
            style:{
                flex:1,
                flexDirection: 'row',
                padding:1
            },
            row:{
                style:{
                    flex: 1,
                    flexDirection: 'row'
                },
                buttons:{
                    style:{
                        flex:1,
                        margin:1,
                        backgroundColor: '#79aec8',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    text:{
                        fontSize: 30,
                        color: '#fff',
                        fontWeight: 'bold'
                    }
                }
            }
        }
    }
}
AppRegistry.registerComponent('app7', () => App);
