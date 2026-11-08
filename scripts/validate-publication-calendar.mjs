import fs from 'node:fs';
import assert from 'node:assert/strict';
import {isActiveSlot,assertRenderable} from './publication-schedule.mjs';
const {slots}=JSON.parse(fs.readFileSync('editorial/calendar-2026.json','utf8'));
assert.equal(new Set(slots.map(s=>s.slotId)).size,slots.length,'Duplicate slot identity');
for(const s of slots) {
  if(s.published || s.scheduledAt.slice(0,10)<'2026-11-08') continue;
  if(![1,3,5].includes(new Date(s.scheduledAt.slice(0,10)+'T12:00:00Z').getUTCDay())) assert.equal(s.status,'cancelled-by-schedule-change');
  if(isActiveSlot(s)) assert(s.scheduledAt.slice(0,10)<='2026-12-30');
}
for(const name of fs.readdirSync('src/data/kennisbank/articles')) {
  if(!name.endsWith('.ts')) continue;
  const text=fs.readFileSync('src/data/kennisbank/articles/'+name,'utf8');
  const at=text.match(/originalScheduledAt["']?\s*:\s*["']([^"']+)/)?.[1];
  if(!at || at.slice(0,10)<'2026-11-08') continue;
  const id=text.match(/slotId["']?\s*:\s*["']([^"']+)/)?.[1];
  const slot=slots.find(s=>s.slotId===id);
  assert(slot,'New article requires original calendar slot: '+name);
  assertRenderable(slot);
}
console.log('Publication calendar and new article dates verified before rendering');
