import gql from 'graphql-tag'
import PostTemplateHero from 'components/modules/hero/hero-post-template.graphql'
import PostModuleHero from 'components/modules/hero/hero-post.graphql'
import PostModuleBanner from 'components/modules/banner/banner-post.graphql'
import PostModuleFlexMultiGrid from 'components/modules/flex_multi_grid/flex_multi_grid-post.graphql'
import PostModuleGallerySlideshow from 'components/modules/gallery_slideshow/gallery_slideshow-post.graphql'
import PostModuleIntroQuoter from 'components/modules/intro_quoter/intro_quoter-post.graphql'
import PostModuleQuestionAnswer from 'components/modules/question_answer/question_answer-post.graphql'
import PostModuleTtac from 'components/modules/ttac/ttac-post.graphql'
import PostModuleTwoColText from 'components/modules/two_col_text/two_col_text-post.graphql'
import PostModuleWysiwyg from 'components/modules/wysiwyg/wysiwyg-post.graphql'

import AssetFragment from './fragments/asset'
import LinkFragment from './fragments/link'
import ProductFragment from './fragments/product'
import BundleProductFragment from './fragments/bundleProduct'
import SeoFragment from './fragments/seo'

export default gql`
  ${AssetFragment}
  ${LinkFragment}
  ${ProductFragment}
  ${BundleProductFragment}
  ${SeoFragment}

  ${PostTemplateHero}
  ${PostModuleBanner}
  ${PostModuleFlexMultiGrid}
  ${PostModuleGallerySlideshow}
  ${PostModuleHero}
  ${PostModuleIntroQuoter}
  ${PostModuleQuestionAnswer}
  ${PostModuleTtac}
  ${PostModuleTwoColText}
  ${PostModuleWysiwyg}
  query post($uri: ID!, $idType: PostIdType = SLUG, $asPreview: Boolean = false) {
    post(idType: $idType, id: $uri, asPreview: $asPreview) {
      id
      databaseId
      title
      slug
      uri
      excerpt
      date
      seo {
        ...SeoFragment
      }
      categories {
        nodes {
          name
        }
      }
      postLayout {
        postHero {
          ...PostTemplateHero
        }
        pageBuilder {
          ...PostModuleBanner
          ...PostModuleFlexMultiGrid
          ...PostModuleGallerySlideshow
          ...PostModuleHero
          ...PostModuleIntroQuoter
          ...PostModuleQuestionAnswer
          ...PostModuleTtac
          ...PostModuleTwoColText
          ...PostModuleWysiwyg
        }
        relatedContent {
          posts {
            post {
              ... on Post {
                slug
                title
                postLayout {
                  postHero {
                    ...PostTemplateHero
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
