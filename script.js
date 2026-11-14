const lifeData = {
  create:{key:'CREATE / ENGINEERING',title:'더 빠르게 좋은 설계안에 도달',desc:'반복 모델링·탐색·최적화 시간을 줄여 엔지니어링 용량을 확보합니다.',proof:'Creo · Onshape · AI CAD · Simulation'},
  govern:{key:'GOVERN / PRODUCT CONTEXT',title:'변경의 영향과 근거를 연결',desc:'제품 데이터, BOM/BOP, 내·외부 리뷰를 하나의 Digital Thread로 연결합니다.',proof:'Windchill · Jetstream · Digital Thread'},
  validate:{key:'VALIDATE / SOFTWARE',title:'요구사항에서 테스트까지 추적',desc:'Software-defined product의 변경, 품질, Variant 복잡성을 증거 기반으로 관리합니다.',proof:'Codebeamer · Pure::Variants · ALM–PLM'},
  operate:{key:'OPERATE / SERVICE',title:'출고 이후의 자산 상태까지 파악',desc:'서비스 프로세스와 자산 컨텍스트를 연결해 현장 생산성과 고객 대응을 높입니다.',proof:'ServiceMax · Orbit · Asset Intelligence'},
  learn:{key:'LEARN / AI DECISION',title:'연결된 컨텍스트를 의사결정으로',desc:'AI가 신뢰할 수 있는 제품 컨텍스트를 바탕으로 탐색, 추천, 자동화, 판단을 지원합니다.',proof:'Trusted Product Data · AI · Closed-loop Learning'}
};

const insights = [
  {no:'01',title:'Physical AI Roadmap',speaker:'Innovation Exchange keynote',thesis:'AI의 경쟁력은 모델 자체보다 현실의 제품·설비·서비스 컨텍스트와 얼마나 깊게 연결되는가에서 결정됩니다.',korea:'AI CAD와 Simulation을 단일 기능이 아닌 엔지니어링 생산성 Play로 전환',field:'“AI가 판단해야 할 제품 컨텍스트는 어디에 있고, 얼마나 연결돼 있습니까?”'},
  {no:'02',title:'AI Strategy & Vision',speaker:'Innovation Exchange keynote',thesis:'신뢰할 수 있는 제품 데이터와 연결된 개발 프로세스가 AI 확장의 전제입니다.',korea:'ALM/Codebeamer, PLM, AI CAD를 공통 데이터 기반의 Korea Play Kit로 묶기',field:'“AI 프로젝트가 제품개발 데이터와 실제 업무 흐름까지 연결돼 있습니까?”'},
  {no:'03',title:'Connected Product Data Era',speaker:'Industrial AI perspective',thesis:'휴머노이드 너머의 제조 AI는 설계–요구사항–BOM–생산–서비스의 단절을 줄이는 데서 시작합니다.',korea:'자동차·SDV, 공급망, A&D·MedTech의 추적성과 협업 과제를 Digital Thread로 연결',field:'“제품 수명주기에서 컨텍스트가 사라지는 첫 지점은 어디입니까?”'},
  {no:'04',title:'ServiceMax & Orbit',speaker:'SLM spotlight',thesis:'제품이 출고된 뒤에도 자산 상태와 서비스 의사결정이 제품 컨텍스트와 이어져야 합니다.',korea:'SLM을 서비스 도구가 아니라 성장·갱신·고객경험 확장 Play로 포지셔닝',field:'“현장 서비스팀은 방문 전에 자산 이력과 필요한 정보를 한 화면에서 볼 수 있습니까?”'}
];

const priorities = [
  ['01','AUTOMOTIVE · SDV','추적성·Variant·안전/품질 증거'],['02','OEM · SUPPLIER ECOSYSTEM','외부 협업·설계 리뷰·변경 동기화'],['03','GROWTH VERTICALS','A&D·MedTech의 규제·복잡성'],['04','SLM EXPANSION','자산 가시성·서비스 생산성'],['05','ENTERPRISE CROSS-SELL','Create→Govern→Validate→Operate'],['06','SHARED KOREA PLAY KIT','AI CAD·ALM·Digital Thread']
];

