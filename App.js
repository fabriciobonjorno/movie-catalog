
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';

import api from './src/services/api';
import Movies from './src/Movies';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    async function loadMovies(){
      const response = await api.get('r-api/?api=filmes');
      setMovies(response.data);
      setLoading(false);
    }

    loadMovies();
  }, []);

  if(loading){
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ActivityIndicator color="red" size={60} />
      </View>
    );
  }else{
    return (
      <View style={styles.sectionContainer}>
        <FlatList
          data={movies}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Movies data={item} /> }
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
}
});

export default App;
