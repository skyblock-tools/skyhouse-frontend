const DEFAULT = "en-us";
const LANGUAGES = ["en-us"];
const locale = localStorage.getItem("locale") ?? DEFAULT;
const keys = fetchKeys().then((_) => {});

export const setLocale = (l) => {
  localStorage.setItem("locale", LANGUAGES.indexOf(l) !== -1 ? l : locale);
  location.reload();
};

export const getLocale = () => {
  return locale;
};

export const t = (translationKey, args = {}) => {
  let keyTree = keys;
  for (const section of translationKey.split(".")) {
    if (!(section in keyTree)) {
      return keyTree._config.not_found;
    }
    keyTree = keyTree[section];
  }

  if (typeof keyTree !== "string") {
    return keyTree._config.not_found;
  }

  for (const variable of Object.keys(args)) {
    keyTree = keyTree.replace("{{" + variable + "}}", args[variable]);
  }

  return keyTree;
};

export default t;