const bottlenecks = [
  {id:'ai-foundation',stage:['learn'],accent:'#39d7e5',title:'AI를 하고 싶은데 제품 컨텍스트가 준비되지 않음',signal:'“GenAI나 Agent를 추진 중인데 Engineering 데이터가 흩어져 있습니다.”',impacts:['AI 신뢰도','확장성','의사결정 지연'],message:'AI 도입보다 먼저, AI가 판단할 제품 컨텍스트가 연결되어 있는지 확인해야 합니다.',questions:['AI가 답해야 하는 가장 중요한 제품 의사결정은 무엇입니까?','그 판단에 필요한 데이터는 어떤 시스템과 조직에 나뉘어 있습니까?','데이터의 최신성·권한·맥락을 누가 보증합니까?','AI 결과를 검증할 기준과 책임자는 정해져 있습니까?','작게 시작한다면 반복 검색·검토·추천 중 어디가 적합합니까?'],capability:'Trusted Product Data + Digital Thread + AI',next:'AI & Product Context Readiness Assessment',industries:['전체 산업'],symptoms:['데이터 사일로','맥락 없는 검색','AI Pilot 정체']},
  {id:'design-capacity',stage:['create','learn'],accent:'#b6e43d',title:'반복 설계와 탐색이 엔지니어링 용량을 소모',signal:'“비슷한 설계를 반복하고 최적안을 찾는 데 시간이 너무 오래 걸립니다.”',impacts:['Time-to-market','설계 용량','재작업 비용'],message:'AI의 가치는 모델 하나를 빨리 만드는 것이 아니라 반복 작업을 줄여 더 많은 엔지니어링 용량을 만드는 데 있습니다.',questions:['반복적으로 수행하는 모델링·검토 작업은 무엇입니까?','기존 설계나 지식을 찾는 데 얼마나 걸립니까?','최적 설계안을 찾기 위해 몇 번의 시행착오가 발생합니까?','아이디어를 초기 3D 모델로 만드는 가장 느린 단계는 무엇입니까?','개선 효과를 시간, 반복 횟수, 품질 중 무엇으로 측정하겠습니까?'],capability:'Creo · Onshape · AI CAD · Simulation',next:'Engineering Productivity Discovery',industries:['Automotive·SDV','Electronics·High Tech','Industrial','Aerospace & Defense'],symptoms:['반복 모델링','설계 검색','최적화 지연']},
  {id:'change-impact',stage:['govern'],accent:'#ff9d45',title:'변경 영향이 보이지 않아 사람이 찾아다님',signal:'“설계를 바꾸면 생산·품질·서비스 어디까지 영향이 가는지 모릅니다.”',impacts:['ECO 지연','재작업','출시 리스크'],message:'문제는 변경 자체가 아니라, 변경의 영향과 의사결정 근거를 사람이 찾아다녀야 한다는 것입니다.',questions:['제품 변경 시 어떤 부서가 가장 늦게 정보를 받습니까?','영향 대상과 승인 상태를 한 번에 확인할 수 있습니까?','변경 정보를 수작업으로 재입력하는 구간은 어디입니까?','설계–BOM–생산–서비스 중 추적이 끊기는 지점은 어디입니까?','지연·재작업 비용을 어떤 KPI로 보고 있습니까?'],capability:'Windchill · Digital Thread · Change Management',next:'45분 Change Impact Mapping Workshop',industries:['전체 산업'],symptoms:['변경 영향 불명확','ECO 지연','부서 간 재입력']},
  {id:'software-trace',stage:['validate','govern'],accent:'#9b8cff',title:'요구사항–구현–테스트 추적이 끊김',signal:'“요구사항이 바뀌어도 어떤 테스트를 다시 해야 하는지 바로 알기 어렵습니다.”',impacts:['품질·규제','Release 지연','Variant 복잡성'],message:'소프트웨어가 복잡해질수록 개발 속도만큼 중요한 것은 요구사항부터 테스트까지의 연속된 증거입니다.',questions:['요구사항 변경이 테스트 결과까지 자동으로 연결됩니까?','요구사항 품질 문제를 개발 초기에 발견할 수 있습니까?','안전·규제 감사에 필요한 증거를 얼마나 빨리 모읍니까?','Variant와 재사용 자산을 어떤 방식으로 관리합니까?','ALM과 PLM 사이에서 어떤 정보가 수동으로 이동합니까?'],capability:'Codebeamer · Pure::Variants · ALM–PLM',next:'Traceability & Variant Assessment',industries:['Automotive·SDV','Aerospace & Defense','MedTech','Industrial'],symptoms:['Excel 요구사항','테스트 증거 분산','Variant 증가']},
  {id:'manufacturing-handoff',stage:['govern','validate'],accent:'#49c4a3',title:'설계–제조 인계에서 BOM/BOP가 어긋남',signal:'“설계 변경이 현장에 늦게 반영되고 생산에서 다시 확인합니다.”',impacts:['생산 지연','품질 비용','현장 재작업'],message:'설계 정보가 제조의 실행 맥락까지 이어져야 변경이 실제 품질과 생산성 개선으로 전환됩니다.',questions:['EBOM과 MBOM/BOP 사이의 정합성을 어떻게 유지합니까?','현장에 최신 작업 정보가 도달하는 데 얼마나 걸립니까?','설계–제조 간 재확인과 재입력이 어디에서 생깁니까?','품질 이슈를 원 설계·요구사항까지 추적할 수 있습니까?','첫 번째 파일럿으로 적합한 제품·라인은 어디입니까?'],capability:'Windchill · Digital BOP · Manufacturing Process',next:'Design-to-Manufacturing Thread Workshop',industries:['Automotive·SDV','Electronics·High Tech','Industrial','Aerospace & Defense'],symptoms:['BOM 불일치','BOP 단절','현장 최신성']},
  {id:'supplier-collab',stage:['govern'],accent:'#4eb3ff',title:'OEM–협력사 리뷰가 파일과 이메일에 머묾',signal:'“외부 설계 리뷰와 승인 때문에 일정이 반복해서 밀립니다.”',impacts:['협업 리드타임','IP 통제','공급망 재작업'],message:'협업의 목표는 파일을 더 빨리 보내는 것이 아니라, 올바른 제품 컨텍스트에서 더 빨리 결정하는 것입니다.',questions:['협력사와 어떤 파일·뷰를 어떤 방식으로 공유합니까?','최신 버전과 리뷰 상태를 모두가 같은 기준으로 봅니까?','외부 협업에서 가장 오래 걸리는 승인 단계는 어디입니까?','IP·접근권한 때문에 협업 속도가 느려지는 부분은 무엇입니까?','설계 변경이 공급망까지 전달됐다는 증거가 남습니까?'],capability:'Jetstream · Windchill · Secure Collaboration',next:'Supplier Design Review Scenario Workshop',industries:['Supplier Ecosystem','Automotive·SDV','Industrial','Aerospace & Defense'],symptoms:['이메일 리뷰','버전 혼선','외부 승인 지연']},
  {id:'service-visibility',stage:['operate','learn'],accent:'#ff6d7a',title:'출고 이후 자산 상태와 서비스 정보가 분산',signal:'“현장 엔지니어가 방문 후에야 필요한 정보가 없다는 걸 압니다.”',impacts:['First-time fix','서비스 비용','고객 경험'],message:'제품 판매 이후의 자산 컨텍스트까지 연결해야 서비스 의사결정과 고객 가치가 함께 확장됩니다.',questions:['현장 담당자가 방문 전에 자산 이력을 확인할 수 있습니까?','서비스 프로세스와 제품 데이터가 연결돼 있습니까?','설비 상태·계약·부품·작업 기록은 어디에 흩어져 있습니까?','가장 비용이 큰 반복 방문의 원인은 무엇입니까?','서비스 개선을 어떤 KPI로 증명하시겠습니까?'],capability:'ServiceMax · Orbit · Asset Intelligence',next:'Service Workflow & Asset Data Assessment',industries:['Industrial','Electronics·High Tech','Aerospace & Defense','MedTech'],symptoms:['자산 정보 분산','반복 방문','현장 준비 부족']}
];

