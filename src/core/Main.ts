import { gamerule, MCFunction, team } from "sandstone"

/* ============================================================================ */
/*                                   Variables                                  */
/* ============================================================================ */

export let userNamespace = 'sirv'
export const corePackNamespace = 'core'
export const toolsPackNamespace = 'tools'
export const coreNamespace = `${userNamespace}:${corePackNamespace}/`
export const utilsNamespace = `${coreNamespace}${toolsPackNamespace}/`


/* ----------------------------- No Collision Team ---------------------------- */
const noCollisionTeam = userNamespace + 'NoCollision'
function noCollisionTeamRules(): void {
  team.add(noCollisionTeam)
  team.modify(noCollisionTeam, 'collisionRule', 'never')
  team.modify(noCollisionTeam, 'seeFriendlyInvisibles', false)
  team.modify(noCollisionTeam, 'friendlyFire', false)
}

/* --------------------------- Send Command Feedback -------------------------- */
export const commandFeedbackTrue = MCFunction(coreNamespace + 'commandfeedback/true', () => {
  gamerule('sendCommandFeedback', true)
  gamerule('commandBlockOutput', true)
})

export const commandFeedbackFalse = MCFunction(coreNamespace + 'commandfeedback/false', () => {
  gamerule('sendCommandFeedback', false)
  gamerule('commandBlockOutput', false)
})

/* ============================================================================ */
/*                                     Main                                     */
/* ============================================================================ */

MCFunction(coreNamespace + 'main', () => {
  // Team Creation
  noCollisionTeamRules()

}, { runOnLoad: true })


MCFunction(utilsNamespace + 'main', () => { }, { runOnLoad: true })

/* ============================================================================ */

/* ============================================================================ */
/*                                    Unload                                    */
/* ============================================================================ */