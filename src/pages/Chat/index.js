/**
 * Date:2020/10/15
 * Desc:
 */
import React, {Component} from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import {Header, ListItem, Button, Badge, Avatar} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MainView from '../../components/MainView';
import MsgSendBox from './MsgSendBox';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  sendTextMessage = (msg) => {};

  render() {
    const {navigation} = this.props;

    return (
      <MainView>
        <Header
          placement={'left'}
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
              }}>
              <FontAwesome name={'angle-left'} size={20} color={'black'} />
            </TouchableOpacity>
          }
          centerComponent={{text: 'Chat'}}
          containerStyle={{
            height: 60,
            paddingTop: 0,
            backgroundColor: 'white',
            justifyContent: 'space-around',
            zIndex: 1000,
          }}
          centerContainerStyle={{}}
          rightComponent={
            <TouchableOpacity onPress={() => {}}>
              <Entypo
                name={'dots-three-horizontal'}
                size={20}
                color={'black'}
              />
            </TouchableOpacity>
          }
        />
        <MsgSendBox sendMessage={this.sendTextMessage} />
      </MainView>
    );
  }
}


export default Chat
