//Github/Gitlab/Bibucket - Version Control Tools

// Version control tools are used to manage changes to source code over time. They allow developers to track changes, collaborate with others, and maintain a history of their codebase. 

// To work with github/gitlab/bitbucket we need to have the below things:
// 1. Account - We need to create an account on the respective version control platform (github/gitlab/bitbucket) to access their services and repositories.

// 2. Repository - A repository is a storage space where your project files and their revision history are stored. You can create a new repository on the platform to host your code.

// 3. Git - Git is a distributed version control system that allows you to manage your code and track changes. You need to install Git on your local machine to interact with the repositories on the version control platform.
// We can download git from the official website: https://git-scm.com/downloads and install it in our system.


// You are the first person to start test automation:
// 1. Create a new repository on the version control platform (github/gitlab/bitbucket) to host your test automation code.
// 2. git init - Initialize a new Git repository in your local project directory.
// 3. git add . - Add all the files in your project to the local git area, preparing them for the first commit.
// 4. git commit -m "Initial commit" - Commit the added files to the local repository with a message describing the changes.
// 5. git branch -M master - Create a new branch named "master" and switch to it.
// 6. git branch - List all the branches in the repository to confirm that the "master" branch has been created successfully.
// 7. git remote add origin https://github.com/Praveenroy05/EdgeFebPWTS.git - Add a remote repository (origin) with the specified URL, linking your local repository to the remote one on GitHub.

// 8. git push -u origin master - Push the committed changes from the local "master" branch to the remote repository (origin) on GitHub, setting the upstream tracking reference for future pushes.



// If the repository is already available:
// 1. Clone the repository in your local system - git clone <repo-url>
// 2. Install all the dependencies - npm install
// 3. Create a new branch for your test automation work - git checkout -b <branch-name>
// 4. Make the changes in the code and save the the file
// 5. "git status" - to check the files which have been modified by you
// 6. "git add ." - to add all the modified files to the staging area
// 7. "git commit -m "message"" - to commit the changes with a message describing the changes
    // 7.1 - Switch to the master branch - git checkout master
    // 7.2 - Pull the latest changes from the master branch - git pull origin master
    // 7.3 - Switch back to your branch - git checkout <branch-name>
    // 7.4 - Merge the master branch into your feature branch - git merge master
// 8. "git push origin <branch-name>" - to push the changes to the remote repository on the respective branch
// 9 . Go to the github/bitbucket/gitlab and create a pull request to merge your changes from your branch to the master branch. The team members will review your code and approve the pull request if everything is fine. After approval, you can merge the pull request to the master branch.


// 3.0 - Pull all the changes inside your local system from the master/main branch - git pull origin master
// Repeat #3 - #9 everytime




