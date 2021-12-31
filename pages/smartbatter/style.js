import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    paddingHorizontal: '4%',
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
  horizontalScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '12%',
    paddingVertical: 16,
  },
  horizontalItem: {
    backgroundColor: '#28ABD8',
    height: 68,
    width: 68,
    borderRadius: 24,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  price: {
    color: '#28ABD8',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 21,
  },
  unit: {
    color: '#28ABD8',
    lineHeight: 21,
    fontSize: 12,
    paddingLeft: 4,
  },
  smartRecipes: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 42,
  },
  smartText: {
    textAlign: 'center',
    marginVertical: 18,
    color: '#28ABD8',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
  },
  bottomGrindingProcess: {
    position: 'absolute',
    bottom: 0,
    zIndex: 16,
    width: '100%',
  },
});

export default styles;
