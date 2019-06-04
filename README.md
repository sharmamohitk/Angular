# Angular
# JavaCoreConcepts
create a new repository on the command line
1. go to project folder on your machine
2. git init  // it will mark your folder as a git repository and it will be a local repository
3. git add *  // here you are adding all the files for stagging i.e. these are the files which we will commit in local repository
4. git rm --cached my-file.ts or git reset my-file.ts // it removes file from stagging area if you want to commit you need to add id again
5. git commit -m "first commit"  // here we have commit the changes from stage to local repository and now we can add these changes to remote repository
6. git commit -a -m README.md  // add and commit at once
7. git reset --soft HEAD^ // if you want to revert your last commit and want to add more file with previous commit
// what above command does it will it will cancel your previous your last commit and moved pointer before HEAD now you can add more file
// it's alternate  of step 6
git add file-i-forgot-to-add.html
8. git commit --amend -m "Add the remaining file" // The "--amend" option allows the changes in last commit by adding a new file (or multiple files)
9. git remote add origin https://github.com/sharmamohitk/Angular.git  // here we are made a link / adding a remote repository with local repository
10. git push -u origin master  // all the changes available in local repository will be added/commit to remote repository


// working with branch

push an existing repository from the command line

1. git checkout branch_name // here you will swith branch respective to your master branch
2. git branch <test-branch> // it will either swith/create new branch 
3. git add * // here you are adding all the files for stagging i.e. these are the files which we will commit in local repository
4. git commit -m "test commit branch" // here we have commit the changes from stage to local repository and now we can add these changes to remote repository
5. here you are working on branch so you need to set the upstream
6. git remote add origin https://github.com/sharmamohitk/Angular.git // here we are setting the upstream of current branch
7. git remote -v //The "-v" option will list all remote repositories you have connected to
7. git push -u origin  test-core-concepts // now we can push changes to branch as we have set the master

now you want to merge the branch changes to master branch or other branch to current branch or master to current branch
1. git checkout master  // first we moves to here master branch
2. git merge test-branch  // here master branch will be merged with branch named test-branch
// if there is any conflict then you need to resolve those conflicts
// now you are on master branch so you can simple commit

//Alternate of above step 2 is rebashing 
3. git rebase master  // the benefit of rebase is it will not pollute the history . it will directly move your current branch to master with latest changes of master
3. git push origin master


// some useful commands
1. git status // tell the current status
2. git branch // current all branch name while highlighting the branch you are working upon
3. git config --global user.name "Tom_Jerry"
4. git config --global user.email "tom@gmail.com"
5. git config --list


References :
https://backlog.com/git-tutorial/stepup/stepup2_3.html
https://www.atlassian.com/git/tutorials/merging-vs-rebasing
https://rubygarage.org/blog/most-basic-git-commands-with-examples

