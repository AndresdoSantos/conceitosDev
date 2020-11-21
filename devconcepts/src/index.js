import React, {useState, useEffect} from 'react';
import api from './services/api';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAppProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Andres doSantos',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects} // Obrigado ser um array
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.description}>{project.title}</Text>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={handleAppProject}>
          <Text>Press</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#fff',
    height: 50,
    width: 200,
  },
});
