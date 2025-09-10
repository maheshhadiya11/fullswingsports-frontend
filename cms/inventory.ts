import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { DocumentNode } from 'graphql'

import { typename as IntroQuoterModuleTypename } from '../components/modules/intro_quoter/intro_quoter'
import IntroQuoterModuleQuery from '../components/modules/intro_quoter/intro_quoter.graphql'

import { typename as HeroModuleTypename } from '../components/modules/hero/hero'
import HeroModuleQuery from '../components/modules/hero/hero.graphql'

import { typename as LeftRightModuleTypename } from '../components/modules/left_right/left_right'
import LeftRightModuleQuery from '../components/modules/left_right/left_right.graphql'

import { typename as BannerModuleTypename } from '../components/modules/banner/banner'
import BannerModuleQuery from '../components/modules/banner/banner.graphql'

import { typename as FiftyFiftyModuleTypename } from '../components/modules/fifty_fifty/fifty_fifty'
import FiftyFiftyModuleQuery from '../components/modules/fifty_fifty/fifty_fifty.graphql'

import { typename as AccordionModuleTypename } from '../components/modules/accordion/accordion'
import AccordionModuleQuery from '../components/modules/accordion/accordion.graphql'

import { typename as FlexMultiGridModuleTypename } from '../components/modules/flex_multi_grid/flex_multi_grid'
import FlexMultiGridModuleQuery from '../components/modules/flex_multi_grid/flex_multi_grid.graphql'

import { typename as BentoBoxesModuleTypename } from '../components/modules/bento_boxes/bento_boxes'
import BentoBoxesModuleQuery from '../components/modules/bento_boxes/bento_boxes.graphql'

import { typename as TabbedFeatureModuleTypename } from '../components/modules/tabbed_feature/tabbed_feature'
import TabbedFeatureModuleQuery from '../components/modules/tabbed_feature/tabbed_feature.graphql'

import { typename as GallerySlideshowModuleTypename } from '../components/modules/gallery_slideshow/gallery_slideshow'
import GallerySlideshowModuleQuery from '../components/modules/gallery_slideshow/gallery_slideshow.graphql'

import { typename as AnchorMenuModuleTypename } from '../components/modules/anchor_menu/anchor_menu'
import AnchorMenuModuleQuery from '../components/modules/anchor_menu/anchor_menu.graphql'

import { typename as FeatureCarouselModuleTypename } from '../components/modules/feature_carousel/feature_carousel'
import FeatureCarouselModuleQuery from '../components/modules/feature_carousel/feature_carousel.graphql'

import { typename as TtacModuleTypename } from '../components/modules/ttac/ttac'
import TtacModuleQuery from '../components/modules/ttac/ttac.graphql'

import { typename as BackgroundWrapModuleTypename } from '../components/modules/background_wrap/background_wrap'
import BackgroundWrapModuleQuery from '../components/modules/background_wrap/background_wrap.graphql'

import { typename as TeamToutModuleTypename } from '../components/modules/team_tout/team_tout'
import TeamToutModuleQuery from '../components/modules/team_tout/team_tout-athelete.graphql'

import { typename as TwoColTextModuleTypename } from '../components/modules/two_col_text/two_col_text'
import TwoColTextModuleQuery from '../components/modules/two_col_text/two_col_text-athlete.graphql'

import { typename as DataTablesModuleTypename } from '../components/modules/data_tables/data_tables'
import DataTablesModuleQuery from '../components/modules/data_tables/data_tables-athlete.graphql'

import { typename as QuestionAnswerModuleTypename } from '../components/modules/question_answer/question_answer'
import QuestionAnswerModuleQuery from '../components/modules/question_answer/question_answer.graphql'

import { typename as ContactFormModuleTypename } from '../components/modules/contact_form/contact_form'
import ContactFormModuleQuery from '../components/modules/contact_form/contact_form.graphql'

import { typename as WysiwygModuleTypename } from '../components/modules/wysiwyg/wysiwyg'
import WysiwygModuleQuery from '../components/modules/wysiwyg/wysiwyg-post.graphql'

import { typename as SubNavigationModuleTypename } from '../components/modules/sub_navigation/sub_navigation'
import SubNavigationModuleQuery from '../components/modules/sub_navigation/sub_navigation.graphql'

import { typename as AnchorPointModuleTypename } from '../components/modules/anchor_point/anchor_point'
import AnchorPointModuleQuery from '../components/modules/anchor_point/anchor_point.graphql'

// ##HYGEN_IMPORT##
// do not modify the above line since its used by hygen to generate the block list

export interface Block {
  module: FunctionComponent | React.ComponentType<any>
  query: DocumentNode
  extraQueries?: DocumentNode[]
  typename: string
}

const blocks: Block[] = [
  {
    module: dynamic(() => import('../components/modules/intro_quoter/intro_quoter')),
    query: IntroQuoterModuleQuery,
    typename: IntroQuoterModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/hero/hero')),
    query: HeroModuleQuery,
    typename: HeroModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/left_right/left_right')),
    query: LeftRightModuleQuery,
    typename: LeftRightModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/banner/banner')),
    query: BannerModuleQuery,
    typename: BannerModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/fifty_fifty/fifty_fifty')),
    query: FiftyFiftyModuleQuery,
    typename: FiftyFiftyModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/accordion/accordion')),
    query: AccordionModuleQuery,
    typename: AccordionModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/flex_multi_grid/flex_multi_grid')),
    query: FlexMultiGridModuleQuery,
    typename: FlexMultiGridModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/bento_boxes/bento_boxes')),
    query: BentoBoxesModuleQuery,
    typename: BentoBoxesModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/tabbed_feature/tabbed_feature')),
    query: TabbedFeatureModuleQuery,
    typename: TabbedFeatureModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/gallery_slideshow/gallery_slideshow')),
    query: GallerySlideshowModuleQuery,
    typename: GallerySlideshowModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/anchor_menu/anchor_menu')),
    query: AnchorMenuModuleQuery,
    typename: AnchorMenuModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/feature_carousel/feature_carousel')),
    query: FeatureCarouselModuleQuery,
    typename: FeatureCarouselModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/team_tout/team_tout')),
    query: TeamToutModuleQuery,
    typename: TeamToutModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/two_col_text/two_col_text')),
    query: TwoColTextModuleQuery,
    typename: TwoColTextModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/data_tables/data_tables')),
    query: DataTablesModuleQuery,
    typename: DataTablesModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/ttac/ttac')),
    query: TtacModuleQuery,
    typename: TtacModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/background_wrap/background_wrap')),
    query: BackgroundWrapModuleQuery,
    typename: BackgroundWrapModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/question_answer/question_answer')),
    query: QuestionAnswerModuleQuery,
    typename: QuestionAnswerModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/contact_form/contact_form')),
    query: ContactFormModuleQuery,
    typename: ContactFormModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/wysiwyg/wysiwyg')),
    query: WysiwygModuleQuery,
    typename: WysiwygModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/sub_navigation/sub_navigation')),
    query: SubNavigationModuleQuery,
    typename: SubNavigationModuleTypename,
    extraQueries: undefined,
  },

  {
    module: dynamic(() => import('../components/modules/anchor_point/anchor_point')),
    query: AnchorPointModuleQuery,
    typename: AnchorPointModuleTypename,
    extraQueries: undefined,
  },

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
