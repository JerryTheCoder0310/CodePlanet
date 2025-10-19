import React from 'react'
import { Tabs } from 'expo-router'
import { View } from 'react-native'
import IconHome from '~/assets/icon-svg/BottomTab/IconHome'
import IconHomeActive from '~/assets/icon-svg/BottomTab/IconHomeActive'
import IconPractiveActive from '~/assets/icon-svg/BottomTab/IconPractiveActive'
import IconPractive from '~/assets/icon-svg/BottomTab/IconPractive'
import IconRankActive from '~/assets/icon-svg/BottomTab/IconRankActive'
import IconRank from '~/assets/icon-svg/BottomTab/IconRank'
import { Blogger } from 'iconsax-react-native'
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#36BF9F',
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          borderWidth: 1,
          borderColor: '#E5E7EB',
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Khám phá',
          tabBarIcon: ({ color }) => (
            <View>{color === '#36BF9F' ? <IconHomeActive /> : <IconHome />}</View>
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: 'Trắc nghiệm',
          tabBarIcon: ({ color }) => (
            <View>{color === '#36BF9F' ? <IconPractiveActive /> : <IconPractive />}</View>
          ),
        }}
      />
      <Tabs.Screen
        name="play-situation"
        options={{
          title: 'Hoạt động',
          tabBarIcon: ({ color }) => (
            <View>
              {color === '#36BF9F' ? (
                <Blogger size="24" variant="Broken" color="#36BF9F" />
              ) : (
                <Blogger size="24" variant="Broken" color="#64748B" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          title: 'Xếp hạng',
          tabBarIcon: ({ color }) => (
            <View>{color === '#36BF9F' ? <IconRankActive /> : <IconRank />}</View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
