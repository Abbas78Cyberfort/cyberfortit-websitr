(()=>{
const langBtn=document.getElementById('langBtn');let lang=localStorage.getItem('cf-page-lang')||'sv';
const copy={sv:{home:'Startsida',businessNav:'Webbplatser',restaurantNav:'Restauranger',contactNav:'Kontakt',headerCta:'BEGÄR OFFERT ↗',features:[['✦','Design efter ditt varumärke','En unik visuell utformning som passar din bransch, dina kunder och ditt sätt att arbeta.'],['▣','Mobilanpassad från början','En smidig upplevelse på mobil, surfplatta och dator.'],['⌕','SEO-grund och lokal synlighet','Teknisk struktur, sidtitlar och innehåll som ger sökmotorer bättre förutsättningar att förstå webbplatsen.'],['文','Flerspråkigt innehåll','Svenska som grundspråk och ytterligare språk efter dina kunders behov.'],['✉','Kontakt och förfrågningar','Kontaktformulär, tydliga kontaktvägar, karta och länkar till sociala medier.'],['⌁','Prestanda och säkerhet','Lätt, välstrukturerad kod och lämpliga säkerhetsåtgärder för webbplatsens funktioner.']],industries:[['RESTAURANGER','Meny, direktbeställning, betalning och QR-lösningar.','/restaurant-solutions/'],['SALONGER & BARBERSHOPS','Tjänster, prislistor, presentation och möjlighet att koppla bokning.','#contact'],['SERVICEFÖRETAG','Tjänstebeskrivningar, offertförfrågningar, kontaktformulär och referensprojekt.','#contact']],steps:[['Samtal och behov','Vi går igenom verksamheten, målgruppen, innehållet och vilka funktioner du behöver.'],['Design och innehåll','Vi tar fram struktur och utformning som du får granska innan webbplatsen färdigställs.'],['Test och publicering','Vi testar på olika skärmstorlekar, går igenom länkar och formulär och publicerar efter ditt godkännande.']],restaurantFeatures:[['☷','Digital meny','Presentera rätter, beskrivningar, priser och tillval på en tydlig sida som fungerar i mobilen.'],['↗','Direktbeställning','Låt kunder lägga beställningar via restaurangens egen webbplats för avhämtning eller enligt överenskommet upplägg.'],['▣','Onlinebetalning','Möjlighet att koppla restaurangens eget Stripe-konto till ett säkert betalningsflöde.'],['◉','Ordernotiser','Skicka nya ordernotiser till en överenskommen kanal, exempelvis Telegram.'],['⌁','Mobilanpassning','En snabb och lättanvänd beställningsupplevelse utan krav på att kunden installerar en app.'],['⌕','Lokal synlighet','Grundläggande SEO och tydlig information om restaurangens öppettider, plats och kontaktvägar.']],addons:[['QR','QR-beställning vid bord','Kunder skannar en kod vid bordet och öppnar menyn i mobilen.'],['♡','Lojalitet och erbjudanden','Exempelvis återkommande erbjudanden och belöningar för direktkunder.'],['▤','Köksvy / KDS','En separat vy för att följa orderstatus i köket.'],['◎','Feedback','Möjlighet för gäster att lämna synpunkter efter besöket.']],restaurantSteps:[['1. Kunden beställer','Kunden väljer produkter och skickar sin beställning via webbplatsen.'],['2. Betalningen bekräftas','Betalleverantören bekräftar betalningen innan ordern behandlas som betald.'],['3. Restaurangen får en notis','Personalen får orderinformation i den överenskomna kanalen och hanterar beställningen.']]},en:{home:'Home',businessNav:'Business websites',restaurantNav:'Restaurants',contactNav:'Contact',headerCta:'REQUEST A QUOTE ↗',features:[['✦','Design shaped around your brand','A distinctive visual identity that fits your industry, customers and way of working.'],['▣','Mobile-friendly from day one','A smooth experience on phones, tablets and desktop computers.'],['⌕','SEO foundations and local visibility','Technical structure, page titles and content that help search engines understand your website.'],['文','Multilingual content','Swedish as the base language, plus another language selected for your customers.'],['✉','Contact and enquiries','Contact forms, clear contact options, maps and social media links.'],['⌁','Performance and security','Lightweight, well-structured code and appropriate security measures for the website features.']],industries:[['RESTAURANTS','Menus, direct ordering, payments and QR solutions.','/restaurant-solutions/'],['SALONS & BARBERS','Services, price lists, business profiles and booking integrations.','#contact'],['SERVICE BUSINESSES','Service pages, quote requests, contact forms and project portfolios.','#contact']],steps:[['Discovery','We discuss your business, audience, content and the features you need.'],['Design and content','We prepare the structure and design for your review before the website is finalised.'],['Testing and launch','We test different screen sizes, review links and forms, and publish after your approval.']],restaurantFeatures:[['☷','Digital menu','Present dishes, descriptions, prices and options on a clear page that works on mobile.'],['↗','Direct ordering','Let customers place orders through the restaurant’s own website for collection or an agreed setup.'],['▣','Online payments','Connect the restaurant’s own Stripe account to a secure payment flow.'],['◉','Order notifications','Send new order notifications to an agreed channel, such as Telegram.'],['⌁','Mobile-friendly','A fast, easy ordering experience without requiring customers to install an app.'],['⌕','Local visibility','SEO foundations and clear information about opening hours, location and contact details.']],addons:[['QR','Table QR ordering','Guests scan a code at the table and open the menu on their phone.'],['♡','Loyalty and offers','For example, repeat-customer offers and rewards for direct orders.'],['▤','Kitchen display / KDS','A separate view for tracking order status in the kitchen.'],['◎','Feedback','An option for guests to share feedback after their visit.']],restaurantSteps:[['1. Customer orders','The customer selects items and submits an order through the website.'],['2. Payment is confirmed','The payment provider confirms payment before the order is treated as paid.'],['3. Restaurant is notified','Staff receive the order through the agreed channel and handle the request.']]}};
function card(x){return `<article class="card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`}
function linkCard(x){return `<a class="card" href="${x[2]}"><span class="tag">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]==='/restaurant-solutions/'?(lang==='sv'?'Se restauranglösningar ↗':'Explore restaurant solutions ↗'):(lang==='sv'?'Kontakta oss om din verksamhet ↗':'Contact us about your business ↗')}</p></a>`}
function render(){document.documentElement.lang=lang;document.querySelectorAll('[data-sv][data-en]').forEach(el=>{el.innerHTML=el.dataset[lang]});document.querySelectorAll('[data-t]').forEach(el=>{const k=el.dataset.t;el.textContent=copy[lang][k]||el.textContent});
 const f=document.getElementById('featureGrid');if(f)f.innerHTML=copy[lang].features.map(card).join('');
 const i=document.getElementById('industryGrid');if(i)i.innerHTML=copy[lang].industries.map(linkCard).join('');
 const s=document.getElementById('stepsGrid');if(s)s.innerHTML=copy[lang].steps.map(x=>`<article class="step"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 const rf=document.getElementById('restaurantFeatures');if(rf)rf.innerHTML=copy[lang].restaurantFeatures.map(card).join('');
 const ao=document.getElementById('addOns');if(ao)ao.innerHTML=copy[lang].addons.map(card).join('');
 const rs=document.getElementById('restaurantSteps');if(rs)rs.innerHTML=copy[lang].restaurantSteps.map(x=>`<article class="step"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 if(langBtn)langBtn.textContent=lang==='sv'?'EN':'SV';document.title=document.body.dataset.page==='restaurant'?(lang==='sv'?'Webblösningar för restauranger | Cyberfort IT':'Restaurant Solutions | Cyberfort IT'):(lang==='sv'?'Webbplatser för företag | Cyberfort IT':'Business Websites | Cyberfort IT');}
langBtn?.addEventListener('click',()=>{lang=lang==='sv'?'en':'sv';localStorage.setItem('cf-page-lang',lang);render()});document.getElementById('mobileToggle')?.addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('open'));document.getElementById('year').textContent=new Date().getFullYear();render();
})();

