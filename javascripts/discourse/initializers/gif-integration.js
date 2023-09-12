import { withPluginApi } from "discourse/lib/plugin-api";
import { showGifModal } from "../helpers/gif-modal";
import showModal from "discourse/lib/show-modal";
import { action } from "@ember/object";

export default {
  name: "discourse-gifs",

  initialize(container) {
    withPluginApi("0.1", (api) => {
      console.log(api.container);
      console.log(api.container.lookup("site:main"));
      if (!api.container.lookup("site:main").mobileView) {
        api.onToolbarCreate((toolbar) => {
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
