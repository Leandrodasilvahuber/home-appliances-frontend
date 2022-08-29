<script>
export default {
  data: () => ({
    listProducts: [],
  }),

  mounted() {
    this.$store.commit('listProducts')
  },

  computed: {
    producers() {
      return this.$store.getters.producers
    },

    voltages() {
      return this.$store.getters.voltages
    },

    products() {
      const voltages = this.voltages
      const producers = this.producers

      return this.$store.getters.products.map(function (product) {
        const voltage = voltages.find((v) => v.id === product.voltage_id)
        product.voltage = voltage.volts

        const company = producers.find((p) => p.id === product.company_id)
        product.producer = company.name

        return product
      })
    },
  },

  methods: {
    deleteProduct(productId) {
      this.$store.commit('deleteProduct', productId)
    },
  },
}
</script>

<template>
  <div>
    <v-row v-for="product in products" :key="product.id">
      <v-col cols="12">
        <v-card>
          <v-card-subtitle class="text-h4" style="text-transform: uppercase">
            {{ product.id + ' - ' + product.name }}
          </v-card-subtitle>
          <v-card-subtitle class="text-h5" style="text-transform: uppercase">
            {{ product.description }}
          </v-card-subtitle>
          <v-card-subtitle class="text-h5" style="text-transform: uppercase">
            {{ product.producer }}
          </v-card-subtitle>
          <v-card-subtitle class="text-h5" style="text-transform: uppercase">
            {{ product.voltage }}
          </v-card-subtitle>
          <v-card-actions>
            <v-flex class="text-right">
              <v-btn icon color="black" @click="deleteProduct(product.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>