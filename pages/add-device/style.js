import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: '4%',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#F3F3F3',
  },
  menu: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
  notification: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  title: {
    paddingTop: 4,
    color: '#FFFFFF',
    fontSize: 22,
    lineHeight: 21,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  logo: {height: 32, width: 64, resizeMode: 'contain'},
  icon: {width: 64},
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 64,
    marginRight: '-2%',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  width40: {
    width: '36%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '24%',
  },
  vr: {width: 2, height: '100%', backgroundColor: '#F3F3F3'},
  width70: {
    width: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16%',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2E2D39',
    paddingVertical: 22,
    textAlign: 'left',
    width: '70%',
  },
  image: {
    height: 320,
    width: '64%',
    resizeMode: 'contain',
    marginLeft: '-6%',
  },
  smartText: {
    marginTop: '-16%',
    fontSize: 12,
    color: '#8D8D8D',
    textAlign: 'center',
    marginLeft: '-6%',
  },
  button: {marginLeft: '-6%', marginTop: '16%'},
});

export default styles;
