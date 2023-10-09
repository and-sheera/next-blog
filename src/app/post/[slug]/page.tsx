import Inner from '@/components/Layout/Inner/Inner'
import PageContent from '@/components/Layout/PageContent/PageContent'
import Article from '@/components/common/Article/Article'

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Inner>
        <PageContent>
          <Article articleSlug={params.slug} />
          {/* <div>My Post: {params.slug}</div> */}
          <h2>Gee</h2>
        </PageContent>
      </Inner>
    </main>
  )
}
