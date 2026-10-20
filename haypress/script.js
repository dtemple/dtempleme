'use strict';
// All content in this demonstration is fictional and no third-party data is queried.
const scenarios = {
  week: {
    question: 'What should I be paying attention to this week?',
    intro: "I found three things worth your attention based on your company's latest activity.",
    entries: [
      {title: "Acme's $48K renewal is at risk", body: 'Their contract renews in 12 days. They have 3 unresolved support tickets and a frustrated email with no reply.', sources: ['Salesforce', 'Gmail', 'Support'], urgent: true},
      {title: 'A $12K invoice is overdue', body: "Payment was approved, but hasn't arrived after 18 days.", sources: ['QuickBooks', 'Gmail']},
      {title: 'A promising deal needs follow-up', body: 'A proposal was sent 2 weeks ago without a response.', sources: ['Salesforce', 'Gmail']}
    ],
    details: ['Salesforce · Renewal opportunity ($48K; 12 days remaining)', 'Support · Three unresolved customer tickets', 'Gmail · Customer message awaiting reply'],
    action: 'Draft an Acme follow-up',
    draftTitle: 'Draft customer follow-up',
    draft: ['Hi Jordan,', "I wanted to check in ahead of our upcoming renewal. I saw there are a few outstanding support issues and I'd like to make sure we address them before moving forward.", 'Would you have 20 minutes this week to walk through them together?', 'Thanks!']
  },
  account: {
    question: 'Catch me up on everything happening with Acme.',
    intro: "Here's Acme's current status across your company systems.",
    entries: [
      {title: 'Renewal coming up in 12 days', body: 'The $48K annual agreement is due to renew, with no confirmation yet.', sources: ['Salesforce'], urgent: true},
      {title: 'Three issues remain unresolved', body: 'Two product bugs and a billing question are still open.', sources: ['Support']},
      {title: 'Their last message needs a reply', body: "Jordan emailed about delays on Friday. Nobody has responded.", sources: ['Gmail']}
    ],
    details: ['Salesforce · Acme annual contract', 'Support · Acme open issue log', 'Gmail · Conversation with Jordan'],
    action: 'Draft a check-in email',
    draftTitle: 'Draft customer check-in',
    draft: ['Hi Jordan,', 'I wanted to follow up on the outstanding issues you raised. We still owe you updates, and I would like to get those resolved before the upcoming renewal.', 'Could we find 20 minutes this week to review everything together?', 'Thanks!']
  },
  revenue: {
    question: 'Why were sales down last month?',
    intro: 'Based on the sample CRM, sales, and accounting records, three factors stand out.',
    entries: [
      {title: 'Two enterprise deals slipped', body: '$72K of expected deals moved into next month, accounting for most of the shortfall.', sources: ['Salesforce'], urgent: true},
      {title: 'Fewer existing customers reordered', body: 'Seven accounts ordered less than in the previous month.', sources: ['Sales data']},
      {title: 'A large payment was delayed', body: 'A $12K invoice remains open, affecting collected cash rather than booked revenue.', sources: ['QuickBooks', 'Gmail']}
    ],
    details: ['Salesforce · Monthly pipeline change log', 'Sales data · Account order history', 'QuickBooks · Outstanding receivables'],
    action: 'Draft a revenue summary',
    draftTitle: 'Draft revenue summary',
    draft: ['Sales performance was below expectations last month, primarily because two enterprise deals totaling $72K moved into the following month.', 'Seven existing customers also reduced order volume.', 'Separately, $12K of receivables remains overdue. That affects cash collection and should not be confused with the revenue shortfall.', 'Next steps: review slipped deals, investigate reorder declines, and follow up on overdue invoices.']
  }
};
let currentScenario = 'week';
let sourceOpen = false;
let draftOpen = false;
const questionEl = document.getElementById('demo-question');
const answerEl = document.getElementById('demo-answer');
const textNode = (tag, cls, content) => {const el=document.createElement(tag); if(cls)el.className=cls;el.textContent=content;return el;};
function renderDemo(){
  const data=scenarios[currentScenario];
  questionEl.textContent=data.question;
  answerEl.replaceChildren(textNode('p','answer-intro',data.intro));
  data.entries.forEach((item,index)=>{
    const card=textNode('div','priority-card'+(index===0?' primary':''),'');
    const top=textNode('div','item-top','');
    top.append(textNode('span','item-number',String(index+1)),textNode('span','item-title',item.title));
    if(item.urgent)top.append(textNode('span','warning','Needs attention'));
    card.append(top,textNode('p','item-body',item.body));
    if(index===0){
      const sources=textNode('div','source-line','');
      item.sources.forEach(s=>sources.append(textNode('span','source-pill',s)));
      const view=textNode('button','source-action',sourceOpen?'Hide sources ↑':'View sources ↗');view.type='button';view.dataset.sources='';sources.append(view);card.append(sources);
    }
    answerEl.append(card);
  });
  if(sourceOpen){
    const details=textNode('div','sources-detail','');
    details.append(textNode('strong','', 'Information behind this insight'));
    data.details.forEach(d=>details.append(textNode('p','', '↳ '+d)));
    details.append(textNode('p','', 'Fictional sample records for demonstration.'));
    answerEl.append(details);
  }
  const actions=textNode('div','demo-actions','');
  const draftButton=textNode('button','demo-action',draftOpen?'Hide example draft ↑':'✦ '+data.action+' ↗');draftButton.type='button';draftButton.dataset.draft='';actions.append(draftButton);answerEl.append(actions);
  if(draftOpen){
    const panel=textNode('div','draft','');panel.append(textNode('div','draft-label',data.draftTitle));
    data.draft.forEach(par=>panel.append(textNode('p','',par)));
    const copy=textNode('button','demo-action','Copy example draft');copy.type='button';copy.dataset.copy='';panel.append(copy);answerEl.append(panel);
  }
  document.querySelectorAll('[data-scenario]').forEach(tab=>{const active=tab.dataset.scenario===currentScenario;tab.classList.toggle('active',active);tab.setAttribute('aria-pressed',String(active));});
}
function switchScenario(key,scroll){if(!scenarios[key])return;currentScenario=key;sourceOpen=false;draftOpen=false;renderDemo();if(scroll)document.getElementById('demo').scrollIntoView({behavior:'smooth',block:'center'});}
document.addEventListener('click',event=>{
  const el=event.target.closest('button');if(!el)return;
  if(el.dataset.scenario) switchScenario(el.dataset.scenario,false);
  if(el.dataset.example) switchScenario(el.dataset.example,true);
  if(el.hasAttribute('data-sources')){sourceOpen=!sourceOpen;renderDemo();}
  if(el.hasAttribute('data-draft')){draftOpen=!draftOpen;renderDemo();}
  if(el.hasAttribute('data-copy')){
    const value=scenarios[currentScenario].draft.join('\n\n');
    if(navigator.clipboard?.writeText)navigator.clipboard.writeText(value).then(()=>{el.textContent='Copied!';}).catch(()=>{el.textContent='Copy unavailable';});
    else el.textContent='Copy unavailable';
  }
  if(el.classList.contains('signup'))openModal();
});
const modal=document.getElementById('signup-modal');
const closeButton=document.getElementById('modal-close');
const email=document.getElementById('email');
let modalOpener=null;
function openModal(){modalOpener=document.activeElement;modal.hidden=false;document.body.classList.add('modal-open');email.focus();}
function closeModal(){modal.hidden=true;document.body.classList.remove('modal-open');if(modalOpener?.focus)modalOpener.focus();}
closeButton.addEventListener('click',closeModal);
modal.addEventListener('click',event=>{if(event.target===modal)closeModal();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.hidden)closeModal();});
document.getElementById('signup-form').addEventListener('submit',event=>{
  event.preventDefault();
  const note=document.getElementById('form-note');
  note.textContent='This is a visual signup preview only. Your email was not submitted, sent, or saved.';
  note.classList.add('success');
});
renderDemo();
