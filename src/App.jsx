import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("Angelo Lepore");
  const [username, setUsername] = useState("angelo_lepore");
  const [password, setPassword] = useState("password");
  const [specialization, setSpecialization] = useState("Frontend");
  const [experienceYears, setExperienceYears] = useState("1");
  const [description, setDescription] = useState("Speriamo bene!");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ) {
      alert("❌ Errore: Compilare tutti i campi correttamente!");
      return;
    }
    console.log("✅ Submit effettuato:", {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description,
    });
    alert("✅ Registrazione completata!");
  };

  return (
    <>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Nome completo */}
        <label>
          <p>Nome completo</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </label>
        {/* Username */}
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        {/* Password */}
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        {/* Specializzazione */}
        <label>
          <p>Specializzazione</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="" disabled>
              Seleziona la specializzazione
            </option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        {/* Anni di esperienza */}
        <label>
          <p>Anni di esperienza</p>
          <input
            type="number"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
          ></input>
        </label>
        {/* Descrizione */}
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        {/* Submit button */}
        <button type="submit">Registrati</button>
      </form>
    </>
  );
}

export default App;
