<template>
<div class="progress-bar" id="progressBar"></div>
<!-- 移动端遮罩 -->
<div class="nav-overlay" id="navOverlay"></div>
<!-- ========== 导航栏 ========== -->
<header class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="#home" class="logo">&lt;ZXM /&gt;</a>
    <nav>
      <ul class="nav-links" id="navLinks">
        <li><a href="#home" class="active">首页</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#skills">技能</a></li>
        <li><a href="#projects">项目</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
    </nav>
    <div class="nav-actions">
      <button class="icon-btn" id="themeBtn" aria-label="切换深浅色主题">🌙</button>
      <button class="hamburger" id="hamburger" aria-label="打开菜单">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<!-- ========== Hero ========== -->
<section class="hero" id="home">
  <div class="hero-inner">
    <div class="hero-text">
      <p class="hero-greet">👋 你好，我是</p>
      <h1 class="hero-name">张小明</h1>
      <h2 class="hero-role">一名 <span id="typed"></span><span class="cursor">|</span></h2>
      <p class="hero-desc">
        热爱用代码构建优雅的 Web 体验。专注于前端开发，喜欢把想法变成现实，
        追求简洁、流畅、有温度的界面设计与交互细节。
      </p>
      <div class="hero-btns">
        <a href="#projects" class="btn btn-primary">查看作品</a>
        <a href="#contact" class="btn btn-outline">联系我</a>
      </div>
      <div class="socials">
        <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/>
          </svg>
        </a>
        <a href="mailto:hello@example.com" aria-label="邮箱">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 6-10 7L2 6"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.5L5.8 22H2.7l7.3-8.3L1.7 2h6.6l4.5 6 5.1-6Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="avatar-wrap">
        <div class="ring"></div>
        <div class="avatar">👨‍💻</div>
        <span class="badge badge-1">React</span>
        <span class="badge badge-2">Vue</span>
        <span class="badge badge-3">TypeScript</span>
      </div>
    </div>
  </div>
</section>
<!-- ========== 关于我 ========== -->
<section class="section section-alt" id="about">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">关于我</span>
      <h2 class="section-title">一个热爱创造的开发者</h2>
      <p class="section-sub">代码是工具，体验才是目的</p>
    </div>
    <div class="about-grid">
      <div class="about-text reveal">
        <p>
          我是<strong>张小明</strong>，一名有 3 年经验的前端开发工程师，目前常驻深圳。
          从第一次用 HTML 写出「Hello World」开始，我就迷上了把想法变成可交互界面的过程。
        </p>
        <p>
          我熟悉 <strong>Vue / React</strong> 技术栈，关注性能优化、组件设计与工程化实践。
          平时喜欢逛 GitHub、写技术笔记，也乐于参与开源项目，把踩过的坑分享给更多人。
        </p>
        <p>
          工作之余，我喜欢摄影、跑步和看纪录片。我相信好的产品源于对细节的执着，
          也相信持续学习是开发者最好的投资。
        </p>
        <div class="stats">
          <div class="stat">
            <strong data-count="3" data-suffix="+">0</strong>
            <span>年开发经验</span>
          </div>
          <div class="stat">
            <strong data-count="40" data-suffix="+">0</strong>
            <span>完成项目</span>
          </div>
          <div class="stat">
            <strong data-count="20" data-suffix="+">0</strong>
            <span>开源仓库</span>
          </div>
        </div>
      </div>
      <div class="about-card reveal">
        <h3>📋 快速了解</h3>
        <ul class="info-list">
          <li><span>📍 城市</span><span>广东 · 深圳</span></li>
          <li><span>💼 职位</span><span>前端开发工程师</span></li>
          <li><span>🎯 方向</span><span>Web / 移动端 H5</span></li>
          <li><span>🗣 语言</span><span>中文 / English</span></li>
          <li><span>☕ 状态</span><span>开放合作机会</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- ========== 技能 ========== -->
<section class="section" id="skills">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">技能栈</span>
      <h2 class="section-title">我擅长什么</h2>
      <p class="section-sub">持续打磨的技术能力</p>
    </div>
    <div class="skills-grid">
      <div class="skill reveal">
        <div class="skill-head"><span>HTML / CSS</span><span>95%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="95%"></div></div>
      </div>
      <div class="skill reveal">
        <div class="skill-head"><span>JavaScript / TypeScript</span><span>90%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="90%"></div></div>
      </div>
      <div class="skill reveal">
        <div class="skill-head"><span>Vue 3 / Pinia</span><span>88%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="88%"></div></div>
      </div>
      <div class="skill reveal">
        <div class="skill-head"><span>React / Next.js</span><span>82%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="82%"></div></div>
      </div>
      <div class="skill reveal">
        <div class="skill-head"><span>工程化（Vite / Webpack）</span><span>80%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="80%"></div></div>
      </div>
      <div class="skill reveal">
        <div class="skill-head"><span>UI 设计 / Figma</span><span>72%</span></div>
        <div class="skill-bar"><div class="skill-fill" data-width="72%"></div></div>
      </div>
    </div>
  </div>
