import { useEffect, useState } from "react";
import "./App.css";

function Icon({ name, size = 24, strokeWidth = 1.8 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 2.8L13.7 9.8L20.7 12L13.7 14.2L12 21.2L10.3 14.2L3.3 12L10.3 9.8L12 2.8Z" />
          <path d="M19 3L19.5 4.7L21.2 5.2L19.5 5.7L19 7.4L18.5 5.7L16.8 5.2L18.5 4.7L19 3Z" />
        </svg>
      );

    case "gift":
      return (
        <svg {...props}>
          <rect x="3" y="9" width="18" height="12" rx="2.2" />
          <path d="M12 9V21" />
          <path d="M3 13H21" />
          <path d="M12 9H7.7C6.2 9 5 7.8 5 6.3C5 5 6 4 7.3 4C9.5 4 12 9 12 9Z" />
          <path d="M12 9H16.3C17.8 9 19 7.8 19 6.3C19 5 18 4 16.7 4C14.5 4 12 9 12 9Z" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12H19" />
          <path d="M13 6L19 12L13 18" />
        </svg>
      );

    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2.4" />
          <path d="M4 7L12 13L20 7" />
        </svg>
      );

    case "star":
      return (
        <svg {...props}>
          <path d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.2L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z" />
        </svg>
      );

    case "cake":
      return (
        <svg {...props}>
          <path d="M5 12H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12Z" />
          <path d="M4 12C4 10.3 5.3 9 7 9C8.7 9 10 10.3 10 12C10 10.3 11.3 9 13 9C14.7 9 16 10.3 16 12C16 10.3 17.3 9 19 9C20.1 9 21 9.9 21 11" />
          <path d="M9 6V3" />
          <path d="M15 6V3" />
        </svg>
      );

    case "flower":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2.3" />
          <path d="M12 9C8.4 7.6 8 4 10.5 3.2C13 2.4 14.4 5.3 12 9Z" />
          <path d="M15 12C16.4 8.4 20 8 20.8 10.5C21.6 13 18.7 14.4 15 12Z" />
          <path d="M12 15C15.6 16.4 16 20 13.5 20.8C11 21.6 9.6 18.7 12 15Z" />
          <path d="M9 12C7.6 15.6 4 16 3.2 13.5C2.4 11 5.3 9.6 9 12Z" />
        </svg>
      );

    case "crown":
      return (
        <svg {...props}>
          <path d="M4 7L8 11L12 5L16 11L20 7L18 18H6L4 7Z" />
          <path d="M6 21H18" />
        </svg>
      );

    case "check":
      return (
        <svg {...props}>
          <path d="M5 12.5L10 17L19 7" />
        </svg>
      );

    case "close":
      return (
        <svg {...props}>
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </svg>
      );

    case "play":
      return (
        <svg {...props}>
          <path d="M8 5L19 12L8 19V5Z" fill="currentColor" stroke="none" />
        </svg>
      );

    case "moon":
      return (
        <svg {...props}>
          <path d="M20 15.2A8.5 8.5 0 018.8 4C5.7 5.2 3.5 8.2 3.5 11.7A8.5 8.5 0 0012 20.2C15.5 20.2 18.5 18 20 15.2Z" />
        </svg>
      );

    default:
      return null;
  }
}

