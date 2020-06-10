import * as cardList from "./card-list/card-list.js";
import "./navigation-link/navigation-link.js";
import siblingHover from "./slider/slider";
import "./scroll-events/scroll-events";
import benefitSlider from "./benefits/benefits";

siblingHover().init();
benefitSlider().init();
// cardList.init();

import partnerSlider from "./partner-slider/partner-slider";
partnerSlider().init();

import newsSlider from "./news-slider/news-slider";
newsSlider().init();