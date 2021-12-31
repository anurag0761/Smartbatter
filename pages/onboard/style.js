import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 16,
    marginTop: 12,
  },
  backAction: {
    color: '#fff',
  },
  mainContainer: {
    backgroundColor: '#2e2d39',
    color: '#fff',
    flex: 1,
  },
  scrollContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  mainImageContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  textDetail: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 0.55,
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: '#65646D',
    width: 30,
  },
  activeDotStyle: {
    backgroundColor: '#38F3BB',
    width: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  btnContainer: {
    paddingLeft: 80,
    paddingRight: 80,
  },
});

export default styles;
