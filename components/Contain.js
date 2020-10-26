import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {menulistContext, durumContext} from '../store/GenelStore';
import axios from 'axios';

export default function Contain() {
  const [menulist, setMenulist] = useContext(menulistContext);
  const [durum, setDurum] = useContext(durumContext);
  useEffect(() => {
    axios
      .get('http://servisbilgileri.com/dersapi')
      .then((men) => men.data)
      .then(this.successMenu, this.errorMenu);
  }, []);
  successMenu = (menver) => {
    setMenulist(menver);
  };
  errorMenu = (err) => {
    alert(err);
  };
  return (
    <View style={styles.menulist}>
      {menulist.map((menutek) => {
        return (
          <TouchableOpacity key={menutek.id} onPress={() => setDurum({...durum, viewdurum: 1, lessonnumber: menutek.id,})}>
            <View style={styles.menus}>
              <Text style={styles.text}>{menutek.ad}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  menulist: {
    flex: 1,
    marginTop: 5,
  },
  menus: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#393e46',
  },
  text: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
});
