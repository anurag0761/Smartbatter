import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: -60,
    zIndex: 1,
  },
  logoImageContainer: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  logoImage: {
    height: 60,
    width: 100,
  },
  textContainer: {
    marginTop: '5%',
    marginBottom: '5%',
    alignItems: 'center',
  },
  textAccount: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1D1D26',
    textTransform: 'uppercase',
  },
  darkText: {
    letterSpacing: 1,
    color: '#21ADCA',
    textTransform: 'none',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  btnContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default styles;
