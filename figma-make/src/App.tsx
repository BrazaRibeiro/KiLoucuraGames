import { FormEvent, useMemo, useState } from "react"

type IconName = "arrow" | "bag" | "chevron" | "clock" | "close" | "gamepad" | "headset" | "instagram" | "map" | "menu" | "monitor" | "search" | "shield" | "spark" | "tool" | "truck" | "whatsapp"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    gamepad: (
      <>
        <path d="M8 9h8a5 5 0 0 1 4.7 6.7l-.5 1.4a2.5 2.5 0 0 1-4.2.8L14.5 16h-5L8 17.9a2.5 2.5 0 0 1-4.2-.8l-.5-1.4A5 5 0 0 1 8 9Z" />
        <path d="M7 12v4M5 14h4" />
        <path d="M16.5 13.5h.01M18.5 15.5h.01" />
        <path d="M9 9 8 6h8l-1 3" />
      </>
    ),
    headset: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    spark: (
      <path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Zm7 13 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    ),
    tool: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.6 7 6.3 4.7a4 4 0 0 0 5 5l7.4 7.4a2 2 0 0 1-2.8 2.8l-7.4-7.4" />
        <path d="m5 15-3 3 4 4 3-3" />
      </>
    ),
    truck: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5A8.5 8.5 0 0 1 7.3 19l-4.3 1 1.1-4.1A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M8.2 7.8c.4 3 2.3 5 5.4 6l1.2-1.4 2 .9c-.7 1.7-1.8 2.5-3.3 2.3-3.8-.6-6.6-3.3-7.1-7-.2-1.4.5-2.5 2.1-3.1l1 2-1.3.3Z" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const categories = [
  {
    name: "PlayStation",
    label: "PS4 e PS5",
    mark: "PS",
    className: "cat-blue",
  },
  { name: "Xbox", label: "Series e One", mark: "X", className: "cat-green" },
  { name: "Nintendo", label: "Switch", mark: "N", className: "cat-red" },
  {
    name: "PC Gamer",
    label: "Peças e setups",
    mark: "PC",
    className: "cat-purple",
  },
  {
    name: "Jogos",
    label: "Novos e usados",
    mark: "01",
    className: "cat-orange",
  },
  {
    name: "Acessórios",
    label: "Para jogar melhor",
    mark: "+",
    className: "cat-pink",
  },
]

const products = [
  {
    id: 1,
    name: "Controle DualSense PS5",
    category: "PlayStation",
    platform: "PS5",
    price: "R$ 449,90",
    installment: "10x de R$ 44,99",
    badge: "Mais vendido",
    image:
      "https://images.unsplash.com/photo-1567027757540-7b572280fa22?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Controle Pro Wireless",
    category: "Acessórios",
    platform: "Multiplataforma",
    price: "R$ 289,90",
    installment: "10x de R$ 28,99",
    badge: "Oferta",
    image:
      "https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Setup Gamer Performance",
    category: "PC Gamer",
    platform: "PC Gamer",
    price: "R$ 4.899,00",
    installment: "12x de R$ 408,25",
    badge: "Sob encomenda",
    image:
      "https://images.unsplash.com/photo-1642791401714-a0d4e02d4bb6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Controle Classic Edition",
    category: "Nintendo",
    platform: "Nintendo",
    price: "R$ 219,90",
    installment: "10x de R$ 21,99",
    badge: "Últimas unidades",
    image:
      "https://images.unsplash.com/photo-1675701299043-6a5fa33dbe6a?auto=format&fit=crop&w=900&q=85",
  },
]

