import gql from 'graphql-tag'
import ModuleAccordion from 'components/modules/accordion/accordion.graphql'
import ModuleAnchorMenu from 'components/modules/anchor_menu/anchor_menu.graphql'
import ModuleBanner from 'components/modules/banner/banner.graphql'
import ModuleBackgroundWrap from 'components/modules/background_wrap/background_wrap.graphql'
import ModuleBentoBoxes from 'components/modules/bento_boxes/bento_boxes.graphql'
import ModuleContactForm from 'components/modules/contact_form/contact_form.graphql'
import ModuleFeatureCarousel from 'components/modules/feature_carousel/feature_carousel.graphql'
import ModuleFiftyFifty from 'components/modules/fifty_fifty/fifty_fifty.graphql'
import ModuleFlexMultiGrid from 'components/modules/flex_multi_grid/flex_multi_grid.graphql'
import ModuleGallerySlideshow from 'components/modules/gallery_slideshow/gallery_slideshow.graphql'
import ModuleHero from 'components/modules/hero/hero.graphql'
import ModuleIntroQuoter from 'components/modules/intro_quoter/intro_quoter.graphql'
import ModuleLeftRight from 'components/modules/left_right/left_right.graphql'
import ModuleQuestionAnswer from 'components/modules/question_answer/question_answer.graphql'
import ModuleSubNavigation from 'components/modules/sub_navigation/sub_navigation.graphql'
import ModuleTabbedFeature from 'components/modules/tabbed_feature/tabbed_feature.graphql'
import ModuleTtac from 'components/modules/ttac/ttac.graphql'
import ModuleAnchorPoint from 'components/modules/anchor_point/anchor_point.graphql'

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

  ${ModuleAccordion}
  ${ModuleAnchorMenu}
  ${ModuleBanner}
  ${ModuleBackgroundWrap}
  ${ModuleBentoBoxes}
  ${ModuleContactForm}
  ${ModuleFeatureCarousel}
  ${ModuleFiftyFifty}
  ${ModuleFlexMultiGrid}
  ${ModuleGallerySlideshow}
  ${ModuleHero}
  ${ModuleIntroQuoter}
  ${ModuleLeftRight}
  ${ModuleQuestionAnswer}
  ${ModuleSubNavigation}
  ${ModuleTabbedFeature}
  ${ModuleTtac}
  ${ModuleAnchorPoint}
  query page($uri: ID!, $idType: PageIdType = URI, $asPreview: Boolean = false) {
    globalSettings {
      glb {
        ...ModuleSubNavigation
      }
    }
    page(id: $uri, idType: $idType, asPreview: $asPreview) {
      id
      databaseId
      title
      slug
      uri
      seo {
        ...SeoFragment
      }
      flexibleLayout {
        fieldGroupName
        pageBuilder {
          ... on Page_Flexiblelayout_PageBuilder_SubNavigation {
            fieldGroupName
            id
          }
          ...ModuleAccordion
          ...ModuleAnchorMenu
          ...ModuleBanner
          ...ModuleBackgroundWrap
          ...ModuleBentoBoxes
          ...ModuleContactForm
          ...ModuleFeatureCarousel
          ...ModuleFiftyFifty
          ...ModuleFlexMultiGrid
          ...ModuleGallerySlideshow
          ...ModuleHero
          ...ModuleIntroQuoter
          ...ModuleLeftRight
          ...ModuleQuestionAnswer
          ...ModuleTabbedFeature
          ...ModuleTtac
          ...ModuleAnchorPoint
        }
      }
    }
  }
`
