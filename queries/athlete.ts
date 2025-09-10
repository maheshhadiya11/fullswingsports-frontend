import gql from 'graphql-tag'
import AthleteTemplateHero from 'components/modules/hero/hero-athlete-template.graphql'
import AthleteModuleHero from 'components/modules/hero/hero-athlete.graphql'
import AthleteModuleBanner from 'components/modules/banner/banner-athlete.graphql'
import AthleteModuleBackgroundWrap from 'components/modules/background_wrap/background_wrap-athlete.graphql'
import AthleteModuleBentoBoxes from 'components/modules/bento_boxes/bento_boxes-athlete.graphql'
import AthleteModuleDataTables from 'components/modules/data_tables/data_tables-athlete.graphql'
import AthleteModuleFeatureCarousel from 'components/modules/feature_carousel/feature_carousel-athlete.graphql'
import AthleteModuleFiftyFifty from 'components/modules/fifty_fifty/fifty_fifty-athlete.graphql'
import AthleteModuleGallerySlideshow from 'components/modules/gallery_slideshow/gallery_slideshow-athlete.graphql'
import AthleteModuleIntroQuoter from 'components/modules/intro_quoter/intro_quoter-athlete.graphql'
import AthleteModuleTwoColText from 'components/modules/two_col_text/two_col_text-athlete.graphql'
import TeamTout from 'components/modules/team_tout/team_tout.graphql'

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

  ${AthleteTemplateHero}
  ${TeamTout}
  ${AthleteModuleHero}
  ${AthleteModuleBanner}
  ${AthleteModuleBackgroundWrap}
  ${AthleteModuleBentoBoxes}
  ${AthleteModuleDataTables}
  ${AthleteModuleFeatureCarousel}
  ${AthleteModuleFiftyFifty}
  ${AthleteModuleGallerySlideshow}
  ${AthleteModuleIntroQuoter}
  ${AthleteModuleTwoColText}
  query athlete($slug: ID!, $idType: AthleteIdType = SLUG, $asPreview: Boolean = false) {
    globalSettings {
      glb {
        ...TeamTout
      }
    }
    athlete(idType: $idType, id: $slug, asPreview: $asPreview) {
      id
      databaseId
      title
      slug
      uri
      seo {
        ...SeoFragment
      }
      athletesPage {
        shortDescription
        featuredImage {
          ...Asset
        }
      }
      athleteLayout {
        athleteHero {
          ...AthleteTemplateHero
        }
        pageBuilder {
          ...AthleteModuleHero
          ...AthleteModuleBanner
          ...AthleteModuleBackgroundWrap
          ...AthleteModuleBentoBoxes
          ...AthleteModuleDataTables
          ...AthleteModuleFeatureCarousel
          ...AthleteModuleFiftyFifty
          ...AthleteModuleGallerySlideshow
          ...AthleteModuleIntroQuoter
          ...AthleteModuleTwoColText
        }
      }
    }
  }
`
