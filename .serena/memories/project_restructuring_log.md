# Restructuring Log (2025-11-20)
## Overview
Transformed `awscommunity.id` into a User Group Portal.

## Changes
1. **Structure**:
   - Moved ComDay 2025 pages to `/comday-25/`.
   - Created new root `index.astro`.

2. **Portal Features**:
   - **Map**: Added `IndonesiaMap.tsx` (`react-simple-maps`).
     - Local TopoJSON (`indonesia.json`).
     - **Responsive**: Mobile zooms on West Indonesia.
     - **Interactive**: Click markers for info card.
     - **Style**: Transparent, merged with hero.
   - **Groups**: Jakarta, Medan, Surabaya, Bandung.

3. **Updates**:
   - Removed "Upcoming Event" section (ComDay 2025 ended).

## Tech
- Added `react-simple-maps`.
- Created `src/components/IndonesiaMap.tsx`.
