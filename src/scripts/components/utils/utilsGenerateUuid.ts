import { ComponentName, ComponentType } from '../../componentsTypes'

export const utilsGenerateUuid = {
  component: ComponentName.UTILS_GENERATE_UUID,
  name: 'GenerateUuid',
  files: [
    {
      type: ComponentType.UTILS,
      path: './src/utils/uuid/generateUuid.ts',
      folder: 'uuid',
    },
  ],
}
