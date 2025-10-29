import { useMemo, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {
  const [fullName, setFullName] = useState("Angelo Lepore");
  const [username, setUsername] = useState("angelo_lepore");
  const [password, setPassword] = useState("Password.94");
  const [specialization, setSpecialization] = useState("Frontend");
  const [experienceYears, setExperienceYears] = useState("1");
  const [description, setDescription] = useState("Speriamo bene!");

  // Username
  const isUsernameValid = useMemo(() => {
    const charsValid = username
      .split("")
      .every(
        (char) =>
          letters.includes(char.toLowerCase()) ||
          numbers.includes(char) ||
          char === "_"
      );
    return charsValid && username.trim().length >= 6;
  }, [username]);

  // Password
  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char.toLowerCase())) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  // Description
  const isDescriptionValid = useMemo(() => {
    const trimmed = description.trim();
    const noSpacesOutside = description === trimmed;
    return noSpacesOutside && trimmed.length >= 10 && trimmed.length <= 100;
  }, [description]);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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
          {username.trim() && (
            <p style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid
                ? "Username valido"
                : "Username non valido - Deve contenere solo caratteri alfanumerici e almeno 6 caratteri"}
            </p>
          )}
        </label>
        {/* Password */}
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          {password.trim() && (
            <p style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid
                ? "Password valida"
                : "Password non valida - Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
            </p>
          )}
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
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid
                ? "Descrizione valida"
                : `Descrizione non valida - Deve contenere tra 10 e 100 caratteri senza spazi iniziali e finali (${description.length})`}
            </p>
          )}
        </label>
        {/* Submit button */}
        <button type="submit">Registrati</button>
      </form>
    </>
  );
}

export default App;
