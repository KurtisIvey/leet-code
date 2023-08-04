/*
Promise.race is a method provided by the JavaScript Promise API. It takes an array of Promises as its input 
and returns a new Promise. This new Promise settles (resolves or rejects) as soon as the first Promise in the 
input array settles. It "races" the Promises against each other.

*/

// runtime 53ms beats 93%, mem 41.48mb beats 92.54%

var timeLimit = function(fn, t) {
    return async function(...args) {
        let timeoutId; // Store the timeout ID var

        // Execute the original asynchronous function fn with the provided arguments (...args).
        const originalFnPromise = fn(...args);

        // Create a new Promise that will reject with "Time Limit Exceeded" after the specified time limit.
        // _  used as first arg due to only needing the reject arg. no resolved val used in logic
        const timeoutPromise = new Promise((_, reject) => {
            // set timeoutId to setTimeout function for cleanup later
            timeoutId = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });

        // Use Promise.race to return the result of the first Promise that resolves or rejects.
        // If the original function completes before the time limit, its result will be used.
        // If the time limit is exceeded, the timeoutPromise will reject.
        try {//no catch block necessary
            // promise.race takes first fn to complete. 
            return await Promise.race([originalFnPromise, timeoutPromise]);
        } finally {
            clearTimeout(timeoutId); // Clear the timeout to prevent mem leak & cleanup
        }
    }
};

// takeaways, Promise.race
// clear timeout if we're running a timeout funciton on an async function 