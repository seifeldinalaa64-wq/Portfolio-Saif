// Portfolio interactions: icons, tabs, accordion, carousel, copy email
const P={bulb2:'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',trend:'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',ext:'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z',bars:'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z',table:'M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z',docw:'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',slides:'M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z',pal2:'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',video:'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',motion:'M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',brush:'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z',sparkle:'M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z',cut:'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z',img:'M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5z',dl:'M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z',send:'M2 21l21-9L2 3v7l15 2-15 2z',check:'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',warn:'M12 2L1 21h22zM11 10h2v5h-2zm0 6h2v2h-2z',
in:'M6.9 8.6H3.7V20h3.2zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.3 20v-6.3c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-3 1.7V8.6h-3.2V20h3.200v-6.200c0-1.600.3-3.100 2.300-3.100s2 1.800 2 3.200V20z',
x:'M17.8 3h3.1l-6.800 7.700L22 21h-6.200l-4.900-6.300L5.300 21H2.200l7.300-8.300L2 3h6.400l4.400 5.800zm-1.100 16.200h1.700L7.400 4.700H5.600z',
ig:'M12 2.200c3.200 0 3.600 0 4.800.1 3.300.1 4.800 1.700 4.900 4.900.1 1.300.1 1.600.1 4.800s0 3.600-.1 4.800c-.1 3.200-1.700 4.800-4.900 4.900-1.300.1-1.600.1-4.800.1s-3.600 0-4.800-.1c-3.300-.1-4.800-1.700-4.900-4.900C2.200 15.600 2.200 15.200 2.200 12s0-3.600.1-4.800C2.400 3.900 4 2.400 7.200 2.300 8.400 2.200 8.800 2.200 12 2.200zM12 0C8.700 0 8.300 0 7.100.1 2.700.3.300 2.700.1 7.100 0 8.300 0 8.700 0 12s0 3.700.1 4.900c.2 4.400 2.600 6.800 7 7 1.200.1 1.600.1 4.900.1s3.700 0 4.900-.1c4.400-.2 6.800-2.600 7-7 .1-1.200.1-1.600.1-4.900s0-3.700-.1-4.900c-.2-4.400-2.600-6.800-7-7C15.700 0 15.300 0 12 0zm0 5.800a6.200 6.200 0 100 12.400 6.200 6.200 0 000-12.400zM12 16a4 4 0 110-8 4 4 0 010 8zm6.400-11.800a1.400 1.400 0 100 2.900 1.400 1.400 0 000-2.900z',
gh:'M12 .3a12 12 0 00-3.800 23.400c.6.1.8-.3.8-.6v-2c-3.300.7-4-1.600-4-1.600-.6-1.400-1.400-1.800-1.400-1.800-1-.7.1-.7.1-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.800 1.300 3.500 1 .1-.8.4-1.300.8-1.600-2.700-.3-5.500-1.300-5.500-5.900 0-1.300.5-2.400 1.200-3.200-.1-.3-.5-1.500.1-3.200 0 0 1-.3 3.300 1.200a11.500 11.500 0 016 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.700.2 2.900.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0012 .3',
yt:'M23.500 6.200a3 3 0 00-2.100-2.100C19.500 3.600 12 3.600 12 3.600s-7.500 0-9.400.5A3 3 0 00.5 6.200C0 8.100 0 12 0 12s0 3.900.5 5.800a3 3 0 002.100 2.100c1.900.5 9.400.5 9.400.5s7.500 0 9.400-.5a3 3 0 002.100-2.100c.5-1.900.5-5.800.5-5.800s0-3.900-.5-5.800zM9.600 15.600V8.400l6.200 3.600z',
trophy:'M6 3h12v3h3v2a4 4 0 01-4 4h-.3A5 5 0 0113 15.900V18h3v3H8v-3h3v-2.100A5 5 0 017.300 12H7a4 4 0 01-4-4V6h3zm0 5H5v0a2 2 0 001.100 1.800A5 5 0 016 8zm12 0v1.800A2 2 0 0019 8z',
medal:'M7 2h4l1 5-3 2zM13 2h4l-2 5-3-2zM12 9a6 6 0 100 12 6 6 0 000-12zm0 3l1.200 2.500 2.800.4-2 2 .5 2.800-2.500-1.300-2.500 1.300.5-2.800-2-2 2.800-.4z',
cap:'M12 3L1 9l11 6 9-4.900V17h2V9zM5 13.200V17c0 1.700 3.100 3 7 3s7-1.300 7-3v-3.800l-7 3.800z',
flask:'M9 2h6v2h-1v5.500l5.600 9.300A2 2 0 0117 22H7a2 2 0 01-1.700-3.200L10 9.500V4H9z',
mail:'M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 3l-8 5-8-5v7h16z',
phone:'M6.600 10.800a15 15 0 006.600 6.600l2.200-2.200a1 1 0 011-.2c1.100.4 2.300.6 3.600.6a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.500a1 1 0 011 1c0 1.300.2 2.500.6 3.600a1 1 0 01-.2 1z',
copy:'M8 2h11a2 2 0 012 2v13h-2V4H8zM4 6h11a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z',
brief:'M9 3h6a2 2 0 012 2v2h4v13H3V7h4V5a2 2 0 012-2zm0 2v2h6V5z',
chart:'M3 3h2v16h16v2H3zm5 9h3v6H8zm5-5h3v11h-3zm5 3h3v8h-3z',
bulb:'M12 2a7 7 0 00-4 12.700V17h8v-2.300A7 7 0 0012 2zM9 19h6v2H9z',
puzzle:'M10 3a2 2 0 014 0v2h5v5h-2a2 2 0 100 4h2v5h-5v-2a2 2 0 10-4 0v2H5v-5H3a2 2 0 110-4h2V5h5z',
x2:'M3 3h18v18H3z',
doc:'M6 2h9l5 5v15H6zm8 1.500V8h4.500z',
pal:'M12 2a10 10 0 000 20c1.700 0 2-1.200 1.400-2.100-.7-1-.2-2.400 1.100-2.400H17a5 5 0 005-5C22 6 17.500 2 12 2zM7.500 12a1.500 1.500 0 110-3 1.500 1.500 0 010 3zm3-4a1.500 1.500 0 110-3 1.500 1.500 0 010 3zm5 0a1.500 1.500 0 110-3 1.500 1.500 0 010 3z',
film:'M4 4h16v16H4zm2 2v2h2V6zm0 4v2h2v-2zm0 4v2h2v-2zm10-8v2h2V6zm0 4v2h2v-2zm0 4v2h2v-2zm-6-8v12h4V6z',
play:'M5 3l15 9-15 9z',
mon:'M12 2l2.200 6.800H21l-5.500 4 2.100 6.700-5.600-4.100-5.600 4.100 2.100-6.700L3 8.800h6.800z',
sun:'M12 7a5 5 0 100 10 5 5 0 000-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3z',
moon:'M21 14.500A9 9 0 119.500 3a7 7 0 0011.500 11.500z',
users:'M9 11a4 4 0 100-8 4 4 0 000 8zm8 0a3 3 0 100-6 3 3 0 000 6zM1 20c0-3.500 3.600-6 8-6s8 2.500 8 6zm17-5c3 .3 5 2 5 5h-4c0-2-.4-3.700-1-5z',
heart:'M12 21s-9-5.800-9-12a5 5 0 019-3 5 5 0 019 3c0 6.200-9 12-9 12z'
};
const ic=n=>`<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="${P[n]||P.mon}"/></svg>`;
const $=s=>document.querySelector(s);

