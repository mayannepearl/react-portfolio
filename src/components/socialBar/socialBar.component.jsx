import React from 'react';
import './socialBar.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faLinkedin, faInstagram, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';


const SocialBar = () => {
  const social = [
    {
      name: "facebook",
      url: "https://facebook.com/trchristensen",
      icon: faFacebook,
    },
    {
      name: "twitter",
      url: "http://twitter.com/shillainmanila",
      icon: faTwitter,
    },
    {
      name: "google-plus",
      url: "http://googleplus.com/trchristensen",
      icon: faGoogle,
    },
    {
      name: "linkedin",
      url: "#",
      icon: faLinkedin
    },
    {
      name: "instagram",
      url: "#",
      icon: faInstagram
    },
    {
      name: "github",
      url: "http://github.com/trchristensen",
      icon: faGithub
    },
    {
      name: "skype",
      url: "#",
      icon: faSkype
    },
  ];

  

  return (
    <>
      <div className="sidebar__social items-start hidden lg:flex lg:items-center ml-4 pt-4 lg:pt-0">
        <div className="social">
          <ul className="social__menu">
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url} className="lg:p-2 text-lg">
                  <FontAwesomeIcon icon={network.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
  
};

export default SocialBar;