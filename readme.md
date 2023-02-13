## Documentation for Puppeteer Site-Crawler + Deadlink-Checker

### Introduction

This is piece javascript that checks for dead links on a website. It uses the [Puppeteer library](https://github.com/puppeteer/puppeteer) to interact with a website and evaluate its links. The program checks the links on the website and its sub-pages, and logs any dead links that it finds.

### Functionality

The program has two functions: checkURL and checkLinks. The checkURL function is used to determine if a URL starts with a base URL. The checkLinks function is the main function of the program, and it performs the following steps:

1. Launches a headless browser using Puppeteer.
2. Navigates to the specified URL.
3. Evaluates all the links on the page and stores them in an array.
4. Loops through the links and navigates to each one.
5. If a link is not accessible, it is added to an array of dead links.
6. If a link is accessible, the program checks its sub-links and logs any dead links that it finds.
7. After all links have been checked, the program logs the dead links and closes the browser.

### Usage

The program is intended to be run in a Node.js environment. You must have node.js installed.

To use it, you need to have the Puppeteer library installed, which you can do by running the following command in your terminal:

```bash
npm install puppeteer
```
To run the program, you need to specify the base URL that the program should start checking from. This is done by setting the value of the baseurl variable at the bottom of the code. By default, the value is set to ```http://www.localhost:8080```. You can change this value to any URL that you want to check for dead links.

Once you have set the base URL, you can run the program by typing the following command in your terminal:

```bash
node deadlink-crawler.js
```

## Summary

This source code provides a simple solution for checking dead links on a website. It uses the Puppeteer library to interact with a website and evaluate its links, making it a powerful tool for website maintenance. The program logs any dead links that it finds, allowing you to quickly identify and fix any broken links on your website.

Leave me a star if this was helpful :-)
