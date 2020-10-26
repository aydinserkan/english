import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import {durumContext, lessonlistContext} from '../store/GenelStore';
import Detailword from './Detailword';
import Detailsentence from './Detailsentence';
import Detailadvice from './Detailadvice';
import Detailirregular from './Detailirregular';

export default function Detail() {
  let mixer = [];
  const [durum, setDurum] = useContext(durumContext);
  const [lessonlist, setLessonlist] = useContext(lessonlistContext);
  useEffect(() => {
    axios
      .get('http://servisbilgileri.com/api/' + durum.lessonnumber)
      .then((les) => les.data)
      .then(this.successLesson, this.errorLesson);
  }, []);
  successLesson = (lesver) => {
    lesver.map((les) => {
      les.fake = les.fake.slice(0, 15).sort(() => Math.random() - 0.5);
      mixer.push(les);
    });
    setLessonlist(mixer);
    setDurum({
      ...durum,
      totalsection: lesver.length,
      detaildurum: lesver[0].type,
    });
  };
  errorLesson = (err) => {
    alert(err);
  };
  let detailview;
  if (durum.detaildurum == 10) {
    detailview = null;
  } else if (durum.detaildurum == 0) {
    detailview = <Detailword />;
  } else if (durum.detaildurum == 1) {
    detailview = <Detailsentence />;
  } else if (durum.detaildurum == 3) {
    detailview = <Detailadvice />;
  } else if (durum.detaildurum == 4) {
    detailview = <Detailirregular />;
  }
  return <View style={styles.detail}>{detailview}</View>;
}
const styles = StyleSheet.create({
  detail: {
    flex: 1,
  },
});
