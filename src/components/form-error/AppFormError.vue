<script setup lang="ts">
import type { z } from 'zod'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import AppHeightTransition from '@/components/transitions/AppHeightTransition.vue'

interface Props {
  errors?: z.ZodFormattedError<string> | null | undefined
  isTouched?: boolean
}

const { errors, isTouched = true } = defineProps<Props>()
</script>

<template>
  <AppHeightTransition :duration="0.2">
    <div v-if="errors != null && !!isTouched">
      <div class="mt-1 flex items-center gap-x-2">
        <AppIcon
          class="w-3.5 shrink-0 text-destructive"
          icon="warning"
        />

        <AppText
          v-if="errors != null"
          class="text-destructive"
          variant="subtext"
        >
          {{ errors._errors[0] }}
        </AppText>
      </div>
    </div>
  </AppHeightTransition>
</template>
