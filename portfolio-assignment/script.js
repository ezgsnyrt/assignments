function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/* Pop-ups */

document.addEventListener("DOMContentLoaded", function () {
  const modalTriggers = document.querySelectorAll(".modal-open");
  const modalCloseTrigger = document.querySelectorAll(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const { popupTrigger } = trigger.dataset;
      const popupModal = document.querySelector(
        `[data-popup-modal="${popupTrigger}"]`
      );

      function closeModal() {
        popupModal.classList.remove("show");
        overlay.classList.remove("overlay-on");
      }

      // Open the modals:
      popupModal.classList.add("show");
      overlay.classList.add("overlay-on");

      // Close modal when clicking outside (on the overlay):
      overlay.addEventListener("click", () => {
        closeModal();
      });

      // Close modal when the "Escape" key is pressed:
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && popupModal.classList.contains("show")) {
          closeModal();
        }
      });

      // Close modals when clicking on X:
      modalCloseTrigger.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const modalWindow = this.parentNode.parentNode;
          modalWindow.classList.remove("show");
          overlay.classList.remove("overlay-on");
        });
      });
    });
  });
});

