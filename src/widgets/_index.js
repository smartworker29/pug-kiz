import * as cardList from "./card-list/card-list.js";
import "./navigation-link/navigation-link.js";
import siblingHover from "./slider/slider";
import "./scroll-events/scroll-events";
import "./support/support";
import "./features-table/features-table";
import benefitSlider from "./benefits/benefits";


import videoslider from "./video-slider/video-slider";

siblingHover().init();
benefitSlider().init();
videoslider().init();
// cardList.init();

import partnerSlider from "./partner-slider/partner-slider";
partnerSlider().init();

import newsSlider from "./news-slider/news-slider";
newsSlider().init();

import licenseSlider from "./license-type/license-type";
licenseSlider().init();

import tariffsSlider from "./tariffs/tariffs";
tariffsSlider().init();

import "./accordion/accordion";
import "./accordion-strategic-benefits/accordion-strategic-benefits";
import "./case-study/case-study";