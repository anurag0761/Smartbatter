import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  recipe: {
    width: 128,
    height: 158,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  favouriteView: {
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  favourite: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  info: {paddingHorizontal: 16},
  name: {
    color: '#2E2D39',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  rdw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  rdwText: {fontSize: 9, color: '#19ADBC'},
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
