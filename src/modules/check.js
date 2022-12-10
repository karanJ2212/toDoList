export const check = () => {
  const checkbox = document.querySelectorAll(".check");

  checkbox.forEach((box) => {
    box.addEventListener("click", (e) => {
      console.log(e.currentTarget.nextElementSibling);
      e.currentTarget.nextElementSibling.classList.toggle("checked");
      const { id } = e.currentTarget.parentElement;
      console.log(id);
      const Storage2 = JSON.parse(localStorage.getItem("tasks")) || [];
      Storage2[id - 1].completed =
        e.currentTarget.nextElementSibling.classList.contains("checked")
          ? true
          : false;
      localStorage.setItem("tasks", JSON.stringify(Storage2));
    });
  });
};
