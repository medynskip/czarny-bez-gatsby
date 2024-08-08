/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

import React from 'react';

import QueryClientWrap from './src/providers/queryClientProviderWrap';

export const wrapRootElement = ({ element }) => {
  return <QueryClientWrap>{element}</QueryClientWrap>;
};