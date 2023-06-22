import { AddIcon, ArrowDownIcon, CheckmarkIcon, ChevronDownIcon, ChevronRightIcon, CloseIcon, EditIcon, EyeClosedIcon, EyeOpenIcon } from '.'

export const icons = {
  add: AddIcon,
  arrowDown: ArrowDownIcon,
  checkmark: CheckmarkIcon,
  chevronDown: ChevronDownIcon,
  chevronRight: ChevronRightIcon,
  close: CloseIcon,
  edit: EditIcon,
  eyeOpen: EyeOpenIcon,
  eyeClosed: EyeClosedIcon,
}

export const iconNames = Object.keys(icons) as Icon[]
export type Icon = keyof typeof icons
