import fs from 'node:fs'
import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

function generateIconsFiles(): Component['files'] {
  const iconsFiles: Component['files'] = []

  const files = fs.readdirSync('./src/icons')

  files.forEach((file) => {
    iconsFiles.push({
      type: ComponentType.ICONS,
      path: `./src/icons/${file}`,
      folder: '',
    })
  })
  return iconsFiles
}

export const icons: Component = {
  component: ComponentName.ICONS,
  name: 'Icons',
  files: generateIconsFiles(),
}
