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
      <title>AR Bootcamp</title>
      <link rel="icon" type="image/png" href="favicon.png" sizes="512x512" />
    </Helmet>
    <Layout>
      <TextBlockImg
        id="404"
        title="That page does not exist"
        subtitle="Looks like you took a wrong turn somewhere"
      ></TextBlockImg>
    </Layout>
  </>
)
