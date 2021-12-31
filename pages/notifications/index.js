import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../../component/layout';
import styles from './style';
import Notification from '../../component/notification';
import {notifications} from './data';
import Header from './Header';
import {useState} from 'react';

const Notifications = () => {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selected, setSelected] = useState([]);
  const addItem = id => {
    setSelected(p => [...p, id]);
  };
  const removeItem = id => {
    setSelected(p => p.filter(i => i !== id));
  };
  return (
    <Layout noScrollView={true}>
      <Header
        selectionMode={selectionMode}
        setSelectionMode={setSelectionMode}
      />
      <FlatList
        style={styles.flatlist}
        data={notifications}
        renderItem={({index, item}) => (
          <Notification
            setSelectionMode={setSelectionMode}
            selectionMode={selectionMode}
            selected={selected}
            addItem={addItem}
            removeItem={removeItem}
            item={item}
            index={index}
          />
        )}
      />
    </Layout>
  );
};

export default Notifications;
