import Inner from '@/components/Layout/Inner/Inner'
import PageContent from '@/components/Layout/PageContent/PageContent'
import Feed from '@/components/common/Feed/Feed'
import MainCover from '@/components/common/MainCover/MainCover'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { page } = searchParams

  return (
    <main>
      <MainCover />
      <Inner>
        <PageContent>
          <Feed page={page} />
          <h2>Gee</h2>
        </PageContent>
      </Inner>
    </main>
  )
}
