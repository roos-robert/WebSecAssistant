<template>
  <div>
    <tooltip
      v-if="activeInput && showTooltip"
      :anchorElement="activeInput"
      title="Tips!"
      @close="showTooltip = false"
    >
      <p class="tooltip-text">
        Vill du ha hjälp med att skapa säkra lösenord?
        <a href="#" @click="tooltipClicked">Klicka här!</a>
      </p>
    </tooltip>
    <popup-wrapper v-if="showPopup" @close="showPopup = false" :initialView="popupInitialView" />
  </div>
</template>

<script>
import Tooltip from "../components/Tooltip.vue";
import PopupWrapper from "./PopupWrapper.vue";

// TODO: Move this to backend or options?
const WEBMAIL_URLS = [
  "https://webmail.simply.com",
  "https://mail.company.com/webmail",
  "https://mail.google.com/mail"
];

export default {
  name: "App",
  components: { Tooltip, PopupWrapper },
  data: () => ({
    showTooltip: false,
    showPopup: false,
    popupInitialView: 'home',
    activeInput: null,
  }),
 async mounted() {
    const options = await browser.storage.local.get(['phishingPopupEnabled', 'passwordTooltipEnabled']);

    if (options.phishingPopupEnabled && WEBMAIL_URLS.some(webmailUrl => window.location.href.startsWith(webmailUrl))) {
      this.popupInitialView = 'phishing';
      this.showPopup = true;
    }

    if (!options.passwordTooltipEnabled)
      return;

    this.focusEventHandler = document.addEventListener(
      "focus",
      (ev) => {
        if (ev.target.matches('input[type="password"]')) {
          this.checkPasswordGuide(ev);
        }
      },
      true
    );

    const checkBlur = (target) => {
      if (!this.activeInput) return;

      const shadowRoot = this.$root.$options.shadowRoot;

      if (
        target !== this.activeInput &&
        target !== shadowRoot.host &&
        target.getRootNode() !== shadowRoot
      ) {
        this.activeInput = null;
        this.showTooltip = false;
        this.showPopup = false;
      }
    };

    this.blurEventHandler = document.addEventListener(
      "blur",
      (ev) => {
        checkBlur(ev.relatedTarget || ev.explicitOriginalTarget);
      },
      true
    );
    this.mousedownEventHandler = document.addEventListener(
      "mousedown",
      (ev) => {
        checkBlur(ev.target);
      },
      true
    );
  },
  beforeDestroy() {
    if (this.focusEventHandler) document.removeEventListener(this.focusEventHandler);
    if (this.blurEventHandler) document.removeEventListener(this.blurEventHandler);
    if (this.mousedownEventHandler) document.removeEventListener(this.mousedownEventHandler);
  },
  methods: {
    tooltipClicked() {
      this.showTooltip = false;
      this.showPopup = true;
    },
    async checkPasswordGuide(ev) {
      //var passwordInputCount = document.querySelectorAll('input[type=password]').length;
      let guideShown = new Set([]);
      let url = window.location.href;
      let domain = new URL(url);
      domain = domain.hostname;

      const result = await browser.storage.local.get("guideShown");
      if (result.guideShown !== undefined) {
        guideShown = new Set(result.guideShown);
      }

      if (!guideShown.has(domain) || document.querySelectorAll("input[type=password]").length === 2) {
        guideShown.add(domain);
        await browser.storage.local.set({ guideShown });
        //this.showTooltip = true;
        this.popupInitialView = 'password';
        this.showPopup = true;
        this.activeInput = ev.target;
        if (this.activeInput == ev.target && this.showPopup) {
          return;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "../style/global.scss";
</style>

<style lang="scss" scoped>
.tooltip-text {
  width: 150px;
  font-size: 12px;
}
</style>
