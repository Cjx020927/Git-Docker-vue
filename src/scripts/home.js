// src/home.js
export function initHome() {
    'use strict';
  
    /* ================= 1. 主题切换 ================= */
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
  
    function getSavedTheme() {
      try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }
    function saveTheme(t) {
      try { localStorage.setItem('theme', t); } catch (e) { /* 忽略 */ }
    }
    function setTheme(t) {
      html.setAttribute('data-theme', t);
      themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
      saveTheme(t);
    }
  
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(getSavedTheme() || (prefersDark ? 'dark' : 'light'));
  
    themeBtn.addEventListener('click', function () {
      setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  
    /* ================= 2. 滚动：导航栏 / 进度条 / 回到顶部 ================= */
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('progressBar');
    const toTop = document.getElementById('toTop');
  
    function onScroll() {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
  
      navbar.classList.toggle('scrolled', y > 20);
      toTop.classList.toggle('show', y > 420);
      progressBar.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    /* ================= 3. 移动端菜单 ================= */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
  
    function toggleMenu(open) {
      hamburger.classList.toggle('active', open);
      navLinks.classList.toggle('open', open);
      navOverlay.classList.toggle('show', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
  
    hamburger.addEventListener('click', function () {
      toggleMenu(!navLinks.classList.contains('open'));
    });
    navOverlay.addEventListener('click', function () { toggleMenu(false); });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggleMenu(false); });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) toggleMenu(false);
    });
  
    /* ================= 4. 打字机效果 ================= */
    const typedEl = document.getElementById('typed');
    const words = ['前端开发工程师', 'UI 交互爱好者', '开源贡献者', '终身学习者'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const word = words[wordIndex];
      charIndex += isDeleting ? -1 : 1;
      typedEl.textContent = word.slice(0, charIndex);
  
      let delay = isDeleting ? 60 : 140;
  
      if (!isDeleting && charIndex === word.length) {
        delay = 1600;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      setTimeout(type, delay);
    }
    setTimeout(type, 600);
  
    /* ================= 5. 滚动出现动画 ================= */
    const revealEls = document.querySelectorAll('.reveal');
  
    if ('IntersectionObserver' in window) {
      const revealIO = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  
      revealEls.forEach(function (el, i) {
        el.style.transitionDelay = (i % 4) * 80 + 'ms';
        revealIO.observe(el);
      });
    } else {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }
  
    /* ================= 6. 技能条动画 ================= */
    const skillFills = document.querySelectorAll('.skill-fill');
  
    if ('IntersectionObserver' in window) {
      const skillIO = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.style.width = el.dataset.width || '0%';
          obs.unobserve(el);
        });
      }, { threshold: 0.35 });
      skillFills.forEach(function (el) { skillIO.observe(el); });
    } else {
      skillFills.forEach(function (el) { el.style.width = el.dataset.width; });
    }
  
    /* ================= 7. 数字增长动画 ================= */
    const counters = document.querySelectorAll('[data-count]');
  
    if ('IntersectionObserver' in window && counters.length) {
      const counterIO = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count) || 0;
          const suffix = el.dataset.suffix || '';
          const duration = 1200;
          const start = performance.now();
  
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { counterIO.observe(el); });
    }
  
    /* ================= 8. 导航高亮（Scroll Spy） ================= */
    const sections = document.querySelectorAll('section[id]');
    const anchors = document.querySelectorAll('.nav-links a');
  
    if ('IntersectionObserver' in window && sections.length) {
      const spyIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          anchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { spyIO.observe(s); });
    }
  
    /* ================= 9. 表单提交（演示） ================= */
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        formMsg.style.color = '#ef4444';
        formMsg.textContent = '请把信息填写完整哦～';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMsg.style.color = '#ef4444';
        formMsg.textContent = '邮箱格式好像不太对～';
        return;
      }
  
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = '发送中…';
  
      // 演示：这里可以替换成真实的接口请求 fetch(...)
      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = originalText;
        formMsg.style.color = '#10b981';
        formMsg.textContent = '✅ 消息已发送，我会尽快回复你！';
        form.reset();
        setTimeout(function () { formMsg.textContent = ''; }, 4000);
      }, 900);
    });
  
    /* ================= 10. 页脚年份 ================= */
    document.getElementById('year').textContent = new Date().getFullYear();
}
