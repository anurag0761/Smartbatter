import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  logoImageContainer: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  logoImage: {
    height: 60,
    width: 100,
  },
  mainImageContainer: {
    alignItems: 'center',
  },
  mainImageCardContainer: {
    alignItems: 'center',
    backgroundColor: '#CFCFCF',
    borderRadius: 36,
    paddingTop: '10%',
    paddingLeft: '10%',
  },
  mainImage: {
    height: 250,
    width: 150,
  },
  textContainer: {
    marginTop: '5%',
    marginBottom: '5%',
    alignItems: 'center',
  },
  textAccount: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  loginText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'center',
    color: '#21ADCA',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
