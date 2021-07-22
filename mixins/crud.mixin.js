import { mapActions, mapGetters }from 'vuex'

export const crudMixin = config => ({
  data() {
    return {
      model: null
    }
  },
  computed: {
    ...mapGetters({
      item: `${config.crudName}/item`
    }),
    isUpdated: ({ $route: { params: { id } } }) => id !== undefined
  },
  async mounted() {
    if (this.isUpdated) {
      await this.findOne(this.$route.params.id)
      this.model = { ...this.item }
      return
    }
    this.setModel()
  },
  methods: {
    ...mapActions({
      update: `${config.crudName}/update`,
      create: `${config.crudName}/create`,
      findOne: `${config.crudName}/findOne`
    }),
    async createItem() {
      await this.create(this.model)
      this.$router.back()
    },
    async updateItem() {
      await this.update({ id: this.$route.params.id, payload: this.model })
      this.$router.back()
    },
    async onSubmitForm() {
      if (this.isUpdated) {
        await this.updateItem()
        return
      }
      await this.createItem()
    },
    setModel() {
      this.model = { ...this.data }
    }
  }
})