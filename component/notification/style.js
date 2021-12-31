import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
  },
  memberProfile: {height: 18, width: 18, borderRadius: 9},
  memberName: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#28ABD8',
    fontFamily: 'Roboto',
  },
  time: {color: '#AAAAAA', fontFamily: 'Roboto'},
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#2E2D39',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },
  body: {
    fontSize: 13,
    color: 'grey',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },
  reactionImage: {height: 54, width: 54, resizeMode: 'contain'},
});

export default styles;
