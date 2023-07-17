import fs from 'node:fs'
import path, { basename, dirname } from 'node:path'

import type { Component } from '../componentsTypes'

export const generateRegistryFile = (components: Component[], fileName: string): void => {
  const payload = components
    .map((component) => {
      const files = component.files?.map((file) => {
        const content = fs.readFileSync(path.join(process.cwd(), file.path), 'utf8')

        return {
          name: basename(file.path),
          dir: dirname(file.path),
          placementDir: file.folder,
          type: file.type,
          content,
        }
      })

      return {
        ...component,
        files,
      }
    })
    .sort((a, b) => {
      if (a.name < b.name)
        return -1

      if (a.name > b.name)
        return 1

      return 0
    })

  fs.writeFileSync(
    path.join(process.cwd(), `public/api/${fileName}.json`),

    JSON.stringify(payload, null, 2),
  )
}
