# Masai_Project
# problem statement
DigitalTimeCapsule_Personal
Context:
A digital time capsule allows users to preserve memories, thoughts, and predictions for the future, to be opened at a later date. This app creates a unique way to capture the present and share it with the future self.

Project Goal:
Develop a digital time capsule application where users can store photos, messages, videos, and predictions, which will be locked and accessible only at a specified future date.

L1: Minimum Expected Features
These foundational features provide the basic functionality necessary for the app.

User Authentication

Create a secure registration and login system that allows users to sign up with an email and password. Authentication ensures that each user has their own private space for creating and managing time capsules. This should include password recovery options.
Create Time Capsule

Allow users to create a time capsule where they can store various types of content, such as written messages, photos, and videos. The interface should be user-friendly, enabling users to easily upload content and type messages that reflect their thoughts, memories, or predictions for the future.
Set Unlock Date

Implement a feature that allows users to set a specific unlock date for each time capsule. This date should be flexible, allowing users to set it for anywhere from a few months to several years in the future. A calendar widget can be used to make this process simple and intuitive.
Multiple Time Capsules

Allow users to create multiple time capsules with different unlock dates. Each capsule should be listed in a dashboard, where users can see the name, unlock date, and a short description of each one. This feature gives users flexibility to create capsules for different moments or people.
Lock Features

Once a time capsule is created and submitted, it should be locked, preventing any changes to the content. This ensures that users cannot modify the capsule until it is opened, maintaining the integrity of their original messages and memories.
Reminder Notification

Implement a reminder notification feature that alerts users as the unlock date approaches. The system should notify users a few days or weeks before the time capsule unlocks, building excitement and anticipation.
# file structure
APP/
├── css/
│   ├── dashboard.css
│   ├── index.css
│   └── signup.css
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── firebase-config.js
├   |__ dashboard.html
├   |__ signup.html
├── index.html
└── README.md
# Daily Goal
 Day 1:index.html
       auth.js
       firebase-config.js
 Day 2&3:dashboard.html
       dashboard.js
 day 4: deployee and working on aditional features;