/* Footer signature matching homepage ("Webbplatsen är byggd och utvecklad av Cyberfort IT") */
(function(){
  const footer = document.querySelector('footer.footer');
  if(!footer) return;
  let sign = footer.querySelector('.footer-sign');
  if(!sign){
    sign = document.createElement('div');
    sign.className = 'footer-sign';
    const shell = footer.querySelector('.shell') || footer;
    shell.appendChild(sign);
  }
  function updateSign(){
    const curLang = localStorage.getItem('cf-page-lang') || document.documentElement.lang || 'sv';
    sign.innerHTML = curLang === 'en'
      ? 'This website is built and developed by <a href="https://cyberfortit.se">Cyberfort IT</a> – <a href="https://cyberfortit.se">cyberfortit.se</a>'
      : 'Webbplatsen är byggd och utvecklad av <a href="https://cyberfortit.se">Cyberfort IT</a> – <a href="https://cyberfortit.se">cyberfortit.se</a>';
  }
  updateSign();
  document.getElementById('langBtn')?.addEventListener('click',()=>setTimeout(updateSign,0));
})();

/* Contact Modal for mailto links (instead of opening Gmail app, sends to info@cyberfortit.se) */
(function(){
  if(document.getElementById('cfContactModal')) return;
  const DEFAULT_EMAIL = 'info@cyberfortit.se';
  const backdrop = document.createElement('div');
  backdrop.className = 'cf-modal-backdrop';
  backdrop.id = 'cfContactModal';
  backdrop.setAttribute('role','dialog');
  backdrop.setAttribute('aria-modal','true');
  backdrop.setAttribute('aria-labelledby','cfModalTitle');
  backdrop.hidden = true;
  backdrop.innerHTML = `
    <div class="cf-modal-box">
      <button class="cf-modal-close" id="cfModalClose" type="button" aria-label="Stäng">×</button>
      <div class="cf-modal-icon" aria-hidden="true">✉️</div>
      <h3 id="cfModalTitle">Skriv till oss</h3>
      <p class="cf-to-line"><span id="cfToLabel">Till</span>: <b id="cfModalTo">${DEFAULT_EMAIL}</b></p>
      <form class="cf-modal-form" id="cfModalForm" name="email-modal-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="email-modal-form">
        <input type="hidden" name="recipient" id="cfModalRecipient" value="${DEFAULT_EMAIL}">
        <p hidden><label>Do not fill this out: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
        <input id="cfNameInput" name="name" type="text" required placeholder="Ditt namn">
        <input id="cfEmailInput" name="email" type="email" required placeholder="Din e-postadress">
        <textarea id="cfMsgInput" name="message" required placeholder="Skriv ditt meddelande..."></textarea>
        <button class="btn" id="cfModalSubmit" type="submit">SKICKA MEDDELANDE ↗</button>
      </form>
      <div class="cf-modal-status" id="cfModalStatus" role="status" aria-live="polite" hidden></div>
      <div class="cf-modal-done" id="cfModalDone" hidden>
        <button class="btn" id="cfModalDoneBtn" type="button">STÄNG</button>
      </div>
    </div>`;
  document.body.appendChild(backdrop);

  const form = document.getElementById('cfModalForm');
  const statusEl = document.getElementById('cfModalStatus');
  const doneEl = document.getElementById('cfModalDone');
  const closeBtn = document.getElementById('cfModalClose');
  const doneBtn = document.getElementById('cfModalDoneBtn');
  const submitBtn = document.getElementById('cfModalSubmit');
  const nameInput = document.getElementById('cfNameInput');
  const emailInput = document.getElementById('cfEmailInput');
  const msgInput = document.getElementById('cfMsgInput');

  const i18n = {
    sv: {
      title: 'Skriv till oss',
      to: 'Till',
      namePh: 'Ditt namn',
      emailPh: 'Din e-postadress',
      msgPh: 'Skriv ditt meddelande...',
      send: 'SKICKA MEDDELANDE ↗',
      sending: 'SKICKAR…',
      ok: 'Tack! Ditt meddelande har skickats till Cyberfort IT. Vi återkommer så snart vi kan.',
      err: 'Tyvärr gick något fel och meddelandet skickades inte. Försök igen eller ring <a href="tel:+46764113589">076-411 35 89</a>.',
      close: 'STÄNG'
    },
    en: {
      title: 'Write to us',
      to: 'To',
      namePh: 'Your name',
      emailPh: 'Your email',
      msgPh: 'Write your message...',
      send: 'SEND MESSAGE ↗',
      sending: 'SENDING…',
      ok: 'Thank you! Your message has been sent to Cyberfort IT. We will get back to you as soon as possible.',
      err: 'Sorry, something went wrong and your message was not sent. Please try again or call <a href="tel:+46764113589">076-411 35 89</a>.',
      close: 'CLOSE'
    }
  };

  let currentSubject = '';   // subject from the clicked mailto: link – sent inside the message text

  function curLang(){
    return localStorage.getItem('cf-page-lang') || document.documentElement.lang || 'sv';
  }

  function applyModalTexts(){
    const t = i18n[curLang()] || i18n.sv;
    document.getElementById('cfModalTitle').textContent = t.title;
    document.getElementById('cfToLabel').textContent = t.to;
    nameInput.placeholder = t.namePh;
    emailInput.placeholder = t.emailPh;
    msgInput.placeholder = t.msgPh;
    if(!submitBtn.disabled) submitBtn.textContent = t.send;
    doneBtn.textContent = t.close;
  }

  function openContactModal(addr, subj){
    const targetAddr = (addr && addr.trim()) ? addr.trim() : DEFAULT_EMAIL;
    document.getElementById('cfModalTo').textContent = targetAddr;
    document.getElementById('cfModalRecipient').value = targetAddr;
    currentSubject = subj || '';
    form.hidden = false;
    form.reset();
    document.getElementById('cfModalRecipient').value = targetAddr;
    statusEl.hidden = true;
    statusEl.className = 'cf-modal-status';
    statusEl.innerHTML = '';
    doneEl.hidden = true;
    applyModalTexts();
    backdrop.hidden = false;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(()=>nameInput.focus(), 20);
  }

  function closeContactModal(){
    backdrop.classList.remove('open');
    backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function(e){
    const mailLink = e.target.closest('a[href^="mailto:" i]');
    if(mailLink){
      e.preventDefault();
      const rawHref = mailLink.getAttribute('href') || '';
      const afterMailto = rawHref.replace(/^mailto:/i, '');
      const parts = afterMailto.split('?');
      const addr = decodeURIComponent(parts[0] || DEFAULT_EMAIL) || DEFAULT_EMAIL;
      let subj = '';
      if(parts[1]){
        const params = new URLSearchParams(parts[1]);
        subj = params.get('subject') || '';
      }
      openContactModal(addr, subj);
    }
  });

  closeBtn.addEventListener('click', closeContactModal);
  doneBtn.addEventListener('click', closeContactModal);
  backdrop.addEventListener('click', function(e){
    if(e.target === backdrop) closeContactModal();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !backdrop.hidden) closeContactModal();
  });

  // Sends the message to Netlify Forms (urlencoded POST, exactly like the homepage forms).
  // 1st choice: "email-modal-form" (same definition as on the homepage).
  // Fallback:   "contact-form" (the homepage contact form) – only used if Netlify answers 404/other error for the first one.
  // The subject is written into the message text, so no extra (unregistered) field is ever posted.
  // The real HTTP status of every attempt is logged in the browser console.
  async function sendToNetlify(){
    const honeypot = (form.elements['bot-field'] && form.elements['bot-field'].value) || '';
    const message = (currentSubject ? 'Ämne: ' + currentSubject + '\n\n' : '') + msgInput.value +
      '\n\n— Skickat från ' + window.location.pathname;
    const attempts = [
      { form: 'email-modal-form', targets: ['/', window.location.pathname], fields: {
          'form-name': 'email-modal-form',
          'bot-field': honeypot,
          recipient: document.getElementById('cfModalRecipient').value,
          name: nameInput.value, email: emailInput.value, message: message } },
      { form: 'contact-form', targets: ['/'], fields: {
          'form-name': 'contact-form',
          'bot-field': honeypot,
          name: nameInput.value, phone: '', email: emailInput.value,
          subject: currentSubject || 'Förfrågan via cyberfortit.se', message: message } }
    ];
    if(window.CF_FORM_ENDPOINT) attempts[0].targets.unshift(window.CF_FORM_ENDPOINT);

    let lastErr = null;
    for(const at of attempts){
      const body = new URLSearchParams(at.fields).toString();
      const seen = [];
      for(const url of at.targets){
        if(seen.indexOf(url) !== -1) continue;
        seen.push(url);
        try{
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body
          });
          if(res.ok){ console.info('[Cyberfort form] sent via ' + at.form + ' (' + url + ')'); return; }
          lastErr = new Error('HTTP ' + res.status + ' for form "' + at.form + '" at ' + url);
          console.warn('[Cyberfort form] ' + lastErr.message);
        }catch(netErr){
          lastErr = netErr;
          console.warn('[Cyberfort form] network error for ' + at.form + ' at ' + url, netErr);
        }
      }
    }
    throw lastErr || new Error('Form submit failed');
  }

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const t = i18n[curLang()] || i18n.sv;
    submitBtn.disabled = true;
    submitBtn.textContent = t.sending;
    statusEl.hidden = true;
    try{
      await sendToNetlify();
      form.hidden = true;
      doneEl.hidden = false;
      statusEl.className = 'cf-modal-status ok';
      statusEl.innerHTML = t.ok;
      statusEl.hidden = false;
    }catch(err){
      statusEl.className = 'cf-modal-status err';
      statusEl.innerHTML = t.err;
      statusEl.hidden = false;
    }finally{
      submitBtn.disabled = false;
      submitBtn.textContent = t.send;
    }
  });

  document.getElementById('langBtn')?.addEventListener('click',()=>setTimeout(applyModalTexts,0));
})();

