// Locale redirect functionality
function getBrowserLocales(options = {}) {
    const defaultOptions = {
        languageCodeOnly: false,
    };

    const opt = {
        ...defaultOptions,
        ...options,
    };

    const browserLocales =
        navigator.languages === undefined? [navigator.language] : navigator.languages;

    if (!browserLocales) {
        return undefined;
    }

    return browserLocales.map(locale => {
        const trimmedLocale = locale.trim();
        return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
    });

}

let userLanguages = [...new Set(getBrowserLocales({languageCodeOnly: true}))];
//console.log(userLanguages);

const languageRedirectNavigation = document.getElementById("locale-switcher-navigation");

userLanguages.forEach( userLanguage => {
    if(userLanguage === 'en') {
        //show popup
        languageRedirectNavigation.classList.remove("hidden-locale-switcher");
    }
})

const closelanguageRedirectNavigation = document.getElementById("ls-close");
closelanguageRedirectNavigation.addEventListener("click", () => {
    languageRedirectNavigation.classList.add("hidden-locale-switcher");
})