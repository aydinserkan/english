import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {durumContext, lessonlistContext} from '../store/GenelStore';
import Tts from 'react-native-tts';

export default function Detailirregular() {
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  const speak = (e) => {
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('en-IE');
      Tts.setDucking(true);
      Tts.speak(e, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
    });
  };
  const answers = (e) => {
    if (lessonlist[durum.lessonsection].translate[durum.irregularcount] == e) {
      if (durum.irregularcount == 0) {
        speak(e);
        setDurum({
          ...durum,
          irregularcount: durum.irregularcount + 1,
          v1: {backgroundColor: '#2196f3'},
        });
      } else if (durum.irregularcount == 1) {
        speak(e);
        setDurum({
          ...durum,
          irregularcount: durum.irregularcount + 1,
          v2: {backgroundColor: '#2196f3'},
        });
      } else if (durum.irregularcount == 2) {
        speak(e);
        setDurum({
          ...durum,
          irregularcount: durum.irregularcount + 1,
          v3: {backgroundColor: '#2196f3'},
        });
        setTimeout(() => {
          setDurum({
            ...durum,
            lessonsection: durum.lessonsection + 1,
            detaildurum: lessonlist[durum.lessonsection + 1].type,
            irregularcount: 0,
            v1: {backgroundColor: '#c62a88'},
            v2: {backgroundColor: '#c62a88'},
            v3: {backgroundColor: '#c62a88'},
          });
        }, 2000);
      }
    } else {
      alert('yanlış');
    }
  };
  return (
    <View style={styles.outlin}>
      <View>
        <Text style={styles.text}>
          {lessonlist[durum.lessonsection].kelime}
        </Text>
      </View>
      <View style={styles.verbcont}>
        <View style={[styles.verbcer, durum.v1]}>
          <Text style={styles.verbs}>V</Text>
          <Text style={styles.verbssmall}>1</Text>
        </View>
        <View style={[styles.verbcer, durum.v2]}>
          <Text style={styles.verbs}>V</Text>
          <Text style={styles.verbssmall}>2</Text>
        </View>
        <View style={[styles.verbcer, durum.v3]}>
          <Text style={styles.verbs}>V</Text>
          <Text style={styles.verbssmall}>3</Text>
        </View>
      </View>
      <View style={styles.viewfake}>
        {lessonlist[durum.lessonsection].fake.map((fakes, id) => {
          return (
            <View key={id} style={styles.viewfakes}>
              <TouchableOpacity
                onPress={() => answers(fakes)}
                style={styles.faketouch}>
                <Text style={styles.faketext}>{fakes}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outlin: {
    flex: 1,
  },
  text: {
    marginTop: 100,
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
  },
  viewfake: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
  viewfakes: {
    margin: 5,
  },
  faketouch: {
    padding: 9,
    backgroundColor: '#2196f3',
    borderRadius: 5,
    color: '#ffffff',
  },
  faketext: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  verbcont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
  verbcer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
    margin: 10,
  },
  verbs: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 5,
  },
  verbssmall: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 20,
  },
});