/* Guard: remove any injected "Powered by Netlify" badge */
(function(){
  function kill(n){try{if(n.nodeType!==1)return;var t=(n.id||'')+' '+(n.className&&n.className.baseVal===undefined?n.className:'')+' '+(n.getAttribute('href')||'')+' '+(n.getAttribute('src')||'');if(/netlify-badge|netlify\.com\/\?utm|netlify\.com\/drop/i.test(t)||(n.tagName==='IFRAME'&&/netlify/i.test(t)))n.remove();}catch(e){}}
  function sweep(){document.querySelectorAll('[id*="netlify-badge"],[class*="netlify-badge"],iframe[src*="netlify"],a[href*="netlify.com/?utm"],a[href*="app.netlify.com/drop"]').forEach(function(n){n.remove()})}
  try{new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(kill)});sweep()}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}
  sweep();
})();

/* Bilingual (SV/EN) rule-based Cyberfort Assistant chatbot */
(function(){
  if(document.getElementById('chatLaunch')) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="chatbox" id="chatbox"><div class="chathead"><span>CYBERFORT ASSISTANT • SV / EN</span><button id="closeChat" type="button" aria-label="Stäng">×</button></div><div class="chatmsgs" id="chatmsgs"><div class="msg">Hej! Välkommen till Cyberfort IT. Fråga mig om våra tjänster.<br>Hi! Welcome to Cyberfort IT. Ask me about our services.</div></div><div class="chatinput"><input id="chatInput" placeholder="Skriv / Type your question…"><button id="chatSend" type="button">Skicka / Send</button></div></div><button class="chat-launch" id="chatLaunch" type="button" aria-label="Öppna chat"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;margin:auto"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.6-.8L3 21l1.9-5A8.1 8.1 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3.2 8.4 8.4 0 0 1 21 11.5Z"/><path d="M8.5 10.5h8M8.5 13.5h5"/></svg></button>`;
  while(wrap.firstChild) document.body.appendChild(wrap.firstChild);

  const services = {
    en:[
      ['🛡️','Cybersecurity Assessment','Identify vulnerabilities, evaluate risks and build a practical security improvement plan.'],
      ['⌁','Authorised Penetration Testing','Controlled security testing to uncover weaknesses in websites, applications and systems.'],
      ['🔐','Security Policies & Risk Management','Security policies, risk registers, procedures and governance support.'],
      ['☁️','Cloud & Microsoft 365 Security','Secure configuration and administration for Microsoft 365, Entra ID and cloud environments.'],
      ['🖧','IT Infrastructure Management','Planning, maintenance and optimisation of networks, servers, devices and IT environments.'],
      ['📡','Network Security','Firewall configuration, secure Wi-Fi, network segmentation and access controls.'],
      ['🚨','Incident Response Guidance','Practical support with incident handling, recovery planning and lessons learned.'],
      ['💻','IT Support & Troubleshooting','Technical support for computers, software, operating systems and everyday IT issues.'],
      ['🖥️','Computer Repair','Diagnostics, repair, upgrades, virus removal and maintenance for desktop and laptop computers.'],
      ['📱','Mobile Phone Repair','Screen, battery and charging-port repairs, plus troubleshooting and setup for mobile phones.'],
      ['📲','Tablet Repair','Diagnostics and repair of tablets, including screens, batteries and software problems.'],
      ['🏢','Employee Training for Companies','Tailored cybersecurity and digital-safety training that helps your staff spot phishing and handle data safely.'],
      ['🎓','Training for Schools','Age-appropriate education for students and teachers on online safety, passwords, phishing and digital habits.'],
      ['🌐','Web Design & Business Websites','Modern, responsive websites for companies, salons and service businesses designed around your brand and customers.'],
      ['🍽️','Restaurant Web & Ordering Solutions','Digital menus, direct online ordering, Stripe payments and Telegram order notifications without third-party app fees.'],
      ['📈','SEO & Digital Visibility','Technical SEO, website performance and improvements to search visibility.'],
      ['🛡️','Compliance & Standards Support','Guidance related to ISO 27001, GDPR, NIS2 and recognised security frameworks.'],
      ['💾','Backup & Recovery Planning','Backup strategy, recovery procedures and business continuity preparation.'],
      ['🔎','IT Audit & Documentation','Review of IT environments, asset documentation and prioritised recommendations.']
    ],
    sv:[
      ['🛡️','Cybersäkerhetsanalys','Identifiering av sårbarheter, riskbedömning och en praktisk plan för förbättrad säkerhet.'],
      ['⌁','Auktoriserade penetrationstester','Kontrollerade säkerhetstester för att hitta svagheter i webbplatser, applikationer och system.'],
      ['🔐','Säkerhetspolicy & riskhantering','Stöd med säkerhetspolicyer, riskregister, rutiner och styrning.'],
      ['☁️','Moln- & Microsoft 365-säkerhet','Säker konfiguration och administration av Microsoft 365, Entra ID och molnmiljöer.'],
      ['🖧','IT-infrastruktur & drift','Planering, underhåll och optimering av nätverk, servrar, enheter och IT-miljöer.'],
      ['📡','Nätverkssäkerhet','Brandväggar, säkert Wi-Fi, nätverkssegmentering och åtkomstkontroller.'],
      ['🚨','Stöd vid säkerhetsincidenter','Praktiskt stöd vid incidenthantering, återställning och uppföljning.'],
      ['💻','IT-support & felsökning','Teknisk support för datorer, programvara, operativsystem och vardagliga IT-problem.'],
      ['🖥️','Datorreparation','Felsökning, reparation, uppgraderingar, virusborttagning och underhåll av stationära och bärbara datorer.'],
      ['📱','Mobilreparation','Byte av skärm, batteri och laddport samt felsökning och installation för mobiltelefoner.'],
      ['📲','Surfplattereparation','Felsökning och reparation av surfplattor, inklusive skärm, batteri och programvaruproblem.'],
      ['🏢','Personalutbildning för företag','Anpassad utbildning i cybersäkerhet och digital säkerhet som hjälper personalen att upptäcka nätfiske och hantera data säkert.'],
      ['🎓','Utbildning för skolor','Åldersanpassad utbildning för elever och lärare om nätsäkerhet, lösenord, nätfiske och digitala vanor.'],
      ['🌐','Webbdesign & företagswebbplatser','Moderna, responsiva webbplatser för företag, salonger och tjänsteföretag anpassade efter ert varumärke och era kunder.'],
      ['🍽️','Webblösningar & direktbeställning för restauranger','Digital meny, direktbeställning online, Stripe-betalning och ordernotiser via Telegram utan dyra mellanhänder.'],
      ['📈','SEO & digital synlighet','Teknisk SEO, webbplatsprestanda och förbättrad synlighet i sökmotorer.'],
      ['🛡️','Stöd för regelefterlevnad','Vägledning kring ISO 27001, GDPR, NIS2 och etablerade säkerhetsramverk.'],
      ['💾','Säkerhetskopiering & återställning','Strategi för säkerhetskopiering, återställningsrutiner och kontinuitetsplanering.'],
      ['🔎','IT-granskning & dokumentation','Genomgång av IT-miljöer, dokumentation av tillgångar och prioriterade rekommendationer.']
    ]
  };

  const KB_KEYS=[
    ['assessment','vulnerab','sarbarhet','sakerhetsanalys','riskbedom','security check','sakerhetskoll','cybersakerhetsanalys'],
    ['penetration','pentest','pen test','hack','ethical','sakerhetstest','penetrationstest'],
    ['policy','policies','policyer','risk management','riskhantering','governance','riskregister','styrning','rutiner'],
    ['microsoft','365','office','entra','azure','cloud','moln','intune','m365'],
    ['infrastructure','infrastruktur','server','it-miljo','it environment','drift'],
    ['network','natverk','firewall','brandvagg','wifi','wi-fi','vpn','segmentering','router'],
    ['incident','breach','attack','hacked','hackad','ransomware','intrang','dataintrang','angrepp','sakerhetsincident'],
    ['it support','it-support','support','troubleshoot','felsok','help desk','helpdesk','teknisk hjalp','technical help','problem'],
    ['computer','laptop','pc','dator','datorer','bardbar','repair','reparation','reparera','fix','broken','trasig','virus','upgrade','uppgrader','windows','macbook','repareras'],
    ['mobile','phone','iphone','android','smartphone','mobil','mobiler','mobiltelefon','telefon','skarm','screen','battery','batteri','laddport','charging'],
    ['tablet','ipad','surfplatta','surfplattor'],
    ['employee','staff','personal','company training','corporate','anstallda','medarbetare','awareness','phishing','natfiske','training','utbildning','course','kurs','education'],
    ['school','skola','skolor','student','elev','larare','teacher','pupil'],
    ['website','web design','webbdesign','webbplats','hemsida','homepage','web','site','webbsida','business website','foretagswebbplats','salon','salong','barber'],
    ['restaurant','restaurang','pizzeria','menu','meny','order','bestallning','stripe','telegram','qr','takeaway','avhamtning','foodora','wolt'],
    ['seo','search engine','sokmotor','google ranking','visibility','synlighet'],
    ['iso','nis2','gdpr','compliance','standard','regelefterlevnad','certif','nist','27001'],
    ['backup','sakerhetskopi','recovery','aterstall','restore','continuity','kontinuitet','data loss','dataforlust'],
    ['audit','granskning','documentation','dokumentation','inventory','it review']
  ];

  const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const hasKey=(m,k)=>k.length<=3?new RegExp('(^|[^a-z0-9])'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^a-z0-9]|$)').test(m):m.includes(k);
  const anyKey=(m,arr)=>arr.some(k=>hasKey(m,k));
  const SEC={
    en:'our secretary Mojgan Abolhasani – <a href="tel:+46764113589">076-411 35 89</a> · <a href="mailto:info@cyberfortit.se">info@cyberfortit.se</a>',
    sv:'vår sekreterare Mojgan Abolhasani – <a href="tel:+46764113589">076-411 35 89</a> · <a href="mailto:info@cyberfortit.se">info@cyberfortit.se</a>'
  };
  const SV_W=['och','jag','ar','inte','vad','hur','kan','ni','har','behover','vill','hej','hejsan','tack','min','mitt','din','ert','ett','det','med','pa','till','tjanst','tjanster','erbjuder','hjalp','vilka','finns','er','oss','mig','vilken','nar','kostar','gor'];
  const EN_W=['the','and','you','what','how','can','do','does','is','are','have','need','want','my','your','with','hello','hi','please','services','offer','help','which','where','when','much','price','cost','of','for','a'];

  function detectLang(raw){
    const m=norm(raw),w=m.split(/[^a-z]+/).filter(Boolean);
    let sv=/[åäö]/i.test(raw)?2:0,en=0;
    w.forEach(x=>{if(SV_W.includes(x))sv++;if(EN_W.includes(x))en++});
    const currentLang=localStorage.getItem('cf-page-lang')||'sv';
    return sv>en?'sv':en>sv?'en':currentLang;
  }

  function botReply(raw){
    const m=norm(raw),L=detectLang(raw),sec=SEC[L];
    const t=(en,sv)=>L==='sv'?sv:en;
    const svc=services[L];
    if(anyKey(m,['phone number','telefonnummer','your number','ditt nummer','ert nummer','e-post','epost','email','mejl','e-mail','contact','kontakt','call you','ring er','nummer','number']))
      return t('You can reach us here:<br>☎ <a href="tel:+46764113589">076-411 35 89</a><br>✉ <a href="mailto:info@cyberfortit.se">info@cyberfortit.se</a><br>Secretary: Mojgan Abolhasani. CEO: Abbas Fathali.',
               'Så här når du oss:<br>☎ <a href="tel:+46764113589">076-411 35 89</a><br>✉ <a href="mailto:info@cyberfortit.se">info@cyberfortit.se</a><br>Sekreterare: Mojgan Abolhasani. VD: Abbas Fathali.');
    if(anyKey(m,['address','adress','where are you','var finns','var ligger','location','hitta hit','karta','map','visit']))
      return t('We are at Bäverns gränd 12, 753 19 Uppsala, and we also work in Stockholm and nearby areas. See the map in the Contact section.',
               'Vi finns på Bäverns gränd 12, 753 19 Uppsala och arbetar även i Stockholm och närliggande områden. Se kartan under Kontakt.');
    const sc=KB_KEYS.map((ks,i)=>({i,s:ks.filter(k=>hasKey(m,k)).length})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s);
    if(sc.length){
      const top=sc.filter(x=>x.s===sc[0].s).slice(0,3);
      const lines=top.map(x=>`${svc[x.i][0]} <b>${svc[x.i][1]}</b> – ${svc[x.i][2]}`).join('<br><br>');
      return t('Yes, this is something we help with:<br><br>','Ja, det här hjälper vi till med:<br><br>')+lines+'<br><br>'+t('For a quote or to book, contact ','För offert eller bokning, kontakta ')+sec+'.';
    }
    if(/^\s*(hi|hello|hey|hej|hejsan|tjena|hallo|god (dag|morgon|kvall)|good (morning|afternoon|evening)|salam)/.test(m))
      return t('Hello! Welcome to Cyberfort IT. Ask me about our services – for example websites, restaurant ordering solutions, cybersecurity or IT support.',
               'Hej! Välkommen till Cyberfort IT. Fråga mig gärna om våra tjänster – till exempel webbplatser, restauranglösningar, cybersäkerhet eller IT-support.');
    if(anyKey(m,['thank','tack','thanks','tnx','mersi','merci']))
      return t('You are welcome! Let us know if you need anything else.','Varsågod! Hör av dig om du behöver något mer.');
    if(anyKey(m,['service','tjanst','what do you','vad gor ni','erbjuder','offer','what can you','vad kan ni','help with','hjalp med']))
      return t('Our services:<br>','Våra tjänster:<br>')+svc.map(s=>`${s[0]} ${s[1]}`).join('<br>')+'<br><br>'+t('Ask me about any of them for details.','Fråga om någon av dem för mer information.');
    if(anyKey(m,['price','pris','cost','kostnad','kostar','quote','offert','how much','hur mycket','fee','avgift','rate']))
      return t('Prices depend on the job, so we do not list them on the site. For a quote, contact ','Priset beror på uppdraget, så vi anger inga priser på sidan. För offert, kontakta ')+sec+'.';
    if(anyKey(m,['hours','open','oppet','oppettid','opening','when are you','nar har ni']))
      return t('For opening hours, please contact ','För öppettider, kontakta ')+sec+'.';
    if(anyKey(m,['book','boka','appointment','consult','radgivning','meeting','mote','tid']))
      return t('You can book a consultation via <a href="/#contact">our Contact section</a> or through ','Du kan boka rådgivning via <a href="/#contact">vår kontaktsida</a> eller via ')+sec+'.';
    if(anyKey(m,['who are you','vilka ar ni','about','om oss','ceo','vd','boss','team','abbas','mojgan','founder']))
      return t('Cyberfort IT – Future Secured. We are an independent IT and cybersecurity company in Uppsala. The CEO is Abbas Fathali (Cyber Security Engineer) and our secretary is Mojgan Abolhasani.',
               'Cyberfort IT – Framtiden säkrad. Vi är ett oberoende IT- och cybersäkerhetsföretag i Uppsala. VD är Abbas Fathali (cybersäkerhetsingenjör) och sekreterare är Mojgan Abolhasani.');
    if(anyKey(m,['language','sprak','persian','farsi','svenska','swedish','english','engelska','persiska']))
      return t('We can help in Swedish, English and Persian.','Vi hjälper dig på svenska, engelska och persiska.');
    return t('I could not find that among our services, so I do not want to guess. Please contact ','Jag hittar inte det bland våra tjänster och vill inte gissa. Kontakta gärna ')+sec+t('. You can also ask me what services we offer.','. Du kan också fråga mig vilka tjänster vi erbjuder.');
  }

  const chatbox=document.getElementById('chatbox');
  document.getElementById('chatLaunch').onclick=()=>chatbox.classList.toggle('open');
  document.getElementById('closeChat').onclick=()=>chatbox.classList.remove('open');
  function chatSend(){
    const input=document.getElementById('chatInput'),v=input.value.trim();
    if(!v)return;
    const msgs=document.getElementById('chatmsgs');
    const u=document.createElement('div');u.className='msg user';u.textContent=v;msgs.appendChild(u);input.value='';
    const b=document.createElement('div');b.className='msg';b.innerHTML=botReply(v);
    setTimeout(()=>{msgs.appendChild(b);msgs.scrollTop=msgs.scrollHeight},450);
    msgs.scrollTop=msgs.scrollHeight;
  }
  document.getElementById('chatSend').onclick=chatSend;
  document.getElementById('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter')chatSend()});
})();
