/**
 * AIOrder Admin — Shared Layout
 * Usage: call initLayout({ activeId: 'basic-info' }) after DOM loaded
 */

const NAV_STRUCTURE = [
  {
    section: '店舗設定',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,
    items: [
      { id: 'basic-info',    emoji: '🏪', label: '基本情報設定',      href: 'A1_001.html' },
      { id: 'op-mode',       emoji: '⚙️', label: '営業モード設定',    href: 'A1_002.html' },
      { id: 'feature-detail',emoji: '🔧', label: '機能別詳細設定',    href: 'A1_003.html' },
      { id: 'notification',  emoji: '🔔', label: '通知・メッセージ設定', href: 'A1_010.html' },
      { id: 'ai-setting',    emoji: '🤖', label: 'AI・自動化設定',    href: 'A1_011.html' },
      { id: 'device',        emoji: '🖨️', label: 'デバイス連携設定',  href: 'A1_015.html' },
    ]
  },
  {
    section: 'マスタ管理',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/></svg>`,
    items: [
      { id: 'menu',     emoji: '🍜', label: 'メニュー管理',   href: 'A1_016.html' },
      { id: 'table',    emoji: '🪑', label: 'テーブル管理',   href: 'A1_024.html' },
      { id: 'staff',    emoji: '👥', label: 'スタッフ管理',   href: 'A1_025.html' },
      { id: 'customer', emoji: '👤', label: '顧客管理',       href: 'A1_026.html' },
      { id: 'shift',    emoji: '📅', label: 'シフト管理',     href: 'A1_027.html' },
    ]
  },
  {
    section: 'レポート・分析',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>`,
    items: [
      { id: 'sales-report',  emoji: '💰', label: '売上レポート',        href: 'A1_028.html' },
      { id: 'order-report',  emoji: '📋', label: '注文・提供レポート',  href: 'A1_029.html' },
      { id: 'customer-report',emoji:'👥', label: '顧客レポート',        href: 'A1_030.html' },
      { id: 'ai-report',     emoji: '🤖', label: 'AI分析',              href: 'A1_033.html' },
    ]
  },
  {
    section: '請求・決済管理',
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/></svg>`,
    items: [
      { id: 'payment-history', emoji: '💳', label: '決済取引履歴',     href: 'A1_034.html' },
      { id: 'daily-close',     emoji: '📊', label: '日次精算レポート', href: 'A1_036.html' },
      { id: 'tax-fee',         emoji: '🧾', label: '税率・手数料設定', href: 'A1_035.html' },
      { id: 'receipt-layout',  emoji: '🖨️', label: '領収書レイアウト', href: 'A1_037.html' },
    ]
  },
];

function buildSidebar(activeId) {
  const navHtml = NAV_STRUCTURE.map(group => {
    const itemsHtml = group.items.map(item => {
      const isActive = item.id === activeId;
      return `
        <a href="${item.href}" class="sidebar-item${isActive ? ' active' : ''}">
          <span class="sidebar-item-icon" aria-hidden="true">${item.emoji}</span>
          <span>${item.label}</span>
        </a>`;
    }).join('');

    return `
      <div class="sidebar-section-title">${group.section}</div>
      ${itemsHtml}`;
  }).join('');

  const logoBars = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="11" width="4" height="8" rx="1" fill="#fff"/><rect x="9" y="7" width="4" height="12" rx="1" fill="#fff"/><rect x="15" y="3" width="4" height="16" rx="1" fill="#fff"/></svg>`;

  return `
    <aside class="sidebar" id="sidebar">
      <a href="index.html" class="sidebar-logo">
        <div class="sidebar-logo-mark">${logoBars}</div>
        <div>
          <div class="sidebar-brand-title">AI ORDER ADMIN</div>
          <div class="sidebar-brand-sub">統合バックオフィス</div>
        </div>
      </a>
      <nav class="sidebar-nav">${navHtml}</nav>
    </aside>`;
}

function buildHeader(title) {
  return `
    <header class="header">
      <div class="header-left">
        <button class="header-icon-btn" onclick="document.getElementById('sidebar').classList.toggle('collapsed')" title="メニュー">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div class="header-search">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="メニュー・設定を検索…">
        </div>
      </div>
      <div class="header-right">
        <a href="index.html" class="btn btn-sm btn-secondary" title="セットアップ概要">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          概要
        </a>
        <button class="header-icon-btn" title="通知">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          <span class="notif-dot"></span>
        </button>
        <button class="header-icon-btn" title="設定">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        </button>
        <div class="header-user">
          <div class="header-user-info">
            <div class="header-user-name">Admin</div>
            <div class="header-user-role">店長</div>
          </div>
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff">A</div>
        </div>
      </div>
    </header>`;
}

/**
 * @param {Object} config
 * @param {string} config.activeId   - sidebar item id
 * @param {string} [config.breadcrumb] - HTML string for breadcrumb
 */
function initLayout(config = {}) {
  const { activeId = '', breadcrumb = '' } = config;

  // Inject sidebar
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
  if (sidebarPlaceholder) {
    sidebarPlaceholder.outerHTML = buildSidebar(activeId);
  }

  // Inject header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = buildHeader();
  }

  // Inject breadcrumb
  if (breadcrumb) {
    const bcEl = document.getElementById('breadcrumb-placeholder');
    if (bcEl) bcEl.innerHTML = breadcrumb;
  }
}
