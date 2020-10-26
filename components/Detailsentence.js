import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Truetr from './Truetr';
import {durumContext, lessonlistContext} from '../store/GenelStore';

export default function Detailsentence() {
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  const answerpush = (answer) => {
    setDurum({...durum, answerarray: [...durum.answerarray, answer]});
  };
  const answerdelete = (answer) => {
    durum.answerarray.splice(answer, 1);
    setDurum({...durum, answerarray: durum.answerarray});
  };
  const okeymi = () => {
    if (lessonlist[durum.lessonsection].translate.toString() == durum.answerarray.toString()) {
      setDurum({...durum, answer: 1});
      setTimeout(() => {
        if (durum.lessonsection + 1 < durum.totalsection) {
          setDurum({
            ...durum,
            lessonsection: durum.lessonsection + 1,
            answer: 0,
            answerarray: [],
            detaildurum: lessonlist[durum.lessonsection + 1].type,
          });
        } else {
          setDurum({...durum, viewdurum: 0, lessonsection: 0, answerarray: []});
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
      <View style={styles.viewsentence}>
        {durum.answerarray.map((fakes, fid) => {
          return (
            <View key={fid} style={styles.viewfakes}>
              <TouchableOpacity
                style={styles.buttonfake}
                onPress={() => answerdelete(fid)}>
                <Text style={styles.faketext}>{fakes}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View>
        <Truetr />
      </View>
      <View style={styles.viewfake}>
        {lessonlist[durum.lessonsection].fake.map((fakes, id) => {
          return (
            <View key={id} style={styles.viewfakes}>
              <TouchableOpacity
                style={styles.buttonfake}
                onPress={() => answerpush(fakes)}>
                <Text style={styles.faketext}>{fakes}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.okayview}>
        <TouchableOpacity style={styles.okaybutton} onPress={() => okeymi()}>
          <Image source={require('../img/right.png')} />
        </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  viewsentence: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  okayview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
  okaybutton: {
    margin: 5,
  },
  okaytext: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#2196f3',
    borderRadius: 25,
    padding: 15,
  },
});
