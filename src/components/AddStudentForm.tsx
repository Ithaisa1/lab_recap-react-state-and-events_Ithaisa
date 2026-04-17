import { useState } from "react";
 
type Student = {
  _id: string;
  fullName: string;
  image: string;
  phone: string;
  email: string;
  program: string;
  graduated: boolean;
};
 
type Props = {
  onAddStudent: (newStudent: Student) => void;
};
 
function AddStudentForm({ onAddStudent }: Props) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduated, setGraduated] = useState(false);
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 
    const newStudent = {
      _id: crypto.randomUUID(),
      fullName,
      image,
      phone,
      email,
      program,
      graduated,
    };
 
    onAddStudent(newStudent);
 
    // reset form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduated(false);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
 
      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
 
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
 
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
 
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
 
      <select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      >
        <option value="Web Dev">Web Dev</option>
        <option value="UX/UI">UX/UI</option>
        <option value="Data">Data</option>
      </select>
 
      <label>
        <input
          type="checkbox"
          checked={graduated}
          onChange={(e) => setGraduated(e.target.checked)}
        />
        Graduated
      </label>
 
      <button type="submit">Add student</button>
    </form>
  );
}
 
export default AddStudentForm;