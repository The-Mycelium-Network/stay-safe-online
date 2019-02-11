## Data

Currently the data for this repository is reflected in two places.

1. Coded directly into the HTML inside `src/index.html`
2. In a JSON format inside `data.json`

This is temporary. The goal is to have the data stored only in `data.json`. The next iteration of the website will switch to reading, parsing and using the JSON directly, and therfore get rid of the hard coded values in the HTML. This change will also improve maintenance and make website updates instant.

## Local Setup

1. Ensure that you have installed [Nodejs](http://nodejs.org) for your platform.
2. [Fork](https://help.github.com/articles/fork-a-repo/) and [Clone](https://help.github.com/articles/cloning-a-repository/) this repository.

Once the above is in place, change into the root directory of your repo and run the following:

```
npm i
```

This will install all the required dependencies.

While we are at it, let’s make sure your remote branches is set-up correctly. In your terminal, at the root of the project folder, run the following:

```
git remote -v
```

This should output the following:

```
origin	https://github.com/<your-username>/stay-safe-online.git (fetch)
origin	https://github.com/<your-username>/stay-safe-online.git (push)
```

Next, let’s add the ThirdWorldProblems repo so that you can pull future updates. To do this, run the following:

```
npm remote add twp https://github.com/ThirdWorldProblems/stay-safe-online.git
```

Run `git remote -v` again, and this time you should see the following:

```
origin	https://github.com/<your-username>/stay-safe-online.git (fetch)
origin	https://github.com/<your-username>/stay-safe-online.git (push)
twp	https://github.com/ThirdWorldProblems/stay-safe-online.git (fetch)
twp	https://github.com/ThirdWorldProblems/stay-safe-online.git (push)
```

## Running locally

Once the above is complete, you can run a local copy of the website by executing the following command from the terminal:

```
npm run dev:parcel
```

This will build the project into the `dist` folder and spin up a dev server at `http://localhost:1234`. Once the server is up and running, you can point your browser at the address mentioned.

## Contributing links

As mentioned previously, data is currently in two locations. To simplify contributions however, we ask that you only update the `data.json` file. An entry consists of the following:

- name - The name of the product, project, initiative
- url - The [canonical url](https://weareyellowball.com/seo/seo-glossary/what-is-a-canonical-url/) of the above
- topic - The topic under which this fits. If there is not already a topic for your contribution, please go ahead and suggest one.

### An example

Assume you want to add NordVPN to the list of VPN services we have. Your first step is to ensure that you are up to date with our master branch(this prevent potential nasty merge conflicts). In a terminal at the root of the project run:

```
git pull twp master
```

Next we will create a [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for the work:

```
git checkout -b add-nordvpn
```

This will create the branch `add-nordvpn` and check it out. Open `data.json` with your prefered editor, and find the entries marked with the topic `vpn`. Add your new entry to the end of the list, for example:

```
...
,{
  "name": "NordVPN",
  "url": "https://nordvpn.com/",
  "topic": "vpn"
}
```

Ensure that `git` has recognised your change by running the following:

```
git status
```

It should output something like this:

```
modified:   data.json
```

Next we need to stage the change for commit, commit it and then push. To do this, run the following:

```
git add .
git commit -m 'Adds NordVPN to the list of VPN providers'
git push origin add-nordvpn
```

The final step is to [open a pull request](https://help.github.com/articles/creating-a-pull-request/).

Once the pull request has been opened, one of the members of the project will review your request. If there are any required changes, you will be notified via the PR. Once everything is ready, the pull request will be approved and merged to master.

Currently there is a manual process involved to update the webiste but, your change should reflect on the website within a couple of hours. Thank you for your interest in this project, and your contribution.
