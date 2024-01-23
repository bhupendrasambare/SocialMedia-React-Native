import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import MessageTopBar from '../components/MessageTopBar';

const Message = () => {
  const route = useRoute();
  const data = route.params?.data || {};
  return (
    <View>
      <MessageTopBar data={data}/>
      <Text>Chat</Text>
    </View>
  )
}

export default Message