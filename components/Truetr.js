import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {durumContext, lessonlistContext} from '../store/GenelStore';
import Tts from 'react-native-tts';

export default function Truetr() {
  const speak = () => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('en-IE');
      Tts.setDucking(true);
      Tts.speak(lessonlist[durum.lessonsection].translate.toString().replace(/,/g, ' '), {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
    });
  };
  Tts.addEventListener('tts-start', (e) => console.log('start', e));
  Tts.addEventListener('tts-finish', (e) => console.log('finish', e));
  Tts.addEventListener('tts-cancel', (e) => console.log('cancel', e));
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  let viewstatus = null;
  if (durum.answer == 0) {
    viewstatus = '';
  } else if (durum.answer == 1) {
    viewstatus = 'Doğru Cevap';
    speak();
  } else if (durum.answer == 2) {
    viewstatus = 'Yanlış Cevap';
  }
  return (
    <View style={styles.viewcheck}>
      <Text style={durum.answer == 1 ? styles.texttrue : styles.textfalse}>
        {viewstatus}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcheck: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    height: 70,
  },
  texttrue: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2196f3',
  },
  textfalse: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#E22834',
  },
});
