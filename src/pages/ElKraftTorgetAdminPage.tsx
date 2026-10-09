import React, {useCallback,useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {onAuthStateChanged,signInWithEmailAndPassword,signOut,type User} from "firebase/auth";
import {auth} from "../firebase";

const ADMIN_EMAIL="morningcoffeelabs@gmail.com";
const ENDPOINT="https://europe-west1-elkrafttorget-no.cloudfunctions.net/verificationAdmin";

type RequestRow={
 id:string;uid:string;orgNumber:string;companyName:string;email:string;
 status:"pending"|"approved"|"rejected";createdAt:string|null;
};
const panel:React.CSSProperties={border:"1px solid var(--line, rgba(255,255,255,.15))",borderRadius:16,padding:"1.2rem",marginBottom:"1rem",background:"var(--panel,rgba(255,255,255,.04))"};
const button:React.CSSProperties={padding:".65rem 1rem",borderRadius:8,cursor:"pointer"};

export default function ElKraftTorgetAdminPage(){
 const [user,setUser]=useState<User|null>(null);
 const [ready,setReady]=useState(false);
 const [email,setEmail]=useState(ADMIN_EMAIL);
 const [password,setPassword]=useState("");
 const [rows,setRows]=useState<RequestRow[]>([]);
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
 const login=async(e:React.FormEvent)=>{
  e.preventDefault();setError("");
  try{await signInWithEmailAndPassword(auth,email.trim(),password);setPassword("");}
  catch{setError("Innlogging feilet.");}
 };
 return <main className="page" style={{maxWidth:1100}}>
  <section style={panel}>
   <p style={{marginTop:0}}><Link to="/admin">← Til MCL Admin</Link></p>
   <h1>ElKraftTorget – administrasjon</h1>
   <p>Manuell kontroll av firmatilknytning. Opplysningene må verifiseres før godkjenning.</p>
  </section>
  {!ready?<p>Laster innlogging...</p>:!user?
   <section style={panel}><h2>Logg inn</h2><form onSubmit={login} style={{display:"grid",gap:12,maxWidth:420}}>
    <input aria-label="E-post" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
    <input aria-label="Passord" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
    <button style={button}>Logg inn</button></form></section>
   :user.email!==ADMIN_EMAIL?<section style={panel}><p>Ingen tilgang.</p><button style={button} onClick={()=>signOut(auth)}>Logg ut</button></section>
   :<><section style={panel}>
    <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
     <button style={button} onClick={()=>void load()} disabled={loading}>{loading?"Laster...":"Oppdater liste"}</button>
     <span>Til kontroll: {rows.filter(r=>r.status==="pending").length}</span>
    </div>
    {error&&<p role="alert" style={{color:"#d43f3f"}}>{error}</p>}
    {message&&<p role="status">{message}</p>}
   </section>
   {rows.filter(r=>r.status==="pending").map(row=><section key={row.id} style={panel}>
    <h2 style={{marginTop:0}}>{row.companyName}</h2>
    <p>Org.nr.: {row.orgNumber}</p><p>Bruker: {row.email}</p>
    <p>Sendt: {row.createdAt?new Date(row.createdAt).toLocaleString("nb-NO"):"Ukjent"}</p>
    <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
     <button style={button} disabled={busy!==null} onClick={()=>void decide(row,"approve")}>Godkjenn</button>
     <button style={button} disabled={busy!==null} onClick={()=>void decide(row,"reject")}>Avvis</button>
    </div>
   </section>)}
   {!loading&&!error&&rows.filter(r=>r.status==="pending").length===0&&<section style={panel}>Ingen forespørsler til kontroll.</section>}
   <section style={panel}><h2>Behandlede forespørsler</h2>
    {rows.filter(r=>r.status!=="pending").map(r=><p key={r.id}>{r.companyName} ({r.orgNumber}) – {r.status==="approved"?"Godkjent":"Avvist"}</p>)}
   </section>
  </>}
 </main>;
}
