import React, { FunctionComponent } from 'react'
import { GlobalSettings_Glb_TeamMembers, Athlete } from 'interfaces/types'
import TeamToutClient from './team_tout_client'

export const typename = 'Flexiblelayout_PageBuilder_TeamTout'

const TeamToutModule: FunctionComponent<{ currentAthlete: Athlete; team: GlobalSettings_Glb_TeamMembers[] }> = ({
  team,
  currentAthlete,
}) => {
  return (
    <TeamToutClient
      currentAthlete={currentAthlete}
      team={team}
    />
  )
}

export default TeamToutModule
