# Blog Content delivery flow

## Content team

### Goal: create a article/ Pull Request with content in the description in markdown format

### Steps:

1. Visit repository with master branch

- https://github.com/ENVOY-Digital-Corp/ENVOY-Portal-Landing/tree/master

2. Click branch button and create new branch from master. Notice that branch name should be prefix with `article/` and followed by content name. For example, `article/my-new-blog`
3. Click 'README.md' file and modify it a bit. (Developer will revert this change later, so don't worry) . And then `Commit changes`.
   ![Click Readme.md](https://user-images.githubusercontent.com/16593431/281625008-59a5625d-86fa-4fc3-9a43-05b2b99c5bbd.png)
   ![Click Edit](https://user-images.githubusercontent.com/16593431/281942246-e449d03b-f6dd-46fb-912b-69dd5c4f5acf.png)
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/281942319-5ec344d4-42e1-45b9-a7e3-dbef60c90f5b.png)

4. Don't forget to tick `Create a new branch for this commit and start a pull request.`, naming new branch with `article/` prefix and click `Propose changes`
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/281942399-1a050b63-d802-452d-b88d-3c014188125f.png)
5. You will be redirected to Pull Request page. Write your blog content in the description in markdown format. And then click `Create pull request`
   ![Click Commit changes](https://user-images.githubusercontent.com/16593431/281943228-35785185-5173-4b54-aa93-90151b7c2bb9.png)
6. That's it. Let developer know that you have created a Pull Request. Developer will do the rest.

## Developer

### Take the PR from content team, modify it and then request for merging it into master branch

### Steps:

1. Modify `README.md` file in the PR. Remove the content that content team has written. And then `Commit changes`

2. Create new blog page in `pages/blog` folder. Put the content that content team has written in the PR into this file.

3. Modify `blog/content.json` to match the new blog content.

4. Update the PR and ask for review.
