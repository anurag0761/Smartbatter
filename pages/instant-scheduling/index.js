import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TouchableOpacity as SpecialTouchableOpacity} from 'react-native-gesture-handler';
import GradientText from '../../component/text-gradient';
import LinearGradient from 'react-native-linear-gradient';
import {List} from 'react-native-paper';
import Slider from 'react-native-slider';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Layout from '../../component/layout';
import Button from './Button';
import Header from './Header';
import styles from './style';
import TimeBox from './TimeBox';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Modal, Portal} from 'react-native-paper';
import ResuableButton from '../../component/button';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {useMemo} from 'react';

const InstantScheduling = ({navigation}) => {
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const refRBSheet = React.useRef();
  const [unit, setUnit] = React.useState('Number');
  const [day, setDay] = React.useState('Afternoon');
  const [activeId, setActiveId] = React.useState(2);
  const [grams, setGrams] = React.useState(200);
  const [number, setNumber] = React.useState(10);
  const [sheetIntent, setSheetIntent] = React.useState(undefined);
  const {dangerouslyGetState} = useNavigation();
  const {index} = dangerouslyGetState();

  const [completed, setCompleted] = React.useState(false);

  const openPicker = sheetType => {
    setSheetIntent(sheetType);
    if (refRBSheet && refRBSheet.current) {
      refRBSheet.current.open();
    }
  };

  const closePicker = () => {
    setSheetIntent(undefined);
    if (refRBSheet && refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const changeUnit = u => {
    setUnit(u);
    closePicker();
  };

  const changeDay = d => {
    setDay(d);
    closePicker();
  };

  const goToEditRecipe = () => {
    navigation.navigate('EditRecipe');
  };

  const dayText = useMemo(() => {
    if (moment(date).diff(new Date(), 'days') <= 1) {
      return moment(date).calendar().split(' ')[0];
    } else {
      return moment(date).format('DD, MMM');
    }
  }, [date]);

  return (
    <Layout noScrollView={true}>
      <Header />
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgImage}
        source={require('../../assets/images/idli-large.png')}>
        <LinearGradient
          locations={[0, 1.0]}
          colors={['rgba(0, 0, 0, 0)', '#2C2C2C']}
          style={styles.linearGradient}
        />
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.RDWView}>
          <Text style={styles.RDWText}>{`R ${40}%`}</Text>
          <Text style={styles.RDWText}>{`D ${20}%`}</Text>
          <Text style={styles.RDWText}>{`W ${60}%`}</Text>
          <SpecialTouchableOpacity onPress={goToEditRecipe}>
            <MaterialIcon name="edit" style={styles.RDWEditIcon} />
          </SpecialTouchableOpacity>
        </View>
        <View style={styles.headView}>
          <Text style={styles.headText}>Batter Amount</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.container1}>
            <View style={styles.boxView}>
              <View style={styles.priceView}>
                <Text style={styles.quantity}>{grams}</Text>
                <Text style={styles.unit}>g</Text>
              </View>
              <Text style={styles.name}>Batter Amount</Text>
            </View>
            <View style={styles.boxView}>
              <View style={styles.priceView}>
                <Text style={styles.quantity}>{number}</Text>
                <Text style={styles.unit}>Idly</Text>
              </View>
              <Text style={styles.name}>Number Of Idly</Text>
            </View>
          </View>
          <View style={styles.sliderView}>
            <Slider
              onValueChange={v => {
                if (unit === 'Grams') {
                  setGrams(v);
                }
                if (unit === 'Number') {
                  setNumber(v);
                }
              }}
              style={styles.slider}
              value={unit === 'Grams' ? grams : number}
              minimumValue={1}
              maximumValue={unit === 'Grams' ? 1000 : 100}
              step={unit === 'Grams' ? 50 : 5}
              customMinimumTrack={
                <LinearGradient
                  start={{x: 0.74, y: 0.26}}
                  end={{x: 0, y: 0.77}}
                  colors={['#28ABD8', '#19ADBC']}
                  style={styles.sliderDimensions}
                />
              }
              customMaximumTrack={
                <LinearGradient
                  start={{x: 0.74, y: 0.26}}
                  end={{x: 0, y: 0.77}}
                  colors={['#efefef', '#c1c0c9']}
                  style={styles.sliderDimensions}
                />
              }
              customThumb={
                <LinearGradient
                  start={{x: 0.74, y: 0.26}}
                  end={{x: 0, y: 0.77}}
                  colors={['#28ABD8', '#19ADBC']}
                  style={styles.customThumb}
                />
              }
            />
            <TouchableOpacity
              onPress={() => openPicker('unit')}
              style={styles.unitView}>
              <Text numberOfLines={1} style={styles.unitText}>
                {unit}
              </Text>
              <Icon name="chevron-down" style={styles.unitIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.textBottomView}>
            <Text style={styles.textBottom}>
              Calculate batter amount based on number of Idly.
            </Text>
            <Text style={styles.textBottom}>
              Batter calculation 1 Idly = 10 grams
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.DateAndTimeView}>
            {show && (
              <DateTimePicker
                minimumDate={new Date()}
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShow(false);
                  if (selectedDate) {
                    setDate(new Date(selectedDate));
                  }
                }}
              />
            )}
            <View style={styles.DateView}>
              <GradientText
                onPress={() => setShow(true)}
                colors={['#28ABD8', '#19ADBC']}
                locations={[0, 1]}
                style={styles.today}>
                {dayText}
              </GradientText>
              <Icon name="chevron-forward" style={styles.todayForward} />
            </View>
            <TouchableOpacity
              onPress={() => openPicker('day')}
              style={styles.swipeToScheduleView}>
              <LinearGradient
                colors={['#28ABD8', '#19ADBC']}
                style={[styles.roundBtnStyle]}>
                <Text style={styles.roundButtonText}>{day}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.timingsView}>
            <TimeBox
              isSelected={activeId === -1}
              setActiveId={setActiveId}
              isCustom={true}
              id={-1}
            />
            <TimeBox
              time="12:00"
              note="pm"
              setActiveId={setActiveId}
              isSelected={activeId === 1}
              id={1}
            />
            <TimeBox
              time="12:00"
              note="pm"
              setActiveId={setActiveId}
              isSelected={activeId === 2}
              id={2}
            />
            <TimeBox
              time="12:00"
              note="pm"
              setActiveId={setActiveId}
              isSelected={activeId === 3}
              id={3}
            />
            <TimeBox
              time="12:00"
              note="pm"
              setActiveId={setActiveId}
              isSelected={activeId === 4}
              id={4}
            />
          </View>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={280}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopWidth: 2,
            borderTopColor: '#ccc',
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#ccc',
          },
        }}>
        <View>
          <ScrollView>
            {sheetIntent === 'unit' && (
              <List.Section>
                <List.Subheader>Select Unit</List.Subheader>
                <List.Item title="Grams" onPress={() => changeUnit('Grams')} />
                <List.Item
                  title="Number"
                  onPress={() => changeUnit('Number')}
                />
              </List.Section>
            )}
            {sheetIntent === 'day' && (
              <List.Section>
                <List.Subheader>Select Day</List.Subheader>
                <List.Item
                  title="Afternoon"
                  onPress={() => changeDay('Afternoon')}
                />
                <List.Item
                  title="Evening"
                  onPress={() => changeDay('Evening')}
                />
                <List.Item title="Night" onPress={() => changeDay('Night')} />
                <List.Item
                  title="Morning"
                  onPress={() => changeDay('Morning')}
                />
              </List.Section>
            )}
          </ScrollView>
        </View>
      </RBSheet>
      <Button
        onPress={() => {
          setCompleted(true);
        }}
        height={56}
        text="Swipe To Schedule"
      />
      <Portal>
        <Modal
          style={styles.modal}
          visible={completed}
          contentContainerStyle={styles.modalContent}>
          <Image
            style={styles.lady}
            source={require('../../assets/images/lady-happy.png')}
          />
          <Text style={styles.text1}>Recipe Scheduled</Text>
          <Text style={styles.text2}>
            Your Recipe is Scheduled Successfully
          </Text>
          <ResuableButton
            onPress={() => {
              setCompleted(false);
              const popAction = StackActions.pop(index + 1);
              navigation.dispatch(popAction);
              navigation.navigate('Schedules');
            }}
            text="OK"
            width="72%"
          />
        </Modal>
      </Portal>
    </Layout>
  );
};

export default InstantScheduling;
