/*
 * CONTENT SECTION — video/post data
 * ----------------------------------
 * Every card in the "Content creation" section (index.html) is generated from
 * this VIDEOS array. To add a new TikTok or Instagram post, paste a new object
 * into the array below — nothing in index.html needs to change.
 *
 * TO ADD A NEW LIVE POST, COPY THIS:
 * {
 *   tab: 'lifestyle',            // 'lifestyle' | '75hard' | 'sports' — must match an existing tab
 *   platform: 'tiktok',          // 'tiktok' | 'instagram'
 *   status: 'live',
 *   id: 'VIDEO_OR_POST_ID',      // the numeric TikTok video id, or the Instagram shortcode
 *   url: 'https://...',          // full post URL (used for the "View" link and as an embed fallback)
 *   thumbnail: 'assets/your-image.jpg',
 *   thumbnailPosition: 'center', // optional CSS object-position, e.g. '17% center'
 *   views: 123,                  // optional — omit the field entirely to hide the view-count badge
 *   caption: 'Caption text shown on the card',
 *   date: '2026-01-01'           // optional, ISO date — only needed if you want date-based sorting
 * }
 *
 * NOTE ON THUMBNAILS: TikTok/Instagram's oEmbed APIs are not called here, so
 * thumbnails are NOT fetched automatically. Save a thumbnail image into
 * assets/ yourself and point `thumbnail` at it, or the card will show the
 * "Add thumbnail" placeholder treatment (see the 75hard entries below).
 *
 * OTHER CARD STATUSES:
 * - status: 'placeholder' — a real post exists but you haven't saved a
 *   thumbnail/specific id yet. Card shows the "Add thumbnail" icon+label,
 *   still tagged "Live", and links straight to `url` (profile or post) in a
 *   new tab instead of opening the embed modal (no id, so nothing to embed).
 *   Needs: tab, platform, status, url, caption, and optionally `icon` (emoji
 *   shown in the placeholder square).
 * - status: 'soon' — fully placeholder ("Coming soon"), not clickable.
 *   Needs: tab, platform, status, caption, and optionally `icon`.
 *
 * ORDER: cards render in the order they appear in this array within each
 * tab, unless a `date` is present on every entry in that tab, in which case
 * they're sorted newest-first. Reorder content by reordering entries here.
 */
const VIDEOS = [
  // --- Lifestyle tab ---
  {
    tab: 'lifestyle',
    platform: 'tiktok',
    status: 'live',
    id: '7642125249395445005',
    url: 'https://www.tiktok.com/@mattyb2111/video/7642125249395445005',
    thumbnail: 'assets/vid-lifestyle.png',
    thumbnailPosition: '17% center',
    views: 670,
    caption: 'Serendipity Ice Cream Parlor — High Springs, FL',
  },
  {
    tab: 'lifestyle',
    platform: 'tiktok',
    status: 'live',
    id: '7641735866255297805',
    url: 'https://www.tiktok.com/@mattyb2111/video/7641735866255297805',
    thumbnail: 'assets/vid-lifestyle.png',
    thumbnailPosition: '50% center',
    views: 463,
    caption: 'Ichetucknee Springs Tubing — Fort White, FL',
  },
  {
    tab: 'lifestyle',
    platform: 'tiktok',
    status: 'live',
    id: '7641219426901085453',
    url: 'https://www.tiktok.com/@mattyb2111/video/7641219426901085453',
    thumbnail: 'assets/vid-horse.png',
    views: 692,
    caption: 'Retired Horse Farm — Alachua County, FL',
  },

  // --- 75 Hard tab (posts exist on the profile, thumbnails/specific ids not saved yet) ---
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'placeholder',
    url: 'https://www.tiktok.com/@mattyb2111',
    icon: '🔥',
    caption: 'Why I started 75 Hard',
  },
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'placeholder',
    url: 'https://www.tiktok.com/@mattyb2111',
    icon: '🔥',
    caption: 'Day 1 — the rules, the diet, the plan',
  },
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'placeholder',
    url: 'https://www.tiktok.com/@mattyb2111',
    icon: '🔥',
    caption: "Progress update — what's changed",
  },

  // --- Sports Internship tab (not filmed yet) ---
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'soon',
    icon: '🏟️',
    caption: 'How I landed my first sports internship',
  },
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'soon',
    icon: '🏟️',
    caption: "What they don't tell you about NIL internships",
  },
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'soon',
    icon: '🏟️',
    caption: 'Breaking into sports business as a student',
  },
];
