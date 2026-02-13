[Documentation](https://docs.google.com/document/d/1PfS8LhXyryfwarSDEQpU_k0BBFOBnWBuuwXw4IigPFk/edit?tab=t.0)

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
  - Ensure you have the .NET 10 SDK or newer installed

5. Push the contents of `BlazorApp/bin/Release/net10.0/publish/wwwroot/` to the repo.

See [here](https://xovae.github.io/WRAMP-SIM/) for an example build.
