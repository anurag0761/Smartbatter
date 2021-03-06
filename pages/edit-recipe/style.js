import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  lady: {height: 72, width: 72, resizeMode: 'contain'},
  text1: {
    color: 'rgba(66, 66, 66, 1)',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  text2: {
    marginTop: '2%',
    color: 'rgba(66, 66, 66, 1)',
    textAlign: 'center',
    fontWeight: '400',
  },
  modal: {
    marginHorizontal: '12%',
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: '8%',
    paddingHorizontal: '8%',
  },
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
    paddingHorizontal: '6%',
    paddingVertical: 16,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bgImage: {height: 240, width: '100%'},
  btnStyle: {
    backgroundColor: '#28ABD8',
    width: 150,
    height: 50,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    marginTop: '-32%',
  },
  headView: {
    paddingVertical: '6%',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  headText: {
    color: '#424242',
    lineHeight: 18,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    color: '#28ABD8',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36,
  },
  unit: {
    color: '#28ABD8',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 36,
    paddingLeft: 4,
  },
  name: {color: '#BBBBBB', fontSize: 13},
  boxView: {
    width: '46%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#28ABD8',
    paddingVertical: '4%',
  },
  middle: {
    flexDirection: 'row',
    height: '58%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '12%',
    paddingBottom: 0,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  sliderDimensions: {
    width: '100%',
    height: '100%',
  },
  customThumb: {
    width: 28,
    height: 28,
    margin: 2,
    borderRadius: 28 / 2,
    elevation: 1,
  },
  sliderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  unitView: {
    width: '16%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitText: {lineHeight: 16, color: '#424242'},
  unitIcon: {fontSize: 18, color: '#424242'},
  slider: {width: '78%'},
  textBottomView: {marginBottom: '2%'},
  textBottom: {color: '#929292', textAlign: 'center'},
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: height * 0.072,
  },
  roundBtnStyle: {
    borderRadius: 20,
    backgroundColor: '#28ABD8',
    width: '100%',
    height: 36,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 2,
    paddingBottom: 2,
  },
  roundButtonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  RDWView: {
    position: 'absolute',
    top: -32,
    flexDirection: 'row',
    width: '48%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  RDWText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  RDWEditIcon: {color: '#28ABD8', fontSize: 24},
  DateAndTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  DateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginBottom: '4%',
  },
  today: {fontSize: 32, fontWeight: '600'},
  todayForward: {fontSize: 24, color: '#28ABD8', fontWeight: 'bold'},
  swipeToScheduleView: {width: '36%'},
  chevronForward: {fontSize: 24, color: 'white', fontWeight: 'bold'},
  timeBoxContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {color: '#9EF89C', fontSize: 24},
  custom: {height: 36, width: 36, resizeMode: 'contain'},
  percentageRemainingToAdd: {
    fontSize: 54,
    lineHeight: 54,
    color: 'rgba(40, 171, 216, 1)',
  },
  remainingToAdd: {fontSize: 18, color: 'rgba(40, 171, 216, 1)'},
  machineFull: {color: 'rgba(46, 45, 57, 1)'},
});

export default styles;
