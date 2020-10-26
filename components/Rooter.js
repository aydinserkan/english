import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import {durumContext} from '../store/GenelStore';
import Contain from './Contain';
import Detail from './Detail';
import Buttons from './Buttons';

export default function Rooter() {
  const [durum, setDurum] = useContext(durumContext);
  let vdurum, butlar;
  if (durum.viewdurum == 0) {
    vdurum = <Contain />;
    butlar = null;
  } else {
    vdurum = <Detail />;
    butlar = <Buttons />;
  }
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
        {butlar}
        <ScrollView>{vdurum}</ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#313131',
  },
  container: {
    flex: 1,
    backgroundColor: '#313131',
  },
});
