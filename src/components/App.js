import bag from './assets/icons/bag.svg';
import earth from './assets/icons/earth.svg';
import time from './assets/icons/time.svg';

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <header className="header">
          <div className="header__logo">
            <span className="header__logo__first">Find</span>{' '}
            <span className="header__logo__second">Jobs</span>
          </div>

          <div className="header__search">
            <div className="header__container-input">
              <img src={bag} alt="" className="header__bag-img" />
              <input
                type="text"
                className="header__input"
                placeholder="Title, companies, expertise or benefits"
              />
              <button className="header__button">Search</button>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="main__filters">
            <label htmlFor="full-time" className="label">
              <input type="checkbox" id="full-time" className="checkbox-type" />
              <span className="label__title">Full time</span>
            </label>

            <div className="location">
              <h3 className="location__title">location</h3>

              <div className="location__search">
                <img src={earth} alt="" className="location__img" />
                <input
                  type="text"
                  className="location__input"
                  placeholder="City, state, zip code or country"
                />
              </div>

              <ul className="location__list">
                <li className="location__item">
                  <label htmlFor="label1" className="location__city">
                    <input type="checkbox" id="label1" className="location__checkbox" />
                    London
                  </label>
                </li>
                <li className="location__item">
                  <label htmlFor="label1" className="location__city">
                    <input type="checkbox" id="label1" className="location__checkbox" />
                    London
                  </label>
                </li>
                <li className="location__item">
                  <label htmlFor="label1" className="location__city">
                    <input type="checkbox" id="label1" className="location__checkbox" />
                    London
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="main__vacations">
            <div className="vacation-box">
              <div className="vacation-box__img">not found</div>

              <div className="vacation-box__information">
                <h4 className="vacation-box__company">Kasisto</h4>
                <h4 className="vacation-box__position">Front-End Software Engineer</h4>

                <div className="vacation-box__bottom">
                  <div className="vacation-box__full-time">Full time</div>

                  <div className="vacation-box__location">
                    <div className="vacation-box__city">
                      <img src={earth} alt="" className="vacation-box__icon" />
                      <span>New York</span>
                    </div>
                    <div className="vacation-box__city">
                      <img src={time} alt="" className="vacation-box__icon" />
                      <span>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vacation-box">
              <div className="vacation-box__img">not found</div>

              <div className="vacation-box__information">
                <h4 className="vacation-box__company">Kasisto</h4>
                <h4 className="vacation-box__position">Front-End Software Engineer</h4>

                <div className="vacation-box__bottom">
                  <div className="vacation-box__full-time">Full time</div>

                  <div className="vacation-box__location">
                    <div className="vacation-box__city">
                      <img src={earth} alt="" className="vacation-box__icon" />
                      <span>New York</span>
                    </div>
                    <div className="vacation-box__city">
                      <img src={time} alt="" className="vacation-box__icon" />
                      <span>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vacation-box">
              <div className="vacation-box__img">not found</div>

              <div className="vacation-box__information">
                <h4 className="vacation-box__company">Kasisto</h4>
                <h4 className="vacation-box__position">Front-End Software Engineer</h4>

                <div className="vacation-box__bottom">
                  <div className="vacation-box__full-time">Full time</div>

                  <div className="vacation-box__location">
                    <div className="vacation-box__city">
                      <img src={earth} alt="" className="vacation-box__icon" />
                      <span>New York</span>
                    </div>
                    <div className="vacation-box__city">
                      <img src={time} alt="" className="vacation-box__icon" />
                      <span>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vacation-box">
              <div className="vacation-box__img">not found</div>

              <div className="vacation-box__information">
                <h4 className="vacation-box__company">Kasisto</h4>
                <h4 className="vacation-box__position">Front-End Software Engineer</h4>

                <div className="vacation-box__bottom">
                  <div className="vacation-box__full-time">Full time</div>

                  <div className="vacation-box__location">
                    <div className="vacation-box__city">
                      <img src={earth} alt="" className="vacation-box__icon" />
                      <span>New York</span>
                    </div>
                    <div className="vacation-box__city">
                      <img src={time} alt="" className="vacation-box__icon" />
                      <span>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
