<template>
  <div class="catalog">
    <h1 class="text-h1 catalog__header">Картины эпохи Возрождения</h1>

    <div v-if="isLoading">Загрузка...</div>
    
    <template v-else>
      <div
        v-if="pictures.length"
        class="catalog__pictures"
      >
        <PictureCard
          v-for="pic in pictures"
          :key="pic.id"
          :pic="pic"
        />
      </div>
      <div v-else>По вашему запросу ничего не найдено</div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PictureCard from '@/components/PictureCard.vue'

export default {
  name: 'CatalogPage',
  components: {
    PictureCard,
  },
  computed: {
    ...mapState(['pictures', 'isLoading']),
  },
  created() {
    this.fetchPictures()
  },
  methods: {
    ...mapActions(['fetchPictures']),
  },
}
</script>

<style lang="scss">
.catalog {
  margin: 45px auto;
  max-width: 1236px;
  padding: 0 10px;

  &__header {
    margin-bottom: 36px;
  }
  &__pictures {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>