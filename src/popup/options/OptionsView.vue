<template>
  <div>
    <div class="loader" v-if="initialLoad">
      <loader />
    </div>
    <div v-else>
      <section class="header no-shadow">
        <button class="close-button" @click="$emit('close')"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
        <h2><font-awesome-icon icon="cog" /> {{ $t('settings.title') }}</h2>
      </section>
      <section>
        <div class="section-body">
          <h3>{{ $t('settings.passwordHelp') }}</h3>
          <div class="option">
            {{ $t('settings.showTooltip') }} <toggle-button :value="passwordTooltipEnabled" @clicked="onOptionChange({ 'passwordTooltipEnabled': $event })" />
          </div>
        </div>
      </section>
      <section>
        <div class="section-body">
          <h3>{{ $t('settings.domainBlocking') }}</h3>
          <div class="option">
            {{ $t('settings.blockDomains') }} <toggle-button :value="domainBlockingEnabled" @clicked="onOptionChange({ 'domainBlockingEnabled': $event })" />
          </div>
          <h4>{{ $t('settings.blocklist') }}</h4>
          <p>{{ $t('settings.lastUpdated') }} {{ blocklistUpdated ? formatDate(blocklistUpdated) : '' }}</p>
          <button @click="updateBlocklist" :disabled='updatingBlocklist'>{{ updatingBlocklist ? $t('settings.updating') : $t('settings.updateNow') }}</button>
          <p v-if="blocklistUpdateResult"
            :style="{ color: blocklistUpdateResult.success ? 'green' : 'red' }">
            {{ blocklistUpdateResult.success ? $t('settings.updateSucceeded') : $t('settings.updateFailed') + blocklistUpdateResult.error }}
          </p>
        </div>
      </section>
      <section>
        <div class="section-body">
          <h3>{{ $t('settings.externalLinks') }}</h3>
          <div v-if="manifestVersion === 'v3'">
            <i>{{ $t('settings.featureNotAvailable') }}</i>
          </div>
          <div v-else class="option">
            {{ $t('settings.warnExternalLinks') }} <toggle-button :value="externalLinkEnabled" @clicked="onOptionChange({ 'externalLinkEnabled': $event })" />
          </div>
        </div>
      </section>
      <section>
        <div class="section-body">
          <h3>{{ $t('settings.phishingPopup') }}</h3>
          <div class="option">
            {{ $t('settings.enablePhishingPopup') }} <toggle-button :value="phishingPopupEnabled" @clicked="onOptionChange({ 'phishingPopupEnabled': $event })" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import { DEFAULT_OPTIONS } from '../../options';

import { formatDate } from '../../util';

import Loader from '../../components/Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      initialLoad: true,
      updatingBlocklist: false,
      blocklistUpdated: null,
      blocklistUpdateResult: null,
      manifestVersion: __MANIFEST_VERSION__,
      ...DEFAULT_OPTIONS,
    };
  },
  async mounted() {
    browser.storage.onChanged.addListener(this.onStorageChanged);

    const options = await browser.storage.local.get(Object.keys(DEFAULT_OPTIONS));
    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }

    const other = await browser.storage.local.get([
      'blocklistUpdated',
    ]);
    this.blocklistUpdated = other.blocklistUpdated;

    this.initialLoad = false;
  },
  methods: {
    formatDate,
    onStorageChanged(changes, areaName) {
      if (areaName !== 'local') return;

      if (changes.blocklistUpdated) {
        this.blocklistUpdated = changes.blocklistUpdated.newValue;
      }

      for (const optionKey of Object.keys(DEFAULT_OPTIONS)) {
        if (changes[optionKey]) {
          this[optionKey] = changes[optionKey].newValue;
        }
      }
    },
    async onOptionChange(change) {
      await browser.storage.local.set(change);
    },
    async updateBlocklist() {
      this.updatingBlocklist = true;
      this.blocklistUpdateResult = await browser.runtime.sendMessage({ type: 'updateBlocklist' });
      this.updatingBlocklist = false;
    }
  },
  beforeDestroy() {
    if (browser.storage.onChanged.hasListener(this.onStorageChanged)) {
      browser.storage.onChanged.removeListener(this.onStorageChanged);
    }
  },
}
</script>

<style scoped lang="scss">

.loader {
  height: var(--popup-main-max-height);
  overflow: hidden;
}

.option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section.header {
  background: none;
  color: #333;
  padding: 0;
  margin-top: 0.8em;
}

</style>
