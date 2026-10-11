import React, {useCallback,useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {onAuthStateChanged,signInWithEmailAndPassword,signOut,type User} from "firebase/auth";
import {auth} from "../firebase";

const ADMIN_EMAIL="morningcoffeelabs@gmail.com";
const ENDPOINT="https://europe-west1-elkrafttorget-no.cloudfunctions.net/verificationAdmin";
const REPORTS_ENDPOINT="https://europe-west1-elkrafttorget-no.cloudfunctions.net/reportsAdmin";
const reasons:Record<string,string>={misleading:"Feil eller villedende informasjon",fraud:"Mistanke om svindel",prohibited:"Uegnet eller ulovlig innhold",spam:"Spam eller gjentatt annonsering",other:"Annet"};

type RequestRow={
 id:string;uid:string;orgNumber:string;companyName:string;email:string;
 status:"pending"|"approved"|"rejected";createdAt:string|null;
};
type ReportRow={id:string;listingId:string;reporterUid:string;listingOwnerUid:string;reason:string;comment:string;status:"pending"|"in_review"|"completed"|"dismissed"|"reviewed";createdAt:string|null;reviewedAt?:string|null;adminNote?:string;outcome?:string;listing?:{title:string;category:string;status:string;company:string}|null;reporter?:{name:string;email:string;companyName:string}|null;owner?:{name:string;email:string;companyName:string}|null};
const panel:React.CSSProperties={border:"1px solid var(--line, rgba(255,255,255,.15))",borderRadius:16,padding:"1.2rem",marginBottom:"1rem",background:"var(--panel,rgba(255,255,255,.04))"};
const button:React.CSSProperties={padding:".65rem 1rem",borderRadius:8,cursor:"pointer"};

export default function ElKraftTorgetAdminPage(){
 const [user,setUser]=useState<User|null>(null);
 const [ready,setReady]=useState(false);
 const [email,setEmail]=useState(ADMIN_EMAIL);
 const [password,setPassword]=useState("");
 const [rows,setRows]=useState<RequestRow[]>([]);
 const [reports,setReports]=useState<ReportRow[]>([]);
 const [reportNote,setReportNote]=useState<Record<string,string>>({});
 const [section,setSection]=useState<"home"|"verification"|"reports">("home");
 const [subview,setSubview]=useState<"new"|"processing"|"archive">("new");
 const [reportOutcome,setReportOutcome]=useState<Record<string,string>>({});
 const [loading,setLoading]=useState(false);
 const [busy,setBusy]=useState<string|null>(null);
 const [error,setError]=useState("");
 const [message,setMessage]=useState("");
 useEffect(()=>onAuthStateChanged(auth,u=>{setUser(u);setReady(true);}),[]);
 const load=useCallback(async()=>{
  if(!user||user.email!==ADMIN_EMAIL)return;
  setLoading(true);setError("");
  try{
   const token=await user.getIdToken();
   const response=await fetch(ENDPOINT,{headers:{Authorization:`Bearer ${token}`}});
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||"Kunne ikke hente forespørsler");
   setRows(body.requests||[]);
   const reportResponse=await fetch(REPORTS_ENDPOINT,{headers:{Authorization:`Bearer ${token}`}});
   const reportBody=await reportResponse.json();
   if(!reportResponse.ok)throw new Error(reportBody.error||"Kunne ikke hente rapporter");
   setReports(reportBody.reports||[]);
  }catch(e){setError(e instanceof Error?e.message:"Kunne ikke hente forespørsler");}
  finally{setLoading(false);}
 },[user]);
 useEffect(()=>{void load();},[load]);
 const decide=async(row:RequestRow,decision:"approve"|"reject")=>{
  const verb=decision==="approve"?"godkjenne":"avvise";
  if(!window.confirm(`Vil du ${verb} verifisering for ${row.companyName} (${row.orgNumber})?`))return;
  if(!user)return;
  setBusy(row.id);setError("");setMessage("");
  try{
   const token=await user.getIdToken();
   const response=await fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},body:JSON.stringify({uid:row.uid,decision})});
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||"Kunne ikke behandle forespørselen");
   setMessage("Forespørselen er behandlet.");
   await load();
  }catch(e){setError(e instanceof Error?e.message:"Kunne ikke behandle forespørselen");}
  finally{setBusy(null);}
 };
 const decideReport=async(row:ReportRow,decision:"start"|"complete")=>{
  if(!user)return;
  const outcome=reportOutcome[row.id]||"unfounded";
  if(!window.confirm(decision==="start"?"Ta rapporten til vurdering?":"Avslutte rapporten med valgt konklusjon? Ingen tiltak gjennomføres automatisk."))return;
  setBusy(row.id);setError("");setMessage("");
  try{
   const token=await user.getIdToken();
   const response=await fetch(REPORTS_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},body:JSON.stringify({reportId:row.id,decision,outcome,note:reportNote[row.id]||""})});
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||"Kunne ikke behandle rapporten");
   setMessage("Rapportstatus oppdatert. Ingen varsling til annonsøren.");
   await load();
  }catch(e){setError(e instanceof Error?e.message:"Kunne ikke behandle rapporten");}
  finally{setBusy(null);}
 };
 const login=async(e:React.FormEvent)=>{
  e.preventDefault();setError("");
  try{await signInWithEmailAndPassword(auth,email.trim(),password);setPassword("");}
  catch{setError("Innlogging feilet.");}
 };
 return <main className="page" style={{maxWidth:1100}}>
  <section style={panel}>
   <p style={{marginTop:0}}><Link to="/admin">← Til MCL Admin</Link></p>
   <h1>ElKraftTorget – administrasjon</h1>
   <p>Kontoverifisering og konfidensiell behandling av rapporterte annonser.</p>
  </section>
  {!ready?<p>Laster innlogging...</p>:!user?
   <section style={panel}><h2>Logg inn</h2><form onSubmit={login} style={{display:"grid",gap:12,maxWidth:420}}>
    <input aria-label="E-post" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
    <input aria-label="Passord" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
    <button style={button}>Logg inn</button></form></section>
   :user.email!==ADMIN_EMAIL?<section style={panel}><p>Ingen tilgang.</p><button style={button} onClick={()=>signOut(auth)}>Logg ut</button></section>
   :<>
   {section==="home"?<section style={panel}>
    <h2>Administrasjonsforside</h2>
    <p>Velg arbeidsområde.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:18}}>
     <button style={{...panel,textAlign:"left",cursor:"pointer",color:"inherit",minHeight:155}} onClick={()=>{setSection("verification");setSubview("new");}}>
      <strong style={{fontSize:24}}>Kontoverifisering</strong>
      <p>Kontroll av brukernes firmatilknytning</p>
      <strong>{rows.filter(r=>r.status==="pending").length} nye</strong>
     </button>
     <button style={{...panel,textAlign:"left",cursor:"pointer",color:"inherit",minHeight:155}} onClick={()=>{setSection("reports");setSubview("new");}}>
      <strong style={{fontSize:24}}>Rapporteringer</strong>
      <p>Vurder og arkiver rapporterte annonser</p>
      <strong>{reports.filter(r=>r.status==="pending").length} nye · {reports.filter(r=>r.status==="in_review").length} under behandling</strong>
     </button>
    </div>
   </section>:<>
   <div style={{display:"flex",gap:18,alignItems:"flex-start",flexWrap:"wrap"}}>
    <nav aria-label="Administrasjonsmeny" style={{...panel,flex:"0 0 205px",display:"grid",gap:9}}>
     <button style={button} onClick={()=>setSection("home")}>← Oversikt</button>
     <strong>{section==="reports"?"Rapporteringer":"Kontoverifisering"}</strong>
     {(["new","processing","archive"] as const).map(view=><button key={view} style={{...button,textAlign:"left",fontWeight:subview===view?"bold":"normal",background:subview===view?"rgba(96,165,250,.16)":undefined,color:"inherit"}} onClick={()=>setSubview(view)}>
      {view==="new"?"Nye":view==="processing"?"Under behandling":"Arkiv"}
     </button>)}
     <button style={button} onClick={()=>{setSection(section==="reports"?"verification":"reports");setSubview("new");}}>Bytt til {section==="reports"?"kontoverifisering":"rapportering"}</button>
    </nav>
    <div style={{flex:"1 1 440px",minWidth:0}}>
     <section style={panel}><h2 style={{marginTop:0}}>{section==="reports"?"Rapporteringer":"Kontoverifisering"} – {subview==="new"?"Nye":subview==="processing"?"Under behandling":"Arkiv"}</h2>
      <button style={button} onClick={()=>void load()} disabled={loading}>{loading?"Laster...":"Oppdater"}</button>
      {error&&<p role="alert" style={{color:"#d43f3f"}}>{error}</p>}
      {message&&<p role="status">{message}</p>}
     </section>
   {section==="verification"&&subview==="new"&&rows.filter(r=>r.status==="pending").map(row=><section key={row.id} style={panel}>
    <h2 style={{marginTop:0}}>{row.companyName}</h2>
    <p>Org.nr.: {row.orgNumber}</p><p>Bruker: {row.email}</p>
    <p>Sendt: {row.createdAt?new Date(row.createdAt).toLocaleString("nb-NO"):"Ukjent"}</p>
    <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
     <button style={button} disabled={busy!==null} onClick={()=>void decide(row,"approve")}>Godkjenn</button>
     <button style={button} disabled={busy!==null} onClick={()=>void decide(row,"reject")}>Avvis</button>
    </div>
   </section>)}
   {section==="verification"&&subview==="new"&&!loading&&!error&&rows.filter(r=>r.status==="pending").length===0&&<section style={panel}>Ingen forespørsler til kontroll.</section>}
   {section==="reports"&&<><section style={{...panel,display:"none"}}><h2>Rapportering</h2><p>Rapporter er konfidensielle. Ingen tiltak eller varsler utføres automatisk.</p>
    <p>Nye: {reports.filter(r=>r.status==="pending").length} · Under vurdering: {reports.filter(r=>r.status==="in_review").length} · Ferdig vurdert: {reports.filter(r=>["completed","dismissed","reviewed"].includes(r.status)).length}</p>
   </section>
   {(["pending","in_review","completed"] as const).filter(stage=>(subview==="new"&&stage==="pending")||(subview==="processing"&&stage==="in_review")||(subview==="archive"&&stage==="completed")).map(stage=><section key={stage} style={panel}>
    <h2>{stage==="pending"?"Nye rapporteringer":stage==="in_review"?"Under vurdering":"Ferdig vurdert – arkiv"}</h2>
    {reports.filter(r=>stage==="completed"?["completed","dismissed","reviewed"].includes(r.status):r.status===stage).map(row=><article key={row.id} style={{borderTop:"1px solid var(--line,rgba(255,255,255,.12))",padding:"1rem 0"}}>
     <h3>{row.listing?.title||"Annonse ikke funnet"}</h3>
     <p>{row.listing?.company||"Ukjent firma"} · {row.listing?.category||""} · {row.listing?.status||""}</p>
     <p><strong>Årsak:</strong> {reasons[row.reason]||row.reason}</p>
     {row.comment&&<p><strong>Kommentar:</strong> {row.comment}</p>}
     <p><strong>Rapportør:</strong> {row.reporter?.name||"Ukjent"} · {row.reporter?.email||row.reporterUid} · {row.reporter?.companyName||""}</p>
     <p><strong>Annonsør:</strong> {row.owner?.name||"Ukjent"} · {row.owner?.email||row.listingOwnerUid}</p>
     <p>Rapportert: {row.createdAt?new Date(row.createdAt).toLocaleString("nb-NO"):"Ukjent"}</p>
     {stage==="completed"?<>
       <p><strong>Konklusjon:</strong> {row.status==="dismissed"?"Ubegrunnet – ingen tiltak":row.status==="reviewed"?"Vurdert (tidligere arbeidsflyt)":row.outcome==="unfounded"?"Ubegrunnet – ingen tiltak":row.outcome==="action_required"?"Begrunnet – tiltak nødvendig":row.outcome==="action_taken"?"Begrunnet – tiltak gjennomført":"Ikke angitt"}</p>
       {row.adminNote&&<p><strong>Administrators notat:</strong> {row.adminNote}</p>}
       <p>Behandlet: {row.reviewedAt?new Date(row.reviewedAt).toLocaleString("nb-NO"):"Ukjent"}</p>
      </>:<>
       <label htmlFor={`note-${row.id}`}>Administrators notat</label>
       <textarea id={`note-${row.id}`} rows={3} maxLength={2000} style={{display:"block",width:"100%",maxWidth:700,margin:".5rem 0 1rem",padding:10}} value={reportNote[row.id]||""} onChange={e=>setReportNote(prev=>({...prev,[row.id]:e.target.value}))}/>
       {stage==="pending"&&<button style={button} disabled={busy!==null} onClick={()=>void decideReport(row,"start")}>Start vurdering</button>}
       {stage==="in_review"&&<div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
        <select aria-label="Konklusjon" style={{padding:10}} value={reportOutcome[row.id]||"unfounded"} onChange={e=>setReportOutcome(prev=>({...prev,[row.id]:e.target.value}))}>
         <option value="unfounded">Ubegrunnet – ingen tiltak</option>
         <option value="action_required">Begrunnet – tiltak nødvendig</option>
         <option value="action_taken">Begrunnet – tiltak gjennomført</option>
        </select>
        <button style={button} disabled={busy!==null} onClick={()=>void decideReport(row,"complete")}>Ferdigstill og arkiver</button>
       </div>}
      </>}
    </article>)}
    {!reports.some(r=>stage==="completed"?["completed","dismissed","reviewed"].includes(r.status):r.status===stage)&&<p>Ingen rapporter.</p>}
   </section>)}</>}
   {section==="verification"&&subview==="archive"&&<section style={panel}><h2>Behandlede forespørsler</h2>
    {rows.filter(r=>r.status!=="pending").map(r=><div key={r.id} style={{padding:".85rem 0",borderBottom:"1px solid var(--line, rgba(255,255,255,.12))"}}>
     <strong>{r.companyName}</strong>
     <p style={{margin:".35rem 0"}}>Org.nr.: {r.orgNumber}</p>
     <p style={{margin:".35rem 0"}}>E-post: {r.email}</p>
     <p style={{margin:".35rem 0"}}>Status: {r.status==="approved"?"Godkjent":"Avvist"}</p>
     <p style={{margin:".35rem 0",opacity:.75}}>Forespørsel sendt: {r.createdAt?new Date(r.createdAt).toLocaleString("nb-NO"):"Ukjent"}</p>
    </div>)}
   </section>}
    </div>
   </div></>}
  </>}
 </main>;
}
