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
            "personalNote": {"name": "Personal Notes", "link": "docs.google.com/", "description": "  A free, web-based application where documents and spreadsheets can be created, edited, and stored online."},
            "onlineNotes": {"name": "Online Notes", "link": "hackmd.io/", "description": " HackMD is a collaborative, open-source, online markdown editor. It allows you to write in markdown and share your notes with others."},
            "githubAWDRepo": {"name": "GitHub AWD Repository", "link": "github.com/sindresorhus/awesome", "description": "A curated list of awesome web development frameworks, libraries, and software."},
            "mdn": {"name": "MDN", "link": "developer.mozilla.org/en-US/", "description": "Comprehensive resources for web developers, including tutorials and API docs. It is a great resource for learning web development and looking up documentation for different web technologies."},
            "webDevByGoogle": {"name": "Web Dev by Google", "link": "web.dev/", "description": " Best practices, tools, and resources to build modern web experiences."},
            "frontEndMasters": {"name": "Front End Masters", "link": "frontendmasters.com/", "description": "Frontend Masters is a platform that offers courses on frontend development. It offers courses on a wide range of topics, including JavaScript, React, Vue, Angular, CSS, HTML, and more. It is a great resource for learning frontend development."},
            "unityLearn": {"name": "Unity Learn", "link": "learn.unity.com/", "description": "Unity Learn is a platform that offers courses on game development. It offers courses on a wide range of topics, including C#, Unity, and more. It is a great resource for learning game development!"},
            "unrealEngine": {"name": "Unreal Engine", "link": "unrealengine.com/en-US/onlinelearning-courses", "description": "Unreal Engine is a platform that offers courses on game development. A platform by Epic Games offering courses and tutorials on using the Unreal Engine for game development."},
            "gameDevNet" :{"name": "GameDev.net", "link": "gamedev.net/", "description": " A community for game developers to discuss topics, share projects, and learn from tutorials."},
            "samplRes": {"name": "Sample Resumes", "link": "cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/sampe-resumes-capd.pdf", "description": "This link includes sample resumes with different formats and styles."},
            "harvardWords": {"name": "Harvard Action Words", "link": "hls.harvard.edu/bernard-koteen-office-of-public-interest-advising/opia-job-search-toolkit/action-verbs/", "description": "This link includes a list of action verbs and adjectives that can be used in resumes!"},
            "canvaTem" :{"name": "Canva Templates", "link": "canva.com/templates/resumes/", "description": "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, documents, and other visual content. It is a great resource for creating resumes!"},
            "microsoftCanva": {"name": "Microsoft Canva", "link": "create.microsoft.com/en-us/templates/resumes", "description": "Traditional resume templates available in MS Word. "},
            "googleDocsTemp": {"name": "Google Docs Templates", "link": "docs.google.com/document/u/0/?ftv=1&tgif=c", "description": "Traditional resume templates available in Google Docs."},
            "template": {"name": "Template", "link": "template.net/editable/resumes", "description": "A collection of free and premium resume templates."},
            "hloom": {"name": "Hloom", "link": "hloom.com/resume/templates", "description": "Hloom is a website offering free templates for various documents like resumes, business cards, and flyers, making it easier for users to create professional-looking documents in Microsoft Word and Excel formats."},
            "resumeGen" :{"name": "Resume Genius", "link": "resumegenius.com/", "description": "A resume builder that offers a variety of templates and styles."},
            "balanceCareers": {"name": "The Balance Careers", "link": "liveabout.com/job-searching-6504746", "description": "A collection of articles on job searching, including resume tips, interview tips, and more."},
            "zety": {"name": "Zety Resume Builder", "link": "zety.com/", "description": "Online resume builder with various templates. This website also offers resume tips and advice."},
            "resumeCom" : {"name": "Resume.com", "link": "resume.com/", "description": "Free online resume builder and career advice."},
            "monsterResume" : {"name": "Monster Resume Tips", "link": "monster.com/career-advice/article/resumes", "description": "Career advice and resume tips from Monster. "},
            "githubPage" : {"name": "GitHub Pages", "link": "pages.github.com/", "description": " A portfolio template that can host your portfolio directly from your GitHub repository projects."},
            "dribble" : {"name": "Dribble", "link": "dribbble.com/", "description": "Dribbble is a community of designers sharing screenshots of their work, process, and projects."},
            "behance" : {"name": "Behance", "link": "behance.net/", "description": "Behance is a platform for showcasing and discovering creative work."},
            "carbonMade" : {"name": "Carbonmade", "link": "carbonmade.com/", "description": "Carbonmade is designed to help you build and manage an online portfolio website. "},
            "hackerRank" : {"name": "HackerRank", "link": "hackerrank.com/", "description": "HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 2,000+ companies around the world."},
            "leetcode" : {"name": "LeetCode", "link": "leetcode.com/", "description": "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews."},
            "interviewBit" : {"name": "InterviewBit", "link": "interviewbit.com/", "description": "InterviewBit is a platform to learn skills that you need for technology jobs. They help you polish your skills and get ready for the job, whether you are a fresh college graduate or a working professional."},
            "pramp" : {"name": "Pramp", "link": "www.pramp.com/#/", "description": "Pramp is a free peer-to-peer mock interviews platform for software engineers to practice technical interviews with other engineers from our community."},
            "interviewio" : {"name": "Interview.io", "link": "interviewing.io/", "description": "Interviewing.io is a platform where people can practice technical interviewing anonymously and, in the process, find jobs based on their interview performance rather than their resumes."},
            "codeSignal": {"name": "CodeSignal", "link": "codesignal.com/", "description": "CodeSignal is the leading assessment platform for technical hiring. As the creator of the Predictive Coding Score, a measure of a candidates coding skills, CodeSignal provides HR teams with Certified Assessments, Custom Tests, and Live Interviews."},
            "gainlo" : {"name": "Gainlo", "link": "gainlo.co/#!/", "description": "Gainlo is an online platform to allow people have mock interviews with experienced interviewers from top companies like Google, Facebook, Amazon, Microsoft etc."},
            "behavioralInterview" : {"name": "Behavioral Interview", "link": "indeed.com/career-advice/interviewing/behavioral-interview-questions", "description": "A list of common behavioral interview questions asked by many companies."},
            "theMuse" : {"name": "The Muse", "link": "themuse.com/advice/behavioral-interview-questions-answers-examples", "description": "A guide on how to answer common behavioral interview questions."},
            "gitHubIntern": {"name": "Summer 2024 Internships", "link": "github.com/SimplifyJobs/Summer2024-Internships", "description": "This is an internship site full of opportunities for summer 2024 internships for tech students."},
            "gitHubNewGrad" : {"name": "GitHub New Grad 2024 Jobs", "link": "github.com/ReaVNaiL/New-Grad-2024", "description": "This is a new grad site full of opportunities for 2022 new grad jobs for tech students."},
            "zipRecruiter" : {"name": "ZipRecruiter", "link": "ziprecruiter.com/", "description": "ZipRecruiter is a leading online employment marketplace. Powered by AI-driven smart matching technology, ZipRecruiter actively connects millions of businesses and job seekers through innovative mobile, web, and email services, as well as partnerships with the best job boards on the web."},
            "glassDoor": {"name": "GlassDoor", "link": "glassdoor.com/Community/index.htm", "description": "GlassDoor is a website that provides information about companies and jobs. It offers company reviews, salary reports, interview questions, and job postings."},
            "indeed": {"name": "Indeed", "link": "indeed.com/", "description": "Indeed is a job search engine that allows users to search millions of jobs from thousands of job boards, newspapers, classifieds, and company websites."},
            "simplyHired": {"name": "SimplyHired", "link": "simplyhired.com/", "description": "This is a job search engine that helps job seekers find employment opportunities in the US. It offers a wide range of job postings from companies hiring in the US, and job seekers can apply to these postings with just one click."},
            "reu": {"name": "REU", "link": "nsf.gov/crssprgm/reu/reu_search.jsp", "description": "The Research Experiences for Undergraduates (REU) program supports active research participation by undergraduate students in any of the areas of research funded by the National Science Foundation."},
            "colorstack": {"name": "ColorStack", "link": "colorstack.org/", "description": "ColorStack  is a nonprofit organization dedicated to fostering a more diverse and inclusive environment in computer science by empowering Black and Latinx students, while also cultivating a nurturing and supportive community."},
            "rewritingTheCode": {"name": "Rewriting the Code", "link": "rewritingthecode.org/", "description": "is a non-profit organization peer-to-peer network for women in the tech industry. Offering invaluable support, mentorship, and educational resources that pave the path to technological careers, professional growth, and equitable opportunities for women!"},
            "nsbe": {"name": "NSBE", "link": "nsbe.org/", "description": " The National Society of Black Engineers (NSBE) is a non-profit organization with a mission to enhance the representation and support the educational and professional success of Black individuals in the fields of science, technology, engineering, and mathematics (STEM). NSBE aims to achieve this mission through various initiatives, programs, and resources. This organization is advocating for equal opportunities, and empowering Black individuals to excel academically and professionally in the sciences and engineering."},
            "anitaB": {"name": "AnitaB.org", "link": "anitab.org/", "description": "AnitaB is a nonprofit organization focused on advancing women and gender minorities in technology. Named after Anita Borg, a pioneer in computing, the organization hosts events and programs to promote diversity and inclusion in tech, including the famous Grace Hopper Celebration. Its mission is to create a more equitable tech industry through advocacy and support for underrepresented groups in technology."},
            "codepath" : {"name": "CodePath", "link": "codepath.org/", "description": " is a nonprofit organization that offers free, intensive, and hands-on tech education programs primarily for college students. They focus on teaching practical skills in mobile app development, cybersecurity, and other technology-related areas."},
            "acm" : {"name": "ACM", "link": "acm.org/membership/join", "description": "ACM is a global organization for computing professionals. It provides access to cutting-edge research, publications, and conferences in various computer science fields. ACM also hosts local chapters and events for networking and knowledge-sharing among members."},
            "compTIA" : {"name": "CompTIA", "link": "connect.comptia.org/membership?sfredirect=/membership", "description": "CompTIA, short for the Computing Technology Industry Association, is a well-known nonprofit trade association dedicated to advancing the IT (Information Technology) industry and supporting IT professionals around the world. CompTIA focuses on various aspects of IT, including cybersecurity, networking, cloud computing, and more."},
            "ghc": {"name" : "Grace Hopper Celebration","link" : "ghc.anitab.org/", "description" :"The Grace Hopper Celebration is the world's largest gathering of women in technology. It focuses on celebrating and advancing the contributions of women in computing and technology. The event features keynote speakers, technical sessions, workshops, and networking opportunities."},
            "afroTech": {"name" : "AfroTech","link" : "experience.afrotech.com/conference/", "description" :"AfroTech is a conference and tech summit that highlights and empowers Black entrepreneurs, engineers, and tech professionals. It provides a platform for networking, learning, and showcasing innovation within the Black tech community."},
            "ces": {"name" : "Consumer Electronics Show","link" : "ces.tech/", "description" :" CES is an annual trade show that showcases the latest innovations in consumer electronics and technology. It features product launches, demonstrations, and discussions on emerging tech trends across various industries."},
            "techCrunch": {"name" : "TechCrunch Disrupt","link" : "techcrunch.com/events/tc-disrupt-2023/", "description" :" TechCrunch Disrupt is an annual startup and technology conference. It brings together entrepreneurs, investors, and tech enthusiasts to network, attend startup pitch competitions, and listen to industry leaders during panel discussions and keynote presentations."},
            "webSummit" :{"name" : "Web Summit","link" : "websummit.com/", "description" :" Web Summit is one of the largest technology conferences globally, held annually in Lisbon, Portugal. It covers a wide range of tech topics, including artificial intelligence, blockchain, cybersecurity, and more, and attracts industry leaders and innovators."},
            "googleio": {"name" : "Google I/O","link" : "io.google/2023/", "description" :" Google I/O is Google's annual developer conference. During this event, Google announces new products, updates to its software platforms (like Android), and showcases the latest advancements in technologies like AI, machine learning, and Google Assistant."},
            "microIgnite": {"name" : "Microsoft Ignite","link" : "ignite.microsoft.com/en-US/home", "description" :" Microsoft Ignite is a conference for IT professionals and developers. It's where Microsoft unveils its latest technologies, cloud computing solutions, and cybersecurity innovations. Attendees can participate in technical sessions and hands-on labs."},
            "aws": {"name" : "AWS re:Invent","link" : "reinvent.awsevents.com/", "description" :" AWS re:Invent is Amazon Web Services' annual conference, focusing on cloud computing and AWS services. The event offers technical deep dives, product announcements, and networking opportunities for cloud professionals."},
            "rsa": {"name" : "RSA Conference","link" : "rsaconference.com/", "description" :" The RSA Conference is one of the world's largest cybersecurity conferences. It brings together cybersecurity experts, professionals, and thought leaders to discuss the latest trends and challenges in the field of cybersecurity."},
            "blackhat": {"name" : "Black Hat","link" : "blackhat.com/", "description" :"  Black Hat is a leading cybersecurity conference where security researchers, professionals, and enthusiasts gather to discuss vulnerabilities, threats, and the latest strategies for protecting digital assets. It includes briefings, training sessions, and networking opportunities."},
            "defcon":{ "name" : "DEFCON","link" : "defcon.org/", "description" :" DEFCON is one of the world's largest and most famous hacker conferences. It's a gathering of hackers, security professionals, and enthusiasts who come together to discuss and demonstrate security vulnerabilities, techniques, and countermeasures."},
            "apple": {"name" : "Apple WWDC","link" : "developer.apple.com/wwdc23/", "description" :" Apple's WWDC is an annual event where the company announces new software updates, developer tools, and sometimes new hardware products. It's a key event for Apple developers and enthusiasts, providing insights into the future of Apple's ecosystem."},

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