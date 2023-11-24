import { components } from './components'
import { globalComponents } from './globalComponents'
import { globalConfig } from './globalConfig'

import { generateRegistryFile } from './utils/generateRegistryFile'

generateRegistryFile(components, 'components')
generateRegistryFile(globalComponents, 'globalComponents')
generateRegistryFile(globalConfig, 'globalConfig')
