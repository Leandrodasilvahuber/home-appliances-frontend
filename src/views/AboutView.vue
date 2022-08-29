<script>
import { LOCAL_URI } from '../../env'

export default {
  computed: {
    urlPDF() {
      return `${LOCAL_URI}curriculo.pdf`
    },
  },
}
</script>

<template>
  <div class="about">
    <v-row class="pa-10">
      <v-card class="pa-5">
        <p>Leandro Huber - emaildohuber@gmail.com</p>
      </v-card>
    </v-row>
  </div>
</template>

 