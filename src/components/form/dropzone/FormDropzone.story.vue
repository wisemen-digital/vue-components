<script setup lang="ts">
import { ref } from 'vue'
import FormDropzone from '@/components/form/dropzone/FormDropzone.vue'

const files = ref<FileWithBlob[]>([])

type FileWithBlob = File & { blobUrl: string }

interface State {
  files: FileWithBlob[]
}

const state: State = {
  files: files.value,
}

function onDrop(_files: File[]): void {
  _files.forEach((file: File) => {
    const fileWithBlob = file as FileWithBlob
    fileWithBlob.blobUrl = getBlobUrl(file)
    files.value.push(fileWithBlob)
  })
}

function getBlobUrl(file: File): string {
  return URL.createObjectURL(file)
}
</script>

<template>
  <Story title="Forms/FileUpload/Dropzone">
    <Variant title="Default">
      <FormDropzone @drop="onDrop">
        <div class="grid h-[50vh] grid-cols-2 gap-4 p-4">
          <div v-if="!files.length">
            <span>Drop files here to upload</span>
          </div>
          <a v-for="file in files" :key="file.name" download :href="file.blobUrl" class="flex flex-col rounded p-4" style="background: #00000020;">
            <span>{{ file.name }}</span>
            <span>{{ file.size }}</span>
            <span>{{ file.type }}</span>
            <span>{{ file.lastModified }} bytes</span>
          </a>
        </div>
      </FormDropzone>
    </Variant>
  </Story>
</template>
