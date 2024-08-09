import * as React from "react";

import Layout from "../components/Layout";
import SeoWrap from "../components/SeoWrap";

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export const Head = () => <SeoWrap title="404: Not Found" />;

export default NotFoundPage;
