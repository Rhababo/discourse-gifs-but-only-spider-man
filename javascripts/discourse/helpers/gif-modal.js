import showModal from "discourse/lib/show-modal";

export function showGifModal() {
  console.log("showGifModal");
  console.log(this);
  console.log(this.attrs);
  showModal("gif", {
    title: themePrefix("gif.modal_title"),
  }).setProperties({
    customPickHandler: null,
  });
}
