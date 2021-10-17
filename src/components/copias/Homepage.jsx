/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getStaticPageName"] }] */
import { createPopup } from '@typeform/embed';
import React from 'react';
import styled from 'styled-components';
import StaticPage from '../StaticPage';
import HomepageAboveTheFold from './Components/HomepageAboveTheFold';
import Promotions from './Components/Promotions';
import SocialProofing from './Components/SocialProofing';
import TopDestinations from './Components/TopDestinations';
import PressFirstSection from './Components/PressFirstSection';
// used this relative div to make it works as absolute parent of sticky bar
const PageContainer = styled.div`
  position: relative;
`;

// popup home
createPopup('EmcavTKa', {
  open: 'time',
  openValue: 6,
});
/**
 * @description Homepage page component
 */
class Homepage extends StaticPage {
  constructor() {
    super();
    this.pressPage = 'press_page';
  }

  getStaticPageName() {
    return 'homepage';
  }

  getExpandableSections = () => 'search_bar';

  render() {
    return (
      <PageContainer>
        {this.getDynamicMetada()}
        <HomepageAboveTheFold translations={this.state.translations} destinations={this.state.destinations} />
        <Promotions translations={this.state.translations} />
        <SocialProofing translations={this.state.translations} />
        <TopDestinations translations={this.state.translations} />
        <PressFirstSection press={this.state.press} />
      </PageContainer>
    );
  }
}

export default Homepage;
