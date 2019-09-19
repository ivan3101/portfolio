const path = require("path");
const locales = require("./config/i18n");

const removeTrailingSlash = path => path === "/" ? path : path.replace(/\/$/, '');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
    ? page.path
    : `${locales[lang].path}${page.path}`;

    return createPage ({
      ...page,
      path: removeTrailingSlash(localizedPath),
      context: {
        ...page.context,
        locale: locales[lang]
      } 
    })
  })
}
