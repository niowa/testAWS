#!/bin/bash
newman run ./postman/test.postman_collection.json -e "./postman/test.postman_environment.json"
