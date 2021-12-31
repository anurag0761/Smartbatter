import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  backAction: {
    color: '#fff',
  },
  scrollContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  mainImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    backgroundColor: 'transparent',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successImage: {
    height: 100,
    width: 100,
  },
  titleText: {
    color: '#62DB96',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  textDetail: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 50,
  },
});

export default styles;
