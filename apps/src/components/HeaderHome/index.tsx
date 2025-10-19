import { ImageBackground, Text, View } from 'react-native'
import { images } from '@/constants'
import AppHeader from '../common/AppHeader'

export default function HeaderHome() {
  return (
    <ImageBackground className="h-[240px]" source={images.bgAuth} resizeMode="stretch">
      <View className="mt-20 mx-4">
        <AppHeader />
        <Text className="text-2xl text-start font-bold mt-8 uppercase">
          bạn đã sẵn sàng {`\n`}cho bài học chưa?
        </Text>
      </View>
    </ImageBackground>
  )
}
