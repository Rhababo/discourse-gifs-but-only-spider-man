import showModal from "discourse/lib/show-modal";

export function showGifModal() {
  if(!this.parentView.attrs.topic.value.tags.includes(settings.tags)) {
    return;
  }
  showModal("gif", {
    title: themePrefix("gif.modal_title"),
  }).setProperties({
    customPickHandler: null,
  });
}
