# GPTutor
Web App for Improved ChatGPT Workflow and Interface for Students!

**#Project Description and Use Cases**

GPTutor is envisioned as a sleek and user-friendly graphical user interface designed for seamless interaction with ChatGPT. The goal is to create a sophisticated yet simple platform where STEM students can systematically organize their dialogues by subject matter.

The primary vision of GPTutor is to serve as an pocket tutor/on demand office hour. It aims to categorize conversations into distinct folders for each academic subject, with further subdivision for particular tasks such as:

1.Lecture Assistance: For better grasp of complex topics discussed in class.

2.Homework Guidance: Offering step-by-step collaborative problem solving, emphasizing concept mastery over direct answers.

3.Coding Support: Generating code snippets, along with assistance in debugging and testing to smooth out the learning curve in programming.

An important design note on GPTutor is a set of custom instructions embedded within each subdivision, aimed at optimizing the performance of    the GPT model for targeted educational outcomes. Here’s how these instructions come into play across various categories:

**Lecture Assistance**: In this category, GPTutor transforms into a virtual open office hour session. It encourages users to upload lecture     notes and slides, fostering a personalized discussion flow. The model is tailored to deconstruct complex concepts systematically, facilitating understanding in manageable increments.

**Homework Guidance**: Instead of directly providing answers, this section is designed to mimic a thoughtful study session. The instructions     nudge the model to offer hints and engage users in a step-by-step explorative process. The intent is to guide users to conclusions,          ensuring independent comprehension of underlying principles.

**Coding Support**: The custom directives for this segment ensure that the generated code is not just functional but also educational. The model is prompted to annotate code with clear comments for improved readability and to integrate the Bing search feature for additional resources     and documentation. This approach not only solves immediate coding challenges but also enriches the learning experience with a breadth of        knowledge and best practices.

GPTutor strives to encapsulate the functionality of a tutor, a professor's guidance, a software engineer's technical input, and the availability of open office hours into a single, streamlined application. This platform is more than just a chat interface; it's an educational organization tool crafted to optimize the user's study workflow and enhance their learning experience.

### Technology Stack

- **React (front end)**: Chosen for its component-based architecture, which allows for reusable UI components.
- **Flask (back end)**: Lightweight and easy to get started with, yet powerful enough to handle the application's requirements.
- **OpenAI GPT (API)**: Provides the AI-powered conversational capabilities.
- **PostgreSQL (Database)**: Open-source and highly scalable, Supports both JSON and relational data models, extensive feature set and strong compliance with SQL standards.
- **Electron (optional for desktop app)**: Enables the building cross-platform desktop apps with JavaScript, HTML, and CSS.

### Current Status

- Front end implemenation is almsot complete, still having some challenges with the the units tests for the indiviudal components but am very close (it's my first time working with react and javascript, so ive been spending a long time in the documentation and with chatgpt)
- Backened, API, and databse still need to be setup. But again i've spent some time familiarizing myself with flask and postgre (there are some great tutorials on youtube). However, my entire development environemnt has been setup, inclduing the structure of the project and a virutal python environemnt using flask
- I'm excitied to keep working on this and it will be really fun to complete it! The goal is to make a tool I think myself and many students would benefit from and can grow with AI technology as we learn how to fully utilize its potential!




