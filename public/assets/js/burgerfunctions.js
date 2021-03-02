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

  const eatTheBurgerBtn = document.querySelectorAll(".change-devoured");

  if (eatTheBurgerBtn) {
    eatTheBurgerBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        const eaten = e.target.getAttribute("data-newdevoured");

        const eatenStatus = {
          devoured: eaten,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(eatenStatus),
        }).then((response) => {
          console.log(response);
          if (response.ok) {
            console.log(`Burger was now: ${eaten}`);
            location.reload();
          } else {
            alert("Something is not right");
          }
        });
      });
    });
  }
});
