<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppCard from '@/components/app/card/AppCard.vue'
import AppCardHeader from '@/components/app/card/AppCardHeader.vue'
import AppCardTitle from '@/components/app/card/AppCardTitle.vue'
import AppCardDescription from '@/components/app/card/AppCardDescription.vue'
import AppCardContent from '@/components/app/card/AppCardContent.vue'
import AppCardFooter from '@/components/app/card/AppCardFooter.vue'
import AppCardHeaderImage from '@/components/app/card/AppCardHeaderImage.vue'
import Image from '@/assets/test-image.jpg'
</script>

<template>
  <AppCard title="test title" subtitle="test- subtitel a bit longer" :header-image-src="Image">
    <template #content>
      <p>test content</p>
    </template>
    <template #footer>
      <p>test footer</p>
    </template>
  </AppCard>
  <AppCard>
    <AppCardHeaderImage :src="Image" />
    <AppCardHeader>
      <AppCardTitle>
        test title
      </AppCardTitle>
      <AppCardDescription>
        test description
      </AppCardDescription>
    </AppCardHeader>
    <AppCardContent>
      <p>test content</p>
    </AppCardContent>
    <AppCardFooter>
      <p>test footer</p>
    </AppCardFooter>
  </AppCard>

  <RouterView />
</template>