$('#soc').innerHTML=[['in','LinkedIn'],['x','X'],['ig','Instagram'],['gh','GitHub'],['yt','YouTube']].map(s=>`<a href="#contact" aria-label="${s[1]}" title="${s[1]}" class="w-[52px] h-[52px] rounded-full chip grid place-items-center text-[22px] hover:bg-[#0a0a0a] hover:text-white hover:-translate-y-1 transition">${ic(s[0])}</a>`).join('');

$('#fsoc').innerHTML=$('#soc').innerHTML;

function mkTabs(box,id,data,pane){const k=Object.keys(data);
$(box).innerHTML=`<div class="flex flex-wrap gap-2 mb-7" role="tablist">${k.map((x,i)=>`<button type="button" class="tabbtn${i?'':' active'}" data-bs-toggle="pill" data-bs-target="#${id}${i}">${x}</button>`).join('')}</div><div class="tab-content">${k.map((x,i)=>`<div class="tab-pane${i?'':' active'}" id="${id}${i}">${pane(x,data[x])}</div>`).join('')}</div>`}

const lvl=v=>v>=90?'Expert':v>=80?'Advanced':v>=70?'Proficient':'Developing';
// Skill levels (%) are the 3rd value of each item: edit them freely.
mkTabs('#sk','sk',{'Business Skills':[['Entrepreneurship','bulb2',85],['Business Development','trend',80],['Problem Solving','ext',85],['Data Analysis','bars',75]],
'Digital & Technical Skills':[['Microsoft Excel','table',85],['Microsoft Word','docw',90],['Microsoft PowerPoint','slides',90],['Graphic Design','pal2',85],['Video Editing','video',90],['Motion Graphics','motion',80]],
'Creative Tools':[['Adobe Illustrator','brush',65],['Adobe After Effects','sparkle',70],['CapCut','cut',90]]},
(k,a)=>`<div class="grid ${a.length==3?'md:grid-cols-3':'sm:grid-cols-2'} gap-5">${a.map(s=>`<div class="cx hv sk-card p-6" tabindex="0" role="button" title="Click to replay"><div class="flex items-center gap-4"><span class="sk-ico chip w-14 h-14 rounded-2xl grid place-items-center text-2xl flex-none">${ic(s[1])}</span><div class="flex-1 min-w-0"><b class="block text-[17px] leading-tight">${s[0]}</b><small class="text-[#5d6573]">${lvl(s[2])}</small></div><b class="sk-pct text-xl tabular-nums" data-v="${s[2]}">0%</b></div><div class="sk-bar mt-5"><i class="sk-fill" style="--w:${s[2]}%"></i></div></div>`).join('')}</div>`);

