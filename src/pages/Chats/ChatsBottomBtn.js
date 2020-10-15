import React, {Component} from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ChatsBottomBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {focused, horizontal} = this.props;
    const allUnreadCount = '99+';
    const iconName = focused ? 'chatbubble' : 'chatbubble-outline';
    const iconColor = focused ? 'red' : '';
    return (
      <View>
        <Ionicons
          name={iconName}
          size={horizontal ? 17 : 24}
          color={iconColor}
        />
        {allUnreadCount > 0 ? (
          <Badge
            status="error"
            value={allUnreadCount}
            containerStyle={{position: 'absolute', top: -5, right: -15}}
          />
        ) : null}
      </View>
    );
  }
}

export default ChatsBottomBtn;
