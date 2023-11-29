<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppCard from '@/components/card/AppCard.vue'
import AppCardHeader from '@/components/card/AppCardHeader.vue'
import AppCardTitle from '@/components/card/AppCardTitle.vue'
import AppCardDescription from '@/components/card/AppCardDescription.vue'
import AppCardContent from '@/components/card/AppCardContent.vue'
import AppCardFooter from '@/components/card/AppCardFooter.vue'
import AppCardHeaderImage from '@/components/card/AppCardHeaderImage.vue'
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