$('#svc').innerHTML=[['pal','Graphic Design','Creating visual designs for digital platforms, projects, presentations, and social media.'],['film','Video Editing','Editing engaging video content for social media, events, and digital projects.'],['play','Motion Graphics','Creating simple motion graphics and animated visual content using Adobe After Effects.'],['doc','Presentation Design','Creating clear and professional presentations for academic and project-based work.']]
.map(s=>`<div class="cx hv svc-card p-8 h-full flex flex-col items-center justify-center text-center"><div class="chip w-20 h-20 rounded-3xl grid place-items-center text-4xl">${ic(s[0])}</div><h3 class="font-extrabold text-2xl tracking-tight mt-6 mb-3">${s[1]}</h3><p class="text-[16px] text-[#5d6573] leading-relaxed max-w-sm mx-auto">${s[2]}</p></div>`).join('');

$('#exp').innerHTML=[['YDP — Pioneers of Development and Youth Empowerment','Vice Chairman — Central Social Media & Media Committee','Media & Social Media Leadership'],['Egyptian Red Crescent — Galala University','Volunteer — Media & Content','Digital Media & Content'],['The American University in Cairo','Active Member — Communication Committee','Communication & Student Activities']]
.map((e,i)=>`<div class="cx"><button class="acc w-full p-6 flex items-center justify-between gap-4 text-left" data-bs-toggle="collapse" data-bs-target="#ex${i}" aria-expanded="false"><span><b class="block text-lg">${e[1]}</b><span class="text-[#5d6573] text-sm">${e[0]}</span></span><span class="chev chip w-9 h-9 rounded-full grid place-items-center flex-none">&#8964;</span></button><div class="collapse" id="ex${i}"><div class="px-6 pb-6 text-[#4a5262]"><span class="text-sm text-[#5d6573]">Role</span><b class="block">${e[2]}</b></div></div></div>`).join('');

