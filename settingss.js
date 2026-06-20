
module.exports = {
  SESSION_ID: "name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start",  // add your Session Id here
  OWNER_NUMBER: "237692212452", // put your phone number here
  PREFIX: ".", // prefix (e.g., ., /, !, *)
  TIMEZONE: "Africa/Kampala" //put your country timeZone....leave blank if u don't know.
};
