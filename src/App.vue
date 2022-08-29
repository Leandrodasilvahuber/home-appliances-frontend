<script>
import ErrorAlert from './components/ErrorAlert'
import { getError } from './plugins/cookies/cookies'

export default {
  data: () => ({
    drawer: null,
    error: null,
  }),

  components: {
    ErrorAlert,
  },

  mounted() {
    this.$root.$on('reload-cookies', this.reloadCookies)
  },

  methods: {
    reloadCookies() {
      this.error = getError()
    },
  },
}
</script>

<template>
  <v-app id="app">
    <div>
      <v-navigation-drawer v-model="drawer" app>
        <v-row class="mt-1">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/about" class="d-flex justify-start ml-2">
              <v-icon left>mdi-account-tie</v-icon>
              Sobre
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/" class="d-flex justify-start ml-2">
              <v-icon left>mdi-text-search</v-icon>
              Produtos
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/create-products" class="d-flex justify-start ml-2">
              <v-icon left>mdi-plus</v-icon>
              Adiciona produto
            </v-btn>
          </v-flex>
        </v-row>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Seja bem vindo!</v-toolbar-title>
      </v-app-bar>
    </div>

    <v-main>
      <router-view></router-view>
    </v-main>

    <div class="fixed">
      <error-alert :error="error"></error-alert>
    </div>
  </v-app>
</template>

<style scoped>
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
}
</style>