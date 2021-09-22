import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import BlogPostPreview from "../../components/BlogPostPreview"
import BlogSidebar from "../../components/BlogSidebar"

export const query = graphql`
  query TagPage($tags: [String!]!) {
    allBlogPost(
      filter: { tags: { in: $tags } }
    ) {
      nodes {
        id
        ...BlogPostPreview_post
      }
    }
  }
`

type Props = PageProps<GatsbyTypes.TagPageQuery, GatsbyTypes.SitePageContext>

const TagPage: React.FC<Props> = ({ data, params }) => {
  const currentTag = params.tags!
  return (
    <Layout title={`Blog: ${currentTag} | GraphQL`} pageContext={{}}>
      <section>
        <div className="documentationContent">
          <div>
            {data.allBlogPost.nodes.map(post => (
              <BlogPostPreview key={post.id} post={post} />
            ))}
          </div>
          <BlogSidebar />
        </div>
      </section>
    </Layout>
  )
}

export default TagPage
