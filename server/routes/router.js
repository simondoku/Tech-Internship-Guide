const express = require('express')
const router = express.Router()

router.get("/api", (req, res) => {
    res.json(
        {
            "pFundamentals": ["w3schools", "freeCodeCamp", "codeacademy", "neetCode", "coursera", "geeksforgeeks", "harvardCS50"],
            "dSA": ["neetCode", "coursera", "geeksforgeeks"],
            "note": ["personalNote", "onlineNote"]
        }
    )
})

router.get("/block-data", (req, res) => {
    res.json(
        {
            "w3schools": {"name": "W3schools", "link": "w3schools.com", "description": "This website could be used to learn different languages like Python, Java, etc."},
            "freeCodeCamp": {"name": "FreeCodeCamp", "link": "freecodecamp.org", "description": "It includes interactive coding challenges, projects, and certifications in various technology stacks, including HTML, CSS, JavaScript, Data Visualization, APIs and Microservices, and more. The platform is known for its hands-on approach to learning and its supportive community."},
            "codeacademy": {"name": "Codeacademy", "link": "codeacademy.com", "description": "This website provides a hands-on coding experience with exercises and projects. Codecademys courses cover topics like web development, data science, programming languages (Python, JavaScript, Ruby, etc.), and more. While some content is free, a premium subscription is available for additional features and content."},
            "neetCode": {"name": "NeetCode", "link": "neetcode.io", "description": "Neetcode is a platform that helps you prepare for technical interviews. It provides a collection of questions and answers that are asked in technical interviews at top tech companies!"},
            "coursera": {"name": "Coursera", "link": "coursera.org", "description": "Coursera is an online learning platform that offers courses, certificates, and degrees from 200+ leading universities and companies. The platform offers courses in a wide range of subjects, including business, computer science, data science, math, science, and more. You can earn certificates and show it off on your resume!"},
            "geeksforgeeks": {"name": "Geeks for Geeks", "link": "geeksforgeeks.org/data-structures/?ref=shm_outind", "description": "GeeksforGeeks is a computer science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions. The website covers a wide range of programming languages and computer science concepts, making it a valuable resource for both beginners and experienced programmers. It is particularly popular for its competitive programming and data structure/algorithms content."},
            "harvardCS50": {"name": "HarvardCS50", "link":"harvard.edu/search/?q_as=CS50", "description": "HarvardCS50 is a free online course that teaches you the basics of computer science. It is a great resource for beginners to learn the fundamentals of computer science and programming."},
            "personalNote": {"name": "Personal Notes", "link": "", "description": ""},
            "onlineNote": {"name": "Online Notes", "link": "", "description": ""}
        }
    )
})

router.get("/faqs", (req, res) => {
    res.json(
        [
            {"id": "1", "question": "How do I navigate the website?", "answer": "Use the main menu at the top of the page to access different sections like Classes, Projects, Resume, and more."},
            {"id": "2", "question": "Are the courses and resources listed on the website free?", "answer": "While many resources listed are free, some may require payment or subscription. Always check the specific platform for details."},
            {"id": "3", "question": "How often is the content on the website updated?", "answer": "We regularly update our content every 30th to ensure you have access to the latest and most relevant resources."},
            {"id": "4", "question": "Can I submit a resource or course to be featured on the website?", "answer": "Yes, please use the \"Add a Site\" form on our website or contact us directly."},
            {"id": "5", "question": "I'm having technical issues with the website. Who can I contact?", "answer": "Please reach out to our support team using the \"Contact Us\" form, and we'll assist you as soon as possible."},
            {"id": "6", "question": "Do you offer any mentorship or direct internship placement services?", "answer": "While our primary focus is providing resources, we do have a \"Stories\" section where you can read about mentorship experiences and success stories. We recommend checking our \"Networking\" section for platforms that offer mentorship."},
            {"id": "7", "question": "How do I prepare for technical interviews?", "answer": "Our \"Interview Prep\" section offers resources, mock interview platforms, and tips to help you prepare effectively."},
            {"id": "8", "question": "Can I save or bookmark resources to view later?", "answer": "While our website doesn't offer a bookmarking feature, you can use your browser's bookmark function to save pages for later."},
            {"id": "9", "question": "Are there any community forums or groups associated with this website?", "answer": "Not currently, but we recommend checking our \"Networking\" section for platforms where you can connect with like-minded individuals."},
            {"id": "10", "question": "How do I provide feedback or suggestions for the website?", "answer": "We value your feedback! Please use the \"Feedback\" form on our website or contact us directly."}
        ]
    )
})

router.get("/stories", (req, res) => {
    res.json(
        [
            {"id": "1", "company": "Uber", "story": "Tella story?"},
            {"id": "2", "company": "Zillow", "story": "Simon story?"},
            {"id": "3", "company": "Almada", "story": "My summer internship at Almada was a transformative experience that immersed me in the technology sector. I handled customer inquiries, troubleshooting BIOS issues, and learned the value of diverse skills. Collaborating with interns, we presented on technical topics and explored AIs potential in cybersecurity. The internship broadened my web development skills and introduced me to AIs impact on network security and database organization. The supportive work environment, camaraderie, and teamwork were invaluable, emphasizing the importance of collaboration. The highlight was working on an AI system for database organization and network security. This experience enhanced my problem-solving, communication, and innovation skills, leaving me inspired for future endeavors in technology."}
        ]
    )
})

module.exports = router