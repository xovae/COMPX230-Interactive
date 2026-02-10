To publish to Github Pages: 

1. Add a file called .nojekyll to the root of the repo.

2. Add a file called .gitattributes to the root of the repo, with the following contents:
  ```
  *.js binary
  *.json binary
  *.css binary
  *.html binary
  ```

3. Run `dotnet publish -c Release` in COMPX230-Interactive/BlazorApp/

4. Push the contents of `BlazorApp/bin/Release/net10.0/publish/wwwroot/` to the repo.

See [here](https://xovae.github.io/WRAMP-SIM/) for an example build.
