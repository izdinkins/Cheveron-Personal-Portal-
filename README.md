# 💼 The Personal Portal

**The Personal Portal** is a React-based web app built for a hackathon that leverages AI to analyze resumes and generate tailored employee summaries. It visualizes performance data in an intuitive card-swiping interface, complete with progress bars, summaries, and a PDF export feature.

---

## 🧠 Powered by OpenAI

This project integrates OpenAI's API to parse resume data and automatically generate:

- ✅ Key skills and roles  
- ✅ Personalized summaries  
- ✅ Overall performance percentages  

---

## 🔍 Features

- 📄 **Resume Analysis** – Upload a resume and let AI extract skills, strengths, and role insights  
- 📊 **Employee Summary Cards** – View each employee’s key areas and performance in swipeable cards  
- 📈 **AI-Generated Summary** – Get a quick, human-readable summary generated via OpenAI  
- 📤 **PDF Export** – Export the employee analysis as a shareable PDF (via Google Drive)  
- 🌐 **Dynamic JSON Loading** – Fetches employee data from a JSON file (`employeeData.json`)

---

## 📸 UI Preview

*(Add screenshots here)*

---

## 🛠️ Built With

- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide Icons](https://lucide.dev/)  
- [jsPDF](https://github.com/parallax/jsPDF)  
- [OpenAI API](https://platform.openai.com/)

---

## 📁 File Structure Highlights

├── components/ │ ├── ResultCard.tsx # Displays each employee’s data │ └── ChevronLogo.tsx # Branding logo ├── public/ │ └── employeeData.json # Mocked AI resume analysis results ├── pages/ │ └── Results.tsx # Main page with navigation and export

yaml
Copy
Edit

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/yourusername/personal-portal.git
cd personal-portal
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
✅ Make sure to add your employeeData.json file in the /public directory!

🧠 Inspiration
This project was built during a hackathon challenge focused on AI in the workplace. The goal was to make resume reviews easier for managers by letting AI do the heavy lifting and present the results in a clean, visual, and interactive format.

📄 License
MIT – feel free to fork, contribute, or build on this!

yaml
Copy
Edit

---

Let me know if you'd like me to generate a project badge, add contributors, or set up a live demo link!
