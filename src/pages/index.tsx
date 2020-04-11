import React from "react";
import BaseLayout from "components/layouts/BaseLayout";
import {react as HomeContent} from "content/pages/Home.md";

const Home: React.FC = () => (
  <BaseLayout>
    <HomeContent/>
  </BaseLayout>
)

export default Home
