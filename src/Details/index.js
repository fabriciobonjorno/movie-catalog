import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Details( props ){
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeBtn} onPress={ props.close }>
          <Text style={styles.btnText}>Close</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{props.movie.nome}</Text>
        <Text style={styles.subTitle}>Sinopse:</Text>
        <Text style={styles.body}>{props.movie.sinopse}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  closeBtn: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnText:{
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 20
  },
  body:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 24,
    textAlign: 'justify'
  }
})

export default Details;