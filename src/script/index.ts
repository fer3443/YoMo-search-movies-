(() => {
  const buttonClose = document.querySelector("#nav-close") as HTMLDivElement;
  const buttonShow = document.querySelector("#nav-toggle") as HTMLDivElement;
  const navMenu = document.querySelector("#nav-menu") as HTMLDivElement;
  const handleMenu = (): void => {
    if (navMenu) {
      navMenu.classList.toggle("show-menu");
    }
  };

	buttonClose.addEventListener("click", handleMenu)
	buttonShow.addEventListener("click", handleMenu)
})();
