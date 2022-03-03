<template>
  <fa-icon v-bind="{...$props, ...$attrs}" />
</template>

<script>

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTimes, faCheck, faKey, faMask, faAngleRight, faAngleLeft, faAngleDown, faBook, faExternalLinkAlt, faNewspaper, faBug, faTrashAlt, faVolumeMute, faVolumeUp, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;
library.add(faCog, faTimes, faCheck, faKey, faMask, faAngleRight, faAngleLeft, faAngleDown, faBook, faExternalLinkAlt, faNewspaper, faBug, faTrashAlt, faVolumeMute, faVolumeUp, faCommentsDollar);

export default {
  components: {
    'fa-icon': FontAwesomeIcon
  },
}

</script>