const surprises = [
  {
    id: 1,
    number: "01",
    category: "CONGRATULATIONS",
    title: "A Special Celebration",
    subtitle: "Because today deserves something special.",
    icon: "crown",
    color: "rose",
    content: (
      <>
        <span className="modal-kicker">CONGRATULATIONS</span>
        <h2>Happy Birthday, RODELA!</h2>
        <p>
          Today marks another beautiful chapter in your journey.
          May this new year bring you countless reasons to smile,
          wonderful experiences, and achievements you can always be proud of.
        </p>
        <div className="quote-box">
          <Icon name="sparkle" size={20} />
          <span>
            May this birthday be the beginning of an extraordinary year.
          </span>
        </div>
      </>
    ),
  },
  {
    id: 2,
    number: "02",
    category: "A LITTLE LETTER",
    title: "A Letter For You",
    subtitle: "Open this little message.",
    icon: "mail",
    color: "violet",
    content: (
      <>
        <span className="modal-kicker">A LITTLE LETTER</span>

        <div className="letter-paper">
          <div className="letter-top">
            <Icon name="sparkle" size={18} />
            <span>Birthday Edition</span>
            <Icon name="sparkle" size={18} />
          </div>

          <h3>Dear RODELA,</h3>

          <p>
            On your special day, I wish you a year filled with
            beautiful moments, meaningful achievements, and endless
            reasons to be happy.
          </p>

          <p>
            May every new day bring you closer to the things you dream
            about, and may every challenge turn into an opportunity
            to grow stronger and wiser.
          </p>

          <p>
            Keep moving forward, keep believing in yourself,
            and keep creating wonderful memories.
          </p>

          <strong>Wishing you the happiest birthday!</strong>

          <div className="letter-bottom">
            <span>With the warmest birthday wishes</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    number: "03",
    category: "BEST WISHES",
    title: "A Few Wishes",
    subtitle: "A collection of birthday wishes.",
    icon: "flower",
    color: "sunset",
    content: (
      <>
        <span className="modal-kicker">BEST WISHES</span>
        <h2>A Few Things To Wish For</h2>

        <div className="wish-list">
          <div>
            <Icon name="star" size={19} />
            <span>Success in everything you choose to pursue.</span>
          </div>

          <div>
            <Icon name="sparkle" size={19} />
            <span>Beautiful moments worth remembering.</span>
          </div>

          <div>
            <Icon name="flower" size={19} />
            <span>Peace, happiness, and positive energy.</span>
          </div>

          <div>
            <Icon name="crown" size={19} />
            <span>New achievements and exciting opportunities.</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    number: "04",
    category: "A NEW CHAPTER",
    title: "The Year Ahead",
    subtitle: "A fresh year. A fresh beginning.",
    icon: "sparkle",
    color: "aqua",
    content: (
      <>
        <span className="modal-kicker">A NEW CHAPTER</span>
        <h2>Make This Year Extraordinary</h2>

        <p>
          May the year ahead be filled with exciting opportunities,
          meaningful experiences, unexpected happiness, and moments
          that make you stop and appreciate how far you have come.
        </p>

        <div className="future-box">
          <div>
            <span>NEW DREAMS</span>
            <strong>01</strong>
          </div>

          <div>
            <span>NEW GOALS</span>
            <strong>02</strong>
          </div>

          <div>
            <span>NEW MEMORIES</span>
            <strong>03</strong>
          </div>
        </div>
      </>
    ),
  },
];

const wishes = [
  "May every morning bring you a fresh reason to smile.",
  "May your biggest dreams slowly become beautiful realities.",
  "May every effort you make lead you toward something wonderful.",
  "May your year be filled with unforgettable moments.",
  "May the days ahead be brighter, happier, and more meaningful.",
  "May this new chapter become one of your most memorable ones.",
];

function App() {
  const [screen, setScreen] = useState("intro");
  const [openedCards, setOpenedCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [selectedWish, setSelectedWish] = useState(null);
  const [candleBlown, setCandleBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const startExperience = () => {
    setScreen("main");
  };

  const openCard = (card) => {
    setActiveCard(card);

    if (!openedCards.includes(card.id)) {
      setOpenedCards((prev) => [...prev, card.id]);
    }
  };

  const closeCard = () => {
    setActiveCard(null);
  };

  const blowCandle = () => {
    setCandleBlown(true);

    setTimeout(() => {
      setScreen("wishes");
    }, 1700);
  };

  const showFinal = () => {
    const pieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2.8,
      duration: 3 + Math.random() * 4,
      rotate: Math.random() * 360,
    }));

    setConfetti(pieces);
    setScreen("final");
  };

  const restart = () => {
    setScreen("intro");
    setOpenedCards([]);
    setActiveCard(null);
    setSelectedWish(null);
    setCandleBlown(false);
    setConfetti([]);
  };

  useEffect(() => {
    if (screen !== "final") return;

    const timer = setTimeout(() => {
      setConfetti([]);
    }, 8000);

    return () => clearTimeout(timer);
  }, [screen]);

  if (screen === "intro") {
    return (
      <div className="app intro-screen">
        <BackgroundEffects />

        <div className="cinematic-grid"></div>

        <div className="intro-content">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <Icon name="sparkle" size={14} />
            A SPECIAL BIRTHDAY EXPERIENCE
            <Icon name="sparkle" size={14} />
            <span className="eyebrow-line"></span>
          </div>

          <div className="hero-gift">
            <div className="gift-aura"></div>
            <div className="gift-ring ring-one"></div>
            <div className="gift-ring ring-two"></div>

            <div className="gift-box">
              <div className="gift-lid">
                <span></span>
              </div>

              <div className="gift-body">
                <div className="gift-ribbon-v"></div>
                <div className="gift-ribbon-h"></div>
              </div>

              <div className="gift-bow">
                <div className="bow-left"></div>
                <div className="bow-right"></div>
                <div className="bow-center"></div>
              </div>
            </div>

            <div className="orbit orbit-one">
              <Icon name="sparkle" size={16} />
            </div>

            <div className="orbit orbit-two">
              <Icon name="star" size={13} />
            </div>

            <div className="orbit orbit-three">
              <Icon name="sparkle" size={11} />
            </div>
          </div>

          <h1>
            Happy Birthday
            <span>RODELA</span>
          </h1>

          <p className="hero-description">
            A little interactive celebration filled with surprises,
            wishes, and beautiful moments created especially for
            this special day.
          </p>

          <button className="hero-button" onClick={startExperience}>
            <span className="button-shine"></span>
            <Icon name="gift" size={20} />
            <span>Begin The Celebration</span>
            <Icon name="arrow" size={18} />
          </button>

          <div className="intro-footer">
            <span className="footer-dot"></span>
            SCROLL LESS · DISCOVER MORE
            <span className="footer-dot"></span>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "main") {
    return (
      <div className="app main-screen">
        <BackgroundEffects />

        <header className="topbar">
          <div className="brand">
            <div className="brand-symbol">
              <Icon name="sparkle" size={17} />
            </div>

            <div>
              <strong>RODELA</strong>
              <span>BIRTHDAY EXPERIENCE</span>
            </div>
          </div>

          <div className="progress-pill">
            <span>{String(openedCards.length).padStart(2, "0")}</span>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${(openedCards.length / surprises.length) * 100}%`,
                }}
              ></div>
            </div>

            <span>{String(surprises.length).padStart(2, "0")}</span>
          </div>
        </header>

        <main className="main-content">
          <div className="main-heading">
            <div className="section-eyebrow">
              <Icon name="sparkle" size={14} />
              THERE IS MORE TO DISCOVER
            </div>

            <h1>
              A few little
              <span>surprises await.</span>
            </h1>

            <p>
              Explore each card to reveal a different part of this
              birthday celebration.
            </p>
          </div>

          <div className="surprise-grid">
            {surprises.map((card, index) => {
              const isOpened = openedCards.includes(card.id);

              return (
                <div
                  className={`flip-card ${card.color} ${
                    isOpened ? "opened" : ""
                  }`}
                  key={card.id}
                  onClick={() => openCard(card)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card-glow"></div>

                      <div className="card-top">
                        <span className="card-index">
                          {card.number}
                        </span>

                        <div className="card-status">
                          <span>
                            {isOpened ? "DISCOVERED" : "EXPLORE"}
                          </span>
                          <Icon
                            name={isOpened ? "check" : "arrow"}
                            size={15}
                          />
                        </div>
                      </div>

                      <div className="card-icon-wrap">
                        <Icon name={card.icon} size={30} />
                      </div>

                      <div className="card-info">
                        <span>{card.category}</span>
                        <h2>{card.title}</h2>
                        <p>{card.subtitle}</p>
                      </div>

                      <div className="card-bottom">
                        <div className="mini-dots">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>

                        <Icon name="sparkle" size={17} />
                      </div>
                    </div>

                    <div className="flip-card-back">
                      <div className="back-glow"></div>

                      <Icon name={card.icon} size={34} />

                      <span>READY TO DISCOVER?</span>

                      <h3>{card.title}</h3>

                      <button>
                        Open
                        <Icon name="arrow" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bottom-action">
            <div className="completion">
              <div className="completion-dots">
                {surprises.map((item) => (
                  <span
                    key={item.id}
                    className={
                      openedCards.includes(item.id) ? "active" : ""
                    }
                  ></span>
                ))}
              </div>

              <p>
                {openedCards.length === surprises.length
                  ? "Every surprise has been discovered."
                  : `${surprises.length - openedCards.length} surprises remaining`}
              </p>
            </div>

            <button
              className={`continue-button ${
                openedCards.length === surprises.length ? "ready" : ""
              }`}
              disabled={openedCards.length !== surprises.length}
              onClick={() => setScreen("cake")}
            >
              <span>
                {openedCards.length === surprises.length
                  ? "Continue"
                  : "Discover All First"}
              </span>

              <Icon name="arrow" size={17} />
            </button>
          </div>
        </main>

        {activeCard && (
          <div className="modal-overlay" onClick={closeCard}>
            <div
              className={`premium-modal ${activeCard.color}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeCard}>
                <Icon name="close" size={19} />
              </button>

              <div className="modal-orb"></div>

              <div className="modal-icon">
                <Icon name={activeCard.icon} size={27} />
              </div>

              <div className="modal-content">
                {activeCard.content}
              </div>

              <button className="modal-done" onClick={closeCard}>
                <Icon name="check" size={17} />
                <span>Continue Exploring</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (screen === "cake") {
    return (
      <div className="app cake-screen">
        <BackgroundEffects />

        <div className="cake-content">
          <div className="section-eyebrow">
            <Icon name="cake" size={15} />
            ONE LAST LITTLE MOMENT
          </div>

          <h1>
            Make A
            <span>Wish.</span>
          </h1>

          <p>
            Close your eyes, make a beautiful wish,
            and blow out the candles.
          </p>

          <div className={`cake-scene ${candleBlown ? "blown" : ""}`}>
            <div className="cake-aura"></div>

            <div className="candle candle-one">
              <span className="flame"></span>
            </div>

            <div className="candle candle-two">
              <span className="flame"></span>
            </div>

            <div className="candle candle-three">
              <span className="flame"></span>
            </div>

            <div className="cake-top-layer"></div>
            <div className="cake-middle-layer"></div>
            <div className="cake-bottom-layer"></div>

            <div className="cake-cream cream-one"></div>
            <div className="cake-cream cream-two"></div>
            <div className="cake-cream cream-three"></div>

            <div className="cake-sprinkles">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          {!candleBlown ? (
            <button className="hero-button" onClick={blowCandle}>
              <Icon name="sparkle" size={19} />
              Make A Wish
              <Icon name="arrow" size={17} />
            </button>
          ) : (
            <div className="wish-made">
              <Icon name="check" size={18} />
              Wish made. Something beautiful is coming...
            </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === "wishes") {
    return (
      <div className="app wishes-screen">
        <BackgroundEffects />

        <div className="wishes-content">
          <div className="section-eyebrow">
            <Icon name="flower" size={15} />
            A FEW MORE WISHES
          </div>

          <h1>
            Pick A
            <span>Wish.</span>
          </h1>

          <p>
            Each little flower contains a different wish
            for the year ahead.
          </p>

          <div className="wish-orbit">
            {wishes.map((wish, index) => (
              <button
                key={wish}
                className={`wish-bubble bubble-${index + 1} ${
                  selectedWish === index ? "selected" : ""
                }`}
                onClick={() => setSelectedWish(index)}
              >
                <div className="wish-bubble-icon">
                  <Icon
                    name={index % 2 === 0 ? "flower" : "sparkle"}
                    size={25}
                  />
                </div>

                <span>0{index + 1}</span>
              </button>
            ))}

            <div className="wish-center">
              <Icon name="sparkle" size={31} />
              <span>WISHES</span>
            </div>
          </div>

          <div
            className={`wish-message ${
              selectedWish !== null ? "visible" : ""
            }`}
          >
            {selectedWish !== null && (
              <>
                <div className="message-icon">
                  <Icon name="sparkle" size={20} />
                </div>

                <p>{wishes[selectedWish]}</p>
              </>
            )}
          </div>

          <button className="hero-button" onClick={showFinal}>
            <Icon name="crown" size={19} />
            Reveal The Final Surprise
            <Icon name="arrow" size={17} />
          </button>
        </div>
      </div>
    );
  }

  if (screen === "final") {
    return (
      <div className="app final-screen">
        <div className="final-glow glow-one"></div>
        <div className="final-glow glow-two"></div>
        <div className="final-glow glow-three"></div>

        <div className="confetti-container">
          {confetti.map((piece) => (
            <span
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                transform: `rotate(${piece.rotate}deg)`,
              }}
            ></span>
          ))}
        </div>

        <div className="final-content">
          <div className="final-symbol">
            <Icon name="crown" size={34} />
          </div>

          <div className="final-eyebrow">
            <span></span>
            THE FINAL SURPRISE
            <span></span>
          </div>

          <div className="final-stars">
            <Icon name="sparkle" size={15} />
            <Icon name="star" size={19} />
            <Icon name="sparkle" size={13} />
          </div>

          <h1>
            Happy Birthday
            <span>RODELA</span>
          </h1>

          <div className="final-line">
            <i></i>
            <Icon name="sparkle" size={17} />
            <i></i>
          </div>

          <p>
            May this new chapter bring you wonderful opportunities,
            unforgettable memories, meaningful achievements,
            and countless beautiful moments.
          </p>

          <strong>
            Wishing you a truly wonderful birthday
            and an amazing year ahead.
          </strong>

          <div className="final-buttons">
            <button className="hero-button" onClick={restart}>
              <Icon name="sparkle" size={18} />
              Experience Again
            </button>
          </div>

          <div className="final-footer">
            MADE WITH BIRTHDAY WISHES
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function BackgroundEffects() {
  return (
    <div className="background-effects">
      <div className="gradient-orb orb-pink"></div>
      <div className="gradient-orb orb-purple"></div>
      <div className="gradient-orb orb-yellow"></div>
      <div className="gradient-orb orb-blue"></div>

      <div className="floating-symbol symbol-one">
        <Icon name="sparkle" size={20} />
      </div>

      <div className="floating-symbol symbol-two">
        <Icon name="star" size={15} />
      </div>

      <div className="floating-symbol symbol-three">
        <Icon name="sparkle" size={12} />
      </div>

      <div className="floating-dot dot-one"></div>
      <div className="floating-dot dot-two"></div>
      <div className="floating-dot dot-three"></div>
    </div>
  );
}

export default App;