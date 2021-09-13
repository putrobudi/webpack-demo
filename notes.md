1. I honestly don't know why on chapter output management you have 
   entry for both index.js and print.js which both output to 
   index.bundle.js and print.bundle.js. And then you include them
   both in index.html. Because instead you can just have index.js 
   entry because you already imported print.js to index.js just like
   how we import lodash.js. I guess the purpose of the lesson is 
   to demonstrate the use of HtmlWebpackPlugin. It's a plugin 
   to dynamically reference js file on our .html file to the 
   entry js on our webpack.config.js. So I'll just follow the guide
   but I know that it doesn't have to be double entry.
