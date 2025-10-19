import { images } from '@/constants'

export const RANK_TIERS = [
  {
    minScore: 0,
    maxScore: 999,
    rank: images.rank1,
    nextRank: images.rank2,
    nextScore: 1000,
    name: 'KHỞI ĐẦU THUẬN LỢI',
    nameNext: 'VƯỢT QUA THỬ THÁCH',
  },
  {
    minScore: 1000,
    maxScore: 2999,
    rank: images.rank2,
    nextRank: images.rank3,
    nextScore: 3000,
    name: 'VƯỢT QUA THỬ THÁCH',
    nameNext: 'ĐỐI MẶT NGUY HIỂM',
  },
  {
    minScore: 3000,
    maxScore: 4999,
    rank: images.rank3,
    nextRank: images.rank4,
    nextScore: 5000,
    name: 'ĐỐI MẶT NGUY HIỂM',
    nameNext: 'THỬ THÁCH KỸ NĂNG',
  },
  {
    minScore: 5000,
    maxScore: 7999,
    rank: images.rank4,
    nextRank: images.rank5,
    nextScore: 8000,
    name: 'THỬ THÁCH KỸ NĂNG',
    nameNext: 'ÁP LỰC TỐI ĐA',
  },
  {
    minScore: 8000,
    maxScore: 9999,
    rank: images.rank5,
    nextRank: images.rank6,
    nextScore: 10000,
    name: 'ÁP LỰC TỐI ĐA',
    nameNext: 'ĐẠI CHIẾN CUỐI CÙNG',
  },
  {
    minScore: 10000,
    maxScore: 999999,
    rank: images.rank6,
    nextRank: images.rank6,
    nextScore: 999999,
    name: 'ĐẠI CHIẾN CUỐI CÙNG',
    nameNext: 'ĐẠI CHIẾN CUỐI CÙNG',
  },
]

export const listDefaultRank = [
  {
    image: images.rank1,
    name: 'Khởi Đầu Thuận Lợi',
    description: 'Làm quen với cơ chế điều khiển và các yếu tố cơ bản.',
    star: '0',
  },
  {
    image: images.rank2,
    name: 'Vượt Qua Thử Thách',
    description: 'Giới thiệu yếu tố mới, thử thách nhẹ nhàng.',
    star: '1,000',
  },
  {
    image: images.rank3,
    name: 'Đối Mặt Nguy Hiểm',
    description: 'Yêu cầu áp dụng kỹ năng đã học, tăng độ khó đáng kể.',
    star: '3,000',
  },
  {
    image: images.rank4,
    name: 'Thử Thách Kỹ Năng',
    description: 'Đòi hỏi thành thạo kỹ năng, phản ứng nhanh.',
    star: '5,000',
  },
  {
    image: images.rank5,
    name: 'Áp Lực Tối Đa',
    description: 'Đẩy người chơi đến giới hạn, kiểm tra toàn bộ kỹ năng.',
    star: '8,000',
  },
  {
    image: images.rank6,
    name: 'Đại Chiến Cuối Cùng',
    description: 'Đỉnh cao của thử thách, màn đấu trùm cuối.',
    star: '10,000',
  },
]
