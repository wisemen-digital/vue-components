---
group: 'contributing'
icon: 'carbon:task-add'
title: 'Registering Components'
---

# Registering components

## Adding to components registry

Once the code is made, inside the ```componentsTypes.ts``` file inside the ```/scripts``` folder, add your component name.\
After add a corresponding file inside the ```scripts/components``` folder.\
Each component has a name, a component, possible internal dependencies, possible dependencies and a series of files.

| Name      | Description                             |
| --------- | --------------------------------------- |
| `name`   | Name in the cli tool          |
| `component` | Name used to identify the component |
| `internalDependencies` | Other components this components relies on |
| `dependencies` | Packages this components relies on |
| `files` | Files relevant to this component |

Each file has a type of file, a path and a folder.

| Name      | Description                             |
| --------- | --------------------------------------- |
| `type`   | Component / Composable / ... -> Used to generate the correct folder placement          |
| `path` | Location of the file in this project |
| `folder` | Location of the file inside the project you are installing the component |


E.g appButton.ts
```typescript
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appButton = {
  component: ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/buttons/app-button/appButtonVariants.ts',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/buttons/app-button/AppButtonLoader.vue',
      folder: 'app/buttons',
    },
  ],
  internalDependencies: [ComponentName.TRANSITIONS, ComponentName.APP_ICON],
  dependencies: ['random-package'],
}
```

Finally add the component to the ```components.ts``` file

## Building components.json

Run the command
```
pnpm build:components
```

