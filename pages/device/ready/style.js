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
    backgroundColor: 'transparent',
  },
  titleText: {
    color: '#62DB96',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 40,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 10,
  },
});

export default styles;
