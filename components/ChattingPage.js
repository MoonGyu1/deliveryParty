import React, { useState, useCallback, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GiftedChat, Bubble, KeyboardAvoidingView } from 'react-native-gifted-chat'
import avatar from '../assets/favicon.png'

export default function ChattingPage() {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: '님들 매운 거 잘 드시나요',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'A동 11층 부지런한 나무늘보',
              avatar: `https://ui-avatars.com/api/?background=0dbc3f&color=FFF&name=${this.name?.[0]}`
            },
          },
          {
            _id: 2,
            text: 'ㅇㅇ 잘 먹음',
            createdAt: new Date(),
            user: {
              _id: 3,
              name: 'A동 3층 조용한 앵무새',
              avatar: avatar,
            },
          },
          {
            _id: 3,
            text: '마라탕 0단계 말고 매워서 못 먹음요',
            createdAt: new Date(),
            user: {
              _id: 3,
              name: 'A동 3층 조용한 앵무새',
              avatar: avatar,
            },
          },
          {
            _id: 4,
            text: '이 앱은 강퇴 기능 없나',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'A동 11층 부지런한 나무늘보',
              avatar: avatar,
            },
          },
          {
            _id: 5,
            text: '아쉽게도 없는 듯 늘보님이 참으세요',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'B동 25층 삐딱한 개구리',
              avatar: avatar,
            },
          },
        ])
      }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.prepend(previousMessages, messages))
    }, [])

    const renderBubble = (props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "red"
              }
            }}
          />
        )
      }

    return (
        <View style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
          placeholder="메시지를 입력하세요"
          alwaysShowSend={true}
          inverted={false}
          renderUsernameOnMessage={true}
          renderBubble={renderBubble}
          renderAvatarOnTop={true}
        />
        {/* {
            Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
        } */}
        </View>
    )

//     return (
//     <View style={styles.container}>
//       <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
//       <Text style={styles.instructions}>
//         To share a photo from your phone with a friend, just press the button below!
//       </Text>

//       <TouchableOpacity
//         onPress={() => alert('Hello, world!')}
//         style={{ backgroundColor: 'blue' }}>
//         <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
//       </TouchableOpacity>
//     </View>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});