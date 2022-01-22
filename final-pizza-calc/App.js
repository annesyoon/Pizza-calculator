import * as React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import {TextInput, Appbar,Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    people: 0,
    slices: 0,
    total: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let calc = Math.floor(this.state.people*3 / this.state.slices);
    this.setState({
      total: calc
    });
  };

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
     const { modalVisible } = this.state;
    return (

      <ImageBackground
        source={require("./assets/pizza.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
     
      <Appbar.Header  theme={{ colors: { primary: '#BB3E00'} }}>
      <Appbar.Content  title="Pizza Calculator"  />
      <Appbar.Action icon="dots-vertical" onPress={() => this.setModalVisible(true)} />
      </Appbar.Header>

            
         <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalcont}>
            <View style={styles.modalView}>
              <Text> Welcome to the pizza calculator. In order to start your calculation just enter how many people will be eating and the total slices. once the info has been entered, the total pizza needed to be  ordered shall appear</Text>
                          <Button
                            style={[styles.modalbtn]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                            color="white"
                          >Hide </Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contents}  >
        
          <View style={styles.textcont}>
            <TextInput
             theme={{ colors: { primary: '#BB3E00'} }}
              mode="outlined"
              label="People"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={people => {
                this.setState({ people });
              }}
            />
            <TextInput
             theme={{ colors: {primary: '#BB3E00'} }}
              label="Total Slices"
               mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={slices => {
                this.setState({ slices });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.bttn}
            onPress={this.handleCalculate}
          >
            <Text style={styles.bttnText}>Calculate </Text>
          </TouchableOpacity>
          <View style={styles.display}>
                <Text style={styles.result}>{this.state.total} Pizza/s should be ordered</Text>
                <Text style={[styles.result, { fontSize: 35 }]}>
                  {this.state.resultText}
                </Text>
          </View>
        
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contents: {
    flex: 1,
  },
  input: {
    fontSize: 25,
    marginTop:20,
  },
  textcont:{
    marginTop:10,
  },
  bttn: {
    marginTop:30,
    margin:20,
    borderRadius: 20,
    backgroundColor: "#5F8D37"
  },
  bttnText: {
    alignSelf: "center",
    padding: 20,
    fontSize: 25,
    color: "#FFF1D7",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#F7AD45",
    fontSize: 24,
    padding: 15
  },
  display:{
     alignSelf: "center",
     backgroundColor:'white',
     flexDirection:'column',
     margin:20,
     padding:20,
    borderRadius: 10,
  },
  modalbtn:{
    borderRadius: 10,
    padding:5,
    margin:60,
    marginTop:20,
    marginBottom:10,
backgroundColor:'#BB3E00'
  },
   modalView: {
    justifyContent: "center",
    borderRadius: 20,
    },
  modalcont:{
    alignSelf: "center",
     backgroundColor:'white',
     marginTop:100,
     padding:20,
     borderRadius: 10,
    }
});