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
 *   date: '2026-01-01',          // optional, ISO date — only needed if you want date-based sorting
 *   hideTag: true                // optional — omit the "Live" badge in the card's top-left corner
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
    id: '7637676175510326542',
    url: 'https://www.tiktok.com/@mattyb2111/video/7637676175510326542',
    thumbnail: 'assets/vid-lifestyle-1.jpg',
    caption: 'Little Throwback',
    hideTag: true,
  },
  {
    tab: 'lifestyle',
    platform: 'tiktok',
    status: 'live',
    id: '7641219426901085453',
    url: 'https://www.tiktok.com/@mattyb2111/video/7641219426901085453',
    thumbnail: 'assets/vid-lifestyle-2.jpg',
    caption: 'Retirement home for horses at Mill Creek Farm',
    hideTag: true,
  },
  {
    tab: 'lifestyle',
    platform: 'tiktok',
    status: 'live',
    id: '7645394407440567565',
    url: 'https://www.tiktok.com/@mattyb2111/video/7645394407440567565',
    thumbnail: 'assets/vid-lifestyle-3.jpg',
    caption: 'Taking in the first few weeks of summer at the University of Florida',
    hideTag: true,
  },

  // --- 75 Hard tab (posts exist on the profile, thumbnails/specific ids not saved yet) ---
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'live',
    id: '7646844761525079310',
    url: 'https://www.tiktok.com/@mattyb2111/video/7646844761525079310',
    thumbnail: 'assets/vid-75hard-1.jpg',
    caption: 'It’s official…75 HARD',
    hideTag: true,
  },
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'live',
    id: '7662983503180614926',
    url: 'https://www.tiktok.com/@mattyb2111/video/7662983503180614926',
    thumbnail: 'assets/vid-75hard-2.jpg',
    caption: 'Get up and go',
    hideTag: true,
  },
  {
    tab: '75hard',
    platform: 'tiktok',
    status: 'live',
    id: '7664241376338382093',
    url: 'https://www.tiktok.com/@mattyb2111/video/7664241376338382093',
    thumbnail: 'assets/vid-75hard-3.jpg',
    caption: 'Allow yourself to have fun while being active',
    hideTag: true,
  },

  // --- Sports Internship tab ---
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'live',
    id: '7666166136328801549',
    url: 'https://www.tiktok.com/@matthewinsports/video/7666166136328801549',
    thumbnail: 'assets/vid-sports-1.jpg',
    caption: 'Want to ask for a coffee chat? Start with these 3 tips',
    hideTag: true,
  },
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'live',
    id: '7665481707369286925',
    url: 'https://www.tiktok.com/@matthewinsports/video/7665481707369286925',
    thumbnail: 'assets/vid-sports-2.jpg',
    caption: 'How to have a successful coffee chat',
    hideTag: true,
  },
  {
    tab: 'sports',
    platform: 'tiktok',
    status: 'live',
    id: '7664048093721038094',
    url: 'https://www.tiktok.com/@matthewinsports/video/7664048093721038094',
    thumbnail: 'assets/vid-sports-3.jpg',
    caption: 'Networking is about relationships, not opportunities',
    hideTag: true,
  },
];
