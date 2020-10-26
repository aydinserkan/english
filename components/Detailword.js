import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Trueen from './Trueen';
import {durumContext, lessonlistContext} from '../store/GenelStore';

export default function Detailword() {
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  const answers = (answer) => {
    if (lessonlist[durum.lessonsection].translate == answer) {
      setDurum({...durum, answer: 1});
      setTimeout(() => {
        if (durum.lessonsection + 1 < durum.totalsection) {
          setDurum({
            ...durum,
            lessonsection: durum.lessonsection + 1,
            answer: 0,
            detaildurum: lessonlist[durum.lessonsection + 1].type,
          });
        } else {
          setDurum({...durum, viewdurum: 0, lessonsection: 0});
        }
      }, 2000);
    } else {
      setDurum({...durum, answer: 2});
    }
  };
  return (
    <View>
      <View>
        <Text style={styles.text}>
          {lessonlist[durum.lessonsection].kelime}
        </Text>
      </View>
      <View>
        <Trueen />
      </View>
      <View style={styles.viewfake}>
        {lessonlist[durum.lessonsection].fake.map((fakes, id) => {
          return (
            <View key={id} style={styles.viewfakes}>
              <TouchableOpacity
                style={styles.buttonfake}
                onPress={() => answers(fakes)}>
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
  text: {
    marginTop: 100,
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
  },
  viewfake: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
  viewfakes: {
    margin: 5,
  },
  buttonfake: {
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
});
