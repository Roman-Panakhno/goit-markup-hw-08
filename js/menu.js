(( ) => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu");
    const logoMenuRef = document.querySelector("[menu-logo-hidden]");

    menuBtnRef.addEventListener("click" , ( ) => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle("is-open");
        logoMenuRef.classList.toggle("logo-hidden");
    });
}) ( );