import type { TransitionClasses } from '.'

export const modalTransition: TransitionClasses = {
  enterFromClass: 'scale-80 opacity-0',
  enterActiveClass: 'transition-scale-bounce',
  enterToClass: 'scale-100 opacity-100',
  leaveFromClass: 'scale-100 opacity-100',
  leaveActiveClass: 'transition-scale-bounce',
  leaveToClass: 'scale-80 opacity-0',

  enterFrom: 'scale-80 opacity-0',
  enter: 'transition-scale-bounce',
  enterTo: 'scale-100 opacity-100',
  leaveFrom: 'scale-100 opacity-100',
  leave: 'transition-scale-bounce',
  leaveTo: 'scale-80 opacity-0',
}

export const modalBackgroundTransition: TransitionClasses = {
  enter: 'duration-300 ease-out',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'duration-200 ease-in',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',

  enterActiveClass: 'duration-300 ease-out',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveActiveClass: 'duration-200 ease-in',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0',
}