const roleFrames={
  '경영진·DX 리더':'전사 성과, 투자 우선순위, 확장 가능한 운영 모델',
  'R&D·설계 리더':'설계 속도, 엔지니어링 용량, 품질',
  'SW·시스템 개발':'추적성, 변경 영향, Release 신뢰도',
  '생산·품질 리더':'설계–제조 정합성, 재작업, 품질 증거',
  '서비스·고객지원':'현장 생산성, 자산 가시성, 고객 경험',
  'IT·데이터 리더':'데이터 거버넌스, 통합, 보안과 AI 준비도'
};
const industryFrames={
  'Automotive·SDV':'SDV 복잡성, Variant, 안전·품질 추적성',
  'Electronics·High Tech':'빠른 제품 주기, 설계 최적화, 글로벌 협업',
  'Industrial':'설계–생산–서비스 연결과 옵션 복잡성',
  'Aerospace & Defense':'대형 구조, 규제 증거, 장기 수명주기',
  'MedTech':'규제 추적성, 변경 통제, 제품 품질',
  'Supplier Ecosystem':'OEM 협업, 버전·변경 동기화, IP 통제'
};

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function renderLife(id){const d=lifeData[id];$('#life-detail').innerHTML=`<div class="detail-key">${d.key}</div><div><b>${d.title}</b><p>${d.desc}</p></div><div><b>PTC STORY</b><p>${d.proof}</p></div>`}

