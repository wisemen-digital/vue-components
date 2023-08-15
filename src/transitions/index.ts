export interface TransitionClasses {
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
  moveClass?: string

  enterFrom?: string
  enter?: string
  enterTo?: string
  leaveFrom?: string
  leave?: string
  leaveTo?: string
  move?: string

}

export * from './scaleBounce.transition'
export * from './snackbar.transition'
export * from './fade.transition'
export * from './list.transition'
export * from './staticList.transition'
export * from './popover.transition'
