import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Details from '../Details';

function Movies({ data}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.movieTitle}>
          {data.nome}
        </Text>
        <Image 
          source={{ uri: data.foto }}
          style={styles.movieImage}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={ () => setModalVisible(true) }>
            <Text style={styles.btnText}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Modal transparent={true} animationType='slide' visible={modalVisible}>
          <Details movie={data} close={ () =>  setModalVisible(false) } />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2
  },
  movieTitle: {
    padding: 15,
    fontSize: 18
  },
  movieImage: {
    height: 250,
    zIndex: 2
  },
  btnArea: {
    alignItems: 'flex-end',
    marginTop: -50,
    zIndex: 10
  },
  btn: {
    width: 100,
    backgroundColor: '#09a6ff',
    padding: 8,
    opacity: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Movies;
