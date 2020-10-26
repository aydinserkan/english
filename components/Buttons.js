import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {durumContext, lessonlistContext} from '../store/GenelStore';

export default function Buttons() {
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  const returnmenu = () => {
    setDurum({
      ...durum,
      viewdurum: !durum.viewdurum,
      answer: 0,
      lessonsection: 0,
    });
    setLessonlist([{fake: [], kelime: ''}]);
  };
  const lessonnext = () => {
    if (durum.lessonsection + 1 < durum.totalsection) {
      setDurum({...durum, lessonsection: durum.lessonsection + 1, answer: 0, detaildurum: lessonlist[durum.lessonsection + 1].type, answerarray: []});
    } else {
      setDurum({...durum, viewdurum: 0, lessonsection: 0, answer: 0, answerarray: []});
    }
  };
  return (
    <View style={{zIndex: 2}}>
      <View style={styles.fixelement}>
        <TouchableOpacity onPress={() => returnmenu()}>
          <Image source={require('../img/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.fixelement2}>
        <TouchableOpacity onPress={() => lessonnext()}>
          <Image source={require('../img/next.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fixelement: {
    zIndex: 1,
    position: 'absolute',
    top: 10,
    left: 20,
    backgroundColor: 'transparent',
  },
  fixelement2: {
    zIndex: 1,
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: 'transparent',
  },
});
