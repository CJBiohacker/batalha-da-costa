<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const aboutData = ref({
  welcomeImage: "/src/assets/images/BDC-logo.svg",
  welcomealt: "Rap Battle Event",
  welcomeDescription: `Welcome to the electrifying world of [Your Rap Battle Event Name]!
  Prepare for intense lyrical showdowns, showcasing the raw talent and
  creative wordplay of MCs from all walks of life. Our event is more
  than just a competition; it's a vibrant celebration of hip-hop culture,
  community, and the power of spoken word. Join us as we witness history
  in the making, one rhyme at a time.`,
  complementaryDescription: `[Expand on the history, mission, or values of your Rap Battle event here.
  You might want to include information about past events, the organizers'
  vision, or how the event contributes to the local community. Highlight
  what makes your Rap Battle unique and engaging for both participants
  and spectators.]`,
  selectableItems: [
    {
      value: "rap-battle",
      label: "Selecione uma opção para saber mais",
      defaultDescription: "",
    },
    {
      value: "locations",
      label: "Our Locations",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1299.704625985362!2d-43.77763776409856!3d-22.872043054446646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1744397716347!5m2!1spt-PT!2sbr",
      description: `Explore the diverse and exciting venues that host our Rap Battles.
      From intimate local spots to larger event spaces, each location brings
      its own unique atmosphere to the competition. [Provide details about
      the types of locations you use, their significance, or any interesting
      facts.]`,
    },
    {
      value: "mcs",
      label: "Featured MCs",
      image: "/src/assets/images/BDC-logo.svg",
      alt: "Featured MC",
      description: `Meet some of the incredibly talented MCs who have graced our stage.
    These lyrical warriors bring their unique styles, stories, and flows
    to the battle, captivating audiences with their skill and passion.
    [You could potentially link to individual MC profiles or provide brief
    biographies here.]`,
    },
    {
      value: "organizers",
      label: "The Organizers",
      image: "/src/assets/images/BDC-logo.svg",
      alt: "Organizer",
      description: `Behind every successful Rap Battle is a dedicated team of organizers
    who work tirelessly to bring this event to life. Learn more about the
    passionate individuals who curate the battles, manage the logistics,
    and foster the vibrant community surrounding [Your Rap Battle Event Name].`,
    },
  ],
});

const selectedItem = ref("rap-battle");
const isMobile = ref(false);

const selectedItemData = computed(() => {
  return aboutData.value.selectableItems.find(
    (item) => item.value === selectedItem.value
  );
});

onMounted(() => {
  const handleResize = () => {
    isMobile.value = window.innerWidth <= 767;
  };

  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
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

    <div class="row">
      <div class="col-12">
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

  .item-selector {
    width: 250px;
    margin-bottom: 15px;

    // You can further style the v-select here if needed
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

    .item-selector {
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
  }
}
</style>
