import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GetUrl } from '../../../services/WebsiteServices';
import { SEARCH_URL_PATH } from '../../../constants/Urls';
import { MOBILE_NAV_BACKGROUND_GREY, MOBILE_NAV_COLLAPSED_ITEMS_GREY, FONT_SPACE_MONO } from '../../../constants/Css';
import ButtonGiveaway from '../DesktopNavBar/Components/button_Giveaway';

const NavMenuContainer = styled.div``;

const NavbarToggle = styled.button`
  position: relative;
  float: right;
  top: 10px;
  left: 20px;
  border: none;
  padding: 9px 0;
  margin-top: 4px;
  margin-bottom: 8px;
  background-color: transparent;

  div {
    background-color: #000;
    width: 22px;
    height: 2px;
    margin-top: 4px;
  }

  :focus {
    outline: none;
  }
`;

const NavMenu = styled.ul`
  background-color: ${MOBILE_NAV_BACKGROUND_GREY};
  color: #fff;
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 3;

  li {
    margin: 0;
    font-family: ${FONT_SPACE_MONO};
    position: relative;

    a {
      color: #fff;
      padding: 15px;
      border-bottom: 2px solid #171717;
      display: block;
      font-size: 15px;
      text-decoration: none;
      text-transform: uppercase;
      line-height: 20px;
    }

    .active,
    a:focus {
      background-color: #171717;
      outline: none;
    }

    .collapsableList {
      list-style: none;
      padding: 0;

      li {
        a {
          color: ${MOBILE_NAV_COLLAPSED_ITEMS_GREY};
          font-size: 14px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const ChevronRight = styled.div`
  width: 6px;
  height: 6px;
  border-top: 2px solid #777;
  border-right: 2px solid #777;
  position: absolute;
  right: 25px;
  transform: rotate(45deg);
  top: 22px;
`;

const BorderButtonGiveaway = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  background: #393939;
  border: none;
  border-radius: 3px;
`;
const LANGUAGES_DROPDOWN = 'languages';
const DESTINATIONS_DROPDOWN = 'destinations';

/**
 * @description MobileNavMenu component that collapses/uncollapses the menu on mobile
 */
class MobileNavMenu extends Component {
  state = {
    navMenuOpen: false,
    dropdownOpen: '',
  };

  handleLanguageChange = language => {
    this.props.changeLanguage(language);
    this.toggleNavMenu();
  };

  toggleNavMenu = () => {
    this.setState(prevState => ({
      navMenuOpen: !prevState.navMenuOpen,
      dropdownOpen: '',
    }));
  };

  toggleItemDropdown = dropdownType => {
    this.setState(prevState => ({
      dropdownOpen: dropdownType !== prevState.dropdownOpen ? dropdownType : '',
    }));
  };

  render() {
    return (
      <NavMenuContainer>
        <NavbarToggle onClick={this.toggleNavMenu} type="button" tab-index="0">
          <div />
          <div />
          <div />
        </NavbarToggle>
        {this.state.navMenuOpen && (
          <NavMenu>
            <li>
              <BorderButtonGiveaway>
                <ButtonGiveaway />
              </BorderButtonGiveaway>
            </li>
            <li className="destinationsDropdown">
              <a
                className={this.state.dropdownOpen === DESTINATIONS_DROPDOWN ? 'active' : ''}
                onClick={() => this.toggleItemDropdown(DESTINATIONS_DROPDOWN)}
              >
                {this.props.translations.destinations_dropdown_label}
                <ChevronRight />
              </a>
              {// Destination Links
              this.state.dropdownOpen === DESTINATIONS_DROPDOWN && (
                <ul className="collapsableList">
                  {this.props.destinations.map((destination, index) => (
                    <li key={index}>
                      <a
                        href={GetUrl(destination.url + SEARCH_URL_PATH, this.props.currentLocale)}
                        onClick={this.toggleNavMenu}
                      >
                        {destination.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {// Website Navigation Links
            this.props.translations.header_links &&
              this.props.translations.header_links.map(({ link }, index) => (
                <li key={index}>
                  <a href={link && GetUrl(link.href, this.props.currentLocale)} onClick={this.toggleNavMenu}>
                    {link && link.title}
                  </a>
                </li>
              ))}
            <li className="languagesDropdown">
              <a
                className={this.state.dropdownOpen === LANGUAGES_DROPDOWN ? 'active' : ''}
                onClick={() => this.toggleItemDropdown(LANGUAGES_DROPDOWN)}
              >
                {this.props.languages.current}
                <ChevronRight />
              </a>
              {// Language Selection Links
              this.state.dropdownOpen === LANGUAGES_DROPDOWN && (
                <ul className="collapsableList">
                  {this.props.languages.selectable.map((language, index) => (
                    <li key={index} onClick={() => this.handleLanguageChange(language.locale_key)}>
                      <a>{language.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="tel:+1 (855) 686-2747">+1 (855) 686-2747</a>
            </li>
          </NavMenu>
        )}
      </NavMenuContainer>
    );
  }
}

MobileNavMenu.propTypes = {
  changeLanguage: PropTypes.func,
  translations: PropTypes.object,
  languages: PropTypes.object,
  destinations: PropTypes.array,
  currentLocale: PropTypes.string,
};

export default MobileNavMenu;
