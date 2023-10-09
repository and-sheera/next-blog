import Inner from '@/components/Layout/Inner/Inner'
import PageContent from '@/components/Layout/PageContent/PageContent'
import Search from '@/components/common/Search/Search'

export default function SearchPage() {
  return (
    <main>
      <Inner>
        <PageContent modifiers="--single">
          <Search />
        </PageContent>
      </Inner>
    </main>
  )
}
