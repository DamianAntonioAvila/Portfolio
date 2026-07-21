import { SKILL_GROUPS, TIMELINE_ENTRIES, PROJECTS, MUSIC_EVENTS } from './model.js';

export function qs(sel) {
  return document.querySelector(sel);
}

export function qsa(sel) {
  return document.querySelectorAll(sel);
}

export function renderSkills() {
  const grid = qs('#skillsGrid');
  if (!grid) return;

  grid.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-group reveal">
      <div class="skill-group-title">${group.title}</div>
      <div class="skill-list">
        ${group.skills.map(skill => `
          <div class="skill-item">
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar">
              <div class="skill-fill ${group.color !== 'accent' ? group.color : ''}" style="--target:${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-item').forEach((item, index) => {
          setTimeout(() => item.classList.add('animated'), index * 80);
        });
      }
    });
  }, { threshold: 0.3 });

  qsa('.skill-group').forEach((group) => observer.observe(group));
}

export function renderTimeline() {
  const container = qs('#timeline');
  if (!container) return;

  container.innerHTML = TIMELINE_ENTRIES.map(entry => `
    <div class="timeline-entry">
      <div class="timeline-dot"></div>
      <div class="timeline-period">${entry.period}</div>
      <div class="timeline-role">${entry.role}</div>
      <div class="timeline-company">${entry.company}</div>
      <p class="timeline-desc">${entry.description}</p>
      <div class="timeline-tags">
        ${entry.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  qsa('.timeline-entry').forEach((entry) => observer.observe(entry));
}

export function renderProjects() {
  const grid = qs('#projectsGrid');
  if (!grid) return;

  const featured = PROJECTS.filter((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  const buildLinks = (project) => {
    const links = project.links || [
      { label: 'GitHub', href: project.github, type: 'primary' }
    ];

    return links.map((link) => `
      <a href="${link.href}" class="project-link ${link.type === 'primary' ? 'primary' : 'secondary'}" target="_blank" rel="noopener">${link.label}</a>
    `).join('');
  };

  const featuredHTML = featured.map((project) => `
    <div class="project-card project-featured">
      <div class="project-preview">
        <div class="project-preview-badge">${project.badge || 'Professional Project'}</div>
        <div class="project-preview-box">
          <div class="project-preview-line"></div>
          <div class="project-preview-line short"></div>
          <div class="project-preview-line medium"></div>
          <div class="project-preview-line tall"></div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-header">
          <div>
            <div class="project-icon">${project.icon}</div>
            <div class="project-title">${project.title}</div>
            <p class="project-subtitle">${project.summary}</p>
          </div>
          <div class="project-links">${buildLinks(project)}</div>
        </div>
        <div class="project-body">
          <p class="project-desc">${project.description}</p>
          <div class="project-features">
            <div class="project-features-title">Highlights</div>
            <ul class="project-feature-list">
              ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="project-stack">
            ${project.stack.map((item) => `<span class="stack-item">${item}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const restHTML = rest.map((project) => `
    <div class="project-card">
      <div class="project-preview">
        <div class="project-preview-badge">${project.badge || 'Project'}</div>
        <div class="project-preview-box">
          <div class="project-preview-line"></div>
          <div class="project-preview-line short"></div>
          <div class="project-preview-line medium"></div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-header">
          <div>
            <div class="project-icon">${project.icon}</div>
            <div class="project-title">${project.title}</div>
            <p class="project-subtitle">${project.summary}</p>
          </div>
          <div class="project-links">${buildLinks(project)}</div>
        </div>
        <div class="project-body">
          <p class="project-desc">${project.description}</p>
          <div class="project-features">
            <div class="project-features-title">Highlights</div>
            <ul class="project-feature-list">
              ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="project-stack">
            ${project.stack.map((item) => `<span class="stack-item">${item}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  grid.innerHTML = featuredHTML + restHTML;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 100);
      }
    });
  }, { threshold: 0.1 });

  qsa('.project-card').forEach((entry) => observer.observe(entry));
}

export function renderMusic() {
  const container = qs('#musicTimeline');
  if (!container) return;

  container.innerHTML = MUSIC_EVENTS.map((event) => `
    <div class="music-event">
      <div class="music-event-title">${event.title}</div>
      <div class="music-event-detail">${event.detail}</div>
    </div>
  `).join('');
}

export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  setTimeout(() => {
    qsa('.reveal').forEach((element) => observer.observe(element));
  }, 100);
}
