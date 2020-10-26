import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {durumContext, lessonlistContext} from '../store/GenelStore';

export default function Detailadvice() {
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  return (
    <View style={styles.laview}>
      <Text style={styles.latext}>
        {lessonlist[durum.lessonsection].kelime}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  laview: {
    justifyContent: 'center',
  },
  latext: {
    marginTop: 100,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 30,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'PatrickHand-Regular',
  },
});
