// screens/VolunteerBlogScreen.tsx
import React, { useMemo, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  FlatList,
  Image,
} from 'react-native'
import { useRouter } from 'expo-router'
import { images } from '@/constants'
import HeaderSetting from '@/components/HeaderSetting'
import LottieView from 'lottie-react-native'

import { blogPosts, Post } from '@/data/blog'

const { width } = Dimensions.get('screen')

export default function VolunteerBlogScreen() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Tập hợp tag từ dữ liệu
  const allTags = useMemo(() => {
    const set = new Set<string>()
    blogPosts.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return ['Tất cả', ...Array.from(set)]
  }, [])

  // Lọc theo tag + tìm kiếm
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return blogPosts.filter((p) => {
      const matchTag = !selectedTag || selectedTag === 'Tất cả' || p.tags.includes(selectedTag)
      const matchQuery =
        !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchTag && matchQuery
    })
  }, [query, selectedTag])

  const renderTagChip = (label: string) => {
    const active = selectedTag === label || (label === 'Tất cả' && !selectedTag)
    return (
      <TouchableOpacity
        key={label}
        onPress={() => setSelectedTag(label === 'Tất cả' ? null : label)}
        className={`px-3 py-1 mr-2 mb-2 rounded-full ${
          active ? 'bg-emerald-600' : 'bg-emerald-100'
        }`}
        activeOpacity={0.85}
      >
        <Text className={`${active ? 'text-white' : 'text-emerald-700'} text-xs font-medium`}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      activeOpacity={0.88}
      className="w-full mb-4 rounded-2xl overflow-hidden bg-white/95"
      onPress={() =>
        router.push({
          pathname: '/blog-detail', // hoặc ERouteTable.BLOG_DETAIL
          params: { id: item.id },
        })
      }
    >
      {item.coverStatic ? (
        <Image source={item.coverStatic} className="w-full h-40" resizeMode="cover" />
      ) : null}

      <View className="p-4">
        <Text className="text-lg font-semibold text-gray-900 mb-1">{item.title}</Text>
        <Text className="text-gray-600 mb-3">{item.excerpt}</Text>

        <View className="flex-row flex-wrap mb-3">
          {item.tags.map((t, idx) => (
            <View
              key={`${item.id}-${t}-${idx}`}
              className="px-2 py-1 mr-2 mb-2 rounded-full bg-emerald-100"
            >
              <Text className="text-emerald-700 text-xs font-medium">{t}</Text>
            </View>
          ))}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 text-xs">
            ✍️ {item.author ?? 'GreenKids'} • {item.publishedAt ?? '—'}
          </Text>
          {item.readMins ? (
            <Text className="text-gray-500 text-xs">📖 {item.readMins} phút đọc</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <ImageBackground source={images.bgAuth} className="h-full flex-1">
      <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
        <HeaderSetting title="Nhật ký hoạt động xanh" />
        {/* Animation cảm hứng */}
        <View className="items-center">
          <LottieView
            source={require('../../assets/codeplanet/green-earth.json')} // animation môi trường
            autoPlay
            loop
            style={{ width: width * 0.4, height: width * 0.4 }}
          />
        </View>
        {/* Intro */}
        <View className="px-6">
          <Text className="text-2xl font-bold text-emerald-800 text-center mb-2">
            Câu chuyện thật – Truyền cảm hứng 🌿
          </Text>
        </View>

        {/* Tìm kiếm + Tag */}
        <View className="px-6">
          <View className="flex-row flex-wrap mb-2">{allTags.map(renderTagChip)}</View>
        </View>

        {/* Danh sách bài viết */}
        <View className="flex-1 px-6">
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text className="text-center text-gray-500 mt-6">Không tìm thấy bài phù hợp.</Text>
            }
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
