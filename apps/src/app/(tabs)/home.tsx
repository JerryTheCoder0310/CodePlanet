import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from 'react-native'
import { router } from 'expo-router'
import HeaderHome from '@/components/HeaderHome'
import IconSearch from '~/assets/icon-svg/IconSearch'
import { useEffect, useState } from 'react'
import ItemLessonHome from '@/components/ItemLessonHome'
import { ERouteTable } from '@/constants/route-table'
import { useHome } from '@/hooks/useHome'
import { useIsFocused } from '@react-navigation/native'
import { useQueryClient } from '@tanstack/react-query'
import { AntDesign } from '@expo/vector-icons'
import { images } from '@/constants'

type LessonItem = {
  thumb: string
  description: string
  title: string
  rank: string
  isCompleted: boolean
  category: {
    id: number
    title: string
  }
  score: {
    score: number
    totalScore: number
  }
  id: number
  isLocked: boolean
  image: string
  isPlaceholder?: boolean
}

function toEvenArrayWithPlaceholder(data: LessonItem[] = []): LessonItem[] {
  const cleaned = [...data]
  if (cleaned.length % 2 !== 0) {
    cleaned.push({
      id: -1,
      thumb: '',
      description: '',
      title: '',
      rank: '',
      isCompleted: false,
      category: { id: 0, title: '' },
      score: { score: 0, totalScore: 0 },
      isLocked: false,
      image: '',
      isPlaceholder: true,
    })
  }
  return cleaned
}

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(1)
  const { categoriesQuery, learningItemsQuery } = useHome(activeTab)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused && categoriesQuery.data && categoriesQuery.data.length > 0) {
      setActiveTab((prev) => {
        if (!prev) return categoriesQuery.data![0].id
        return prev
      })
    }
  }, [isFocused, categoriesQuery.data])

  const currentCategory = categoriesQuery.data?.find((it) => it.id === activeTab)

  return (
    <View className="bg-neutral flex-1">
      <HeaderHome />
      <View className="mx-4 mt-2 flex-1">
        <View className="h-20">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            {categoriesQuery.data?.map((category) => (
              <TouchableOpacity
                key={category.id}
                className={`flex-row items-center px-4 py-2 rounded-full mr-3 ${
                  activeTab === category.id ? 'bg-orange-100' : 'bg-gray-200'
                }`}
                onPress={() => setActiveTab(category.id)}
              >
                <Text className="text-black font-semibold mr-2">{category.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Bài học mới</Text>
        </View>
        {currentCategory && (
          <View className="rounded-3xl overflow-hidden my-4">
            <ImageBackground source={images.bgProgress} className="p-5">
              <Text className="text-primary text-xl">Tiến độ</Text>
              <Text className="text-primary text-3xl font-bold">
                {currentCategory.completedCourses}/{currentCategory.totalCourses}
              </Text>
            </ImageBackground>
          </View>
        )}
        {learningItemsQuery.isLoading ? (
          <ActivityIndicator size="small" color="#36BF9F" className="mt-8" />
        ) : (
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            numColumns={2}
            className="flex-1 mt-4"
            showsVerticalScrollIndicator={false}
            data={toEvenArrayWithPlaceholder(learningItemsQuery?.data || [])}
            keyExtractor={(item, index) => String(item.id) || `lesson-${index}`}
            renderItem={({ item }) =>
              item.isPlaceholder ? (
                <View style={{ flex: 1, margin: 8 }} />
              ) : (
                <ItemLessonHome
                  data={item}
                  onPress={() =>
                    router.push({
                      pathname: ERouteTable.DETAIL_LESSON,
                      params: {
                        coursesId: item.id,
                        score: item?.score?.score || 0,
                        totalScore: item?.score?.totalScore || 100,
                      },
                    })
                  }
                />
              )
            }
          />
        )}
      </View>
    </View>
  )
}
