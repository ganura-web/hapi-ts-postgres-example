# Running locally

* Copy the .envrc-sample file to `.envrc` . It includes the sample credentials for postgres. 
The password should be the same as the one set in the docker-compose file.

* Run the accompanying `docker-compose.yml` file by running the following:

```bash
docker-compose up -d
```
This will start postgres on localhost, but you'll need to change the port mappings.

* `npm run dev`
This will initially throw an error, as it starts both the typescript build process, and the nodemon process in parallel, but will rectify itself as `tsc` starts spitting out transpiled code.

* Includes a simple HTML page to create and view the data, as an example of how to serve HTML files from the server. In the future, auth could be integrated to control access to this page.
