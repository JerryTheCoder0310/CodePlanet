import { Text, ImageBackground, View } from 'react-native'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { router } from 'expo-router'
import AppButton from '@/components/common/AppButton'

export default function Onboarding() {
  return (
    <ImageBackground
      source={images.onboarding2}
      resizeMode="cover"
      className="h-full items-center justify-center"
    >
      <View className="absolute bottom-40 p-6 w-full items-center">
        <Text className="text-center text-4xl leading-[100%] font-bold text-green-700">
          Hành Tinh Xanh, {'\n'} Bé Chung Tay!
        </Text>
        <Text className="text-center py-6 w-4/5 text-green-900">
          Cùng khám phá thế giới môi trường, học cách bảo vệ thiên nhiên và xây dựng thói quen sống
          xanh mỗi ngày.
        </Text>
        <AppButton
          title="Bắt đầu"
          className="w-3/5"
          onPress={() => router.replace(ERouteTable.SIGIN_IN)}
        />
      </View>
    </ImageBackground>
  )
}
