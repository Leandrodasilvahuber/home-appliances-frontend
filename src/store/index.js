import Vue from 'vue'
import Vuex from 'vuex'
import listProductsRequest from './ListProductsRequest'
import listProducersRequest from './ListProducersRequest'
import listVoltagesRequest from './ListVoltagesRequest'
import createProductsRequest from './CreateProductsRequest'
import deleteProductsRequest from './DeleteProductsRequest'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    voltages: [],
    producers: [],
  },

  getters: {
    products(state) {
      return state.products
    },

    producers(state) {
      return state.producers
    },

    voltages(state) {
      return state.voltages
    },
  },

  mutations: {
    async listProducts(state) {
      let response = await listVoltagesRequest()
      state.voltages = response.data

      response = await listProducersRequest()
      state.producers = response.data

      response = await listProductsRequest()
      state.products = response.data
    },

    async createProduct(state, { name, description, voltage, producer }) {
      await createProductsRequest({ name, description, voltage, producer })
    },

    async deleteProduct(state, productId) {
      await deleteProductsRequest(productId)

      const response = await listProductsRequest()
      state.products = response.data
    },
  },
})