const whatsappUrl = "https://wa.me/5511984593927"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [notice, setNotice] = useState("")

  const filteredProducts = useMemo(() => {
    const term = query.toLowerCase().trim()
    return products.filter((product) => {
      const matchesSearch =
        !term ||
        `${product.name} ${product.category} ${product.platform}`
          .toLowerCase()
          .includes(term)
      const matchesCategory =
        activeCategory === "Todos" || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [query, activeCategory])

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" })
  }

  function addToCart(name: string) {
    setCart((current) => current + 1)
    setNotice(`${name} adicionado à sacola`)
    window.setTimeout(() => setNotice(""), 2400)
  }

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Icon name="map" size={15} /> Loja física em Itapevi, SP
          </span>
          <span className="topbar-right">
            <Icon name="clock" size={15} /> Seg–Sex 9h–18h · Sáb 9h–16h
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-row">
          <a className="brand" href="#" aria-label="Ki Loucura Games — início">
            <span className="brand-icon">
              <Icon name="gamepad" size={27} />
            </span>
            <span>
              <strong>KI LOUCURA</strong>
              <small>GAMES</small>
            </span>
          </a>

          <form className="search" onSubmit={handleSearch}>
            <Icon name="search" size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Buscar produtos"
              placeholder="O que você está procurando?"
            />
            <button type="submit">Buscar</button>
          </form>

          <div className="nav-actions">
            <a
              className="whatsapp-mini"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" size={20} />
              <span>
                <small>Fale com a gente</small>WhatsApp
              </span>
            </a>
            <button
              className="cart-button"
              aria-label={`Sacola com ${cart} itens`}
              onClick={() =>
                setNotice(
                  cart
                    ? `${cart} item(ns) na sua sacola`
                    : "Sua sacola está vazia",
                )
              }
            >
              <Icon name="bag" size={22} />
              {cart > 0 && <span>{cart}</span>}
            </button>
            <button
              className="menu-button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={24} />
            </button>
          </div>
        </div>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <div className="container nav-links">
            <a href="#categorias" onClick={() => setMenuOpen(false)}>
              Consoles
            </a>
            <a href="#categorias" onClick={() => setMenuOpen(false)}>
              Jogos
            </a>
            <a href="#produtos" onClick={() => setMenuOpen(false)}>
              Acessórios
            </a>
            <a href="#produtos" onClick={() => setMenuOpen(false)}>
              PC Gamer
            </a>
            <a href="#assistencia" onClick={() => setMenuOpen(false)}>
              Assistência técnica
            </a>
            <a
              className="nav-offer"
              href="#produtos"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="spark" size={16} /> Ofertas
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div
            className="hero-image"
            role="img"
            aria-label="Setup gamer com iluminação neon"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="eyebrow">
              <span /> Sua próxima fase começa aqui
            </div>
            <h1>
              O seu mundo gamer,
              <br />
              <em>sem limites.</em>
            </h1>
            <p>
              Consoles, jogos, PCs e acessórios escolhidos por quem realmente
              entende de games.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#produtos">
                Ver produtos <Icon name="arrow" size={19} />
              </a>
              <a
                className="button button-ghost"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="whatsapp" size={20} /> Chamar no WhatsApp
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatars">
                <span>KL</span>
                <span>5K</span>
                <span>SP</span>
              </div>
              <p>
                <strong>+5 mil gamers</strong>
                <br />
                acompanham a Ki Loucura
              </p>
            </div>
          </div>
          <div className="hero-stamp">
            <span>Desde</span>
            <strong>2009</strong>
            <small>Itapevi · SP</small>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefits-grid">
            <div>
              <Icon name="truck" />
              <span>
                <strong>Entrega rápida</strong>
                <small>Consulte sua região</small>
              </span>
            </div>
            <div>
              <Icon name="shield" />
              <span>
                <strong>Compra segura</strong>
                <small>Produtos com garantia</small>
              </span>
            </div>
            <div>
              <Icon name="whatsapp" />
              <span>
                <strong>Atendimento humano</strong>
                <small>Direto pelo WhatsApp</small>
              </span>
            </div>
            <div>
              <Icon name="tool" />
              <span>
                <strong>Assistência técnica</strong>
                <small>Especializada em games</small>
              </span>
            </div>
          </div>
        </section>

        <section className="section categories-section" id="categorias">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="kicker">Escolha seu universo</span>
                <h2>Jogue do seu jeito</h2>
              </div>
              <a href="#produtos">
                Ver tudo <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`category-card ${category.className}`}
                  onClick={() => {
                    setActiveCategory(category.name)
                    document
                      .querySelector("#produtos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="category-mark">{category.mark}</span>
                  <span>
                    <strong>{category.name}</strong>
                    <small>{category.label}</small>
                  </span>
                  <span className="category-arrow">
                    <Icon name="chevron" size={17} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="produtos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="kicker">Tá todo mundo querendo</span>
                <h2>Produtos em destaque</h2>
              </div>
              <div className="product-filter">
                {["Todos", "PlayStation", "PC Gamer"].map((item) => (
                  <button
                    className={activeCategory === item ? "active" : ""}
                    key={item}
                    onClick={() => setActiveCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {filteredProducts.length ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <span className="product-badge">{product.badge}</span>
                      <button
                        className="quick-view"
                        onClick={() =>
                          setNotice(`${product.name} — ${product.price}`)
                        }
                      >
                        Visualizar
                      </button>
                    </div>
                    <div className="product-info">
                      <span className="product-platform">
                        {product.platform}
                      </span>
                      <h3>{product.name}</h3>
                      <div className="rating" aria-label="5 de 5 estrelas">
                        ★★★★★ <span>(18)</span>
                      </div>
                      <strong className="price">{product.price}</strong>
                      <small>{product.installment} sem juros</small>
                      <button
                        className="add-button"
                        onClick={() => addToCart(product.name)}
                      >
                        <Icon name="bag" size={18} /> Adicionar à sacola
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Icon name="search" size={34} />
                <h3>Nenhum produto encontrado</h3>
                <p>
                  Tente outro termo ou fale com a gente para encontrar o que
                  precisa.
                </p>
                <button
                  onClick={() => {
                    setQuery("")
                    setActiveCategory("Todos")
                  }}
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="service-section" id="assistencia">
          <div className="container service-grid">
            <div className="service-copy">
              <span className="kicker kicker-light">
                Pode deixar com a gente
              </span>
              <h2>
                Seu game deu ruim?
                <br />
                <em>A gente resolve.</em>
              </h2>
              <p>
                Assistência técnica especializada em consoles, controles e
                computadores. Diagnóstico transparente e serviço com garantia.
              </p>
              <div className="service-list">
                <span>
                  <Icon name="gamepad" /> Consoles e controles
                </span>
                <span>
                  <Icon name="monitor" /> PCs e notebooks
                </span>
                <span>
                  <Icon name="shield" /> Serviço com garantia
                </span>
              </div>
              <a
                className="button button-dark"
                href={`${whatsappUrl}?text=Olá! Gostaria de solicitar um orçamento para assistência técnica.`}
                target="_blank"
                rel="noreferrer"
              >
                Pedir um orçamento <Icon name="arrow" size={19} />
              </a>
            </div>
            <div className="service-visual">
              <div className="service-orbit">
                <Icon name="tool" size={64} />
              </div>
              <div className="service-card">
                <span>Diagnóstico</span>
                <strong>
                  rápido e<br />
                  sem enrolação.
                </strong>
                <small>Fale com um técnico</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="container about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1715279240000-9a50953e327d?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente de jogos com TV e iluminação neon"
              />
              <span>
                <strong>16+</strong> anos vivendo o mundo gamer
              </span>
            </div>
            <div className="about-copy">
              <span className="kicker">Da nossa família para a sua</span>
              <h2>
                Mais que uma loja.
                <br />
                Um ponto de encontro gamer.
              </h2>
              <p>
                Em Itapevi desde 2009, a Ki Loucura Games nasceu da paixão por
                videogames e cresceu junto com a comunidade. Aqui você encontra
                atendimento de verdade, indicação honesta e aquele papo que só
                gamer entende.
              </p>
              <div className="about-stats">
                <div>
                  <strong>5.555+</strong>
                  <small>seguidores</small>
                </div>
                <div>
                  <strong>777+</strong>
                  <small>publicações</small>
                </div>
                <div>
                  <strong>4,9</strong>
                  <small>avaliação</small>
                </div>
              </div>
              <a
                className="text-link"
                href="https://www.instagram.com/kiloucuragames/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="instagram" size={19} /> Siga @kiloucuragames{" "}
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="location-section">
          <div className="container location-card">
            <div className="location-icon">
              <Icon name="map" size={30} />
            </div>
            <div>
              <span className="kicker">Venha conhecer</span>
              <h2>Nossa loja em Itapevi</h2>
              <p>Av. Rubens Caramez, 332 · Centro, Itapevi — SP</p>
            </div>
            <div className="location-hours">
              <Icon name="clock" />
              <span>
                <strong>Horário de atendimento</strong>
                <small>Seg–Sex: 9h–18h · Sáb: 9h–16h</small>
              </span>
            </div>
            <a
              className="button button-primary"
              href="https://maps.google.com/?q=Avenida+Rubens+Caramez+332+Itapevi"
              target="_blank"
              rel="noreferrer"
            >
              Como chegar <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand brand-footer" href="#">
              <span className="brand-icon">
                <Icon name="gamepad" size={27} />
              </span>
              <span>
                <strong>KI LOUCURA</strong>
                <small>GAMES</small>
              </span>
            </a>
            <p>Seu mundo gamer em Itapevi.</p>
          </div>
          <div>
            <strong>Loja</strong>
            <a href="#categorias">Categorias</a>
            <a href="#produtos">Destaques</a>
            <a href="#assistencia">Assistência técnica</a>
          </div>
          <div>
            <strong>Atendimento</strong>
            <a href={whatsappUrl}>WhatsApp</a>
            <a href="tel:+551143214708">(11) 4321-4708</a>
            <a href="https://www.instagram.com/kiloucuragames/">Instagram</a>
          </div>
          <div className="footer-cta">
            <strong>Ficou com alguma dúvida?</strong>
            <p>Chama a gente. Será um prazer te ajudar.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" /> Iniciar conversa
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Ki Loucura Games. Todos os direitos reservados.</span>
          <span>Feito para quem ama jogar.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <Icon name="whatsapp" size={27} />
        <span>Fale com a gente</span>
      </a>
      {notice && (
        <div className="toast" role="status">
          <Icon name="shield" size={19} /> {notice}
        </div>
      )}
    </div>
  )
}
