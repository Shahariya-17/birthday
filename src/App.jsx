import { useState } from "react";
import "./App.css";

function Icon({ name }) {
  const icons = {
    gift: (
      <>
        <path d="M3 10h18v10H3V10Z" />
        <path d="M2 7h20v3H2V7Z" />
        <path d="M12 7v13" />
        <path d="M12 7S8.5 7 8 4.8C7.7 3.5 8.8 2.5 10 3c1.6.7 2 4 2 4Z" />
        <path d="M12 7s3.5 0 4-2.2C16.3 3.5 15.2 2.5 14 3c-1.6.7-2 4-2 4Z" />
      </>
    ),

    star: (
      <path d="m12 2 2.8 6.2 6.7.7-5 4.5 1.5 6.6-6-3.4-6 3.4 1.5-6.6-5-4.5 6.7-.7L12 2Z" />
    ),

    sparkle: (
      <>
        <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
        <path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
      </>
    ),

    letter: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m9 12-1 9 4-2 4 2-1-9" />
        <path d="m12 5 .8 1.6 1.8.2-1.3 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.3-1.2 1.8-.2L12 5Z" />
      </>
    ),

    flower: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10C9 8 9 4 12 3c3 1 3 5 0 7Z" />
        <path d="M14 12c2-3 6-3 7 0-1 3-5 3-7 0Z" />
        <path d="M12 14c3 2 3 6 0 7-3-1-3-5 0-7Z" />
        <path d="M10 12c-2 3-6 3-7 0 1-3 5-3 7 0Z" />
      </>
    ),

    arrow: (
      <path d="M5 12h14M13 6l6 6-6 6" />
    ),

    check: (
      <path d="m5 12 4.5 4.5L19 7" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function App() {
  const [started, setStarted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [finalOpen, setFinalOpen] = useState(false);

  const cards = [
    {
      id: 1,
      number: "01",
      icon: "award",
      title: "Congratulations",
      subtitle: "A special celebration",
      className: "card-peach",
      type: "congratulations",
    },
    {
      id: 2,
      number: "02",
      icon: "letter",
      title: "A Little Letter",
      subtitle: "A few words for you",
      className: "card-pink",
      type: "letter",
    },
    {
      id: 3,
      number: "03",
      icon: "flower",
      title: "Best Wishes",
      subtitle: "From the heart",
      className: "card-mint",
      type: "wishes",
    },
    {
      id: 4,
      number: "04",
      icon: "star",
      title: "A Bright Year",
      subtitle: "Your next chapter",
      className: "card-blue",
      type: "future",
    },
  ];

  const closeCard = () => {
    setActiveCard(null);
  };

  return (
    <main className="birthday-page">

      {/* BACKGROUND DECORATION */}
      <div className="light light-one"></div>
      <div className="light light-two"></div>
      <div className="light light-three"></div>
      <div className="light light-four"></div>

      <div className="floating-dots">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {!started ? (
        /* =========================================
           INTRO SCREEN
        ========================================= */
        <section className="intro-screen">

          <div className="top-label">
            <span>✦</span>
            A LITTLE CELEBRATION
            <span>✦</span>
          </div>

          <div className="intro-art">

            <div className="art-ring ring-one"></div>
            <div className="art-ring ring-two"></div>
            <div className="art-ring ring-three"></div>

            <div className="color-bubble bubble-one"></div>
            <div className="color-bubble bubble-two"></div>
            <div className="color-bubble bubble-three"></div>

            <div className="gift-icon">
              <Icon name="gift" />
            </div>

            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✧</span>
            <span className="art-star star-three">✦</span>

          </div>

          <p className="hello-text">
            HELLO, RODELA
          </p>

          <h1 className="intro-title">
            Today is
            <span>your special day.</span>
          </h1>

          <p className="intro-description">
            A small colorful birthday experience,
            <br />
            created to make your day a little brighter.
          </p>

          <button
            className="start-button"
            onClick={() => setStarted(true)}
          >
            <span>Open Your Birthday Surprise</span>

            <div className="button-arrow">
              <Icon name="arrow" />
            </div>
          </button>

          <div className="intro-footer">
            <span>BIRTHDAY EDITION</span>
            <i></i>
            <span>2026</span>
          </div>

        </section>
      ) : (
        /* =========================================
           MAIN EXPERIENCE
        ========================================= */
        <section className="experience">

          <header className="experience-header">

            <div className="header-stars">
              <span></span>
              <Icon name="sparkle" />
              <span></span>
            </div>

            <p className="header-small">
              HAPPY BIRTHDAY
            </p>

            <h1>
              RODELA
              <small>✦</small>
            </h1>

            <div className="header-subtitle">
              <span>Wishing you happiness.</span>
              <span>Wishing you success.</span>
              <span>Wishing you a beautiful year ahead.</span>
            </div>

          </header>

          {/* COLORFUL INTRO CARD */}
          <section className="birthday-banner">

            <div className="banner-shine"></div>

            <div className="banner-icon">
              <Icon name="gift" />
            </div>

            <div className="banner-content">
              <span>THIS DAY IS YOURS</span>

              <h2>
                A new chapter,
                <em>beautifully begun.</em>
              </h2>

              <p>
                Take your time, open each little surprise
                and enjoy the wishes prepared especially for you.
              </p>
            </div>

            <div className="banner-decoration">
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
            </div>

          </section>

          {/* SECTION TITLE */}
          <div className="section-heading">

            <div>
              <span>EXPLORE THE SURPRISES</span>
              <p>A few beautiful things are waiting for you</p>
            </div>

            <div className="section-number">
              04
              <small>/04</small>
            </div>

          </div>

          {/* CARDS */}
          <div className="cards-grid">

            {cards.map((card, index) => (
              <button
                key={card.id}
                className={`surprise-card ${card.className}`}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
                onClick={() => setActiveCard(card)}
              >

                <div className="card-glow"></div>

                <div className="card-header">

                  <span className="card-number">
                    {card.number}
                  </span>

                  <div className="card-icon">
                    <Icon name={card.icon} />
                  </div>

                </div>

                <div className="card-bottom">

                  <small>
                    {card.subtitle}
                  </small>

                  <h2>
                    {card.title}
                  </h2>

                  <div className="open-card">
                    <span>Open</span>
                    <Icon name="arrow" />
                  </div>

                </div>

              </button>
            ))}

          </div>

          {/* FINAL CARD */}
          <section
            className="last-surprise"
            onClick={() => setFinalOpen(true)}
          >

            <div className="last-glow"></div>

            <div className="last-icon">
              <Icon name="sparkle" />
            </div>

            <div className="last-content">
              <span>ONE LAST SURPRISE</span>

              <h2>
                There is one more wish
                waiting for you...
              </h2>
            </div>

            <button>
              <Icon name="arrow" />
            </button>

          </section>

          <footer className="site-footer">
            <span>Made specially for</span>
            <strong>RODELA</strong>
            <i>✦</i>
          </footer>

        </section>
      )}

      {/* =========================================
         CARD MODAL
      ========================================= */}

      {activeCard && (
        <div
          className="modal-background"
          onClick={closeCard}
        >

          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={closeCard}
            >
              ×
            </button>

            {activeCard.type === "congratulations" && (
              <div className="modal-content">

                <div className="modal-icon gold-icon">
                  <Icon name="award" />
                </div>

                <span className="modal-label">
                  A SPECIAL CONGRATULATION
                </span>

                <h2>
                  Congratulations,
                  <span>RODELA!</span>
                </h2>

                <div className="modal-divider"></div>

                <p>
                  Another beautiful year of your life has begun.
                  May this new chapter bring you countless reasons
                  to smile, learn, grow and celebrate.
                </p>

                <div className="mini-wishes">

                  <div>
                    <Icon name="sparkle" />
                    <span>Beautiful memories</span>
                  </div>

                  <div>
                    <Icon name="star" />
                    <span>New opportunities</span>
                  </div>

                  <div>
                    <Icon name="flower" />
                    <span>Wonderful moments</span>
                  </div>

                </div>

              </div>
            )}

            {activeCard.type === "letter" && (
              <div className="modal-content">

                <div className="modal-icon pink-icon">
                  <Icon name="letter" />
                </div>

                <span className="modal-label">
                  A FEW WORDS FOR YOU
                </span>

                <h2>
                  A Little
                  <span>Letter</span>
                </h2>

                <div className="modal-divider"></div>

                <div className="letter-paper">

                  <p className="letter-greeting">
                    Dear RODELA,
                  </p>

                  <p>
                    Wishing you a very happy birthday and
                    sending you the warmest wishes for the
                    wonderful year ahead.
                  </p>

                  <p>
                    May your days be filled with happiness,
                    peaceful moments, meaningful experiences
                    and people who make every day a little brighter.
                  </p>

                  <p>
                    May you always find the courage to follow
                    your dreams, the confidence to believe in
                    yourself and plenty of reasons to be proud
                    of how far you have come.
                  </p>

                  <p>
                    May this new year of your life become a
                    beautiful collection of memories, achievements
                    and moments worth remembering.
                  </p>

                  <p className="letter-ending">
                    Keep smiling, keep growing,
                    and keep shining in your own way.
                  </p>

                  <p className="letter-sign">
                    With the warmest wishes ✦
                  </p>

                </div>

              </div>
            )}

            {activeCard.type === "wishes" && (
              <div className="modal-content">

                <div className="modal-icon blue-icon">
                  <Icon name="flower" />
                </div>

                <span className="modal-label">
                  BEST WISHES FOR YOU
                </span>

                <h2>
                  Wishing You
                  <span>The Very Best</span>
                </h2>

                <div className="modal-divider"></div>

                <div className="wish-items">

                  <div>
                    <b>01</b>
                    <p>Good health and peace of mind.</p>
                  </div>

                  <div>
                    <b>02</b>
                    <p>Success in everything you work for.</p>
                  </div>

                  <div>
                    <b>03</b>
                    <p>Beautiful memories with wonderful people.</p>
                  </div>

                  <div>
                    <b>04</b>
                    <p>Confidence to follow your dreams.</p>
                  </div>

                  <div>
                    <b>05</b>
                    <p>More happiness in every ordinary day.</p>
                  </div>

                </div>

              </div>
            )}

            {activeCard.type === "future" && (
              <div className="modal-content">

                <div className="modal-icon purple-icon">
                  <Icon name="star" />
                </div>

                <span className="modal-label">
                  YOUR NEXT CHAPTER
                </span>

                <h2>
                  A Bright
                  <span>Year Ahead</span>
                </h2>

                <div className="modal-divider"></div>

                <p>
                  May the coming year bring new experiences,
                  exciting opportunities and many moments
                  that make you genuinely proud.
                </p>

                <div className="future-items">

                  <div>
                    <Icon name="sparkle" />
                    <strong>Dream</strong>
                    <span>Believe in what is possible.</span>
                  </div>

                  <div>
                    <Icon name="star" />
                    <strong>Grow</strong>
                    <span>Keep learning and becoming better.</span>
                  </div>

                  <div>
                    <Icon name="flower" />
                    <strong>Enjoy</strong>
                    <span>Notice the little beautiful things.</span>
                  </div>

                  <div>
                    <Icon name="award" />
                    <strong>Achieve</strong>
                    <span>Turn your goals into reality.</span>
                  </div>

                </div>

              </div>
            )}

            <button
              className="modal-close-bottom"
              onClick={closeCard}
            >
              <Icon name="check" />
              Continue exploring
            </button>

          </div>

        </div>
      )}

      {/* =========================================
         FINAL SCREEN
      ========================================= */}

      {finalOpen && (
        <div className="final-screen">

          <div className="confetti">
            {Array.from({ length: 35 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="final-card">

            <div className="final-top-icon">
              <Icon name="gift" />
            </div>

            <span className="final-label">
              YOUR FINAL BIRTHDAY WISH
            </span>

            <h1>
              Happy Birthday,
              <span>RODELA</span>
            </h1>

            <div className="final-divider">
              <span></span>
              ✦
              <span></span>
            </div>

            <p>
              May your new year be filled with
              <strong> happiness, success, good health</strong>
              and beautiful experiences.
            </p>

            <p>
              May every goal you work towards take you
              closer to the life you dream of.
            </p>

            <div className="final-message">

              <Icon name="sparkle" />

              <span>
                Wishing you a truly wonderful birthday
                and an amazing year ahead.
              </span>

            </div>

            <button
              onClick={() => setFinalOpen(false)}
            >
              Back to the celebration
            </button>

          </div>

        </div>
      )}

    </main>
  );
}

export default App;