const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/,'');
const ci={'Academic & Business':'cap','Leadership & Competitions':'users'};
mkTabs('#ce','ce',{'Academic & Business':[
['Entrepreneurship & Innovation','Arizona State University'],
['Research Skills Course','The American University in Cairo'],
['Business Ethics Game','E.I. Games'],
],
'Leadership & Competitions':[['Egyptian Youth Thriving Programme','British Council — July 2026'],['History of Civilization Competition Certificate','Arizona State University — Hiver Program']]},

(k,a)=>`<div class="grid ${a.length==2?'md:grid-cols-2 md:max-w-[calc(66.666%-0.4167rem)] mx-auto':'md:grid-cols-3'} gap-5">${a.map(c=>`<div class="cx hv cert-card p-4 h-full flex flex-col${a.length==1?' md:col-start-2':''}"><div class="shot cert"><span class="ph">${ic('img')}<small>Certificate image</small></span><img src="${slug(c[0])}.jpeg" alt="${c[0]} certificate" loading="lazy" onerror="this.remove()"></div><div class="px-2 pt-5 pb-3 text-center"><b class="block text-[17px] leading-snug">${c[0]}</b><span class="block text-sm text-[#5d6573] mt-1.5">${c[1]}</span></div></div>`).join('')}</div>`);

const T=[['I really liked how the motion graphics turned out. You understood what I had in mind and turned it into something much more polished and engaging. The communication was also easy throughout the project.','Ahmed Hassan | Motion Graphics Project'],['The final video came out really well. The editing was clean, the pacing felt right, and the main message was clear. I also appreciated how you listened to my feedback and made the changes I asked for.','Salma Ahmed | Video Editing Project'],['The data was organized and explained in a way that was easy for me to understand. I especially liked how the results were presented clearly instead of just giving me a lot of numbers and tables.','Omar Khaled | Data Analysis Project']];
$('#rvi').innerHTML=T.map((t,i)=>`<div class="carousel-item${i?'':' active'}"><blockquote class="text-[clamp(17px,2.2vw,22px)] font-medium leading-relaxed min-h-[140px]">“${t[0]}”</blockquote><p class="mt-6 text-[#010105] font-bold text-[15px]">— ${t[1]}</p></div>`).join('');
$('#rvd').innerHTML=T.map((t,i)=>`<button class="ind${i?'':' active'}" data-bs-target="#rvw" data-bs-slide-to="${i}" aria-label="Review ${i+1}"></button>`).join('');
$('#rvw').addEventListener('slide.bs.carousel',e=>{[...$('#rvd').children].forEach((d,i)=>d.classList.toggle('active',i==e.to))});

function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)}
$('#cp').onclick=()=>{const e='seifeldimalaa64@gmail.com';try{navigator.clipboard.writeText(e).then(()=>toast('Email copied'),()=>toast(e))}catch(x){toast(e)}};
document.querySelectorAll('[data-i]').forEach(e=>e.insertAdjacentHTML('afterbegin',ic(e.dataset.i)));


// ===== Reveal animations (hero on load, everything else on scroll) =====
(function(){
  const set=(el,d)=>{el.dataset.r='';el.style.setProperty('--d',d+'ms')};
  const hero=[...document.querySelectorAll('header .grid>div:first-child>*:not(#soc)'),document.querySelector('header .grid>div:last-child')];
  hero.forEach((el,i)=>set(el,i*110));
  document.querySelectorAll('#soc a').forEach((el,i)=>set(el,330+i*70));
  document.querySelectorAll('main h2,main [role=tablist]').forEach(el=>set(el,0));
  document.querySelectorAll('main .cx, #about p, #projects .chip.rounded-3xl').forEach(el=>{
    const sib=[...el.parentElement.children].filter(x=>x.matches('.cx,p,.chip'));
    set(el,(sib.indexOf(el)%4)*90);
  });
  document.querySelectorAll('footer .grid>div').forEach((el,i)=>set(el,i*100));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('[data-r]').forEach(el=>io.observe(el));
})();


