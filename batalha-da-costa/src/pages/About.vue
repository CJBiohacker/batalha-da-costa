<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { aboutContent } from "@/utils/consts.js";

const aboutData = ref(aboutContent);
const selectedItem = ref("default");
const selectedSubItem = ref(null); // New v-model for the second select
const isMobile = ref(false);

const selectedItemData = computed(() => {
  return aboutData.value.selectableItems.find(
    (item) => item.value === selectedItem.value
  );
});

const selectedSubItemData = computed(() => {
  if (selectedItem.value === 'mcs_home' && selectedSubItem.value) {
    return selectedItemData.value?.mcs?.find(mc => mc.name === selectedSubItem.value);
  } else if (selectedItem.value === 'organizers' && selectedSubItem.value) {
    return selectedItemData.value?.organizers?.find(organizer => organizer.name === selectedSubItem.value);
  }
  return null;
});

// Watcher to reset selectedSubItem when selectedItem changes
watch(selectedItem, () => {
  selectedSubItem.value = null;
});

const isSubSelectDisabled = computed(() => {
  return selectedItem.value !== 'mcs_home' && selectedItem.value !== 'organizers';
});

const handleResize = () => {
    isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<template>
  <div class="about-page">
    <div class="row welcome-section">
      <div v-if="!isMobile" class="col-5 welcome-image-container">
        <img
          :src="aboutData.welcomeImage"
          :alt="aboutData.welcomealt"
          class="welcome-image"
        />
      </div>
      <div
        :class="{ 'col-7': !isMobile, 'col-12': isMobile }"
        class="welcome-text-container"
      >
        <p class="welcome-description">{{ aboutData.welcomeDescription }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p class="complementary-description">
          {{ aboutData.complementaryDescription }}
        </p>
      </div>
    </div>

    <div class="row selectors-row">
      <div class="col-12 col-md-6">
        <v-select
          v-model="selectedItem"
          :items="aboutData.selectableItems"
          item-title="label"
          item-value="value"
          class="item-selector"
          :menu-props="{ offsetY: true }"
          variant="outlined"
          bg-color="white"
          base-color="white"
        ></v-select>
      </div>
      <div class="col-12 col-md-6"> <v-select
          v-model="selectedSubItem"
          :items="selectedItemData?.mcs || selectedItemData?.organizers || []"
          item-title="name"
          item-value="name"
          class="sub-item-selector"
          :menu-props="{ offsetY: true }"
          variant="outlined"
          bg-color="white"
          base-color="white"
          :label="selectedItem === 'mcs_home' ? 'Selecione um MC' : 'Selecione um Organizador'"
          :disabled="isSubSelectDisabled" ></v-select>
      </div>
    </div>

    <transition name="fade" mode="out-in" appear>
      <div v-if="selectedItem === 'locations'" class="row item-details">
        <div class="col-4">
          <iframe
            v-if="selectedItemData && selectedItemData.iframeSrc"
            :src="selectedItemData.iframeSrc"
            class="item-iframe"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
          <img
            v-else-if="selectedItemData && selectedItemData.image"
            :src="selectedItemData.image"
            :alt="selectedItemData.alt"
            class="item-image"
          />
          <div v-else class="item-placeholder">
            No location media available.
          </div>
        </div>
        <div
          :class="{
            'col-8': selectedItem === 'locations',
            'col-8':
              selectedItemData &&
              (selectedItemData.image || selectedItemData.iframeSrc),
            'col-12':
              selectedItem !== 'locations' ||
              !(
                selectedItemData &&
                (selectedItemData.image || selectedItemData.iframeSrc)
              ),
          }"
        >
          <p
            class="item-description"
            v-if="selectedItemData && selectedItemData.description"
          >
            {{ selectedItemData.description }}
          </p>
          <p class="item-description" v-else>
            {{
              aboutData.selectableItems.find(
                (item) => item.value === selectedItem
              )?.defaultDescription || ""
            }}
          </p>
        </div>
      </div>

      <div v-else-if="(selectedItem === 'mcs_home' || selectedItem === 'organizers') && selectedSubItemData" class="row item-details">
        <div class="col-4">
          <img
            v-if="selectedSubItemData.image"
            :src="selectedSubItemData.image"
            :alt="selectedSubItemData.name"
            class="item-image"
          />
          <div v-else class="item-placeholder">
            No media available for {{ selectedSubItemData.name }}.
          </div>
        </div>
        <div class="col-8">
          <h3 class="text-center" v-if="selectedSubItemData.name">{{ selectedSubItemData.name }}</h3>
          <p v-if="selectedSubItemData.description" class="item-description">
            {{ selectedSubItemData.description }}
          </p>
          <p v-else class="item-description">
            Nenhuma descrição disponível para {{ selectedSubItemData.name }}.
          </p>
        </div>
      </div>

      <div v-else-if="selectedItem" class="row item-details">
        <div v-if="selectedItemData && selectedItemData.image" class="col-4">
          <img
            :src="selectedItemData.image"
            :alt="selectedItemData.alt"
            class="item-image"
          />
        </div>
        <div
          :class="{
            'col-8': selectedItemData && selectedItemData.image,
            'col-12': !selectedItemData || !selectedItemData.image,
          }"
        >
          <p
            class="item-description"
            v-if="selectedItemData && selectedItemData.description"
          >
            {{ selectedItemData.description }}
          </p>
          <p class="item-description" v-else>
            {{
              aboutData.selectableItems.find(
                (item) => item.value === selectedItem
              )?.defaultDescription || ""
            }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  padding: 20px;

  .row {
    display: flex;
    margin-bottom: 20px;

    & > [class*="col-"] {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .welcome-section {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    align-items: center;

    .welcome-image-container {
      width: calc(100% / 12 * 5);

      .welcome-image {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .welcome-text-container {
      width: calc(100% / 12 * 7);

      .welcome-description {
        // Add specific styles for welcome text if needed
      }
    }
  }

  .complementary-description {
    // Add specific styles for complementary description if needed
  }

  .item-selector, /* Style for the first selector */
  .sub-item-selector { /* Style for the second selector */
    width: 250px;
    margin-bottom: 15px;
  }

  .selectors-row { /* New style for the row containing the selectors */
    display: flex;
    flex-direction: column; /* Default to column for mobile */

    @media (min-width: 768px) { /* Tablet and Desktop */
      flex-direction: row;
      align-items: flex-start; /* Align items to the start in the row */

      & > div {
        margin-right: 15px; /* Add some spacing between selectors */

        &:last-child {
          margin-right: 0; /* Remove margin from the last selector */
        }
      }
    }
  }

  .item-details {
    align-items: center;

    .col-4 {
      .item-iframe,
      .item-image {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 5px;
      }

      .item-iframe {
        width: 450px;
        height: 300px;
      }

      .item-placeholder {
        padding: 15px;
        text-align: center;
        border: 1px dashed #ccc;
        border-radius: 5px;
      }
    }

    .col-8 {
      .item-description {
        padding: 15px;
      }
    }
  }
}

/* Mobile Styles (Example: Up to 767px) */
@media (max-width: 767px) {
  .about-page {
    .welcome-section {
      flex-direction: column;

      .welcome-image-container {
        display: none;
      }

      .welcome-text-container {
        width: 100%;
        padding: 0;

        .welcome-description {
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.6;
        }
      }
    }

    .complementary-description {
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .item-details {
      flex-direction: column;

      .col-4 {
        .item-image {
          width: 80%;
          max-width: 300px;
          margin: 0 auto 15px;
          border: 2px solid #333;
        }

        .item-iframe {
          width: 80%;
          max-width: 300px;
          height: 200px;
          margin: 0 auto 15px;
        }
      }

      .col-8 {
        .item-description {
          padding: 0;
          text-align: center;
        }
      }
    }

    .item-selector,
    .sub-item-selector { /* Style for the new selector in mobile */
      font-size: 1.1rem;
      width: 75dvw;
    }
  }
}

/* Tablet Styles (Example: 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
  .about-page {
    .item-details {
      flex-direction: row;
      align-items: center;

      .col-4 {
        .item-image {
          max-width: 150px;
          margin-right: 20px;
        }

        .item-iframe {
          max-width: 200px;
          height: 250px;
          margin-right: 20px;
        }
      }

      .col-8 {
        .item-description {
          padding: 0;
        }
      }
    }

    .item-selector,
    .sub-item-selector { /* Style for the new selector in tablet */
      width: auto; /* Adjust width for row layout */
      flex: 1; /* Distribute available space */
    }

    .selectors-row { /* Style for the row containing the selectors in tablet */
      align-items: center; /* Align vertically in the row */
    }
  }
}
</style>