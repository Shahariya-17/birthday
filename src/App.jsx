import { useState } from 'react'
import './App.css'

const Icon = ({ type }) => {
  const icons = {
    gift: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 10h18v11H3V10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7h20v3H2V7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v14M12 7S9 7 8 5.5 8.5 3 10 3c1.7 0 2 4 2 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7s3 0 4-1.5S15.5 3 14 3c-1.7 0-2 4-2 4Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),

    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),

    award: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m9 12-1 9 4-2 4 2-1-9" stroke="currentColor" strokeWidth="1.5" />
        <path d="m12 5 .8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2L12 5Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),

    letter: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),

    flower: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 10c-3-2-3-6 0-7 3 1 3 5 0 7ZM14 12c2-3 6-3 7 0-1 3-5 3-7 0ZM12 14c3 2 3 6 0 7-3-1-3-5 0-7ZM10 12c-2 3-6 3-7 0 1-3 5-3 7 0Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),

    arrow: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),

    sparkle: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),

    check: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[type]
}

function App() {
  const [started, setStarted] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [finalOpen, setFinalOpen] = useState(false)

  const cards = [
    {
      id: 1,
      icon: 'award',
      title: 'Congratulations',
      subtitle: 'A special celebration for a special day',
      type: 'congratulations',
    },
    {
      id: 2,
      icon: 'letter',
      title: 'A Little Letter',
      subtitle: 'A few words written especially for you',
      type: 'letter',
    },
    {
      id: 3,
      icon: 'flower',
      title: 'Best Wishes',
      subtitle: 'Wishes for a wonderful year ahead',
      type: 'wishes',
    },
    {
      id: 4,
      icon: 'star',
      title: 'A Bright Year Ahead',
      subtitle: 'A few things to wish for your new chapter',
      type: 'future',
    },
  ]

  const renderContent = () => {
    if (!activeSection) return null

    if (activeSection.type === 'congratulations') {
      return (
        <>
          <div className="modal-big-icon gold">
            <Icon type="award" />
          </div>

          <span className="modal-kicker">A DAY WORTH CELEBRATING</span>

          <h2>
            Congratulations,
            <span>RODELA!</span>
          </h2>

          <div className="modal-line"></div>

          <p>
            Today marks another beautiful milestone in your life.
            May this birthday open the door to a year filled with
            happiness, success, peace and countless memorable moments.
          </p>

          <div className="congrats-points">
            <div>
              <Icon type="sparkle" />
              <span>New memories</span>
            </div>

            <div>
              <Icon type="star" />
              <span>New possibilities</span>
            </div>

            <div>
              <Icon type="flower" />
              <span>New beginnings</span>
            </div>
          </div>
        </>
      )
    }

    if (activeSection.type === 'letter') {
      return (
        <>
          <div className="modal-big-icon pink">
            <Icon type="letter" />
          </div>

          <span className="modal-kicker">A FEW WORDS FOR YOU</span>

          <h2>
            A Little
            <span>Letter</span>
          </h2>

          <div className="modal-line"></div>

          <div className="letter-content">
            <p>Dear RODELA,</p>

            <p>
              On your special day, I simply want to wish you
              everything beautiful that life has to offer.
            </p>

            <p>
              May you always have reasons to smile, people around
              you who appreciate you, and the courage to follow
              the things that make you happy.
            </p>

            <p>
              May every new day bring you closer to your dreams,
              and may this new year of your life become a collection
              of moments that you will always remember with a smile.
            </p>

            <p className="letter-ending">
              Keep shining, keep smiling, and keep being wonderfully you.
            </p>

            <p className="letter-signature">
              With the warmest wishes ✦
            </p>
          </div>
        </>
      )
    }

    if (activeSection.type === 'wishes') {
      return (
        <>
          <div className="modal-big-icon blue">
            <Icon type="flower" />
          </div>

          <span className="modal-kicker">MY BEST WISHES FOR YOU</span>

          <h2>
            Wishing You
            <span>The Very Best</span>
          </h2>

          <div className="modal-line"></div>

          <div className="wish-list">

            <div>
              <span>01</span>
              <p>Good health and peace of mind</p>
            </div>

            <div>
              <span>02</span>
              <p>Success in everything you work for</p>
            </div>

            <div>
              <span>03</span>
              <p>Beautiful memories with wonderful people</p>
            </div>

            <div>
              <span>04</span>
              <p>Confidence to chase every dream</p>
            </div>

            <div>
              <span>05</span>
              <p>More happiness in every ordinary day</p>
            </div>

          </div>
        </>
      )
    }

    return (
      <>
        <div className="modal-big-icon purple">
          <Icon type="star" />
        </div>

        <span className="modal-kicker">YOUR NEXT CHAPTER</span>

        <h2>
          A Bright
          <span>Year Ahead</span>
        </h2>

        <div className="modal-line"></div>

        <p>
          May the coming year bring new opportunities,
          exciting experiences and many moments that make
          you genuinely proud of yourself.
        </p>

        <div className="future-grid">

          <div>
            <Icon type="sparkle" />
            <strong>Dream</strong>
            <span>Big and believe in yourself.</span>
          </div>

          <div>
            <Icon type="star" />
            <strong>Grow</strong>
            <span>Learn something new every day.</span>
          </div>

          <div>
            <Icon type="flower" />
            <strong>Enjoy</strong>
            <span>Appreciate the little things.</span>
          </div>

          <div>
            <Icon type="award" />
            <strong>Achieve</strong>
            <span>Make your goals a reality.</span>
          </div>

        </div>
      </>
    )
  }

  return (
    <main className="birthday-page">

      <div className="gradient-orb orb-one"></div>
      <div className="gradient-orb orb-two"></div>
      <div className="gradient-orb orb-three"></div>

      <div className="color-particles">
        {Array.from({ length: 22 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      {!started ? (
        <section className="hero-screen">

          <div className="hero-badge">
            <span>✦</span>
            A SPECIAL DAY
            <span>✦</span>
          </div>

          <div className="hero-art">

            <div className="art-circle circle-a"></div>
            <div className="art-circle circle-b"></div>

            <div className="gift-box">
              <Icon type="gift" />
            </div>

            <span className="floating-symbol symbol-a">✦</span>
            <span className="floating-symbol symbol-b">✧</span>
            <span className="floating-symbol symbol-c">✦</span>

          </div>

          <p className="hero-small">
            Hello, RODELA
          </p>

          <h1>
            Today is
            <span>your day.</span>
          </h1>

          <p className="hero-text">
            I prepared a little birthday experience for you.
            <br />
            Take a moment and explore everything waiting inside.
          </p>

          <button
            className="hero-button"
            onClick={() => setStarted(true)}
          >
            <span>Open Your Birthday Surprise</span>
            <Icon type="arrow" />
          </button>

          <div className="hero-bottom">
            <span>Birthday Edition</span>
            <i></i>
            <span>2026</span>
          </div>

        </section>
      ) : (
        <section className="main-experience">

          <header className="main-header">

            <div className="header-decoration">
              <span></span>
              <Icon type="sparkle" />
              <span></span>
            </div>

            <p>HAPPY BIRTHDAY</p>

            <h1>
              RODELA
              <span>✦</span>
            </h1>

            <div className="header-description">
              <span>
                Wishing you a wonderful birthday
              </span>
              <span>
                and a beautiful year ahead.
              </span>
            </div>

          </header>

          <div className="experience-label">
            <div>
              <span>EXPLORE</span>
              <p>A few things prepared for you</p>
            </div>

            <span className="experience-count">
              04 <i>/</i> 04
            </span>
          </div>

          <div className="experience-grid">

            {cards.map((card, index) => (
              <button
                key={card.id}
                className={`experience-card card-${index + 1}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
                onClick={() => setActiveSection(card)}
              >

                <div className="card-top">
                  <span>0{card.id}</span>

                  <div className="card-icon">
                    <Icon type={card.icon} />
                  </div>
                </div>

                <div className="card-info">

                  <small>{card.subtitle}</small>

                  <h2>
                    {card.title}
                  </h2>

                  <div className="card-link">
                    Explore
                    <Icon type="arrow" />
                  </div>

                </div>

              </button>
            ))}

          </div>

          <section className="final-preview">

            <div className="preview-decoration">
              <Icon type="sparkle" />
            </div>

            <div className="preview-text">
              <span>ONE LAST THING</span>
              <h2>
                There is still one final wish waiting...
              </h2>
            </div>

            <button
              onClick={() => setFinalOpen(true)}
            >
              <Icon type="arrow" />
            </button>

          </section>

          <footer className="experience-footer">
            <span>Created specially for</span>
            <strong>RODELA</strong>
            <span>✦</span>
          </footer>

        </section>
      )}

      {/* MODAL */}

      {activeSection && (
        <div
          className="modal-overlay"
          onClick={() => setActiveSection(null)}
        >

          <div
            className="content-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            {renderContent()}

            <button
              className="modal-footer-button"
              onClick={() => setActiveSection(null)}
            >
              <span>{Icon({ type: 'check' })}</span>
              Continue exploring
            </button>

          </div>

        </div>
      )}

      {/* FINAL */}

      {finalOpen && (
        <div className="final-screen">

          <div className="final-confetti">
            {Array.from({ length: 28 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>

          <div className="final-card">

            <div className="final-icon">
              <Icon type="gift" />
            </div>

            <span className="final-label">
              YOUR FINAL WISH
            </span>

            <h1>
              Happy Birthday,
              <span>RODELA</span>
            </h1>

            <div className="final-rule">
              <span></span>
              ✦
              <span></span>
            </div>

            <p>
              May your year be filled with
              <strong> happiness, success, good health</strong>
              and beautiful experiences.
            </p>

            <p>
              May every goal you work towards bring you
              one step closer to the life you dream of.
            </p>

            <div className="final-wish-box">
              <Icon type="sparkle" />
              <span>
                Wishing you the happiest birthday
                and the most wonderful year ahead.
              </span>
            </div>

            <button
              onClick={() => setFinalOpen(false)}
            >
              Back to your wishes
            </button>

          </div>

        </div>
      )}

    </main>
  )
}

export default App