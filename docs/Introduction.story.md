---
group: 'top'
icon: 'carbon:bookmark'
---


# Reusable Vue components

## Repository

https://github.com/Robbe95/wisemen-components/

## Finished components

- [x] AppButton
- [x] AppModal
- [x] AppText

- [x] FormInputField
- [x] FormError
- [x] FormInputFieldGrouping

- [x] Transitions
- [x] Icons (setup and few examples)

  
## Usage

### Add components to project using the following commands
```
npx wisemen-ui init
npx wisemen-ui add
npx wisemen-ui add all
```

Init installs global dependencies and components such as your tailwind config, transitions and icons.\
With the add command you can install specific components, which will install all their relevant dependencies.\
Use add all to install all possible components.

### Check changes against the repository
```
npx wisemen-ui changes
npx wisemen-ui diff
```

## Adding components

### Making component

Inside the ```root``` folder, add your relevant components / composables / other dependencies.
Important! All imports should use the ```@``` alias, since that is used to replace the import names.

### Registering components

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

### Building components.json

Run the command
```
pnpm build:components
```

