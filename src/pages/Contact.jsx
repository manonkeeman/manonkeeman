export default function Contact(){
    return (
        <div className="container">
            <h2>Contact</h2>
            <p className="small">Project of opdracht? Stuur me een bericht – ik reageer snel en concreet.</p>

            <form className="card" onSubmit={(e)=>{ e.preventDefault(); alert("Dank! Ik neem contact op."); }}>
                <div style={{display:"grid", gap:12, gridTemplateColumns:"1fr 1fr"}}>
                    <div>
                        <label className="small">Naam</label>
                        <input required type="text" placeholder="Jouw naam" style={inputStyle}/>
                    </div>
                    <div>
                        <label className="small">E-mail</label>
                        <input required type="email" placeholder="naam@bedrijf.nl" style={inputStyle}/>
                    </div>
                </div>
                <div style={{marginTop:12}}>
                    <label className="small">Bericht</label>
                    <textarea required rows="6" placeholder="Waar kan ik mee helpen?" style={inputStyle}/>
                </div>
                <div style={{marginTop:14}}>
                    <button className="btn btn-primary" type="submit">Verstuur</button>
                </div>
            </form>
        </div>
    );
}

const inputStyle = {
    width:"100%", padding:"12px 14px", borderRadius:"12px",
    border:"1px solid var(--border)", background:"#0e0e0e", color:"var(--text)", outline:"none"
};