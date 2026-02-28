export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-0 mt-5">
      <div className="container py-4">
        <div className="row gy-3 align-items-start">
          {/* Website Story / About */}
          <div className="col-12 col-md-6">
            <a
              href="/"
              className="text-neutral-0 text-decoration-none fw-bold fs-4 d-inline-block mb-2"
            >
              StoryShop
            </a>
            <br />
            <a
              className="text-neutral-200 text-decoration-none d-inline-flex align-items-center gap-2"
              href="/pages/story.html"
            >
              <span className="mb-2">網站故事 / 品牌故事</span>
            </a>

            <p>你的每一步，都值得被認真對待</p>
            <p>StoryShop，我們想和你一起，把平凡的日子走成喜歡的樣子。</p>
          </div>

          {/* My Contact */}
          <div className="col-12 col-md-6">
            <p className="fw-semibold mt-1">聯絡作者:</p>

            <div className="d-flex flex-column gap-2">
              {/* GitHub (最短) */} 
              <a
                className="text-neutral-0 text-decoration-none d-inline-flex align-items-center gap-2 mb-2"
                href="https://github.com/EricChung24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
                <span className="text-neutral-200">EricChung24</span>
              </a>

              {/* Instagram */}
              <a
                className="text-neutral-0 text-decoration-none d-inline-flex align-items-center gap-2"
                href="https://www.instagram.com/ericchung1024/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram footer-icon"></i>
                <span className="text-neutral-200 mb-2">EricChung1024</span>
              </a>

              {/* Gmail */}
              <a
                className="text-neutral-0 text-decoration-none d-inline-flex align-items-center gap-2"
                href="mailto:ericchung9139@gmail.com"
                aria-label="Gmail"
              >
                <i className="bi bi-envelope-fill footer-icon"></i>
                <span className="text-neutral-200 mb-2">
                  ericchung9139@gmail.com
                </span>
              </a>

              {/* Hugo (最長) */}
              <a
                className="text-neutral-0 text-decoration-none d-inline-flex align-items-center gap-2 flex-wrap"
                href="https://ericchung24.github.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hugo Blog"
              >
                <iconify-icon
                  icon="simple-icons:hugo"
                  width="18"
                  height="18"
                  style={{ color: "currentColor" }}
                ></iconify-icon>
                <span className="text-neutral-200">EricChung的程式勇者村</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-neutral-700 my-3" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          <small className="text-neutral-200 fs-6">
            © {new Date().getFullYear()} StoryShop. 本網站為作品展示用，非商業用途。
          </small>

          <div className="d-flex gap-3">
            <a className="text-neutral-200 text-decoration-none" href="/pages/privacy.html">
              隱私權政策
            </a>
            <a className="text-neutral-200 text-decoration-none" href="/pages/terms.html">
              服務條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}