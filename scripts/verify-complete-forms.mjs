import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {parse} from 'parse5';
const fields=['transportType','trip','company','email','phone','occasion','guests','customerStreet','customerPostalCode','customerCity','pickup','pickupPostalCode','city','date','departureTime','arrivalDate','returnDate','returnTime','destination','destinationPostalCode','destinationCity','vehicle','discountCode','discovery','message'];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;const walk=(n,cb)=>{cb(n);for(const c of n.childNodes??[])walk(c,cb);};
const files=[];function list(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);e.isDirectory()?list(p):p.endsWith('.html')&&files.push(p);}}list('dist');
let forms=0,dialogs=0;
for(const file of files){const dom=parse(fs.readFileSync(file,'utf8'));walk(dom,n=>{
 if(n.tagName!=='form')return;const names=[];let shared=false;walk(n,c=>{if(attr(c,'data-shared-quote-fields')!==undefined)shared=true;if(attr(c,'name'))names.push(attr(c,'name'));});
 if(!shared){assert(file.includes('/beheer/'),'Unconverted public form: '+file);return;}
 forms++;for(const field of fields)assert(names.includes(field),file+' missing '+field);assert(names.includes('name')||names.includes('customerName'),file+' contact name');
 if(attr(n,'action')==='/api/offerte')assert(names.includes('sourcePage'),file+' missing native source');else dialogs++;
 });}
console.log(`${files.length} pages: ${forms} public enquiry forms (${dialogs} WhatsApp dialogs) contain the complete shared question set and source fields.`);
