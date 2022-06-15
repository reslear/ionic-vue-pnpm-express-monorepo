<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Tab1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Tab1</h1>
      <ion-button router-link="/tabs/tab2" routerDirection="root"
        >go to Tab2</ion-button
      >
      <p></p>
      <ion-button @click="getApi('/test')">fetch test api</ion-button>
      <ion-button @click="getApi('/test-error')"
        >fetch test-error api</ion-button
      >

      <pre>{{ response }}</pre>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  toastController,
} from '@ionic/vue'
import { Http } from '@capacitor-community/http'
import { ref } from 'vue'

const response = ref('')

async function getApi(url: string) {
  try {
    const { data, status } = await Http.get({
      url: `http://localhost:3001/api/v1` + url,
    })
    if (status === 200) {
      response.value = data
    } else {
      response.value = ''
      throw new Error()
    }
  } catch (e) {
    const toast = await toastController.create({
      message: 'Error fetching data',
      duration: 2000,
      color: 'danger',
    })
    return toast.present()
  }
}
</script>

<style></style>
