# Reusable Vue components

## Finished components

- [x] AppButton
- [x] FormInputField
- [ ] AppModal
  
## Usage

### Add components to project using the following commands
```
npx @wisemen/vue-cli init
npx @wisemen/vue-cli add
npx @wisemen/vue-cli add all
```

Init installs global dependencies and components such as your tailwind config, transitions and icons.\
With the add command you can install specific components, which will install all their relevant dependencies.\
Use add all to install all possible components.

## Adding components

### Making component

Inside the ```modules/ui``` folder, add your relevant components / composables / other dependencies.

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
      path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/appButtonVariants.ts',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue',
      folder: 'app/buttons',
    },
  ],
  internalDependencies: [ComponentName.TRANSITIONS, ComponentName.APP_ICON],
}
```

Finally add the component to the ```components.ts``` file

### Building components.json

Run the command
```
pnpm build:components
```

