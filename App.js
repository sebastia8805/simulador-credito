import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

//Esté comentario es una prueba.

export default function App() {
  const [vlrPres, setVlrPres] = React.useState(null);
  const [tipPres, setTipPres] = React.useState(null);
  const [numCuo, setNumCuo] = React.useState(null);
  const [vlrCuo, setVlrCuo] = React.useState(null);
  const [total, setTotal] = React.useState(null);

  const CalcularTotal = () => {
    if (parseFloat(vlrPres) >= 4000000 && parseFloat(vlrPres) <= 100000000) {
      if (parseFloat(numCuo) >= 12 && parseFloat(numCuo) <= 60) {
        if(parseFloat(tipPres) > 0){
          Operacion(tipPres);
        }
        else{
          alert("El tipo de prestamo seleccionado, no existe!")
        }
      }
      else {
        alert("El número de cuotas debe estar entre 12 y 60.");
      }
    }
    else {
      alert("El valor de préstamo debe estar entre 4'000.000 y 100'000.000.");
    }
  }
  const Operacion = (intereses) => {
    setTotal((parseFloat(vlrPres)*intereses/100)*parseFloat(numCuo)+parseFloat(vlrPres));
    setVlrCuo(((parseFloat(vlrPres)*intereses/100)*parseFloat(numCuo)+parseFloat(vlrPres))/parseFloat(numCuo));
  }
  const Limpiar = () => {
    setVlrPres('');
    setTipPres('');
    setNumCuo('');
    setVlrCuo('');
    setTotal('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de prestamo:</Text>
      <br />
      <br />
      <Text style={styles.text}>Valor préstamo: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setVlrPres}
        value={vlrPres}
      />
      <br />
      <br />
      <Text style={styles.text}>Tipo préstamo: </Text>
      <Picker
            selectedValue={tipPres}
            style={{ height: 35, width: 200, borderWidth: 1 }}
            onValueChange={(itemValue, itemIndex) => setTipPres(itemValue)}
          >
            <Picker.Item label="Seleccione su destino" value="0" />
            <Picker.Item label="Vivienda" value="0.5" />
            <Picker.Item label="Educación" value="0.8" />
            <Picker.Item label="Vehículo" value="1.5" />
            <Picker.Item label="Inversion libre" value="2.0" />
          </Picker>
      <br />
      <br />
      <Text style={styles.text}>Número cuotas: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumCuo}
        value={numCuo}
      />
      <br />
      <br />
      <Text style={styles.text}>Valor cuota: </Text>
      <TextInput
        style={styles.inputView}
        onChangeText={setVlrCuo}
        value={vlrCuo}
      />
      <br />
      <br />
      <Text style={styles.text}>Total deuda: </Text>
      <TextInput
        style={styles.inputView}
        onChangeText={setTotal}
        value={total}
      />
      <br />
      <br />
      <Button
        title="Calcular"
        onPress={CalcularTotal}
      />
      <br />
      <Button
        title="Borrar campos"
        onPress={Limpiar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffy',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    border: "solid 1px black",
    width: 250,
    height: 30
  },
  inputView: {
    padding: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    outline: 'none'
  },
  text: {
    fontWeight: 'bold'
  }
});