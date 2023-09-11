import showModal from "discourse/lib/show-modal";

export function showGifModal() {
  console.log("showGifModal");
  console.log(this);
  console.log(this.attrs);
  console.log(this.parentView.attrs.topic.value.tags);
  console.log(settings.tags);
  console.log(this.parentView.attrs.topic.value.tags.includes(settings.tags));
  showModal("gif", {
    title: themePrefix("gif.modal_title"),
  }).setProperties({
    customPickHandler: null,
  });
}
