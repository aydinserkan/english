import React, {useState} from 'react';

export const menulistContext = React.createContext('menulist');
export const lessonlistContext = React.createContext('lessonlist');
export const durumContext = React.createContext('durum');

const Store = ({children}) => {
  const [menulist, setMenulist] = useState([]);
  const [lessonlist, setLessonlist] = useState([{fake: [], kelime: ''}]);
  const [durum, setDurum] = useState({
    viewdurum: 0,
    detaildurum: 0,
    lessonsection: 0,
    totalsection: 0,
    lessonnumber: 0,
    answer: 0,
    answerarray: [],
    irregularcount: 0,
    v1: {backgroundColor: '#c62a88'},
    v2: {backgroundColor: '#c62a88'},
    v3: {backgroundColor: '#c62a88'},
  });
  return (
    <durumContext.Provider value={[durum, setDurum]}>
      <menulistContext.Provider value={[menulist, setMenulist]}>
        <lessonlistContext.Provider value={[lessonlist, setLessonlist]}>
          {children}
        </lessonlistContext.Provider>
      </menulistContext.Provider>
    </durumContext.Provider>
  );
};
export default Store;
