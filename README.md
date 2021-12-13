Welcome Bino!

This is a little something I slapped together to illustrate some cool thoughts about how a database works.

The purpose of this little application is: 
1. Show that a database can be as simple as a text file, or as complex and fully-featured as MongoDB.
2. Show how data _can_ be stored in your repo (not that it should, but this might address your question)

### Setup
To set up this repo, run the following:

```
yarn
```
then
```
yarn start
```

Check the command line for the "server started" text, then move on to the next step.

Open server.js and update the value for your MONGOCONNECT string

### Using the App

Open Insomnia

Create a POST request to: `localhost:8080/plants` with the body:
```
{
	"name": "sunflower",
  "datasource": "mongo"
}
```

Check that mongodb has a new Plant with the name "sunflower"

Next, update the request body like so:
```
{
	"name": "sunflower",
  "datasource": "text"
}
```

Rerun the request in Insomnia with the new body

Open plants.txt file and ensure that there's a line with the plant "sunflower" on it!

This is an example of data living in the repository -- you'll see that if you commit this to git, there will be changes!

Now for one more fun example, try this.

Update the request body like so:
```
{
	"name": "sunflower",
  "datasource": "desktop-text"
}
```

Now, open Finder and navigate to your Desktop folder, and you'll see a plants.txt file with the plant you just added!

This is closer to how mongo works, because the data itself (the plants.txt file) lives on your computer, not in the codebase. Plants you add to this text file can't be accessed by other people because they're on _your_ computer! Just like a mongodb instance!
