<template>
  <div class="catalog">
    <h1 class="text-h1 catalog__header">Картины эпохи Возрождения</h1>

    <div
      v-if="loading.fetchPictures"
      class="catalog__loading"
    >
      Загрузка...
    </div>
    
    <template v-else>
      <div
        v-if="pictures.length"
        class="catalog__pictures"
      >
        <PictureCard
          v-for="pic in pictures"
          :key="pic.id"
          :pic="pic"
          @openModal="openModal"
        />

        <AppModal
          v-if="open"
          :title="detailedPicture.name"
          @close="closeModal"
        >
          <template #body>
            <div class="detailed__description" v-html="detailedPicture.description"></div>

            <div
              v-if="detailedPicture.cost"
              class="detailed__cost"
            >
              Стомость: <span class="text-h3">{{ detailedPicture.cost }}$</span>
            </div>

            <AppSlider
              :paths="detailedPicture.slides"
            />
          </template>
        </AppModal>

      </div>
      <div v-else>По вашему запросу ничего не найдено</div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PictureCard from '@/components/PictureCard.vue'
import AppModal from '@/components/shared/AppModal.vue'
import AppSlider from '@/components/shared/AppSlider.vue'

export default {
  name: 'CatalogPage',
  components: {
    AppSlider,
    PictureCard,
    AppModal,
  },
  data () {
    return {
      open: false,
      detailedPicture: null,
    }
  },
  computed: {
    ...mapState(['pictures', 'loading']),
  },
  created() {
    this.fetchPictures()
  },
  methods: {
    ...mapActions(['fetchPictures']),
    openModal (id) {
      this.detailedPicture = this.pictures[id]
      this.open = true
    },
    closeModal () {
      this.open = false
      this.detailedPicture = null
    },
  },
}
</script>

<style lang="scss">
.catalog {
  margin: 45px auto;
  max-width: 1256px;
  padding: 0 20px;

  @media (max-width: 943px) {
    margin: 30px auto;
  }

  &__header {
    margin-bottom: 36px;

    @media (max-width: 1256px) {
      text-align: center;
    }

    @media (max-width: 640px) {
      margin-bottom: 24px;
    }
  }

  &__loading {
    @media (max-width: 943px) {
      text-align: center;
    }
  }

  &__pictures {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 1256px) {
      max-width: 904px;
      width: 100%;
      margin: 0 auto;
    }

    @media (max-width: 943px) {
      justify-content: center;
    }
  }
}

.detailed {
  &__description {
    p {
      margin-bottom: 10px;
    }
  }

  &__cost {
    margin-bottom: 25px;

    @media (max-width: 600px) {
      margin-bottom: 0;
    }
  }
}
</style>