// ===== Contact form =====
(function(){
  const f=$('#cf'),st=$('#fs'),btn=$('#sb'),mc=$('#mc'),TO='seifeldimalaa64@gmail.com';
  const text={name:'Please enter your name (at least 2 characters).',email:'Please enter a valid email address.',message:'Your message should be at least 10 characters.'};
  const flds=[...f.querySelectorAll('.fld')];
  const chk=el=>{const ok=el.checkValidity();el.classList.toggle('bad',!ok);const e=el.parentElement.querySelector('.err');if(e&&!ok)e.textContent=text[el.name]||'This field is required.';return ok};
  flds.forEach(el=>{el.addEventListener('blur',()=>el.value&&chk(el));el.addEventListener('input',()=>el.classList.contains('bad')&&chk(el))});
  f.message.addEventListener('input',()=>mc.textContent=f.message.value.length+' / 600');
  const say=(cls,icon,html)=>{st.className=cls;st.innerHTML=`<span class="mt-0.5">${ic(icon)}</span><span>${html}</span>`};
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    if(f.website.value)return;
    const ok=flds.map(chk).every(Boolean);
    if(!ok){f.querySelector('.bad').focus();return}
    btn.disabled=true;btn.classList.add('loading');st.className='';st.innerHTML='';
    const d=Object.fromEntries(new FormData(f));
    try{
      const r=await fetch('https://formsubmit.co/ajax/'+TO,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify({name:d.name,email:d.email,subject:d.subject,message:d.message,_subject:'Portfolio — '+d.subject+' ('+d.name+')',_replyto:d.email,_template:'table',_captcha:'false'})});
      const j=await r.json();
      if(!r.ok||String(j.success)==='false')throw new Error('send');
      say('ok','check','Thank you, '+d.name.split(' ')[0]+'! Your message was sent. I will get back to you soon.');
      f.reset();mc.textContent='0 / 600';
    }catch(err){
      const mail='mailto:'+TO+'?subject='+encodeURIComponent(d.subject+' — '+d.name)+'&body='+encodeURIComponent(d.message+'\n\n'+d.name+'\n'+d.email);
      say('no','warn','Could not send right now. <a href="'+mail+'">Send it from your email app</a> instead.');
    }finally{btn.disabled=false;btn.classList.remove('loading')}
  });
})();


// ===== Hero typewriter: type -> pause -> erase -> next title =====
(function(){
  const el=$('#ty'),caret=document.querySelector('.caret');
  const titles=['Business Administration','Freelancer','Content Creator'];
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){
    let k=0;el.textContent=titles[0];setInterval(()=>{k=(k+1)%titles.length;el.textContent=titles[k]},3200);return;
  }
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const jitter=(a,b)=>a+Math.random()*(b-a);
  async function run(){
    await sleep(900);
    let i=0;
    while(true){
      const t=titles[i];
      caret.classList.add('typing');
      for(let n=1;n<=t.length;n++){el.textContent=t.slice(0,n);await sleep(jitter(55,95))}
      caret.classList.remove('typing');
      await sleep(1900);
      caret.classList.add('typing');
      for(let n=t.length-1;n>=0;n--){el.textContent=t.slice(0,n);await sleep(jitter(26,40))}
      caret.classList.remove('typing');
      await sleep(450);
      i=(i+1)%titles.length;
    }
  }
  run();
})();


// ===== Skill bars: fill + count up when visible, click to replay =====
(function(){
  const run=c=>{
    const p=c.querySelector('.sk-pct'),f=c.querySelector('.sk-fill'),v=+p.dataset.v;
    f.style.transition='none';c.classList.remove('go');void f.offsetWidth;f.style.transition='';
    requestAnimationFrame(()=>c.classList.add('go'));
    let s=null;const step=t=>{s=s||t;const k=Math.min((t-s)/1300,1);p.textContent=Math.round(v*(1-Math.pow(1-k,3)))+'%';if(k<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  };
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.5});
  document.querySelectorAll('.sk-card').forEach(c=>{io.observe(c);c.onclick=()=>run(c);c.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();run(c)}}});
})();
