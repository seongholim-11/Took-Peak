import NoticeTitle from '@/components/notice/NoticeTitle'
import NoticeList from '@/components/notice/NoticeList'

export default function page() {
  return (
    <div>
        <NoticeTitle title={'공지사항'}/>
        <NoticeList/>
    </div>
  )
}
