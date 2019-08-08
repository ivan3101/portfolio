export enum NavbarTypes {
  ABOUT,
  SKILLS,
  PROJECTS,
  CONTACT,
  DEFAULT,
}

export interface Action {
  type: NavbarTypes
}

export const initialState = 4

export const navbarPayload = (actionType: NavbarTypes): Action => ({
  type: actionType,
})

function navbarReducer(state: NavbarTypes, action: Action) {
  switch (action.type) {
    case NavbarTypes.ABOUT:
      return NavbarTypes.ABOUT

    case NavbarTypes.SKILLS:
      return NavbarTypes.SKILLS

    case NavbarTypes.PROJECTS:
      return NavbarTypes.PROJECTS

    case NavbarTypes.CONTACT:
      return NavbarTypes.CONTACT

    case NavbarTypes.DEFAULT:
    default:
      return NavbarTypes.DEFAULT
  }
}

export default navbarReducer
