// Page behaviour: navigation state, reveal-on-scroll, project filter and
// detail dialog. Loaded before Alpine so the component is registered in time.

document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    mobileOpen: false,
    scrolled: false,
    active: "home",
    projects: window.PORTFOLIO_PROJECTS || [],
    sideline: window.PORTFOLIO_SIDELINE || [],
    filter: "All",
    selected: null,
    lastFocus: null,
    copied: false,

    get categories() {
      return ["All", ...new Set(this.projects.map((p) => p.category))];
    },

    get filtered() {
      return this.filter === "All"
        ? this.projects
        : this.projects.filter((p) => p.category === this.filter);
    },

    init() {
      const onScroll = () => (this.scrolled = window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      // Highlight the nav link for the section currently in view.
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.active = entry.target.id;
          });
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      document
        .querySelectorAll("main section[id]")
        .forEach((s) => sectionObserver.observe(s));

      window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
        if (e.matches) this.mobileOpen = false;
      });
    },

    hasLinks(p) {
      return p.links && (p.links.demo || p.links.source || p.links.caseStudy);
    },

    openProject(p) {
      this.lastFocus = document.activeElement;
      this.selected = p;
      this.$nextTick(() => {
        this.$refs.dialog.showModal();
        document.documentElement.style.overflow = "hidden";
      });
    },

    closeProject() {
      this.$refs.dialog.close();
    },

    onDialogClose() {
      document.documentElement.style.overflow = "";
      this.selected = null;
      if (this.lastFocus) this.lastFocus.focus();
    },

    async copyEmail(email) {
      try {
        await navigator.clipboard.writeText(email);
        this.copied = true;
        setTimeout(() => (this.copied = false), 2000);
      } catch {
        window.location.href = "mailto:" + email;
      }
    },
  }));
});

// Reveal sections as they enter the viewport.
(() => {
  const items = document.querySelectorAll(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => observer.observe(el));
})();
