document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM is Loaded");
  }

  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById("burg").value.trim(),
      };

      console.log(newBurger);
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("burg").value = "";

        location.reload();
      });
    });
  }
});
