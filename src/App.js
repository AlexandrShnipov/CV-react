import React, {useEffect, useState} from 'react';
import './reset.css';
import './index.css';
import s from './App.module.css';
import {Contacts} from './contacts/Contacts';
import {Experience} from './experience/Experience';
import {Education} from './education/Education';
import {stateEng} from './state/stateEng';
import {stateBy} from './state/stateBy';
import {statePl} from './state/statePl';
import PrintButton from './buttonForPrint/ButtonForPrint';
import ButtonForPrint from './buttonForPrint/ButtonForPrint';

const App = () => {

  const [currentState, setCurrentState] = useState(stateEng);
  const {about, location, skills, portfolio, summary, summaryTitle, skillsTitle, linkOpenPortfolio} = currentState;

  const makeEnglish = () => {
    setCurrentState(stateEng);
  };
  const makeBelarus = () => {
    setCurrentState(stateBy);
  };
  const makePoland = () => {
    setCurrentState(statePl);
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.photoWrap}>
          <img className={s.photo} src={about.photo} alt="my photo"/>
        </div>
        <div className={s.changeLanguageButtonBlockPrint}>
          <button className={currentState === stateEng
            ? `${s.changeLanguageButton} ${s.active}`
            : s.changeLanguageButton}
                  onClick={makeEnglish}>ENG
          </button>
          <button className={currentState === stateBy
            ? `${s.changeLanguageButton} ${s.active}`
            : s.changeLanguageButton}
                  onClick={makeBelarus}>BLR
          </button>
          <button className={currentState === statePl
            ? `${s.changeLanguageButton} ${s.active}`
            : s.changeLanguageButton}
                  onClick={makePoland}>POL
          </button>
        </div>
        <div className={s.headerContent}>
          <h1 className={s.mainTitle}>
            <p className={s.mainTitleName}>{about.name} {about.surname}</p>
            <p className={s.mainTitleProfession}>{about.profession}</p>
          </h1>
          <div className={s.changeLanguageButtonBlock}>
            <button className={currentState === stateEng
              ? `${s.changeLanguageButton} ${s.active}`
              : s.changeLanguageButton}
                    onClick={makeEnglish}>ENG
            </button>
            <button className={currentState === stateBy
              ? `${s.changeLanguageButton} ${s.active}`
              : s.changeLanguageButton}
                    onClick={makeBelarus}>BLR
            </button>
            <button className={currentState === statePl
              ? `${s.changeLanguageButton} ${s.active}`
              : s.changeLanguageButton}
                    onClick={makePoland}>POL
            </button>
            <ButtonForPrint/>
          </div>

          <Contacts/>
        </div>

      </header>
      <main className={s.main}>
        <div className={s.mainContainer}>
          <div className={s.mainContentLeft}>
            <div className={s.location}>
              <img src={location.icon} alt="icon location"/>
              <span>{location.country},&nbsp; </span>
              <span> {location.city}</span>
            </div>
            <div>
              <h2>{summaryTitle}</h2>
              <p className={s.summary}>{summary}</p>
            </div>

            <div className={s.skillsBlock}>
              <h2>{skillsTitle}</h2>
              <ul className={s.skillsList}>
                {skills.map((el, i) => (
                  <li className={s.skillsItem} key={i}>{el}</li>
                ))}
              </ul>
            </div>
            <div className={s.porfolioBlock}>
              <img className={s.QrCode} src={portfolio.qrCode} alt={'link for portfolio'}/>
              <a className={s.porfolioLink} href={portfolio.link}>
                {linkOpenPortfolio}
                <img src={portfolio.finger} alt="link for opened portfolio"/>
              </a>
            </div>
          </div>
          <div className={s.mainContentRight}>
            <Experience currentState={currentState}/>
            <Education currentState={currentState}/>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
