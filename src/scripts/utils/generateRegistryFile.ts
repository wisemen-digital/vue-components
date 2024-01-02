import fs, { existsSync } from 'node:fs'
import path, { basename, dirname } from 'node:path'
import process from 'node:process'

import type { Component } from '../componentsTypes'

export async function generateRegistryFile(components: Component[], fileName: string): Promise<void> {
  const payload = components
    .map((component) => {
      const files = component.files?.map((file) => {
        try {
          const content = fs.readFileSync(path.join(process.cwd(), file.path), 'utf8')
          return {
            name: basename(file.path),
            dir: dirname(file.path),
            placementDir: file.folder,
            type: file.type,
            content,
          }
        }
        catch (error) {
          console.error(`\x1B[31mError reading file ${file.path} in component \'${component.name}\'`)
        }
        return null
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

  const writeDir = path.join(process.cwd(), 'public/api')
  if (!existsSync(path.resolve(writeDir)))
    fs.mkdirSync(path.resolve(writeDir), { recursive: true })

  fs.writeFileSync(
    path.join(process.cwd(), `public/api/${fileName}.json`),

    JSON.stringify(payload, null, 2),
  )
}
