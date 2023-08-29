---
group: 'contributing'
icon: 'carbon:document-add'
title: 'Making Components'
---

# Making components

## Vue component

### Guidelines

#### Base component

Whenver possible, try to use [Headless UI](https://headlessui.com/) as a base for the component.
If it is not present in that package, try to find an implementation on the [Radix Vue](https://www.radix-vue.com/) package. If neither has an implementation, you will have to write it fully from scratch.
#### Location
Inside the ```root``` folder, add your relevant components / composables / other dependencies.\
<b>Important!</b> All imports should use the ```@``` alias, since that is used to replace the import names.

#### Props 

Props will use the new destructing syntax.

```ts
interface Props {
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  prefixIcon?: Icon
  suffixIcon?: Icon
}

const {
  variant = 'default',
  size = 'default',
  isDisabled = false,
  isLoading = false,
  prefixIcon,
  suffixIcon,
} = defineProps<Props>()
```

#### Emits

Emits will use the new 3.3 syntax.

```ts
const emits = defineEmits<{
  click: [event: HTMLClickEvent]
  approve: [approvedItem: ApprovedItem]
}>
```

#### Naming
- <b>Booleans</b>
  - Booleans will never be negative. E.g. isButtonNotHidden => isButtonShown.
  - Default value of boolean props will always be false.
  - Whenever possible, prefix a boolean with is / has / ... .
- <b>Emits</b>
  - Names will simply be what it is. E.g approve / decline / ... .
  - Whenever an event is native, try to handle it like it natively would.
- <b>Files</b>
  - Style ts files will be suffixed with ```.style.ts```
  - Story files will be suffixed with ```.story.vue```
  - Test files will be suffixed with ```.test.ts```



### Styling with cva and twMerge

Whenever a component has style variants, they should be made in a ```.style.ts``` file with cva. E.g. ```appButton.style.ts```.
Look at the [documentation](https://beta.cva.style/docs/getting-started/whats-new) and already existing components. Using it correctly will manage typing and merging your tailwind classes.



## Story

Every component should have a ```.story.vue``` file associated with it. This story should be a single component with controls where you can select every variant.


## Tests

Writing tests is optional for now. Next quarter we are looking at it more closely, though if you want to experiment and try it, you are always welcome. Tests will be written in ```vitest```.

