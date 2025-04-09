💼 The Personal Portal
The Personal Portal is a React-based web app built for a hackathon that leverages AI to analyze resumes and generate tailored employee summaries. It visualizes performance data in an intuitive card-swiping interface, complete with progress bars, summaries, and a PDF export feature.

🧠 Powered by OpenAI
This project integrates OpenAI's API to parse resume data and automatically generate:

Key skills and roles

Personalized summaries

Overall performance percentages

🔍 Features
📄 Resume Analysis – Upload a resume and let AI extract skills, strengths, and role insights.

📊 Employee Summary Cards – View each employee’s key areas and performance in swipeable cards.

📈 AI-Generated Summary – Get a quick, human-readable summary generated via OpenAI.

📤 PDF Export – Export the employee analysis as a shareable PDF (via Google Drive).

🌐 Dynamic JSON Loading – Fetches employee data from a JSON file (employeeData.json).

📸 UI Preview
(Add screenshots here if you have any!)

🛠️ Built With
React

Tailwind CSS

Lucide Icons

jsPDF

OpenAI API

📁 File Structure Highlights
php
Copy
Edit
├── components/
│   ├── ResultCard.tsx     # Displays each employee’s data
│   └── ChevronLogo.tsx    # Branding logo
├── public/
│   └── employeeData.json  # Mocked AI resume analysis results
├── pages/
│   └── Results.tsx        # Main page with navigation and export
🚀 Getting Started
Clone the repo:

bash
Copy
Edit
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
Add your employeeData.json file in /public

🧠 Inspiration
This project was built during a hackathon challenge focused on AI in the workplace. The goal: make resume reviews easier for managers by letting AI do the heavy lifting and present it in a visual, interactive format.

📄 License
MIT – feel free to fork and build on this!

