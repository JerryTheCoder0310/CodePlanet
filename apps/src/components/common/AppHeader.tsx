import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSettings } from '@/hooks/useSettings'
import { ERouteTable } from '@/constants/route-table'
import { useRouter } from 'expo-router'
import IconSetting from '~/assets/icon-svg/IconSetting'

type Props = {
  title?: string
}

const AppHeader = (props: Props) => {
  const { userQuery } = useSettings()
  const router = useRouter()

  let avatarUrl =
    userQuery?.data?.avatar !== 'https://res.cloudinary.com/dk0w90uw9/image/upload/null'
      ? userQuery?.data?.avatar
      : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg'

  return (
    <View className="flex-row items-center justify-between w-full">
      <Image
        source={{
          uri: avatarUrl,
        }}
        className="w-[48px] h-[48px] rounded-full"
        resizeMode="cover"
      />
      <Text className="text-primary font-semibold text-lg">{props.title}</Text>
      <TouchableOpacity
        onPress={() => router.push(ERouteTable.SETTING_SCREEN)}
        className="w-[48px] h-[48px] bg-[#64748B14] items-center justify-center rounded-full"
      >
        <IconSetting />
      </TouchableOpacity>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({})
