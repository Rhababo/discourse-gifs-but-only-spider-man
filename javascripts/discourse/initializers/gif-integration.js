import { withPluginApi } from "discourse/lib/plugin-api";
import { showGifModal } from "../helpers/gif-modal";
import showModal from "discourse/lib/show-modal";
import { action } from "@ember/object";

export default {
  name: "discourse-gifs",

  initialize(container) {
    withPluginApi("0.1", (api) => {
      if (!api.container.lookup("site:main").mobileView) {
        api.onToolbarCreate((toolbar) => {
          const createTopicButton = document.querySelector("#create-topic");
          if(createTopicButton) {
            return;
          }
          if(!toolbar.context.attrs.outletArgs.composer.topic.tags.includes(settings.tags)) {
            return;
          }
          if (toolbar.context.composerEvents) {
            toolbar.addButton({
              title: themePrefix("gif.composer_title"),
              id: "gif_button",
              group: "extras",
              icon: "discourse-gifs-gif",
              action: showGifModal,
            });
          }
        });
      }
    });

    // for old tenor gifs compat
    const caps = container.lookup("capabilities:main");
    if (caps.isSafari || caps.isIOS) {
      document.documentElement.classList.add("discourse-gifs-with-img");
    }
  },
};
