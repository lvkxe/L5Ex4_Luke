import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const carsData = [
  {
    title: 'Mercedes-Benz',
    color: 'black',
    data: [
      { name: 'E63 AMG', cardImage: require('./img/W212.jpg') },
      { name: 'CLS63 AMG', cardImage: require('./img/cls63.jpeg') },
      { name: 'SL65 AMG', cardImage: require('./img/SL65.jpeg') },
    ],
  },
  {
    title: 'BMW',
    color: 'black',
    data: [
      { name: 'M5 CS', cardImage: require('./img/M5cs.webp') },
      { name: 'M4 CSL', cardImage: require('./img/M4csl.jpg') },
      { name: 'M3 Touring', cardImage: require('./img/M3touring.jpg') },
    ],
  },
  {
    title: 'Audi',
    color: 'black',
    data: [
      { name: 'RS6', cardImage: require('./img/Rs6.jpg') },
      { name: 'RS7 Sportback', cardImage: require('./img/RS7.jpeg') },
      { name: 'R8', cardImage: require('./img/R8.webp') },
    ],
  },
  {
    title: 'Porsche',
    color: 'black',
    data: [
      { name: '911 GT3 RS', cardImage: require('./img/GT3RS.webp') },
      { name: '918 Spyder', cardImage: require('./img/918.webp') },
      { name: '718 Cayman GT4 RS', cardImage: require('./img/718.jpg') },
    ],
  },
];

const renderCars = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.carsName}>{item.name}</Text>
      <Image
          style={styles.cardImage}
          source={typeof item.cardImage === 'string' ? { uri: item.cardImage } : item.cardImage}
      />
    </TouchableOpacity>
);

function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button style={styles.button} color="black" title="Add Car" />
        <SectionList
            sections={carsData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderCars}
            renderSectionHeader={({ section }) => (
                <View style={[styles.header, { backgroundColor: section.color }]}>
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  button: {
    marginVertical: 10,
    padding: 10,
  },
  header: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 8,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    marginHorizontal: 16,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  carsName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
  },
});

export default App;
