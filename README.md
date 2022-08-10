## A full-stack web app using the MERN stack

![VS--1-](https://user-images.githubusercontent.com/72354860/172034569-7bb1f23e-0108-4eb3-baaa-288047f97bff.jpeg)
[Image Reference](https://www.imaginarycloud.com/blog/what-is-mern-stack-and-how-does-it-work/)

## Developers:
- Siyuan Du (Steven)
- Zhengjie Zhou (Jay)

## How to run 

### Backend
1. Open a new terminal
2. Configure credentials in the `server/index.js` file
3. `cd server`
4. `npm install`<br>
if this is the first time you run this project, or if you changed any packages
5. `npm start`
6. Check your terminal to see if it's running successfully<br/> 
Should be listening on `http://localhost:5051/posts` if Successful<br/>
You can go to http://localhost:5051/posts to check. Expect to get an array of existing posts

### Frontend
1. Open a new terminal
2. `cd client`
3. `npm install --legacy-peer-deps`<br/>
if this is the first time you run this project, or if you changed any packages
4. `npm start`
5. Go to your localhost link (typically http://localhost:3000)

## How to contribute

### The workflow when starting something new

1. Go to the [Trello board](https://trello.com/b/MwSn5xsP/%E6%9C%AA%E5%91%BD%E5%90%8D). ([What is Trello?](https://en.wikipedia.org/wiki/Trello) Contact us to add you to our organization!)
- If no card matching what you want to do exists, create one.
- Check if someone is already working on this.
- Check if it is ready.
- Move the card to in progress if it is ready.
2. Create a local branch.
- Checkout your local main branch. Update your local main branch by `git pull origin main`.
- `git checkout -b <your-name>/<the-thing-you-want-to-work-on>`
- Example: `git checkout -b jay/3-create-user-stories-tasks`. You can get the-thing-you-want-to-work-on from the last part of the Trello URL when you open a card.
3. Work on the local branch using your favorite editor/IDE!
4. Push to remote branch and open a PR when you finish (or just want some review)
- `git push origin <your-name>/<the-thing-you-want-to-work-on>`
- Go to Github and open a Pull Request (PR for short) for merging your branch to `main`. ([What is a Pull Request?](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests))
- Move your Trello card to "in review".
5. Address any comments in the PR and merge to `main` if your PR is approved. Use "squash and merge" if your commit history is long and unclean ([More about this](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)). Move your Trello card to "merged to main".
6. Test your changes on the `main` branch. Then move your Trello card to "done".
7. Well done!
  
Note: Considering the scale of this project, we are currently using a single main branch instead of the main/dev model.
  
### How to manage the Trello board
We divide the project into small pieces and represent them in cards on a Trello board (it is a [Kanban board](https://en.wikipedia.org/wiki/Kanban_board)). A card is like a small task or a user story. We want to use the Trello board in the simplest way possible. The main goal is to make clear what everyone is working on and avoid duplicate efforts.

The lifecycle of a Trello card:

1. Create in the Backlog, whether in batch or individually. 
2. Move to blocked if it depends on something that has not been moved to "done".
3. Move to ready if it is no longer blocked.
4. Move to in progress if someone starts to work on it. This is the latest time that its owner (member) gets assigned.
5. Move to in Review once the work is done and a PR is opened.
6. Move to merged to main if the PR is approved and merged to main.
