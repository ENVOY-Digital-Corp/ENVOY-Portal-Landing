# Blog Content delivery flow

## Content team

### Goal: create a article/ Pull Request with content in the description in markdown format

### Steps:

1. Visit repository with master branch

- https://github.com/ENVOY-Digital-Corp/ENVOY-Portal-Landing/tree/master

2. Once there, click on the Fork button in the top-right corner. This creates a new copy of my demo repo under your GitHub user account with a URL like:

   `https://github.com/<YourUserName>/ENVOY-Portal-Landing`

   ![Forking](https://user-images.githubusercontent.com/16593431/282365876-a50b73a0-23a3-4592-90aa-e13b708a7e46.png)
   ![Forking](https://user-images.githubusercontent.com/16593431/282366239-039aefd6-4be0-4816-9538-d58fcfce79a3.png)
   ![Forking](https://user-images.githubusercontent.com/16593431/282366643-d362bc62-3a1c-4a3e-bc50-377abf03dca3.png)

3. At your forked repository, click 'README.md' file and modify it a bit. (Developer will revert this change later, so don't worry) . And then `Commit changes`.
   ![Click Readme.md](https://user-images.githubusercontent.com/16593431/281625008-59a5625d-86fa-4fc3-9a43-05b2b99c5bbd.png)
   ![Click Edit](https://user-images.githubusercontent.com/16593431/281942246-e449d03b-f6dd-46fb-912b-69dd5c4f5acf.png)
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/281942319-5ec344d4-42e1-45b9-a7e3-dbef60c90f5b.png)

4. Don't forget to tick `Create a new branch for this commit and start a pull request.`, naming new branch with `article/` prefix and click `Propose changes`
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/281942399-1a050b63-d802-452d-b88d-3c014188125f.png)
5. You will be redirected to Compage changes page. Click `compare across forks` and choose `master` branch in the base repository. Click `Create pull request`
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/282367437-0c269340-9c8f-4cf5-af41-8ca2ee6aa96f.png)
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/282367671-7b38ac03-72c7-42e1-91a3-dcd353004ac1.png)

6. Write your blog content in the description in markdown format. Update the title. And then click `Create pull request`
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/282368286-6acf043c-4c77-48dd-971a-4f23f8c2d819.png)
7. That's it. Let developer know that you have created a Pull Request. Developer will do the rest.

## Developer

### Take the PR from content team, modify it and then request for merging it into master branch

### Steps:

1. Modify `README.md` file in the PR. Remove the content that content team has written. And then `Commit changes`

2. Create new blog page in `pages/blog` folder. Put the content that content team has written in the PR into this file.

3. Modify `blog/content.json` to match the new blog content.

4. Update the PR and ask for review.
