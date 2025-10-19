import React, { useState } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { images } from '@/constants'
import IconSetting from '~/assets/icon-svg/IconSetting'
import IconArrowLeft from '~/assets/icon-svg/IconArrowLeft'
import IconArrowRight from '~/assets/icon-svg/IconArrowRight'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { useSettings } from '@/hooks/useSettings'
import AppHeader from '@/components/common/AppHeader'

export default function PracticeScreen() {
  const [activeState, setActiveState] = useState('Cơ bản')
  const { userQuery } = useSettings()

  const levels = ['Cơ bản', 'Trung cấp', 'Nâng cao']

  const handlePreviousLevel = () => {
    const currentIndex = levels.indexOf(activeState)
    const newIndex = currentIndex === 0 ? levels.length - 1 : currentIndex - 1
    setActiveState(levels[newIndex])
  }

  const handleNextLevel = () => {
    const currentIndex = levels.indexOf(activeState)
    const newIndex = currentIndex === levels.length - 1 ? 0 : currentIndex + 1
    setActiveState(levels[newIndex])
  }

  const renderState = (): string => {
    switch (activeState) {
      case 'Cơ bản':
        return 'BEGINNER'
      case 'Trung cấp':
        return 'INTERMEDIATE'
      default:
        return 'ADVANCED'
    }
  }

  return (
    <ImageBackground source={images.bgPractice} resizeMode="cover" className="h-full">
      <View className="mt-20 mx-4 flex-1">
        <AppHeader title="Trò chơi" />
      </View>
      <View className="mx-4 mb-8">
        <View className="flex-row w-full items-center justify-center">
          <TouchableOpacity onPress={handlePreviousLevel}>
            <IconArrowLeft />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: ERouteTable.PRACTICE_CHILDREN,
                params: { level: renderState() },
              })
            }}
            className="bg-primary-main mx-8 h-[58px] w-[150px] items-center justify-center rounded-full"
          >
            <Text className="text-white">Độ khó</Text>
            <Text className="text-white text-xl  mt-1 font-bold">{activeState}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextLevel}>
            <IconArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
