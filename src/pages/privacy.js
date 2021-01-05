import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"
import { Helmet } from "react-helmet"

export default () => (
  <>
    <Helmet>
      <title>AR Bootcamp | Privacy Policy</title>
      <link rel="icon" type="image/png" href="favicon.png" sizes="512x512" />
    </Helmet>
    <Layout>
      <TextBlock id="privacy" title="Privacy Policy">
        <p>
          {`We don't really have a privacy policy because we don't track you all that much. We do use `}<a href="https://plausible.io">Plausible</a>{` for website analytics, but it is cookie-free and privacy focused so we only collect basic usage statistics.`}</p>
      </TextBlock>
    </Layout>
  </>
)
