![CI for radarin](https://github.com/arquisoft/radarin_es1b/workflows/CI%20for%20radarin/badge.svg)
[![codecov](https://codecov.io/gh/Arquisoft/radarin_es1b/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/radarin_es1b)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b2228fdc574743c3800c9bd0cf6dfe6d)](https://www.codacy.com/gh/Arquisoft/radarin_es1b/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/radarin_es1b&amp;utm_campaign=Badge_Grade)
# Radarin project structure
Link to the deployed sample application: [radarinES1b](https://radarines1bwebapp.herokuapp.com/). Note that sometimes **it can take a while to load** because Heroku in the free plan, takes the containers to sleep when they are not used for some time and taking them up takes time.

## Quick start guide
If you want to execute the project you will need [git](https://git-scm.com/downloads), [Node.js and npm](https://www.npmjs.com/get-npm) and [Docker](https://docs.docker.com/get-docker/). Make sure the three of them are installed in your system. Download the project with `git clone https://github.com/pglez82/radarin_0`. The fastest way to launch everything is with docker:
```
docker-compose up --build
```
This will create two docker images as they don't exist in your system (the webapp and the restapi) and launch a mongo container database. It will also launch Prometheus and Grafana containers to monitor the webservice. You should be able to access everything from here:
 - [Webapp - http://localhost:3000](http://localhost:3000)
 - [Docs - http://localhost:3000/docs](http://localhost:3000/docs)
 - [RestApi example call - http://localhost:5000/api/users/list](http://localhost:5000/api/users/list)
 - [RestApi raw metrics - http://localhost:5000/metrics](http://localhost:5000/metrics)
 - [Prometheus server - http://localhost:9090](http://localhost:9090)
 - [Grafana server http://localhost:9091](http://localhost:9091)
 
If you want to run it without docker (even though you still need docker to run the mongo db database):
```
cd restapi
mkdir data
sudo docker run -d -p 27017:27017 -v `pwd`/data:/data/db mongo
```
Compile and run the web app:
```
cd webapp
npm install
npm start
```
Now the webservice:
```
cd restapi
npm install
npm start
```
You should be able to access the application in [http://localhost:3000](http://localhost:3000) and the documentation in [http://localhost:3000/docs](http://localhost:3000/docs)

## Collaborators
 - Guillermo Astorga Manzanal
 - Alejandro Álvarez Varela
 - Manuel Arroyo García 
 - Beatriz Arbizu Ramírez
 - Alberto Freije Carballo
 - Samuel Rodríguez Ares
 - Xurde García Fernández
