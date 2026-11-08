export const terminal = new Set(['cancelled-by-schedule-change', 'skipped-quality']);
export function isActiveSlot(slot) {
  const at = slot.scheduledAt;
  if (slot.scheduleActive === false || terminal.has(slot.status)) return false;
  if (at.slice(0,10) > '2026-12-30') return false;
  return at.slice(0,10) < '2026-11-08' || [1,3,5].includes(new Date(at.slice(0,10)+'T12:00:00Z').getUTCDay());
}
export function getDueSlots(slots, now = new Date()) {
  const hour = Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dubai',hour:'2-digit',hourCycle:'h23'}).format(now));
  if (hour < 1 || hour > 4) return [];
  return slots.filter(s => !s.published && isActiveSlot(s) && new Date(s.scheduledAt) <= now).sort((a,b)=>a.scheduledAt.localeCompare(b.scheduledAt));
}
export function assertRenderable(slot, now = new Date()) {
  if (slot.published) return;
  if (!isActiveSlot(slot) || new Date(slot.scheduledAt) > now) throw new Error('Inactive or future publication slot: '+slot.slotId);
}
