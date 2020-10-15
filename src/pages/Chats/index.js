/**
 * Date: 7/28/20
 */
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, ListItem, Button, Badge, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

import ChatsBottomBtn from './ChatsBottomBtn';
import MainView from '../../components/MainView';

class Chats extends Component {
  static navigationOptions = () => ({
    tabBarLabel: '会话',
    tabBarOptions: {
      activeTintColor: 'rgb(66, 122, 184)',
      inactiveTintColor: 'black',
    },
    tabBarIcon: ({focused, horizontal}) => (
      <ChatsBottomBtn focused={focused} horizontal={horizontal} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  goChat = ({recent, friend}) => {
    const {navigation, updateChattingFriend} = this.props;
    navigation.navigate('Chat');
  };
  //
  renderItem = ({item}) => {
    const {recent} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          this.goChat(item);
        }}>
        <ListItem
          title={recent.friendName}
          leftElement={
            <View>
              <Avatar
                rounded={false}
                source={{
                  uri: recent.userHeadImage,
                }}
              />
              {recent.unreadCount > 0 ? (
                <Badge
                  value={recent.unreadCount}
                  status={'error'}
                  containerStyle={{
                    position: 'absolute',
                    top: -15,
                    right: -15,
                  }}
                />
              ) : null}
            </View>
          }
          bottomDivider={true}
        />
      </TouchableOpacity>
    );
  };
  render() {
    const {user} = this.props;

    const recentList = [
      {
        friendName: '张三',
        userHeadImage: '',
        unreadCount: 0,
      },
      {
        friendName: '李四',
        userHeadImage: '',
        unreadCount: 2,
      },
      {
        friendName: '王五',
        userHeadImage: '',
        unreadCount: 2,
      },
    ];

    const friendList = recentList.map((recent, index) => {
      let friend = recent;
      return {
        friend,
        recent,
        key: index,
      };
    });

    return (
      <MainView>
        {/*  头部*/}
        <TouchableWithoutFeedback>
          <Header
            centerComponent={<Text>Chats</Text>}
            containerStyle={{
              backgroundColor: 'white',
              justifyContent: 'space-around',
              paddingRight: 30,
              height: 40,
              paddingTop: 0,
            }}
          />
        </TouchableWithoutFeedback>
        {/*最近聊天列表*/}
        <FlatList
          keyExtractor={(item) => item.key}
          data={friendList}
          renderItem={this.renderItem}
        />
      </MainView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userState,
});

export default connect(mapStateToProps)(Chats);
