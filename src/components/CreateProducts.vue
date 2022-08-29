<script>
export default {
  data: () => ({
    product: {
      name: null,
      description: null,
      voltage: 1,
      producer: 1,
    },
    rules: {
      name: [(value) => !!value || 'Required.'],
      description: [(value) => !!value || 'Required.'],
    },
  }),

  mounted() {
    this.$store.commit('listProducts')
  },

  computed: {
    voltages() {
      return this.$store.getters.voltages
    },
    producers() {
      return this.$store.getters.producers
    },
    formIsValid() {
      return this.product.name && this.product.description
    },
  },

  methods: {
    save() {
      const { name, description, voltage, producer } = this.product
      this.$store.commit('createProduct', {
        name,
        description,
        voltage,
        producer,
      })

      this.$store.commit('listProducts')
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div>
    <v-form class="pa-15">
      <v-text-field
        v-model="product.name"
        name="name"
        label="Nome"
        type="text"
        :rules="rules.name"
        required
      ></v-text-field>

      <v-text-field
        v-model="product.description"
        name="description"
        label="Descrição"
        type="text"
        :rules="rules.description"
        required
      ></v-text-field>

      <v-radio-group v-model="product.voltage">
        <v-radio
          v-for="v in voltages"
          :key="v.id"
          :label="`${v.volts} volts`"
          :value="v.id"
        ></v-radio>
      </v-radio-group>

      <v-radio-group v-model="product.producer">
        <v-radio
          v-for="p in producers"
          :key="p.id"
          :label="`${p.name}`"
          :value="p.id"
        ></v-radio>
      </v-radio-group>

      <v-btn :disabled="!formIsValid" color="primary" @click="save()"
        >Save</v-btn
      >
    </v-form>
  </div>
</template>
