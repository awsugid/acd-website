# Portal Layout Implementation (2025-11-20)

## Overview
Created separate layout for User Group Portal to remove event-specific navigation.

## Changes
1. **New Layout**: `src/layouts/PortalLayout.astro`
   - Simplified header with only "Home" and "Community Day 2025" links
   - Removed event navigation (About, Tickets, CFP, Agenda, Sessions, Speakers, Sponsors, FAQ)
   - Same styling/footer as MainLayout

2. **Updated Portal**: `src/pages/index.astro` now uses `PortalLayout`

3. **Separation**: Community Day pages (`/comday-25/*`) continue using `MainLayout` with full event nav

## Result
Portal has clean minimal header; event pages retain detailed navigation.