function renderInsights(){
  $('#insight-list').innerHTML=insights.map((x,i)=>`<button class="insight-tab ${i===0?'active':''}" role="tab" aria-selected="${i===0}" data-insight="${i}"><span>${x.no}</span><b>${x.title}</b><i>→</i></button>`).join('');
  $('#priority-grid').innerHTML=priorities.map(x=>`<div class="priority-card"><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('');
  renderInsight(0);
}
function renderInsight(i){const x=insights[i];$('#bridge-panel').innerHTML=`<span class="panel-no">INSIGHT ${x.no} · VERIFIED AGENDA / FIELD INTERPRETATION</span><h3>${x.title}</h3><p class="panel-thesis">${x.thesis}</p><div class="bridge-arrow">KOREA TRANSLATION</div><div class="panel-map"><div><small>FY27 전략 연결</small><b>${x.korea}</b></div><div><small>고객 대화 전환</small><b>${x.field}</b></div></div><p class="panel-quote">${x.field}</p>`}

let activeFilter='all';
function renderBottlenecks(){
  const q=$('#search-input').value.trim().toLowerCase();
  const list=bottlenecks.filter(x=>(activeFilter==='all'||x.stage.includes(activeFilter))&&(!q||[x.title,x.signal,x.message,x.capability,x.symptoms.join(' '),x.impacts.join(' ')].join(' ').toLowerCase().includes(q)));
  $('#result-count').textContent=list.length;$('#empty-state').hidden=list.length>0;
  $('#bottleneck-grid').innerHTML=list.map((x,i)=>`<article class="bottleneck-card" style="--accent:${x.accent};animation-delay:${i*.055}s"><div class="card-top"><span class="card-index">PLAY ${String(bottlenecks.indexOf(x)+1).padStart(2,'0')}</span><span class="stage-tag">${x.stage.join(' · ')}</span></div><h3>${x.title}</h3><p class="card-signal">${x.signal}</p><div class="impact-list">${x.impacts.map(t=>`<span>${t}</span>`).join('')}</div><p class="card-message">${x.message}</p><button class="card-action" data-detail="${x.id}">PLAY 열기 <i>→</i></button></article>`).join('');
}
function openDetail(id){const x=bottlenecks.find(b=>b.id===id);$('#dialog-content').innerHTML=`<div class="dialog-body"><div class="dialog-head"><span class="stage-tag">${x.stage.join(' · ')}</span><h2>${x.title}</h2><p>${x.signal}</p></div><div class="dialog-message">“${x.message}”</div><div class="dialog-grid"><section class="dialog-section"><h3>OBSERVED SIGNALS</h3><ul>${x.symptoms.map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="dialog-section"><h3>BUSINESS IMPACT</h3><ul>${x.impacts.map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="dialog-section wide"><h3>DISCOVERY QUESTIONS</h3><ul>${x.questions.map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="dialog-section"><h3>PTC STORY</h3><b>${x.capability}</b></section><section class="dialog-section"><h3>FIT INDUSTRIES</h3><p>${x.industries.join(' · ')}</p></section></div><div class="dialog-next"><small>NEXT BEST PLAY</small><b>${x.next}</b><span>→</span></div></div>`;$('#detail-dialog').showModal()}

function renderSelectors(){
  $('#bottleneck-select').innerHTML=bottlenecks.map(x=>`<option value="${x.id}">${x.title}</option>`).join('');
  renderMessage();
}
function renderMessage(){
  const x=bottlenecks.find(b=>b.id===$('#bottleneck-select').value)||bottlenecks[0];const role=$('#role-select').value;const industry=$('#industry-select').value;
  const fit=x.industries.includes(industry)||x.industries.includes('전체 산업')?'높은 연관성':'인접 Play';
  const opening=`${industry} 기업과 대화할 때, ${industryFrames[industry]}가 중요한 의제가 됩니다. ${role} 관점에서는 ${roleFrames[role]}에 미치는 영향을 먼저 보겠습니다. ${x.message}`;
  $('#output-content').innerHTML=`<div class="output-brief"><h3>${x.title}</h3><p class="output-context">${industry} · ${role} · ${fit}</p><div class="output-block"><label>30-SECOND OPENING</label><p class="opening">${opening}</p></div><div class="output-block"><label>DISCOVERY QUESTIONS</label><div class="question-list">${x.questions.map(q=>`<p>${q}</p>`).join('')}</div></div><div class="output-block"><label>PTC STORY</label><p><b>${x.capability}</b></p></div><div class="next-play"><div><small>NEXT BEST PLAY</small><b>${x.next}</b></div><span>→</span></div></div>`;
}
function copyOutput(){navigator.clipboard.writeText($('#message-output').innerText.replace('전체 복사','').trim()).then(showToast)}
function showToast(){const t=$('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}

function init(){
  renderLife('create');renderInsights();renderBottlenecks();renderSelectors();
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
  $$('.life-step').forEach(b=>b.addEventListener('click',()=>{$$('.life-step').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLife(b.dataset.life)}));
  $('#insight-list').addEventListener('click',e=>{const b=e.target.closest('[data-insight]');if(!b)return;$$('.insight-tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});b.classList.add('active');b.setAttribute('aria-selected','true');renderInsight(+b.dataset.insight)});
  $('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeFilter=b.dataset.filter;renderBottlenecks()});
  $('#search-input').addEventListener('input',renderBottlenecks);
  $('#bottleneck-grid').addEventListener('click',e=>{const b=e.target.closest('[data-detail]');if(b)openDetail(b.dataset.detail)});
  $('.dialog-close').addEventListener('click',()=>$('#detail-dialog').close());
  $('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog'))$('#detail-dialog').close()});
  $('#message-form').addEventListener('submit',e=>{e.preventDefault();renderMessage();$('#message-output').animate([{transform:'translateY(7px)',opacity:.72},{transform:'none',opacity:1}],{duration:380,easing:'ease-out'})});
  $('#copy-all').addEventListener('click',copyOutput);
  $$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.scroll).scrollIntoView({behavior:'smooth'})));
  $('.menu-toggle').addEventListener('click',e=>{const open=$('.site-header').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
  $('#site-nav').addEventListener('click',()=>{$('.site-header').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')});
  addEventListener('scroll',()=>$('.site-header').classList.toggle('scrolled',scrollY>12),{passive:true});
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#search-input').focus();$('#bottlenecks').scrollIntoView()}if(e.key==='Escape'&&$('#detail-dialog').open)$('#detail-dialog').close()});
}
init();
