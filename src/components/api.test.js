import {fetchData, getPostsData} from './api.js';

/**
 * •	fetchData() takes nothing and makes an API call to find the reddit data
 *  When the request resolves, the provided callback is executed with the fetched data. 
 *  The data will be an object containing reddit posts whihc includes all meta data.
 * getPostData is a helper function to display data.
 */

const endpoint = "https://www.reddit.com/r/popular.json";


it("gets OK or (200) response from Reddit", async () => {
    // arrange
    const expectedResponse = 200
    //act
    const promiseResolved = await fetch(endpoint);
    const actualResponse = promiseResolved.status
    //assert 
    expect(actualResponse).toBe(expectedResponse);

});

it("gets count of display data from the fetch", async () => {

    const expectedResponse = 25
    //act
    const promiseResolved = await fetch(endpoint);
    const jsonPromiseResolved = await promiseResolved.json();
    const actualResponse = jsonPromiseResolved.data.dist;
    //assert 
    expect(actualResponse).toBe(expectedResponse);

});

//We need checks for Search, List and NextPage. We need Checks for Event Listeners. 


it("includes after property", async () => {
    const expectedResponse = "some_after_value";
    //act
    const promiseResolved = await fetch(endpoint);
    const jsonPromiseResolved = await promiseResolved.json();
    const actualAfter = jsonPromiseResolved.data.after;
    //assert 
    expect(actualAfter).toBe(expectedResponse);
});

it("includes element", async () => {
    const expectedElement = document.getElementById('some_element');
    //act
    await fetch(endpoint);
    expect(expectedElement).not.toBeNull();
});