</section>
<!-- ========== 项目 ========== -->
<section class="section section-alt" id="projects">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">作品集</span>
      <h2 class="section-title">近期项目</h2>
      <p class="section-sub">一些我参与或独立完成的作品</p>
    </div>
    <div class="projects-grid">
      <article class="project-card reveal">
        <div class="project-thumb thumb-1">🛒</div>
        <div class="project-body">
          <h3>云商城 H5</h3>
          <p>面向移动端的电商应用，支持商品浏览、购物车、下单支付全流程，首屏加载优化至 1.2s 以内。</p>
          <div class="tags">
            <span class="tag">Vue 3</span>
            <span class="tag">Vite</span>
            <span class="tag">Pinia</span>
          </div>
          <div class="project-links">
            <a href="#">在线预览 →</a>
            <a href="#">源码 →</a>
          </div>
        </div>
      </article>
      <article class="project-card reveal">
        <div class="project-thumb thumb-2">📊</div>
        <div class="project-body">
          <h3>数据可视化中台</h3>
          <p>拖拽式大屏搭建平台，内置 20+ 图表组件，支持实时数据推送与自由布局，服务于多个业务线。</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">ECharts</span>
            <span class="tag">WebSocket</span>
          </div>
          <div class="project-links">
            <a href="#">在线预览 →</a>
            <a href="#">源码 →</a>
          </div>
        </div>
      </article>
      <article class="project-card reveal">
        <div class="project-thumb thumb-3">🎨</div>
        <div class="project-body">
          <h3>组件库 UI Kit</h3>
          <p>一套基于 TypeScript 的轻量组件库，包含 30+ 组件，支持按需引入与主题定制，已发布至 npm。</p>
          <div class="tags">
            <span class="tag">TypeScript</span>
            <span class="tag">Rollup</span>
            <span class="tag">SCSS</span>
          </div>
          <div class="project-links">
            <a href="#">在线预览 →</a>
            <a href="#">源码 →</a>
          </div>
        </div>
      </article>
      <article class="project-card reveal">
        <div class="project-thumb thumb-4">📝</div>
        <div class="project-body">
          <h3>Markdown 博客引擎</h3>
          <p>静态博客生成器，支持 Markdown 解析、代码高亮、全文搜索与自动生成 RSS，构建速度极快。</p>
          <div class="tags">
            <span class="tag">Next.js</span>
            <span class="tag">MDX</span>
            <span class="tag">Node</span>
          </div>
          <div class="project-links">
            <a href="#">在线预览 →</a>
            <a href="#">源码 →</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
<!-- ========== 联系 ========== -->
<section class="section" id="contact">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-tag">联系我</span>
      <h2 class="section-title">一起聊聊吧</h2>
      <p class="section-sub">无论是合作、招聘还是技术交流，都欢迎联系我</p>
    </div>
    <div class="contact-grid">
      <div class="contact-info reveal">
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div>
            <h4>邮箱</h4>
            <p>hello@example.com</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div>
            <h4>电话</h4>
            <p>+86 138 0000 0000</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div>
            <h4>所在地</h4>
            <p>广东省深圳市南山区</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">⚡</div>
          <div>
            <h4>响应时间</h4>
            <p>通常 24 小时内回复</p>
          </div>
        </div>
      </div>
      <form class="contact-form reveal" id="contactForm" novalidate>
        <div class="form-row">
          <input type="text" name="name" placeholder="你的名字" required />
          <input type="email" name="email" placeholder="你的邮箱" required />
        </div>
        <textarea name="message" placeholder="想对我说的话……" required></textarea>
        <button type="submit" class="btn btn-primary">发送消息</button>
        <p class="form-msg" id="formMsg" role="status"></p>
      </form>
    </div>
  </div>
</section>
<!-- ========== 页脚 ========== -->
<footer>
  <p>© <span id="year">2025</span> 张小明 · 用心写代码，也用心生活 ☕</p>
</footer>
<!-- 回到顶部 -->
<button class="to-top" id="toTop" aria-label="回到顶部">↑</button>

</template>

<script setup>
// js代码写在这里
import { onMounted } from 'vue'
//导入外部js、css
import { initHome } from '../scripts/home.js'
import '../assets/css/home.css'

onMounted(()=>{
  initHome() //DOM挂载
})
</script>

