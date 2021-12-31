import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    paddingHorizontal: '4%',
  },
  back: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    lineHeight: 24,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  readAll: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  flatlist: {backgroundColor: '#FFFFFF'},
  right: {
    paddingLeft: 16,
    width: '42%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
