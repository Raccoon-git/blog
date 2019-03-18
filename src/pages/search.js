import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Highlight,
  Hits,
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  '18OSGC1K0M',
  '799e5820c4a7937532c6b749de3ba31a'
)

const Hit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <Highlight className="title" attribute="title" hit={hit} tagName="mark" />
      <br />
      <span className="link">
        {`${window.location.protocol}//${window.location.host}/${hit.slug}`}
      </span>
      <br />
    </Link>
  </div>
)
const Search = ({ data }) => {
  const postNode = {
    title: `Search - ${config.siteTitle}`,
  }
  return (
    <Layout>
      <Helmet>
        <title>{`Search - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="search" customTitle />
      <Container>
        <InstantSearch searchClient={searchClient} indexName="blog">
          <SearchBox /> <Hits hitComponent={Hit} />
        </InstantSearch>
      </Container>
    </Layout>
  )
}
export default Search
